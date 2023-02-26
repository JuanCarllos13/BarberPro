import React, { useState, useCallback } from "react";
import { Switch } from "react-native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { useTheme } from "styled-components/native";
import {
  ButtonFlat,
  Container,
  ContainerFlat,
  Content,
  LimitReached,
  TextFlatButton,
  Title,
  ContainerSwitch,
  TextActive,
} from "./styles";
import { api } from "@services/api";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { HaircutsItem } from "@dtos/haircutsItemDTO";

interface ParamsProps {
  id: string;
}

interface SubscriptionProps {
  subscriptions: {
    id: string;
    status: string;
  };
}

export function EditCut() {
  const [haircuts, setHaircuts] = useState<HaircutsItem>();
  const [isEnabled, setIsEnabled] = useState(haircuts?.status);
  const [name, setName] = useState(haircuts?.name);
  const [price, setPrice] = useState(haircuts?.price);
  const [statusSubscriptions, setStatusSubscriptions] =
    useState<SubscriptionProps>({
      subscriptions: {
        id: "",
        status: "",
      },
    });

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const route = useRoute();
  const { id } = route.params as ParamsProps;

  const { colors } = useTheme();

  const navigation = useNavigation();

  async function handleUpdate() {
    if (name === "" || price === "") {
      return;
    }

    try {
      await api.put("/haircut", {
        name: name,
        price: price,
        status: isEnabled,
        haircut_id: haircuts?.id,
      });

      alert("Corte atualizado com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }
  async function getSubscriptionsAndCount() {
    const haircut = await api.get("/haircut/detail", {
      params: {
        haircut_id: id,
      },
    });

    const response = await api.get("/haircut/check");

    setHaircuts(haircut.data);
    setStatusSubscriptions(response.data);
  }

  useFocusEffect(
    useCallback(() => {
      getSubscriptionsAndCount();
    }, [])
  );

  return (
    <>
      <Header />
      <Container>
        <Title>Editar Corte</Title>
        <Content>
          <Input
            placeholder={haircuts?.name ?? "Nome do corte"}
            style={{
              borderWidth: 1,
              borderColor: colors.shape,
              borderStyle: "solid",
            }}
            value={name}
            onChangeText={setName}
          />

          <Input
            placeholder={haircuts?.price.toString() ?? "Valor do corte: 59.90"}
            style={{
              borderWidth: 1,
              borderColor: colors.shape,
              borderStyle: "solid",
            }}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <ContainerSwitch>
            <TextActive>Desativar corte</TextActive>
            <Switch
              trackColor={{ false: "#767577", true: "#DC1637" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </ContainerSwitch>

          <Button
            onPress={handleUpdate}
            title="Cadastrar"
            disabled={
              statusSubscriptions?.subscriptions?.status !== "active"
                ? true
                : false
            }
          />

          {statusSubscriptions?.subscriptions?.status !== "active" && (
            <ContainerFlat>
              <ButtonFlat onPress={() => navigation.navigate("Plans")}>
                <TextFlatButton>Seja premium</TextFlatButton>
              </ButtonFlat>

              <LimitReached>e tenha todos acessos liberados</LimitReached>
            </ContainerFlat>
          )}
        </Content>
      </Container>
    </>
  );
}
