import React from "react";
import LottieView from "lottie-react-native";

import loadingMoneyCorrect from "../../assets/loadingMoneyCorrect.json";

import { Container } from "./styles";

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={loadingMoneyCorrect}
        style={{ height: 50 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}
