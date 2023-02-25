import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";

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
} from "./styles";
import { api } from "@services/api";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export function NewHaircut() {
  const { colors } = useTheme();
  const [name, setName] = useState(" ");
  const [price, setPrice] = useState(" ");
  const navigation = useNavigation();
  const [statusSubscriptions, setStatusSubscriptions] = useState(false);
  const [count, setCount] = useState(0);

  async function handleRegister() {
    console.log("clicou");
    if (name === " " || price === " ") {
      return;
    }
    try {
      await api.post("/haircut", {
        name: name,
        price: Number(price),
      });
      setName(" ");
      setPrice(" ");
      navigation.navigate("Cortes");
    } catch (err) {
      console.log(err);
      alert("Erro ao cadastrar esse modelo.");
    }
  }

  async function getSubscriptionsAndCount() {
    const response = await api.get("/haircut/check");
    const count = await api.get("/haircut/count");

    setStatusSubscriptions(
      response.data?.subscriptions?.status === "active" ? true : false
    );
    setCount(count.data);
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
        <Title>Cadastrar novo modelo</Title>
        <Content>
          <Input
            placeholder="Nome do corte"
            style={{
              borderWidth: 1,
              borderColor: colors.shape,
              borderStyle: "solid",
            }}
            value={name}
            onChangeText={setName}
          />

          <Input
            placeholder="Valor do corte: 59.90"
            style={{
              borderWidth: 1,
              borderColor: colors.shape,
              borderStyle: "solid",
            }}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <Button
            onPress={handleRegister}
            title="Cadastrar"
            disabled={!statusSubscriptions && count >= 3 ? true : false}
          />

          {!statusSubscriptions && count >= 3 && (
            <ContainerFlat>
              <LimitReached>Você atingiu seu limite de corte.</LimitReached>

              <ButtonFlat>
                <TextFlatButton>Seja premium</TextFlatButton>
              </ButtonFlat>
            </ContainerFlat>
          )}
        </Content>
      </Container>
    </>
  );
}
