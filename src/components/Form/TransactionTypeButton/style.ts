import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-color: ${({ theme }) => theme.colors.text};
  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  justify-content: center;
  border-radius: 5px;

  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: rgba(232, 63, 91, 0.5);
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: rgba(18, 164, 84, 0.5);
    `}
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-left: 12px;
`;
