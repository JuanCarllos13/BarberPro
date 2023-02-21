import React from "react";
import { SigIn } from "./src/login";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import AppLoading from "expo-app-loading";

export default function App() {
  return (
    <>
      <SigIn />
    </>
  );
}
