import { Container, Checkbox, CheckMark, LabelTxt } from "./styled";

function CheckSaveData() {

    return(
        <Container>
            <Checkbox type='checkbox'></Checkbox>
            <CheckMark></CheckMark>
            <LabelTxt>Lembrar das minhas informações</LabelTxt>
        </Container>
    );
}

export default CheckSaveData;