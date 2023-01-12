import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        color: #202020;
        scroll-behavior: smooth;
    }

    body {
        background-color: #F3F3F3;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    background-color: tomato;
`;