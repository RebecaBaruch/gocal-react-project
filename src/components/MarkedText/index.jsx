import { Text } from './styled';

function MarkedText({ type, marked, children }) {

    return(
        <Text type={ type } marked={ marked }>
             { children } 
        </Text>
    );
}

export default MarkedText;