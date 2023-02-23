import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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

export function SignUp() {
  return (
    <Container>
      <Content>
        <Header>
          <Title>Barber</Title>
          <SubTitle>Pro</SubTitle>
        </Header>

        <Input placeholder="Nome da barbearia" />

        <Input placeholder="Digite seu Email" />

        <Input placeholder="Digite sua senha" secureTextEntry={true} />

        <Button onPress={() => {}} title="Login" />

        <Footer>
          <RegisterText>Já tenho conta</RegisterText>
          <ButtonSignUp>
            <TextButton>Faça login</TextButton>
          </ButtonSignUp>
        </Footer>
      </Content>
    </Container>
  );
}
