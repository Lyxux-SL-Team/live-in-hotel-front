import React, {useState} from 'react';
import {Collapse, Container, Form, InputGroup} from 'react-bootstrap';
import {colors, colors as Colors} from '../../configs/colors.js';

function DropDownLabelCustomize({list, onChange, borderChange, label}) {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const inputStyle = {color: Colors.Dark, fontSize: 14, fontWeight: 400};
    const labelStyle = {color: Colors.Grey, fontSize: 14, fontWeight: 300};

    const handleSelect = (data) => {
        setSelectedValue(data);
        setOpen(false);
        if (onChange) {
            onChange(data);
        }
    };

    return (
        <InputGroup className="position-relative" onClick={() => setOpen(!open)} aria-expanded={open}
                    aria-controls="open-id"
                    style={{borderRadius: 10, border: `1px solid ${borderChange ? Colors.Dark : Colors.Grey3}`}}>
            <div className="form-floating">
                <Form.Control type="text" placeholder="-select-" value={selectedValue} readOnly style={{
                    ...inputStyle,
                    backgroundColor: Colors.white,
                    border: "unset",
                    borderRadius: 10
                }}/>
                <Form.Label style={{color: colors.Grey, fontSize: 12}}>Property</Form.Label>
            </div>
            <InputGroup.Text className="rounded-10 border-0">
                <i className={open ? "fa fa-angle-up" : "fa fa-angle-down"} style={{color: Colors.Dark}}>
                </i>
            </InputGroup.Text>

            <Collapse in={open}>
                <Container id="open-id" className="position-absolute bg-white overflow-auto p-2 z-index-10"
                           style={{top: 60, border: `1px solid ${Colors.white1}`, borderRadius: 10, height: "170px"}}>
                    {list.map((data, index) => (
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

export default DropDownLabelCustomize;
