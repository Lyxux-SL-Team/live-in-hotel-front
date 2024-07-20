import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CommanFooter1 from '../../CommanFooter1';
import SimpleHeader from '../../SimpleHeader';
import '../../../../styles/css/signup.css'

const SignUpStep5 = (props) => {
    const [propertyName, setPropertyName] = useState("");
    const [city, setCity] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [unitNumber, setUnitNumber] = useState("");
    const [area, setArea] = useState("");
    const [zipCode, setZipCode] = useState("");

    const [isPropertyNameValid, setIsPropertyNameValid] = useState(true);
    const [isStreetAddressValid, setIsStreetAddressValid] = useState(true);
    const [isUnitNumberValid, setIsUnitNumberValid] = useState(true);
    const [isZipCodeValid, setIsZipCodeValid] = useState(true);

    const validateForm = () => {
        let isValid = true;

        if (propertyName.trim() === "") {
            setIsPropertyNameValid(false);
            isValid = false;
        } else {
            setIsPropertyNameValid(true);
        }

        if (streetAddress.trim() === "") {
            setIsStreetAddressValid(false);
            isValid = false;
        } else {
            setIsStreetAddressValid(true);
        }

        if (zipCode.trim() === "") {
            setIsZipCodeValid(false);
            isValid = false;
        } else {
            setIsZipCodeValid(true);
        }

        if (unitNumber.trim() === "") {
            setIsUnitNumberValid(false);
            isValid = false;
        } else {
            setIsUnitNumberValid(true);
        }

        if (streetAddress.trim() === "") {
            setIsZipCodeValid(false);
            isValid = false;
        } else {
            setIsZipCodeValid(true);
        }

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
        
            props.history.push('signup-step-6');
        }
    };

    return (
        <div className="hk-pg-wrapper py-0">
            <div className="hk-pg-body py-0">
                <Container fluid>
                    <Row className="auth-split">
                        <SimpleHeader />
                        <Col xl={7} lg={6} md={7} sm={10} className="position-relative mx-auto">
                            <div className="auth-content flex-column pt-8 pb-md-8 pb-13">
                                <Form className="w-100">
                                    <Row>
                                        <Col xxl={7} xl={7} lg={10} className="mx-auto " gap={5}>
                                            <Stack gap={3} className='form-step'>
                                                <span className='fs-7 text-light'>Step 1 of 2</span>
                                                <h4 className="font-scale-vf">Let's start with the basics</h4>

                                                <Form.Group className='mb-3'>
                                                    <Form.Label>Name of property</Form.Label>
                                                    <Form.Control
                                                        onChange={(e) => setPropertyName(e.target.value)}
                                                        placeholder="Enter your property name"
                                                        type="text"
                                                        className={!isPropertyNameValid ? 'is-invalid' : ''}
                                                    />
                                                    {!isPropertyNameValid && (
                                                        <div className="invalid-feedback">
                                                            Please enter the property name.
                                                        </div>
                                                    )}
                                                </Form.Group>

                                                <Form.Group className='mb-3'>
                                                    <Form.Label>Property address</Form.Label>
                                                    <Form.Control
                                                        onChange={(e) => setStreetAddress(e.target.value)}
                                                        placeholder="Enter street address"
                                                        type="text"
                                                        className={!isStreetAddressValid ? 'is-invalid' : ''}
                                                    />
                                                    {!isStreetAddressValid && (
                                                        <div className="invalid-feedback">
                                                            Please enter the street address.
                                                        </div>
                                                    )}
                                                </Form.Group>

                                                <Form.Group className='mb-3'>
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Select
                                                        onChange={(e) => setCity(e.target.value)}
                                                        className='inp-Box'
                                                    >
                                                        <option value="1">Abu Dhabi</option>
                                                        <option value="2">Dubai</option>
                                                        <option value="3">Sharjah</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <Form.Group className='mb-3'>
                                                    <Form.Label>Unit number</Form.Label>
                                                    <Form.Control
                                                        onChange={(e) => setUnitNumber(e.target.value)}
                                                        placeholder="Enter unit number"
                                                        type="text"
                                                        className={!isUnitNumberValid ? 'is-invalid' : ''}
                                                    />
                                                    {!isUnitNumberValid && (
                                                        <div className="invalid-feedback">
                                                            Please enter the unit number.
                                                        </div>
                                                    )}
                                                </Form.Group>

                                                <Form.Group className='mb-3'>
                                                    <Form.Label>Area</Form.Label>
                                                    <Form.Select
                                                        onChange={(e) => setArea(e.target.value)}
                                                        className='inp-Box'
                                                    >
                                                        <option value="1">Al Reem Island</option>
                                                        <option value="2">Downtown Dubai</option>
                                                        <option value="3">Jumeirah Beach Residence</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <Form.Group className='mb-3'>
                                                    <Form.Label>Zip code</Form.Label>
                                                    <Form.Control
                                                        onChange={(e) => setZipCode(e.target.value)}
                                                        placeholder="Enter zip code"
                                                        type="text"
                                                        className={!isZipCodeValid ? 'is-invalid' : ''}
                                                    />
                                                    {!isZipCodeValid && (
                                                        <div className="invalid-feedback">
                                                            Please enter the zip code.
                                                        </div>
                                                    )}
                                                </Form.Group>

                                                <Button
                                                    variant='dark'
                                                    className="btn-rounded btn-block mb-3"
                                                    as={Link}
                                                    to="signup-step-6"
                                                    onClick={handleSubmit}
                                                >
                                                    Next
                                                </Button>
                                            </Stack>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            {/* Page Footer */}
                            <CommanFooter1 />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default SignUpStep5;