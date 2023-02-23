import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color:  ${({ theme }) => theme.colors.background_secondary};
  padding-top: 50px;

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