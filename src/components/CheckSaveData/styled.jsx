import styled from 'styled-components';

export const CheckMark = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22px;
    width: 22px;

    border: 3px solid #1D9F5A;
    border-radius: 5px;
    background-color: ${({ checked }) => checked ? 
    
        `#37B874` : 
        'transparent'
        };
    }
`;

// & :after{
//     content: ""; 
//     position: absolute; 
//     width: 5px;
//     height: 10px;
//     border: solid white;
//     border-width: 0 3px 3px 0;
//     -webkit-transform: rotate(45deg);
//     -ms-transform: rotate(45deg);
//     transform: rotate(45deg);
//     ${({ checked }) => checked ? 

//         'display: block;':
    
//          `display: none;`   
// };

export const Checkbox = styled.input.attrs({type: 'checkbox'})`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
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