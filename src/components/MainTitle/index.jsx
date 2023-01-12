import { TitleBox, Title, ColoredTitle} from './styled';


function MainTitle({ primaryText, markedText }) {

    return(
        <TitleBox>
            <Title>{ primaryText }</Title>
            <ColoredTitle>{ markedText }</ColoredTitle>
        </TitleBox>
    );
};

export default MainTitle;