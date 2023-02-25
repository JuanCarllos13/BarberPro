import React, { useContext, useState } from "react";
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
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const navigation = useNavigation();
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    if (name === "" && email === "" && password === "") {
      return;
    }

    await signUp({
      name,
      email,
      password,
    });

    navigation.navigate("signIn");
  }

  return (
    <Container>
      <Content>
        <Header>
          <Title>Barber</Title>
          <SubTitle>Pro</SubTitle>
        </Header>

        <Input
          placeholder="Nome da barbearia"
          value={name}
          onChangeText={setName}
        />

        <Input
          placeholder="Digite seu Email"
          value={email}
          onChangeText={setEmail}
          keyboardType={'email-address'}
        />

        <Input
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={handleRegister} title="Login" />

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
