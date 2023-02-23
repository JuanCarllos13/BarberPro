import styled from "styled-components/native";

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-Items: center;
`


export const ModalView = styled.View`
  margin: 20px;
  background-color: ${({theme}) => theme.colors.background_secondary};
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;