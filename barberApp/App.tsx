import React from "react";
import { ThemeProvider } from "styled-components";
import { ActivityIndicator, StatusBar } from "react-native";
import { SignIn } from "./src/screens/login";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import Theme from "./src/styles/theme";
import { Routes } from "@routes/index";
import { Home } from "@screens/home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />
      <Routes />
      {/* <Home/> */}
    </ThemeProvider>
  );
}
