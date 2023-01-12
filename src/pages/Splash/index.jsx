import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SplashContainer } from "./styled";
import Logo from '../../assets/logo.svg';

function Splash() {
    const navigate = useNavigate()

    useEffect(() => {
      setTimeout(() => {
        navigate('/Home')
      }, 2000)
    }, []);

    return(
        <SplashContainer>
            <img src={Logo} alt="goCal logo" className="splash-logo" />
        </SplashContainer>
    );
}

export default Splash;