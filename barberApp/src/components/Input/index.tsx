import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, InputText } from "./styles";

interface InputProps extends TextInputProps {
  value?: string;
}

export function Input({ value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const theme = useTheme();

  function handleIsFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <InputText
        onFocus={handleIsFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        placeholderTextColor={theme.colors.text}
        {...rest}
      />
    </Container>
  );
}
