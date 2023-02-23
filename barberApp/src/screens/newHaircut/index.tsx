import React, { useState } from "react";
import { View, Text } from "react-native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { useTheme } from "styled-components/native";
import { Container, ContainerPicker, Content, Title } from "./styles";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/MaterialIcons";

export function NewHaircut() {
  const { colors } = useTheme();
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { id: 1, name: "Opção 1" },
    { id: 2, name: "Opção 2" },
    { id: 3, name: "Opção 3" },
  ]);

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
          />
          <ContainerPicker>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(value) => setSelectedOption(value)}
              mode="dropdown"
              style={{ color: "white", height: 40, width: "100%" }}
            >
              <Picker.Item label="Selecione uma opção" value={null} />
              {options.map((option) => (
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

          <Button onPress={() => {}} title="Cadastrar" />
        </Content>
      </Container>
    </>
  );
}
