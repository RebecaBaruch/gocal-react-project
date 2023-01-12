import { Wrapper } from '../../global/GlobalStyles';
import MainTitle from '../../components/MainTitle';
import SubTitle from '../../components/SubTitle';
import DataInput from '../../components/DataInput';
import NavButton from '../../components/NavButton';


function EnterData() {

    return(
        <Wrapper>
            <MainTitle primaryText="Olá," markedText="Bruno Garcia" />
            <SubTitle>
                Vamos calcular o seu gasto
                energético basal!
            </SubTitle>      

            <DataInput type='number' placeholder='Sua idade'/>
            <DataInput type='number' placeholder='Seu peso'/>
            <DataInput type='number' placeholder='Sua altura(cm)'/>

            <NavButton>Calcular</NavButton>
        </Wrapper>
    );
};

export default EnterData;