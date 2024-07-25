import React, {useState} from "react";
import {Button, Container, FloatingLabel, Form, Stack} from "react-bootstrap";
import CommanFooter1 from "../../CommanFooter1";
import * as Icons from "tabler-icons-react";

import "../../../../styles/css/signup.css";
import SimpleHeader from "../../SimpleHeader";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {colors as Colors} from "../../../../configs/colors.js";
import SignupFooter from "../../../../components/footer/SignupFooter.jsx";

const selectProperty = ["Abidabi", "Abidabi"];
const selectCurrency = ["United Arab Emirates Dirhams", "LKR", "KUD"];
const Signup = (props) => {
    const [propertyData, setPropertyData] = useState([]);

    const FormData = z.object({
        propertyName: z.string().min(1, {message: "Property Name is required"}),
        propertyType: z.enum(selectProperty, {message: "Please select a property type."}),
        numberOfRooms: z.string().regex(/^\d+$/, {message: "must be a number"})
            .min(1, {message: "No of Rooms is required"}),
        legalNameOfProperty: z.string().min(1, {message: "Legal Name of Property is required"}),
        currency: z.enum(selectCurrency, {message: "Please select a currency"}),
        channelManager:z.enum(['true','false'],{message:"Please select whether property uses a channel manager."}),
        isChain: z.enum(['true','false'],{message:"Please select whether property is part of a chain."})
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
        e.preventDefault();
        // const isValid = validateForm();

        // if (isValid) {
        props.history.push("/dashboard");
        // }
    };

    const subTitleStyle = {fontSize: 18, color: Colors.Dark, fontWeight: 500};
    const paragraphStyle = {color: Colors.Grey, fontSize: 16};

    return (
        <Container fluid className="pb-10">
            <SimpleHeader/>
            <div className=" mx-auto w-lg-50 w-md-60 w-xl-35 pt-3">
                <Form onSubmit={handleSubmit(handleSubmits)}>

                    <Stack className="form-step">
                        <span style={{color: Colors.Grey, fontSize: 16}}>Step 2 of 2</span>
                        <h4 className="my-3 font-scale-vf" style={{fontSize: 24, color: Colors.Dark}}>Tell us a little
                            about your property</h4>

                        {/* Property Name */}
                        <h6 style={subTitleStyle}>Property name</h6>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Enter your property name"
                            className="mb-3"
                        >
                            <Form.Control
                                {...register('propertyName')}
                                onChange={handleChanges}
                                style={paragraphStyle}
                                placeholder="Enter your property name"/>
                            {errors.propertyName?.message &&
                                <p className="text-danger">{errors.propertyName?.message}</p>}
                        </FloatingLabel>

                        {/* Property Type */}
                        <h6 style={subTitleStyle}>Property Type</h6>
                        <FloatingLabel controlId="floatingSelectType" label="Select property type" className="mb-3">
                            <Form.Select
                                {...register('propertyType')}
                                onChange={handleChanges}
                            >
                                <option defaultChecked>-Select-</option>
                                {
                                    selectProperty.map((data, index) => (
                                        <option key={index} value={data}>{data}</option>
                                    ))
                                }
                            </Form.Select>
                            {errors.propertyType?.message &&
                                <p className="text-danger">{errors.propertyType?.message}</p>}
                        </FloatingLabel>

                        {/* Number of Rooms */}
                        <Form.Group className="mb-3">
                            <Form.Label style={subTitleStyle}>Number of rooms</Form.Label>
                            <Form.Control
                                {...register('numberOfRooms')}
                                onChange={handleChanges}
                                style={paragraphStyle}
                                placeholder="Enter Number of rooms"
                            />
                            {errors.numberOfRooms?.message &&
                                <p className="text-danger">{errors.numberOfRooms?.message}</p>}
                        </Form.Group>

                        {/* Legal Name of Property */}
                        <Form.Group className="mb-3">
                            <Form.Label style={subTitleStyle}>Legal name of your property</Form.Label>
                            <Form.Control
                                {...register('legalNameOfProperty')}
                                onChange={handleChanges}
                                style={paragraphStyle}
                                placeholder="Enter Legal name of your property"
                            />
                            {errors.legalNameOfProperty?.message &&
                                <p className="text-danger">{errors.legalNameOfProperty?.message}</p>}
                        </Form.Group>

                        {/* Currency */}
                        <h6 style={subTitleStyle}>Currency</h6>
                        <FloatingLabel controlId="floatingSelectCurrency" label="Select currency" className="mb-3">
                            <Form.Select
                                {...register('currency')}
                                onChange={handleChanges}
                            >
                                <option defaultChecked>-Select-</option>
                                {
                                    selectCurrency.map((data, index) => (
                                        <option key={index} value={data}>{data}</option>
                                    ))
                                }
                            </Form.Select>
                            {errors.currency?.message && <p className="text-danger">{errors.currency?.message}</p>}
                        </FloatingLabel>

                        {/* Channel Manager */}
                        <h6 style={subTitleStyle}>
                            Does this property work with a channel manager?
                            <Icons.InfoSquare color={Colors.Grey2} className="ms-3"/>
                        </h6>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="radio"
                                value={true}
                                {...register('channelManager')}
                                onChange={handleChanges}
                                label="Yes"
                                id="channel-manager-yes"
                            />
                            <Form.Check
                                type="radio"
                                value={false}
                                {...register('channelManager')}
                                onChange={handleChanges}
                                label="No"
                                id="channel-manager-no"
                            />
                            {errors.channelManager?.message && <p className="text-danger">{errors.channelManager?.message}</p>}
                        </Form.Group>

                        {/* Property Chain */}
                        <h6 style={subTitleStyle}>
                            Is this property part of a chain?
                            <Icons.InfoSquare color={Colors.Grey2} className="ms-3"/>
                        </h6>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="radio"
                                value={true}
                                {...register('isChain')}
                                onChange={handleChanges}
                                label="Yes"
                                id="is-chain-yes"
                            />
                            <Form.Check
                                type="radio"
                                value={false}
                                {...register('isChain')}
                                onChange={handleChanges}
                                label="No"
                                id="is-chain-no"
                            />
                            {errors.isChain?.message && <p className="text-danger">{errors.isChain?.message}</p>}
                        </Form.Group>

                        {/* Submit Button */}
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
    );
};

export default Signup;
