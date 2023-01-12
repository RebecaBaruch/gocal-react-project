import { Button } from './styled';

function NavButton({ children }) {

    return(
        <Button>{ children }</Button>
    );
};

export default NavButton;