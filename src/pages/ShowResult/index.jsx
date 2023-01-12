import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../../global/GlobalStyles';
import { ResultContainer } from './styled';
import MainTitle from '../../components/MainTitle';
import ResultItem from '../../components/ResultItem';
import MarkedText from '../../components/MarkedText';
import CheckSaveData from '../../components/CheckSaveData';
import NavButton from '../../components/NavButton';


function ShowResult() {
    // let navigate = useNavigate();

    return(
        <Wrapper>
            <MainTitle primaryText="Aqui está o seu" markedText="resultado" />

            <ResultContainer>
                <ResultItem>
                    Seu <MarkedText>metabolismo basal</MarkedText> você precisa consumir em média:
                    <MarkedText marked='green-marked'> 1606 calorias.</MarkedText>
                </ResultItem>
                <ResultItem>
                    Para <MarkedText>manter o seu peso</MarkedText> você precisa consumir em média:
                    <MarkedText marked='green-marked'> 1606 calorias.</MarkedText>
                </ResultItem>
                <ResultItem>
                    Para <MarkedText>perder peso</MarkedText> você precisa consumir em média: <br></br>
                    <MarkedText marked='green-marked'> 1606 calorias.</MarkedText>
                </ResultItem>
                <ResultItem>
                    Para <MarkedText>ganhar peso</MarkedText> você precisa consumir em média:
                    <MarkedText marked='green-marked'> 1606 calorias.</MarkedText>
                </ResultItem>
            </ResultContainer>

            <CheckSaveData></CheckSaveData>
            <Link to='/'>
                <NavButton type='next'>Reiniciar</NavButton>
            </Link>
        </Wrapper>
    );
};

export default ShowResult;