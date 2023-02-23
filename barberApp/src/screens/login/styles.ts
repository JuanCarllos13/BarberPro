import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(({ theme }) => theme.colors.background_primary)};
  justify-content: center;
  padding: 0 30px
`
export const Content = styled.View`
  justify-content: center;
  align-items: center;

`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

`
export const Title = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_600};
`

export const SubTitle = styled.Text`
  font-size: 35px;
  color: ${({ theme }) => theme.colors.text_orange};
  font-family: ${({ theme }) => theme.fonts.primary_600};
`

export const Footer = styled.View`
  flex-direction: row;
  margin-top: 20px;

`

export const RegisterText = styled.Text`
  color: ${({ theme }) => theme.colors.text};

`

export const ButtonSignUp = styled.TouchableOpacity``

export const TextButton = styled.Text`
  color:  ${({ theme }) => theme.colors.text_orange};
  margin-left: 5px;

`