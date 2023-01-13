import React, { useContext } from "react";
import { Link } from 'react-router-dom'

import { UserDataContext } from "../../providers/auth";

import { Wrapper } from '../../global/GlobalStyles';
import MarkedText from "../../components/MarkedText";
import DataInput from "../../components/DataInput";
import NavButton from "../../components/NavButton";

function UserName() {
    const {userData, setUserData} = useContext(UserDataContext);

    const handleChangeName = (e) => {
        setUserData((prevState) => {
          return  {...prevState, name: e.target.value}
        });
    };

    const handleSetName = () => {
        console.log(userData);
    }

    return(
        <Wrapper>
            <MarkedText type='subtitle'>
                Para começar <br></br>
                como podemos te chamar?
            </MarkedText>
            <DataInput type='text' placeholder='Digite o seu nome' onChange={handleChangeName}/>
            <Link to='../EnterData'>
                <NavButton type='next' onClick={handleSetName} >Avançar</NavButton>
            </Link>
        </Wrapper>
    );
};

export default UserName;