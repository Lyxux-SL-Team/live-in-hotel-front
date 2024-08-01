import React from 'react';
import {InputGroup,Form} from "react-bootstrap";
import {colors as Colors} from "../../../configs/colors.js";

function CustomInputWithBlue({onChange}) {

    const inputStyle = {border:`1px solid ${Colors.Dark}`,borderRadius:10, boxShadow:"none",fontSize:14, color:Colors.FooterBlue};
    return (
        <InputGroup>
            {/*<InputMask className='form-control' style={inputPaymentInstallStyle} mask="99" name={data} onChange={handlePercentage}/>*/}
            <Form.Control type="text" style={inputStyle} onChange={(e)=>onChange(e.target.value)} />
        </InputGroup>
    );
}

export default CustomInputWithBlue;