import React from "react";
import {TouchableOpacityProps} from 'react-native'
import { Container, Title } from "./styles";


interface ButtonProps extends TouchableOpacityProps{
  title: string,
  titleColor?: string
  onPress: () => void
  disabled?: boolean
}

export function Button({onPress, title, titleColor,disabled, ...rest}: ButtonProps){
  return (
    <Container onPress={onPress} {...rest} disabled={disabled}>
      <Title color={titleColor}>{title}</Title>
    </Container>
  )
}