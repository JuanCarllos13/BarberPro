import React, { useContext, useState, useEffect, useCallback } from "react";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useTheme } from "styled-components/native";
import {
  Container,
  Title,
  Content,
  TextInfoProfile,
  Main,
  ButtonFlat,
  ContainerFlat,
  FlatText,
  ButtonFlatText,
} from "./styles";
import { UserDTO } from "../../dtos/userDTO";
import { api } from "@services/api";
import { useFocusEffect } from "@react-navigation/native";

export function Profile() {
  const { colors } = useTheme();
  const { logoutUser } = useContext(AuthContext);
  const [user, setUser] = useState<UserDTO>();

  const [name, setName] = useState(user && user.name);
  const [address, setAddress] = useState(user?.endereco ? user?.endereco : "");

  async function handleLogout() {
    await logoutUser();
  }

  async function handleUpdateUser() {
    if (name === "") {
      return;
    }
    try {
      await api.put("/users", {
        name: name,
        endereco: address,
      });

      Alert.alert("Dados alterados com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  async function getInfoUserAndSubscription() {
    const response = await api.get("/me");

    setUser({
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
      endereco: response.data?.endereco,
    });
  }

  useFocusEffect(
    useCallback(() => {
      getInfoUserAndSubscription();
    }, [])
  );
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>Minha Conta</Title>
          <Main>
            <TextInfoProfile>Nome da barbearia:</TextInfoProfile>
            <Input
              placeholder={user?.name ?? "Nome"}
              placeholderTextColor={colors.text}
              style={{
                borderWidth: 1,
                borderColor: colors.shape,
                borderStyle: "solid",
              }}
              value={name}
              onChangeText={setName}
            />

            <TextInfoProfile>Endereço:</TextInfoProfile>
            <Input
              placeholder={user?.endereco ?? "Endereço da barbearia"}
              placeholderTextColor={colors.text}
              style={{
                borderWidth: 1,
                borderColor: colors.shape,
                borderStyle: "solid",
              }}
              value={address}
              onChangeText={setAddress}
            />

            <TextInfoProfile>Plano atual:</TextInfoProfile>
            <ContainerFlat>
              <FlatText>Plano grátis</FlatText>

              <ButtonFlat>
                <ButtonFlatText>Mudar Plano</ButtonFlatText>
              </ButtonFlat>
            </ContainerFlat>

            <Button onPress={handleUpdateUser} title="Salvar" />

            <Button
              onPress={handleLogout}
              title="Sair da conta"
              titleColor={colors.main}
              style={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: colors.main,
              }}
            />
          </Main>
        </Content>
      </Container>
    </>
  );
}
