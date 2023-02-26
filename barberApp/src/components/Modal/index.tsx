import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  Modal as ContainerModal,
  TouchableOpacity,
} from "react-native";
import {
  CenteredView,
  ContainerButton,
  ContainerClose,
  ContainerInfo,
  Content,
  ModalText,
  ModalView,
  TextInfo,
} from "./styles";
import { ScheduleItem } from "@dtos/ScheduleIDTO";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Button } from "@components/Button";
import { useTheme } from "styled-components/native";

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: () => void;
  data: ScheduleItem | undefined;
  finishService: () => void;
}

export function Modal({
  modalVisible,
  setModalVisible,
  data,
  finishService,
}: ModalProps) {
  const { colors } = useTheme();

  return (
    <ContainerModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible();
      }}
    >
      <CenteredView>
        <ModalView>
          <ContainerClose>
            <ModalText>Próximo</ModalText>
            <TouchableOpacity onPress={() => setModalVisible()}>
              <Feather name="x" size={25} color="white" />
            </TouchableOpacity>
          </ContainerClose>

          <ContainerInfo>
            <FontAwesome name="user" size={30} color={colors.button_cta} />
            <TextInfo>{data?.customer}</TextInfo>
          </ContainerInfo>

          <ContainerInfo>
            <Feather name="scissors" size={30} />
            <TextInfo>{data?.haircut?.name}</TextInfo>
          </ContainerInfo>

          <ContainerInfo>
            <FontAwesome5
              name="money-bill-alt"
              size={30}
              color={colors.success}
            />
            <TextInfo>R$ {data?.haircut?.price}</TextInfo>
          </ContainerInfo>

          <ContainerButton>
            <Button onPress={finishService} title="Finalizar serviço" />
          </ContainerButton>
        </ModalView>
      </CenteredView>
    </ContainerModal>
  );
}
