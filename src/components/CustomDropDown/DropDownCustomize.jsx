import React, { useState } from 'react';
import { Collapse, Container, Form, InputGroup } from 'react-bootstrap';
import { colors as Colors } from '../../configs/colors.js';

function DropDownCustomize({ list, onChange, borderChange }) {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const inputStyle = { color: Colors.Dark, fontSize: 14, fontWeight: 400 };
    const labelStyle = { color: Colors.Grey, fontSize: 14, fontWeight:300 };

    const handleSelect = (data) => {
        setSelectedValue(data);
        setOpen(false);
        if (onChange) {
            onChange(data);
        }
    };

    return (
        <InputGroup className="position-relative" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="open-id">
            <span className="input-affix-wrapper">
                <Form.Control type="text" placeholder="-select-" value={selectedValue} readOnly style={{ ...inputStyle, backgroundColor:Colors.white, borderRadius:10, border:`1px solid ${borderChange? Colors.Dark:Colors.Grey3}` }} />
                <span className="input-suffix">
                    <i className={open ? "fa fa-angle-up" : "fa fa-angle-down"} style={{color:Colors.Dark}}></i>
                </span>
            </span>
            <Collapse in={open}>
                <Container id="open-id" className="position-absolute bg-white overflow-auto p-2 " style={{zIndex:999, top: 40, border: `1px solid ${Colors.white1}`, borderRadius: 10, height: "170px" }}>
                    {list.map((data,index) => (
                        data.title ?
                        <div key={index} className="mb-2" onClick={() => handleSelect(data.title)}>
                            <span className="d-block" style={inputStyle}>{data.title}</span>
                            <span style={labelStyle}>{data.description}</span>
                        </div> :
                            <div key={data} className="mb-1" onClick={() => handleSelect(data)}>
                                <span style={inputStyle}>{data}</span>
                            </div>
                    ))}
                </Container>
            </Collapse>
        </InputGroup>
    );
}

export default DropDownCustomize;
