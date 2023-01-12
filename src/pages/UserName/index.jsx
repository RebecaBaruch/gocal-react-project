import React from "react";
import { Link } from 'react-router-dom'

import { Wrapper } from '../../global/GlobalStyles';
import SubTitle from "../../components/SubTitle";
import DataInput from "../../components/DataInput";
import NavButton from "../../components/NavButton";

function UserName() {

    return(
        <Wrapper>
            <SubTitle>
                Para começar <br></br>
                como podemos te chamar?
            </SubTitle>
            <DataInput type='text' placeholder='Digite o seu nome' />
            <Link to='../EnterData'>
                <NavButton type='next'>Avançar</NavButton>
            </Link>
        </Wrapper>
    );
};

export default UserName;