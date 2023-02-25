import React, { useContext, useState } from "react";
import {
  Container,
  Content,
  Title,
  SubTitle,
  Header,
  Footer,
  RegisterText,
  ButtonSignUp,
  TextButton,
} from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

export function SignIn() {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    if (email === "" || password === "") {
      return;
    }
    await signIn({
      email,
      password,
    });
  }

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  return (
    <Container>
      <Content>
        <Header>
          <Title>Barber</Title>
          <SubTitle>Pro</SubTitle>
        </Header>

        <Input
          placeholder="Digite seu Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={handleSignIn} title="Login" />

        <Footer>
          <RegisterText>Quero Cadastrar minha barbearia.</RegisterText>
          <ButtonSignUp>
            <TextButton onPress={handleNewAccount}>Clique aqui</TextButton>
          </ButtonSignUp>
        </Footer>
      </Content>
    </Container>
  );
}
