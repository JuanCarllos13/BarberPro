import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${(({ theme }) => theme.colors.background_primary)};
  padding: 42px 24px;
  justify-content: center;
  align-items: center;
`

export const Content = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const Title = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.text_orange};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  text-align: center;
  margin: 10px;
`

export const ContainerPicker = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.main_light};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`