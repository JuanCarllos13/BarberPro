import styled from "styled-components/native";

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-Items: center;
`

export const Content = styled.View`
  padding: 10px;

`

export const ContainerClose = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`


export const ModalView = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  width: 80%;
`;


export const ModalText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-family:  ${({ theme }) => theme.fonts.primary_600};

`
export const ContainerInfo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 15px;

`

export const TextInfo = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family:  ${({ theme }) => theme.fonts.primary_600};
  font-size: 20px;
  margin-left: 10px;
`

export const ContainerButton = styled.View`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;

`