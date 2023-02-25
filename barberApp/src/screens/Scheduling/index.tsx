import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Alert } from "react-native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { useTheme } from "styled-components/native";
import { Container, ContainerPicker, Content, Title } from "./styles";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import { api } from "@services/api";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

interface HairCutProps {
  id: string;
  name: string;
  price: number | string;
  status: true;
  user_id: string;
}

export function Scheduling() {
  const { colors } = useTheme();
  const [customer, setCustomer] = useState("");
  const [haircut, setHaircut] = useState<HairCutProps[]>([]);
  const [haircutSelected, setHaircutSelected] = useState<HairCutProps>(
    haircut[0]
  );
  const navigation = useNavigation();

  function handleChangeSelect(id: string) {
    const haircutItem = haircut.find((item) => item.id === id);

    if (haircutItem !== undefined) {
      setHaircutSelected(haircutItem);
    }
  }
  async function handleRegister() {
    if (customer === "") {
      Alert.alert("Preencha o nome do cliente.");
      return;
    }

    try {
      await api.post("/schedule", {
        customer: customer,
        haircut_id: haircutSelected?.id,
      });

      navigation.navigate("Agenda");
    } catch (err) {
      console.log(err);
      alert("Erro ao registrar!");
    }
  }

  async function getHaircuts() {
    const response = await api.get("/haircuts", {
      params: {
        status: true,
      },
    });
    setHaircut(response.data);
  }

  useFocusEffect(
    useCallback(() => {
      getHaircuts();
    }, [haircutSelected])
  );

  return (
    <>
      <Header />
      <Container>
        <Title>Novo corte</Title>
        <Content>
          <Input
            placeholder="Nome do Cliente"
            style={{
              borderWidth: 1,
              borderColor: colors.shape,
              borderStyle: "solid",
            }}
            value={customer}
            onChangeText={setCustomer}
          />
          <ContainerPicker>
            <Picker
              selectedValue={haircutSelected?.id}
              onValueChange={(e: string) => handleChangeSelect(e)}
              mode="dropdown"
              style={{ color: "white", height: 40, width: "100%" }}
            >
              {haircut.map((option) => (
                <Picker.Item
                  key={option.id}
                  label={option.name}
                  value={option.id}
                />
              ))}
            </Picker>
            <Icon
              name="arrow-drop-down"
              size={24}
              color="white"
              style={{ position: "absolute", right: 10 }}
            />
          </ContainerPicker>

          <Button onPress={handleRegister} title="Cadastrar" />
        </Content>
      </Container>
    </>
  );
}
