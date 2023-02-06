import React, { use, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import LogoImg from "../../../public/image/logo.svg";
import { Flex, Text, Center, Input, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <Head>
        <title>BarberPRO - Criei sua conta</title>
      </Head>
      <Flex
        background="barber.900"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex width={640} direction="column" p={14} rounded={8}>
          <Center p={4}>
            <Image
              src={LogoImg}
              quality={100}
              alt="Logo da Imagem"
              width={240}
            />
          </Center>

          <Input
            background="barber.400"
            variant="filled"
            size="lg"
            type="text"
            mb={3}
            placeholder="Nome da barbearia"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            background="barber.400"
            variant="filled"
            size="lg"
            type="email"
            mb={3}
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            background="barber.400"
            variant="filled"
            size="lg"
            type="password"
            mb={3}
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            background="button.cta"
            mb={6}
            color="gray.900"
            size="lg"
            _hover={{ bg: "#ffb13e" }}
            onClick={handleSubmit}
          >
            Cadastrar
          </Button>

          <Center mt={50}>
            <Link href="/login">
              <Text cursor="pointer" color="button.default">
                Já tenho conta <strong>Faça login</strong>
              </Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
