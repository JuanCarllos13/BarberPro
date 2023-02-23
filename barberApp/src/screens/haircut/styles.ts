import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${(({ theme }) => theme.colors.background_primary)};
  padding: 42px 24px;
`

export const Title = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.text_orange};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  text-align: center;
  margin: 10px;
`

export const HeaderContainerButton = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ButtonRegisterHaircut = styled.TouchableOpacity`
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

export const ContainerSwitch = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TextActive = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-right: 4px;
  font-family:${({ theme }) => theme.fonts.primary_500};
  font-weight: bold;
  font-size: 20px;
`

export const ContainerButton = styled.TouchableOpacity`
  margin-top: 30px;
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
  justify-content: center;
`

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
`

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 4px;
  margin-top: 10px;
  font-family:  ${({ theme }) => theme.fonts.primary_400};
`
