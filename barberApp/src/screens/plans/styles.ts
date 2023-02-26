import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(({ theme }) => theme.colors.background_primary)};
  justify-content: flex-start;
  align-items: center;
`


export const Title = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.text_orange};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  text-align: center;
  margin: 10px;
`

export const Content = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 8px;
  justify-content: flex-start;
  padding: 10px;
  margin-bottom: 10px;

`

export const TextFree = styled.Text`
  text-align: center;
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin: 10px;


`

export const TextInfo = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  margin: 3px;
`

export const Price = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.success};

`