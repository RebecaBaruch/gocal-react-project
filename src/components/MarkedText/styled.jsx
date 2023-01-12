import styled from 'styled-components';

export const Text = styled.span`
    color: #2C2C2C;
    font-size: 1.3rem;
    font-weight: 800;

    ${props =>
        props.type == 'subtitle' ?
        'text-align: left;' :
        'text-align: none;'
    }

    ${props =>
        props.marked == 'green-marked' ?
        'color: #37B874;' :
        'color: #2C2C2C;'
    }
`;