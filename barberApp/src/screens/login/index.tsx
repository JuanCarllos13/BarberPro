import React from "react";
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

export function SignIn() {
  const navigation = useNavigation();

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

        <Input placeholder="Digite seu Email" />
        <Input placeholder="Digite sua senha" secureTextEntry={true} />

        <Button onPress={() => {}} title="Login" />

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
