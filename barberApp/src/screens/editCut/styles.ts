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
export const ContainerSwitch = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`

export const TextActive = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-right: 4px;
  font-family:${({ theme }) => theme.fonts.primary_500};
  font-weight: bold;
  font-size: 20px;
`


export const ContainerPicker = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.main_light};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const ContainerFlat = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;

`

export const LimitReached = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.primary_500};

`

export const ButtonFlat = styled.TouchableOpacity``


export const TextFlatButton = styled.Text`
  color: ${({ theme }) => theme.colors.success};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-weight: bold;
  margin-right: 5px;
`

export const ContainerButton = styled.TouchableOpacity`
  margin-top: 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
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
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: 15px;
  margin-left: 8px;
`

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 4px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: 15px;
`