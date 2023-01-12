import { Button } from './styled';

function NavButton({ type,children, onClick }) {

    return(
        <Button type={ type } onClick={ onClick }>{ children }</Button>
    );
};

export default NavButton;