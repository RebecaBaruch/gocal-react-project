import React from "react";
import { Wrapper } from '../../global/GlobalStyles';
import SubTitle from "../../components/SubTitle";
import DataInput from "../../components/DataInput";

function UserName() {

    return(
        <Wrapper>
            <SubTitle />
            <DataInput type='text' placeholder='Digite o seu nome' />
        </Wrapper>
    );
};

export default UserName;