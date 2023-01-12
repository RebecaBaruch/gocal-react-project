import { Wrapper } from '../../global/GlobalStyles';
import MainTitle from '../../components/MainTitle';
import SubTitle from '../../components/SubTitle';


function EnterData() {

    return(
        <Wrapper>
            <MainTitle primaryText="Olá," markedText="Bruno Garcia" />
            <SubTitle>
                Vamos calcular o seu gasto
                energético basal!
            </SubTitle>            
        </Wrapper>
    );
};

export default EnterData;