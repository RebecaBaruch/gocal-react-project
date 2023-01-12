import { SplashContainer } from "./styled";
import Logo from '../../assets/logo.svg';

function Splash() {

    return(
        <SplashContainer className="splash-container">
            <img src={Logo} alt="goCal logo" />
        </SplashContainer>
    );
}

export default Splash;