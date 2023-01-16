import { Input } from './styled';


function DataInput({ type, placeholder, onChange, name }) {

    return(
        <Input type={type} placeholder={placeholder} onChange={onChange} name={name} />
    );
};

export default DataInput;