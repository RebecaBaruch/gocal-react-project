import { useContext } from 'react';
import { UserDataContext } from '../../providers/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../../global/GlobalStyles';
import MainTitle from '../../components/MainTitle';
import MarkedText from '../../components/MarkedText';
import DataInput from '../../components/DataInput';
import NavButton from '../../components/NavButton';
import InfoSelect from '../../components/InfoSelect';


function EnterData() {
    let navigate = useNavigate();
    const {userData, setUserData} = useContext(UserDataContext);

    const handleData = (e) => {
        setUserData((prevState) => {
            return  {...prevState, [e.target.name]: e.target.value}
        });
    }

    const handleShowData = () => {
        console.log(userData);
    }

    return(
        <Wrapper>
            <MainTitle primaryText="Olá," markedText="Bruno Garcia" />
            <MarkedText type='subtitle'>
                Vamos calcular o seu gasto
                energético basal!
            </MarkedText>      

            <InfoSelect onChange={handleData} name='sex'>
                <option value=''>Seu sexo</option>
                <option value='feminino'>Feminino</option>
                <option value='masculino'>Masculino</option>
            </InfoSelect>
            <DataInput type='number' placeholder='Sua idade' onChange={handleData} name='age'/>
            <DataInput type='number' placeholder='Seu peso'onChange={handleData} name='weight'/>
            <DataInput type='number' placeholder='Sua altura(cm)' onChange={handleData} name='height'/>
            <InfoSelect onChange={handleData} name='activityLevel'>
                <option value=''>Seu nível de atividade física</option>
                <option value='01'>Muito ativo</option>
                <option value='02'>Ativo</option>
                <option value='03'>Irregularmente ativo</option>
                <option value='04'>Sedentário</option>
            </InfoSelect>

            <Link to='../ShowResult'>
                <NavButton type='next' onClick={handleShowData}>Calcular</NavButton>
            </Link>
            <NavButton onClick={() => navigate(-1)}>Voltar</NavButton>
        </Wrapper>
    );
};

export default EnterData;