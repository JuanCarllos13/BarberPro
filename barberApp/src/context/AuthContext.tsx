import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { UserDTO } from "@dtos/userDTO";
import { api } from "@services/api";
import {
  storageAuthToken,
  storageAuthTokenGet,
  storageAuthTokenRemove,
} from "@storage/storageAuthToken";
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from "@storage/storageUser";
import * as LocalAuthentication from "expo-local-authentication";

interface AuthContextData {
  user: UserDTO;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
  signOut: () => Promise<void>;
  logoutUser: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
};

interface SignInProps {
  email: string;
  password: string;
}

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserDTO>({
    email: "",
    endereco: "",
    id: "",
    name: "",
  });
  const isAuthenticated = !!user;

  async function UserAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser({
      email: userData.email,
      id: userData.id,
      endereco: userData.endereco,
      name: userData.name,
      subscriptions: userData.subscriptions,
    });
  }

  async function storageUserAndTokenSave(userData: UserDTO, token: string) {
    try {
      await storageUserSave(userData);
      await storageAuthToken(token);
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    console.log("ERORR LOGOUT");
    try {
      storageAuthTokenRemove();
    } catch (err) {
      console.log("Error ao sair");
    }
  }

  async function signIn({ email, password }: SignInProps) {
    try {
      const { data } = await api.post("/session", {
        email,
        password,
      });
      // console.log(data)
      UserAndTokenUpdate(data, data.token);
      storageUserAndTokenSave(data, data.token);
    } catch (err) {
      console.log("ERRO AO ENTRAR", err);
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      await api.post("/users", {
        name,
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function logoutUser() {
    try {
      storageAuthTokenRemove();
      setUser({} as UserDTO);
    } catch (err) {
      console.log("ERRO AO SAIR", err);
    }
  }

  async function loadUserData() {
    try {
      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();

      if (userLogged && token) {
        UserAndTokenUpdate(userLogged, token);
      }
    } catch (error) {
      throw error;
    }
  }

  async function biometria() {
    let compatible = await LocalAuthentication.hasHardwareAsync();

    if (compatible) {
      let biometriaRecord = await LocalAuthentication.isEnrolledAsync();
      if (!biometriaRecord) {
        alert("Biometria não cadastrada");
      } else {
        const token = await storageAuthTokenGet();
        if (token) {
          let result = await LocalAuthentication.authenticateAsync();
          if (result.success) {
            loadUserData();
          } else {
            storageUserRemove();
            storageAuthTokenRemove();
            // setIsLoadingUserStorageData(false);
          }
        } else {
          // setIsLoadingUserStorageData(false);
        }
      }
    }
  }

  useEffect(() => {
    biometria();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signUp,
        logoutUser,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
