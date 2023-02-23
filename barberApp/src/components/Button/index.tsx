import React from "react";
import {TouchableOpacityProps} from 'react-native'
import { Container, Title } from "./styles";


interface ButtonProps extends TouchableOpacityProps{
  title: string,
  titleColor?: string
  onPress: () => void
}

export function Button({onPress, title, titleColor, ...rest}: ButtonProps){
  return (
    <Container onPress={onPress} {...rest}>
      <Title color={titleColor}>{title}</Title>
    </Container>
  )
}