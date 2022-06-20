import React from "react";
import { ThemeProvider } from "styled-components";

import { Register } from "./src/screens/Register";
import theme from "./src/global/styles/theme";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "expo-app-loading is deprecated in favor of expo-splash-screen",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    );
  }
}
