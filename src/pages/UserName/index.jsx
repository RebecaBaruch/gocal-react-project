import React from "react";
import { Link } from 'react-router-dom'

import { Wrapper } from '../../global/GlobalStyles';
import MarkedText from "../../components/MarkedText";
import DataInput from "../../components/DataInput";
import NavButton from "../../components/NavButton";

function UserName() {

    return(
        <Wrapper>
            <MarkedText type='subtitle'>
                Para começar <br></br>
                como podemos te chamar?
            </MarkedText>
            <DataInput type='text' placeholder='Digite o seu nome' />
            <Link to='../EnterData'>
                <NavButton type='next'>Avançar</NavButton>
            </Link>
        </Wrapper>
    );
};

export default UserName;