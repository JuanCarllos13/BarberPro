import React, { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";
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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Modal } from "@components/Modal";
import { ScheduleItem } from "@dtos/ScheduleIDTO";
import { api } from "@services/api";

export function Home() {
  const navigation = useNavigation();
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [service, setService] = useState<ScheduleItem>({} as ScheduleItem);

  const [modalVisibly, setModalVisibly] = useState(false);

  function handleOpenModal(item: ScheduleItem) {
    setService(item);
    setModalVisibly(true);
  }

  function handleNewHaircut() {
    navigation.navigate("Scheduling");
  }

  async function getSchedule() {
    const response = await api.get("/schedule");
    setSchedule(response.data);
  }

  async function handleFinish(id: string){
    try{
      await api.delete('/schedule', {
        params:{
          schedule_id: id
        }
      })


      const filterItem = schedule.filter(item => {
        return (item?.id !== id)
      })

      setSchedule(filterItem)
  setModalVisibly(false)

    }catch(err){
      console.log(err);
  setModalVisibly(false)
      alert("Erro ao finalizar este serviço")
    }
  }

  useFocusEffect(
    useCallback(() => {
      getSchedule();
    }, [])
  );

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

        <FlatList
          data={schedule}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ContainerButton onPress={() => handleOpenModal(item)}>
              <ContainerButtonFlex>
                <ContainerPersonName>
                  <ContainerPerson>
                    <Io name="person" size={20} color="#f1f1f1" />
                    <Name>{item.customer}</Name>
                  </ContainerPerson>

                  <Name>{item.haircut.name}</Name>
                </ContainerPersonName>
                <Price>R$ {item.haircut.price}</Price>
              </ContainerButtonFlex>
            </ContainerButton>
          )}
        />
      </Container>

      <Modal
        modalVisible={modalVisibly}
        setModalVisible={() => setModalVisibly(!modalVisibly)}
        data={service}
        finishService={() => handleFinish(service?.id)}
      />
    </>
  );
}
