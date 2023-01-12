import styled from "styled-components";
import Vector from '../../assets/Vector.svg';

export const Select = styled.select`
    padding: 25px;
    width: 100%;    

    font-size: 1rem;
    font-weight: 400;
    color: #969CB3;
    border-radius: 8px;
    border: none;
    outline: none;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${Vector});
    background-repeat: no-repeat;
    background-position: right 10% center;
`;