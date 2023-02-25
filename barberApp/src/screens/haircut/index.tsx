import React, { useCallback, useState } from "react";
import { FlatList, Switch, Text, View } from "react-native";
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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { api } from "@services/api";
import { HaircutsItem } from "../../dtos/haircutsItemDTO";

export function Haircut() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [haircuts, setHaircuts] = useState<HaircutsItem[]>([]);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();
  const { colors } = useTheme();

  function handleRegisterHaircut() {
    navigation.navigate("newHaircut");
  }

  function handleEditCut(id: string) {
    navigation.navigate("EditCut", { id: id });
  }

  async function getHaircuts() {
    const response = await api.get("/haircuts", {
      params: {
        status: isEnabled,
      },
    });

    setHaircuts(response.data);
  }

  useFocusEffect(
    useCallback(() => {
      getHaircuts();
    }, [isEnabled])
  );

  return (
    <>
      <Header />
      <Container>
        <Title>Modelos de Corte</Title>

        <HeaderContainerButton>
          <ButtonRegisterHaircut>
            <TextButtonRegister onPress={handleRegisterHaircut}>
              Cadastrar novo
            </TextButtonRegister>
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

        <FlatList
          data={haircuts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ContainerButton onPress={() => handleEditCut(item.id)}>
              <ContainerPersonName>
                <ContainerPerson>
                  <Io name="pricetag" size={20} color={colors.button_cta} />
                  <Name>{item.name}</Name>
                </ContainerPerson>

                <Price>R$ {item.price}</Price>
              </ContainerPersonName>
            </ContainerButton>
          )}
        />
      </Container>
    </>
  );
}
