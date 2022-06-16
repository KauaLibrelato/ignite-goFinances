import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.title};
`;
export const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.title};
`;
