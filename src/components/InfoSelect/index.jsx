import { Select } from './styled';


function InfoSelect({ placeholder, children }) {

    return(
        <Select placeholder={placeholder}>
            { children }
        </Select>
    );
};

export default InfoSelect;