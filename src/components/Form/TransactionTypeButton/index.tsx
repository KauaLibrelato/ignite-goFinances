import React from "react";
import { Container, Icon, Title } from "./style";
import { TouchableOpacityProps } from "react-native";

const icons = {
  positive: "arrow-up-circle",
  negative: "arrow-down-circle",
};

interface Props extends TouchableOpacityProps {
  title: string;
  type: "positive" | "negative";
  isActive: boolean;
}

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <Container isActive={isActive} type={type} {...rest} activeOpacity={0.7}>
      <Icon type={type} name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
}
