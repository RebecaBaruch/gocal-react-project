import { useState } from 'react';
import { Container, Checkbox, CheckMark, LabelTxt } from "./styled";

function CheckSaveData({ children, ...props }) {
    const [checked, setChecked] = useState(false);
   
    function handleCheckboxChange(){
      setChecked(!checked);
    }

    return(
        <Container>
            <Checkbox 
                onChange={handleCheckboxChange}
                checked={checked}
            />
            <CheckMark checked={checked}></CheckMark>
            <LabelTxt>{ children }</LabelTxt>
        </Container>
    );
}

export default CheckSaveData;