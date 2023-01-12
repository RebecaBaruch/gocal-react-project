import { Input } from './styled';


function DataInput({ type, placeholder }) {

    return(
        <Input type={type} placeholder={placeholder} />
    );
};

export default DataInput;