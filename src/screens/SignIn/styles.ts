import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFPercentage(4)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  margin-top: ${RFPercentage(5)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFPercentage(2.2)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  margin-top: ${RFPercentage(12)}px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const FooterWrapper = styled.View`
  margin-top: -${RFPercentage(4.3)}px;
  padding: 0 ${RFPercentage(5)}px;
  justify-content: space-between;
`;
