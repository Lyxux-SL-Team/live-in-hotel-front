import React, {useEffect, useState} from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import {Container, Form, InputGroup, Stack} from "react-bootstrap";
import {colors as Colors} from "../../configs/colors.js";
import {Calendar} from "../../views/PropertyAmenities/Icons/index.jsx";
import './index.css'

function CustomizedDatePicker({onChange}) {
    const [selectedDate, setSelectedDate] = useState();
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if (onChange) {
            onChange(formatDate(selectedDate));
        }
    },[selectedDate])

    const inputBorderStyle = {
        border: `1px solid ${Colors.Dark}`,
        borderRadius: 10,
        boxShadow: 'none',
    };
    const inputPaymentInstallStyle = {
        fontSize: 14,
        borderRadius: 10,
        border:'unset',
        boxShadow: "none",
        color: Colors.Dark,
        fontWeight:300,
        backgroundColor:"transparent"
    };

    const formatDate = (date) => {
        if (!date) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${day}/${month}`;
    };
    return (
        <div>
            <InputGroup className="position-relative px-2 align-items-center" style={inputBorderStyle} onClick={()=>setOpen(!open)} >
                  <Calendar/>
                <Form.Control
                    style={inputPaymentInstallStyle}
                    value={formatDate(selectedDate)}
                    placeholder="mm/dd"
                    readOnly
                />
            </InputGroup>
            <Container className={open ? "shadow px-1 px-md-3 py-2 position-absolute model-width" :"d-none"} style={{backgroundColor:Colors.white, borderRadius:16, color:Colors.Dark, width:"fit-content", zIndex:999}}>
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />
            </Container>
        </div>
    );
}

export default CustomizedDatePicker;