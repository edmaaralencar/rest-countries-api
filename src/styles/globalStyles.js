import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Nunito Sans', sans-serif;
    }
    
    html {
        font-size: 62.5%;
    }

    body {
        background-color: ${props => props.theme.backgroundColor};
    }

    body, input, select, option, button {
        color: ${props => props.theme.textColor};
    }

    button, select {
        cursor: pointer;
    }
`;
