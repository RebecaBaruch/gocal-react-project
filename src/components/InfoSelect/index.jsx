import { Select } from './styled';


function InfoSelect({ placeholder, children, onChange, name }) {

    return(
        <Select placeholder={placeholder} onChange={ onChange } name={ name }>
            { children }
        </Select>
    );
};

export default InfoSelect;