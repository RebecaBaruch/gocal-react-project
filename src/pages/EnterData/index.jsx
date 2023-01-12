import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../../global/GlobalStyles';
import MainTitle from '../../components/MainTitle';
import SubTitle from '../../components/SubTitle';
import DataInput from '../../components/DataInput';
import NavButton from '../../components/NavButton';
import InfoSelect from '../../components/InfoSelect';


function EnterData() {
    let navigate = useNavigate();

    return(
        <Wrapper>
            <MainTitle primaryText="Olá," markedText="Bruno Garcia" />
            <SubTitle>
                Vamos calcular o seu gasto
                energético basal!
            </SubTitle>      

            <InfoSelect>
                <option value=''>Seu sexo</option>
                <option value='feminino'>Feminino</option>
                <option value='masculino'>Masculino</option>
            </InfoSelect>
            <DataInput type='number' placeholder='Sua idade'/>
            <DataInput type='number' placeholder='Seu peso'/>
            <DataInput type='number' placeholder='Sua altura(cm)'/>
            <InfoSelect>
                <option value=''>Seu nível de atividade física</option>
                <option value='01'>Muito ativo</option>
                <option value='02'>Ativo</option>
                <option value='03'>Irregularmente ativo</option>
                <option value='04'>Sedentário</option>
            </InfoSelect>

            <NavButton type='next'>Calcular</NavButton>
            <NavButton onClick={() => navigate(-1)}>Voltar</NavButton>
        </Wrapper>
    );
};

export default EnterData;