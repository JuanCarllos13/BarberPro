import styled from "styled-components/native";


interface DisableProps{
  disabled?  : boolean 
}

export const Container = styled.TouchableOpacity<DisableProps>`
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.button_cta};
  border-radius: 8px;
  margin-bottom: 15px;

  ${props => props.disabled && `
    background-color: gray;
    cursor: not-allowed;
  `}

`

interface TextColor {
  color?: string
}

export const Title = styled.Text<TextColor>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 20px;
  color: ${({ theme, color }) => color ?? theme.colors.text};
`