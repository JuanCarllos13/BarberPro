import React, { createContext, ReactNode, useEffect, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/apiClient";

interface AuthContextData {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: signInProps) => Promise<void>;
  signUp: (credentials: signUpProps) => Promise<void>;
  loOutUser: () => Promise<void>;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  endereco: string | null;
  subscription?: SubscriptionsProps | null;
}

interface SubscriptionsProps {
  id: string;
  status: string;
}

type AuthProviderProps = {
  children: ReactNode;
};

interface signInProps {
  email: string;
  password: string;
}
interface signUpProps {
  email: string;
  password: string;
  name: string;
}

export const AuthContext = createContext({} as AuthContextData);

export async function signOut() {
  try {
    destroyCookie(null, "@barber.token", { path: "/" });
    Router.push("/login");
  } catch (error) {
    console.log("Erro ao sair", error);
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "@barber.token": token } = parseCookies();
    console.log('token', token)

    if (token) {
      api.get("/me").then((response) => {
        const { id, name, endereco, email, subscription } = response.data;
        setUser({
          id,
          name,
          email,
          endereco,
          subscription,
        });
      }).catch(() => {
        signOut()
      })
    }
  }, []);

  async function signIn({ email, password }: signInProps) {
    try {
      const response = await api.post("/session", {
        email,
        password,
      });
      const { id, name, token, subscription, endereco } = response.data;

      setCookie(undefined, "@barber.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 1 mes
        path: "/",
      });

      setUser({
        id,
        name,
        email,
        endereco,
        subscription,
      });

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      Router.push("/dashboard");
    } catch (error) {
      console.log("Erro ao entrar", error);
    }
  }

  async function signUp({ email, password, name }: signUpProps) {
    try {
      await api.post("/users", {
        email,
        password,
        name,
      });

      Router.push("/login");
    } catch (error) {
      console.log("Erro ao cadastrar", error);
    }
  }

  async function loOutUser() {
    try {
      destroyCookie(null, "@barber.token", { path: "/" });
      setUser(null);
      Router.push("/login");
    } catch (error) {
      console.log("Erro ao deslogar", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, signIn, signUp, loOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
