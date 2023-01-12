import styled from 'styled-components';

export const CheckMark = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22px;
    width: 22px;

    border: 3px solid #1D9F5A;
    border-radius: 5px;
`;

export const Checkbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    & :checked ~ ${CheckMark} {
        background-color: #37B874;
      }
`;

export const LabelTxt = styled.span`
      font-size: 1rem;
      font-weight: 700;
      color: #2C2C2C;

`;

export const Container = styled.label`
    display: flex;
    justify-content: start;
    gap: 15px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    font-size: 1.7rem;
`;