import React from "react";
import { Text, View } from "react-native";
import {
  ButtonRegister,
  Container,
  ContainerTitle,
  TextButtonRegister,
  Title,
  ContainerButton,
  ContainerButtonFlex,
  ContainerPersonName,
  Name,
  Price,
  ContainerPerson,
} from "./styles";
import Io from "react-native-vector-icons/Ionicons";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import {Modal} from '@components/Modal'

export function Home() {
  const navigation = useNavigation();

  function handleNewHaircut() {
    navigation.navigate("NewHaircut");
  }

  return (
    <>
      <Header />
      <Container>
        <ContainerTitle>
          <Title>Agenda</Title>
          <ButtonRegister>
            <TextButtonRegister onPress={handleNewHaircut}>
              Registrar
            </TextButtonRegister>
          </ButtonRegister>
        </ContainerTitle>

        <ContainerButton>
          <ContainerButtonFlex>
            <ContainerPersonName>
              <ContainerPerson>
                <Io name="person" size={20} color="#f1f1f1" />
                <Name>Juan Carlos</Name>
              </ContainerPerson>

              <Name>Corte de cabelo</Name>
            </ContainerPersonName>
            <Price>R$ 59.90</Price>
          </ContainerButtonFlex>
        </ContainerButton>
      </Container>

      <Modal modalVisible={true} setModalVisible={()=> {}}/>
    </>
  );
}
