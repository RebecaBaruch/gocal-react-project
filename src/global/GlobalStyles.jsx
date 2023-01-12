import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        color: #202020;
        scroll-behavior: smooth;
    }

    body {
        background-color: #F3F3F3;

    }
`;

export default GlobalStyle;