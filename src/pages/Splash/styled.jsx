import styled, { keyframes } from 'styled-components';

const showLogo = keyframes`
    0%{
        opacity: 0;
        margin-right: 200px;
    }
    100%{
        opacity: 1;
        margin-right: 0;
    }
`

export const SplashContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #37B874;

    .splash-logo {
        animation: 1.2s ${showLogo} ease-in-out;
        width: 280px;
        @media (max-width: 625px) {
        width: 200px;
    }
`;