import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {Button, Col, Container, FloatingLabel, Form, Row, Stack} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CommanFooter1 from '../../CommanFooter1';
import SimpleHeader from '../../SimpleHeader';
import '../../../../styles/css/signup.css'
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {colors as Colors} from "../../../../configs/colors.js";
import SignupFooter from "../../../../components/footer/SignupFooter.jsx";

const areaSelect = ["Al Reem Island","Downtown Dubai","Jumeirah Beach Residence"]
const citySelect = ["Abu Dhabi","Sharjah","Dubai"]
const SignUpStep5 = (props) => {
    const [propertyData, setPropertyData] = useState([]);
    // const [propertyName, setPropertyName] = useState("");
    // const [city, setCity] = useState("");
    // const [streetAddress, setStreetAddress] = useState("");
    // const [unitNumber, setUnitNumber] = useState("");
    // const [area, setArea] = useState("");
    // const [zipCode, setZipCode] = useState("");

    // const [isPropertyNameValid, setIsPropertyNameValid] = useState(true);
    // const [isStreetAddressValid, setIsStreetAddressValid] = useState(true);
    // const [isUnitNumberValid, setIsUnitNumberValid] = useState(true);
    // const [isZipCodeValid, setIsZipCodeValid] = useState(true);

    // const validateForm = () => {
    //     let isValid = true;
    //
    //     if (propertyName.trim() === "") {
    //         setIsPropertyNameValid(false);
    //         isValid = false;
    //     } else {
    //         setIsPropertyNameValid(true);
    //     }
    //
    //     if (streetAddress.trim() === "") {
    //         setIsStreetAddressValid(false);
    //         isValid = false;
    //     } else {
    //         setIsStreetAddressValid(true);
    //     }
    //
    //     if (zipCode.trim() === "") {
    //         setIsZipCodeValid(false);
    //         isValid = false;
    //     } else {
    //         setIsZipCodeValid(true);
    //     }
    //
    //     if (unitNumber.trim() === "") {
    //         setIsUnitNumberValid(false);
    //         isValid = false;
    //     } else {
    //         setIsUnitNumberValid(true);
    //     }
    //
    //     if (streetAddress.trim() === "") {
    //         setIsZipCodeValid(false);
    //         isValid = false;
    //     } else {
    //         setIsZipCodeValid(true);
    //     }
    //
    //     return isValid;
    // };

    const FormData = z.object({
        propertyName: z.string().min(1, {message: "Property Name is required"}),
        city: z.enum(citySelect, {message: "Please select a city"}),
        streetAddress: z.string().min(1, {message: "Street Address is required"}),
        unitNumber: z.string().min(1, {message: "Unit Number is required"}),
        area: z.enum(areaSelect, {message: "Please select a area"}),
        zipCode: z.string().min(1, 'Zip Code is required')
    });

    console.log(propertyData)
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(FormData),
    });

    const handleChanges = (e) => {
        setPropertyData({
            ...propertyData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmits = (e) => {
        props.history.push('signup-step-6');
    };

    const subTitleStyle={fontSize: 18, color: Colors.Dark, fontWeight: 500};
    const paragraphStyle={color: Colors.Grey, fontSize: 16};

    return (
        <Container fluid className="pb-10">
            <SimpleHeader/>
            <div className=" mx-auto w-lg-50 w-md-60 w-xl-35 pt-3 pb-7">
                <Form onSubmit={handleSubmit(handleSubmits)}>
                    <Stack className='form-step'>
                        <span style={{color: Colors.Grey, fontSize: 16}}>Step 1 of 2</span>
                        <h4 className="my-3 font-scale-vf" style={{fontSize: 24, color: Colors.Dark}}>Let's start with
                            the basics</h4>
                        <Form.Group className='mb-3'>
                            <Form.Label style={subTitleStyle}>Name of
                                property</Form.Label>
                            <p className="mb-3" style={paragraphStyle}>
                                Please provide the official name of your property, for example the one you use on your
                                own website.
                            </p>
                            <Form.Control
                                placeholder="Enter your property name"
                                {...register('propertyName')}
                                onChange={handleChanges}
                                style={paragraphStyle}
                            />
                            {errors.propertyName?.message &&
                                <p className="text-danger">{errors.propertyName?.message}</p>}
                        </Form.Group>

                        <h6 style={subTitleStyle}>Property address</h6>
                        <p className="mb-3" style={paragraphStyle}>
                            Please provide your address using Latin or Roman characters. The Latin or Roman alphabet
                            uses characters like a, b, and c.
                        </p>

                        <Form.Group className='mb-3'>
                            <Form.Label style={subTitleStyle}>City</Form.Label>
                            <Form.Select
                                {...register('city')}
                                onChange={handleChanges}
                                className='inp-Box'
                            >
                                {
                                    citySelect.map((data,index) => (
                                        <option key={index} value={data}>{data}</option>
                                    ))
                                }
                            </Form.Select>
                            {errors.city?.message && <p className="text-danger">{errors.city?.message}</p>}
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label style={subTitleStyle}>Street
                                address</Form.Label>
                            <Form.Control
                                placeholder="Enter street address"
                                {...register('streetAddress')}
                                onChange={handleChanges}
                            />
                            {errors.streetAddress?.message &&
                                <p className="text-danger">{errors.streetAddress?.message}</p>}
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label style={subTitleStyle}>Unit
                                number</Form.Label>
                            <Form.Control
                                placeholder="Enter unit number"
                                {...register('unitNumber')}
                                onChange={handleChanges}
                                style={paragraphStyle}
                            />
                            {errors.unitNumber?.message && <p className="text-danger">{errors.unitNumber?.message}</p>}
                        </Form.Group>

                        <h6 style={subTitleStyle}>Area</h6>
                        <FloatingLabel className="mb-3" controlId="floatingSelect" label="Select area"
                                       style={{color: Colors.Grey, fontSize: 12}}>
                            <Form.Select
                                {...register('area')}
                                onChange={handleChanges}
                                style={{color: Colors.Dark, fontSize: 14}}
                            >
                                {
                                    areaSelect.map((data,index) => (
                                        <option key={index} value={data}>{data}</option>
                                    ))
                                }
                            </Form.Select>
                            {errors.area?.message && <p className="text-danger">{errors.area?.message}</p>}
                        </FloatingLabel>

                        <Form.Group className='mb-3'>
                            <Form.Label style={subTitleStyle}>Zip
                                code</Form.Label>
                            <Form.Control
                                placeholder="Enter zip code"
                                {...register('zipCode')}
                                onChange={handleChanges}
                                style={paragraphStyle}
                            />
                            {errors.zipCode?.message && <p className="text-danger">{errors.zipCode?.message}</p>}
                        </Form.Group>

                        <Button
                            style={{backgroundColor:Colors.Dark}}
                            className="btn-rounded btn-block mb-3 opacity-60"
                            type="submit"
                        >
                            Next
                        </Button>
                    </Stack>
                </Form>
            </div>
            {/* Page Footer */}
            <SignupFooter/>
        </Container>
    )
}

export default SignUpStep5;