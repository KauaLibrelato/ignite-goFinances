import React from "react";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SubTitle,
  Footer,
  FooterWrapper,
} from "./styles";

import LogoSvg from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          {/* <LogoSvg width={RFValue(120)} height={RFValue(68)} /> */}
          <Title>
            Controle suas{"\n"}finanças de forma{"\n"}muito simples
          </Title>
        </TitleWrapper>

        <SubTitle>Faça seu login com{"\n"} uma das contas abaixo</SubTitle>
      </Header>
      <Footer>
        <FooterWrapper></FooterWrapper>
      </Footer>
    </Container>
  );
}
