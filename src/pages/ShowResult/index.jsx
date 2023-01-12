import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../../global/GlobalStyles';
import MainTitle from '../../components/MainTitle';
import ResultItem from '../../components/ResultItem';
import NavButton from '../../components/NavButton';


function ShowResult() {
    // let navigate = useNavigate();

    return(
        <Wrapper>
            <MainTitle primaryText="Aqui está o seu" markedText="resultado" />

            <ResultItem>
                
            </ResultItem>

            <Link to='/'>
                <NavButton type='next'>Reiniciar</NavButton>
            </Link>
        </Wrapper>
    );
};

export default ShowResult;