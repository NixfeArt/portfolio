import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.borderColor};
`

export const StyledTitle = styled.h1`
  color: ${(props) => props.theme.textColor};
  ${(props) => props.css}
`

export const StyledParagraph = styled.p`
  color: ${(props) => props.theme.textColor};
  ${(props) => props.css}
`;

export const StyledSubTitle = styled.h2`
  color: ${(props) => props.theme.textColor};
  ${(props) => props.css}
`;

export const StyledInput = styled.input`
  color: ${(props) => props.theme.inputColor};
  ${(props) => props.css}
`

export const StyledFormWrapper = styled.form`

`