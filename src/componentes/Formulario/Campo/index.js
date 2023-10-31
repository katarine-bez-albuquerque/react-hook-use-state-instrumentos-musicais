const Campo = (props) => {

    const { type, required, placeholder, value, onChange, maxLength } = props;

    return(
        <input 
            type={ type }
            required={ required }
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
            maxLength={ maxLength }
        />
    );
}

export default Campo;