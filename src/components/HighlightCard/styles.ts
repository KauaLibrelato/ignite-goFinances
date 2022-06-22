import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "positive" | "negative" | "total";
}

export const Container = styled.View<TypeProps>`
  width: ${RFValue(300)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  ${(props) =>
    props.type === "total" &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
    `}
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  ${(props) =>
    props.type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${(props) =>
    props.type === "positive" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}
  ${(props) =>
    props.type === "negative" &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
  ${(props) =>
    props.type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  margin-top: 38px;

  ${(props) =>
    props.type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};

  ${(props) =>
    props.type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;
