import styled from "styled-components";

export const Button = styled.button`
    padding: 25px;
    width: 100%;
    
    font-size: 1rem;
    font-weight: 500;
    
    border-radius: 5px;
    border: none;
    outline: none;

    ${(props) => 
        props.type == 'next' ?
        'background-color: #37B874; color: #ffffff;' :
        'background-color: transparent; color: #37B874;'
    }
`;