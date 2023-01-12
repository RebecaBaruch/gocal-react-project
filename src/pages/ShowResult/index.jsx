import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../../global/GlobalStyles';
import MainTitle from '../../components/MainTitle';
import ResultItem from '../../components/ResultItem';
import MarkedText from '../../components/MarkedText';
import NavButton from '../../components/NavButton';


function ShowResult() {
    // let navigate = useNavigate();

    return(
        <Wrapper>
            <MainTitle primaryText="Aqui está o seu" markedText="resultado" />

            <ResultItem>
                Seu <MarkedText>metabolismo basal</MarkedText> é de:
                <MarkedText marked='green-marked'> 1606 calorias.</MarkedText>
            </ResultItem>

            <Link to='/'>
                <NavButton type='next'>Reiniciar</NavButton>
            </Link>
        </Wrapper>
    );
};

export default ShowResult;