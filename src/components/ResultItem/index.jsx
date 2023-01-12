import { TextBox } from './styled';


function ResultItem({ children }) {

    return(
        <TextBox>
            { children }
        </TextBox>
    );
}

export default ResultItem;