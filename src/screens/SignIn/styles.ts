import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  align-items: center;
`;

export const TitleWrapper = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;

export const SubTitle = styled.Text`
  margin-bottom: ${RFValue(67)}px;
  margin-top: ${RFValue(80)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: flex-end;
  align-items: center;
`;

export const FooterWrapper = styled.View``;
