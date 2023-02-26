import React, { useEffect, useState } from "react";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { api } from "@services/api";
import { Linking, ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Content, Price, TextFree, TextInfo, Title } from "./styles";

import {StripeProvider, usePaymentSheet} from '@stripe/stripe-react-native';

export function Plans() {
  const { colors } = useTheme();

  const [statusPremium, setStatusPremium] = useState(false);

  async function getStatusPremium() {
    const response = await api.get("/me");

    setStatusPremium(
      response.data?.subscriptions?.status === "active" ? true : false
    );
  }

  // const handleSubscribe = async () => {
  //   if (statusPremium) {
  //     return;
  //   }

  //   try {
  //     const response = await api.post("/subscribe");

  //     const { sessionId } = response.data;

  //     const stripe = await getStripeJs();

  //     if (stripe) {
  //       // await stripe.redirectToCheckout({ sessionId: sessionId });
  //     } else {
  //       console.log("Stripe não está disponível");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // async function handleCreatePortal() {
  //   try {
  //     if (!statusPremium) {
  //       return;
  //     }
  //     const response = await api.post("/create-portal");

  //     const { sessionId } = response.data;

  //     await Linking.openURL(sessionId);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    getStatusPremium();
  });
  return (
    <
    >
      <Header />
      <Container>
        <Title>Planos</Title>

        <ScrollView style={{ width: "90%" }}>
          <Content>
            <TextFree style={{ color: colors.text }}>Planos grátis</TextFree>

            <TextInfo>Registrar cortes.</TextInfo>
            <TextInfo>Criar apenas 3 modelos de corte.</TextInfo>
            <TextInfo>Editar dados do perfil.</TextInfo>
          </Content>

          <Content>
            <TextFree style={{ color: colors.success }}>Premium</TextFree>

            <TextInfo>Registrar cortes ilimitados.</TextInfo>
            <TextInfo>Criar modelos ilimitados.</TextInfo>
            <TextInfo>Editar modelos de corte.</TextInfo>
            <TextInfo>Editar dados do perfil.</TextInfo>
            <TextInfo>Receber todas atualizações.</TextInfo>

            <Price>R$ 9.99</Price>

            <Button
              onPress={() => {}}
              title={statusPremium ? "VOCÊ JÁ É PREMIUM" : "VIRAR PREMIUM"}
              style={{
                backgroundColor: statusPremium
                  ? "transparent"
                  : colors.button_cta,
              }}
            />

            <Button onPress={() => {}} title="ALTERAR ASSINATURA" />
          </Content>
        </ScrollView>
      </Container>
    </>
  );
}
