import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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

export function Profile() {
  const { colors } = useTheme();
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>Minha Conta</Title>
          <Main>
            <TextInfoProfile>Nome da barbearia:</TextInfoProfile>
            <Input
              placeholder="Nome"
              placeholderTextColor={colors.text}
              style={{
                borderWidth: 1,
                borderColor: colors.shape,
                borderStyle: "solid",
              }}
            />

            <TextInfoProfile>Endereço:</TextInfoProfile>
            <Input
              placeholder="Endereço da barbearia"
              placeholderTextColor={colors.text}
              style={{
                borderWidth: 1,
                borderColor: colors.shape,
                borderStyle: "solid",
              }}
            />

            <TextInfoProfile>Plano atual:</TextInfoProfile>
            <ContainerFlat>
              <FlatText>Plano grátis</FlatText>

              <ButtonFlat>
                <ButtonFlatText>Mudar Plano</ButtonFlatText>
              </ButtonFlat>
            </ContainerFlat>

            <Button onPress={() => {}} title="Salvar" />

            <Button
              onPress={() => {}}
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
