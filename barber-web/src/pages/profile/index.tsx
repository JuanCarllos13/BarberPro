import Head from "next/head";
import { Flex, Text, Heading, Box, Input, Button } from "@chakra-ui/react";
import { Sidebar } from "@/components/sideBar";
import Link from "next/link";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { setupAPIClient } from "@/services/api";

interface UserProps {
  id: string;
  name: string;
  email: string;
  endereco?: string;
}

interface ProfileProps {
  user: UserProps;
  premium: boolean;
}

export default function Profile({ premium, user }: ProfileProps) {
  const [name, setName] = useState(user && user?.name);
  const [endereco, setEndereco] = useState(user && user?.endereco);

  const { loOutUser } = useContext(AuthContext);

  async function handleLogout() {
    await loOutUser();
  }

  async function handleUpdateUser() {
    if (name === "") {
      return;
    }

    const apiClient = setupAPIClient();

    try {
      await apiClient.put("/users", {
        name,
        endereco,
      });

      alert("Dados alterados com sucesso");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Minha conta</title>
      </Head>
      <Sidebar>
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Flex
            w="100%"
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Heading mt={4} mb={4} mr={4} color="orange.900">
              Minha Conta
            </Heading>
          </Flex>

          <Flex
            pt={8}
            pb={8}
            maxW="700%"
            w="100%"
            direction="column"
            alignItems="center"
            justifyContent="center"
            background="barber.400"
          >
            <Flex direction="column" w="85%">
              <Text mb={2} fontSize="xl" fontWeight="bold" color="white">
                Nome da barbearia:
              </Text>
              <Input
                w="100%"
                background="gray.900"
                placeholder="Nome da sua barbearia"
                size="lg"
                type="text"
                color="white"
                mb={3}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Text mb={2} fontSize="xl" fontWeight="bold" color="white">
                Endereço:
              </Text>
              <Input
                w="100%"
                background="gray.900"
                placeholder="Endereço da barbearia"
                size="lg"
                type="text"
                mb={3}
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                color="white"
              />

              <Text mb={2} fontSize="xl" fontWeight="bold" color="white">
                Plano:
              </Text>
              <Flex
                direction="row"
                w="100%"
                mb={3}
                p={1}
                borderWidth={1}
                rounded={6}
                background="barber.900"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text
                  p={2}
                  fontSize="lg"
                  color={premium ? "#ffb13e" : "#4dffb4"}
                >
                  Plano {premium ? "Premium" : "Grátis"}
                </Text>
                <Link href="/planos">
                  <Box
                    cursor="pointer"
                    p={1}
                    pl={2}
                    pr={2}
                    background="#00cd52"
                    rounded={4}
                    color="white"
                  >
                    Mudar plano
                  </Box>
                </Link>
              </Flex>

              <Button
                w="100%"
                mt={3}
                mb={4}
                background="button.cta"
                size="lg"
                _hover={{ bg: "#ffb13e" }}
                onClick={handleUpdateUser}
              >
                Salvar
              </Button>
              <Button
                w="100%"
                mb={6}
                background="transparent"
                borderWidth={2}
                borderColor="red.500"
                color="red.500"
                size="lg"
                _hover={{ bg: "transparent" }}
                onClick={handleLogout}
              >
                Sair da conta
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Sidebar>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  try {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get("/me");

    const user = {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
      endereco: response.data?.endereco,
    };
    return {
      props: {
        user: user,
        premium:
          response.data?.subscriptions?.status === "active" ? true : false,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
});
