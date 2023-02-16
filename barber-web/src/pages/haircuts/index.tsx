import { Sidebar } from "@/components/sideBar";
import { canSSRAuth } from "@/utils/canSSRAuth";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Switch,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { IoMdPricetag } from "react-icons/io";

export default function Haircuts() {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  return (
    <>
      <Head>
        <title>Cortes de cabelo</title>
      </Head>
      <Sidebar>
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Flex
            direction={isMobile ? "column" : "row"}
            w="100%"
            alignItems={isMobile ? "flex-start" : "center"}
            justifyContent="flex-start"
            mb={0}
          >
            <Heading
              fontSize={isMobile ? "28px" : "3xl"}
              mt={4}
              mb={4}
              mr={4}
              color="orange.900"
            >
              Modelos de Cortes
            </Heading>

            <Link href="/haircuts/new">
              <Button>Cadastrar novo</Button>
            </Link>

            <Stack ml="auto" align="center" direction="row">
              <Text fontWeight="bold" color="white">
                ATIVOS
              </Text>

              <Switch colorScheme="green" size="lg" />
            </Stack>
          </Flex>

          <Link href="/haircuts/123" legacyBehavior>
            <Flex
              cursor="pointer"
              w="100%"
              p={4}
              bg="barber.400"
              direction="row"
              rounded={4}
              mb={2}
              justifyContent="space-between"
            >
              <Flex>
                <IoMdPricetag size={28} color="#fba931" />
                <Text color="white">Corte Completo</Text>
              </Flex>

              <Text color="white">Preço: 449,90</Text>
            </Flex>
          </Link>
        </Flex>
      </Sidebar>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
