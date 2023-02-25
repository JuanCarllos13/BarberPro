import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(({ theme }) => theme.colors.background_primary)};
  padding: 42px 24px;

`
export const ContainerTitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.text_orange};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin: 10px;
`

export const ButtonRegister = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.shape_dark};
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`
export const TextButtonRegister = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`


export const ContainerButton = styled.TouchableOpacity`
  margin-top: 30px;
`

export const ContainerButtonFlex = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 8px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`

export const ContainerPersonName = styled.View`
width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ContainerPerson = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family:${({ theme }) => theme.fonts.primary_600} ;
  font-size: 15px;
  margin-left: 4px;
`

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 4px;
  margin-top: 10px;
  font-size: 15px;
  font-family:  ${({ theme }) => theme.fonts.primary_600};
`
