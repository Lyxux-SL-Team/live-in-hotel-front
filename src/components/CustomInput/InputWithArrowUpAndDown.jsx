import React, {useEffect, useState} from 'react';
import {Form, InputGroup, Stack} from 'react-bootstrap';
import InputMask from 'react-input-mask';
import { colors as Colors} from '../../configs/colors';

function InputWithArrowUpAndDown({ name, value, onChange, mask = true }) {
    const [internalValue, setInternalValue] = useState(value);

    useEffect(() => {
        setInternalValue(value);
    }, [value]);

    const handleIncrement = () => {
        setInternalValue(prevValue => {
            const newValue = prevValue + 1;
            if (onChange) {
                onChange(newValue, { target: { name } });
            }
            return newValue;
        });
    };

    const handleDecrement = () => {
        setInternalValue(prevValue => {
            const newValue = prevValue > 0 ? prevValue - 1 : 0;
            if (onChange) {
                onChange(newValue, { target: { name } });
            }
            return newValue;
        });
    };

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value.replace('%', ''), 10);
        if (!isNaN(newValue)) {
            setInternalValue(newValue);
            if (onChange) {
                onChange(newValue, { target: { name } });
            }
        }
    };

    const inputBorderStyle = {
        border: `1px solid ${Colors.Dark}`,
        borderRadius: 10,
        boxShadow: 'none',
    };
    const inputPaymentInstallStyle = {
        ...inputBorderStyle,
        fontSize: 14,
        color: Colors.FooterBlue,
    };

    const arrowStyle = { color: Colors.Dark1 };

    return (
        mask?
        <InputGroup className="mb-3 w-40 w-md-15 position-relative">
            <InputMask
                className="form-control"
                style={inputPaymentInstallStyle}
                mask="99 %"
                value={internalValue}
                onChange={handleChange}
            />
            <Stack className="position-absolute z-index-10" style={{ right: 15 }}>
                <i className="fa fa-angle-up" onClick={handleIncrement} style={arrowStyle}></i>
                <i className="fa fa-angle-down" onClick={handleDecrement} style={{ ...arrowStyle, color: internalValue === 0 ? Colors.Grey9 : '' }}></i>
            </Stack>
        </InputGroup>:
            <InputGroup className="position-relative">
                <Form.Control
                    style={inputPaymentInstallStyle}
                    value={internalValue}
                    onChange={handleChange}
                />
                <Stack className="position-absolute z-index-10" style={{ right: 15 }}>
                    <i className="fa fa-angle-up" onClick={handleIncrement} style={arrowStyle}></i>
                    <i className="fa fa-angle-down" onClick={handleDecrement} style={{ ...arrowStyle, color: internalValue === 0 ? Colors.Grey9 : '' }}></i>
                </Stack>
            </InputGroup>
    );
}

export default InputWithArrowUpAndDown;
