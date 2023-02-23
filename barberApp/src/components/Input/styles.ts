import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border-radius: 8px;

`

export const InputText = styled(TextInput) <Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 15px;
  border-radius: 8px;
  padding: 15px;
  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border: 0.2px;
      border-color: ${theme.colors.shape};
      border-style: solid;
    `}
`;