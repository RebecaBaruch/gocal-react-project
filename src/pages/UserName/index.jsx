import React from "react";
import { Wrapper } from '../../global/GlobalStyles';
import SubTitle from "../../components/SubTitle";
import DataInput from "../../components/DataInput";
import NavButton from "../../components/NavButton";

function UserName() {

    return(
        <Wrapper>
            <SubTitle />
            <DataInput type='text' placeholder='Digite o seu nome' />
            <NavButton>Avançar</NavButton>
        </Wrapper>
    );
};

export default UserName;