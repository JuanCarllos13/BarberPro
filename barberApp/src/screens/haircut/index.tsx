import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import { useTheme } from "styled-components/native";
import {
  ButtonRegisterHaircut,
  Container,
  ContainerButton,
  ContainerPerson,
  ContainerPersonName,
  ContainerSwitch,
  HeaderContainerButton,
  Name,
  Price,
  TextActive,
  TextButtonRegister,
  Title,
} from "./styles";
import Io from "react-native-vector-icons/Ionicons";
import { Header } from "@components/Header";

export function Haircut() {
  const { colors } = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
      <Header />
      <Container>
        <Title>Modelos de Corte</Title>

        <HeaderContainerButton>
          <ButtonRegisterHaircut>
            <TextButtonRegister>Cadastrar novo</TextButtonRegister>
          </ButtonRegisterHaircut>

          <ContainerSwitch>
            <TextActive>Ativos</TextActive>
            <Switch
              trackColor={{ false: "#767577", true: "#03B252" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </ContainerSwitch>
        </HeaderContainerButton>

        <ContainerButton>
          <ContainerPersonName>
            <ContainerPerson>
              <Io name="pricetag" size={20} color={colors.button_cta} />
              <Name>Degrade</Name>
            </ContainerPerson>

            <Price>R$ 59.90</Price>
          </ContainerPersonName>
        </ContainerButton>
      </Container>
    </>
  );
}
