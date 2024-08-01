import React, {useState} from "react";
import {Button, Container, FloatingLabel, Form, OverlayTrigger, Popover, Stack} from "react-bootstrap";
import * as Icons from "tabler-icons-react";

import "../../../../styles/css/signup.css";
import SimpleHeader from "../../SimpleHeader";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {colors as Colors} from "../../../../configs/colors.js";
import SignupFooter from "../../../../components/footer/SignupFooter.jsx";
import {useRegisterPropertyMutation} from "../../../../redux/reducer/api/propertySlice.js";
import {useRegisterHotelMutation} from "../../../../redux/reducer/api/hotelSlice.js";
import {useSelector} from "react-redux";

const selectProperty = ["Hotel", "Property"];
const selectCurrency = ["United Arab Emirates Dirhams", "LKR", "KUD"];
const Signup = (props) => {
    const [propertyData, setPropertyData] = useState([]);

    // const [registerHotel]=useRegisterHotelMutation;
    const [registerHotel] = useRegisterHotelMutation();
    const [registerProperty] = useRegisterPropertyMutation();

    const message =props.location.state
    // console.log(message)
    const user = useSelector(state => state.auth.user);

    const FormData = z.object({
        propertyType: z.enum(selectProperty, {message: "Please select a property type."}),
        numberOfUnites: z.string().regex(/^\d+$/, {message: "must be a number"})
            .min(1, {message: "No of Rooms is required"}),
        legalName: z.string().min(1, {message: "Legal Name of Property is required"}),
        legalNumber: z.string().min(1, {message: "Trade Licence Number is required"}),
        currency: z.enum(selectCurrency, {message: "Please select a currency"}),
        // channelManager:z.enum(['true','false'],{message:"Please select whether property uses a channel manager."}),
        partOfChina: z.enum(['true','false'],{message:"Please select whether property is part of a chain."})
    });

    // console.log(propertyData)
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

    const handleSubmits = async (e) => {
        const data = {...propertyData,...message.property,location:message.location, image:"dfff", admin:user}
        console.log(data)
        if (data.propertyType==="Hotel"){
            const res = await registerHotel(data);
            console.log(res)
        } else if(data.propertyType==="Property"){
            const res = await registerProperty(data);
            console.log(res)
        } else{
            console.log("something went wrong!")
        }
        // props.history.push("/dashboard");
    };
    const popover = (
        <Popover id="popover-basic" className="custom-popover">
            <Popover.Body style={{backgroundColor:Colors.FooterBlue, color:Colors.white, fontSize:9}}>
                Click on the drop-down list and select the property type
            </Popover.Body>
        </Popover>
    );

    const subTitleStyle = {fontSize: 18, color: Colors.Dark, fontWeight: 500};
    const paragraphStyle = {color: Colors.Grey, fontSize: 16};

    return (
        <Container fluid className="pb-10">
            <SimpleHeader/>
            <div className="mx-auto w-lg-50 w-md-60 w-xl-35 pt-3 pb-7">
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
                                onChange={handleChanges}
                                style={{...paragraphStyle, backgroundColor:Colors.white}}
                                readOnly
                                value={message?.property?.propertyName}
                                />
                        </FloatingLabel>

                        {/* Property Type */}
                        <h6 style={subTitleStyle}>
                            Property Type

                            <OverlayTrigger placement="top" overlay={popover}>
                                <span className="d-inline-block">
                                    <Icons.InfoSquare color={Colors.Grey2} className="ms-3"/>
                                </span>
                            </OverlayTrigger>
                        </h6>
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
                            <Form.Label style={subTitleStyle}>Number of units (number of inventories)</Form.Label>
                            <Form.Control
                                {...register('numberOfUnites')}
                                onChange={handleChanges}
                                style={paragraphStyle}
                                placeholder="Enter Number of rooms"
                            />
                            {errors.numberOfUnites?.message &&
                                <p className="text-danger">{errors.numberOfUnites?.message}</p>}
                        </Form.Group>

                        {/* Legal Name of Property */}
                        <Form.Group className="mb-3">
                            <Form.Label style={subTitleStyle}>Legal name of your property (trade licenses name)</Form.Label>
                            <Form.Control
                                {...register('legalName')}
                                onChange={handleChanges}
                                style={paragraphStyle}
                                placeholder="Enter Legal name of your property"
                            />
                            {errors.legalName?.message &&
                                <p className="text-danger">{errors.legalName?.message}</p>}
                        </Form.Group>

                        {/* Trade license number */}
                        <Form.Group className="mb-3">
                            <Form.Label style={subTitleStyle}>Trade license number</Form.Label>
                            <Form.Control
                                {...register('legalNumber')}
                                onChange={handleChanges}
                                style={paragraphStyle}
                                placeholder="Enter trade license number"
                            />
                            {errors.legalNumber?.message &&
                                <p className="text-danger">{errors.legalNumber?.message}</p>}
                        </Form.Group>

                        {/* file select*/}
                        <Container className="p-4 mb-3 d-flex justify-content-center" style={{border:`1px dashed ${Colors.white1}`, borderRadius:10, backgroundColor:Colors.Grey7}}>
                            <Form.Group controlId="formFile">
                                <Stack direction="horizontal" gap={2} className="position-relative justify-content-center">
                                    <i className="fa fa-upload p-1" style={{color:Colors.FooterBlue, border:`1px solid ${Colors.FooterBlue}`, borderRadius:5}}/>
                                    <span style={{color:Colors.FooterBlue,fontSize:16}}>Upload file </span>
                                    <Form.Control type="file" className="position-absolute" style={{opacity:0}} />
                                </Stack>
                                <Form.Label className="mt-2" style={{fontSize: 14, color: Colors.Dark}}>Upload trade license photo or pdf</Form.Label>
                            </Form.Group>
                        </Container>

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
                        {/*<h6 style={subTitleStyle}>*/}
                        {/*    Does this property work with a channel manager?*/}
                        {/*    <Icons.InfoSquare color={Colors.Grey2} className="ms-3"/>*/}
                        {/*</h6>*/}
                        {/*<Form.Group className="mb-3">*/}
                        {/*    <Form.Check*/}
                        {/*        type="radio"*/}
                        {/*        value={true}*/}
                        {/*        {...register('channelManager')}*/}
                        {/*        onChange={handleChanges}*/}
                        {/*        label="Yes"*/}
                        {/*        id="channel-manager-yes"*/}
                        {/*    />*/}
                        {/*    <Form.Check*/}
                        {/*        type="radio"*/}
                        {/*        value={false}*/}
                        {/*        {...register('channelManager')}*/}
                        {/*        onChange={handleChanges}*/}
                        {/*        label="No"*/}
                        {/*        id="channel-manager-no"*/}
                        {/*    />*/}
                        {/*    {errors.channelManager?.message && <p className="text-danger">{errors.channelManager?.message}</p>}*/}
                        {/*</Form.Group>*/}

                        {/* Property Chain */}
                        <h6 style={subTitleStyle}>
                            Is this property part of a chain?
                            <Icons.InfoSquare color={Colors.Grey2} className="ms-3"/>
                        </h6>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="radio"
                                value={true}
                                {...register('partOfChina')}
                                onChange={handleChanges}
                                label="Yes"
                                id="is-chain-yes"
                            />
                            <Form.Check
                                type="radio"
                                value={false}
                                {...register('partOfChina')}
                                onChange={handleChanges}
                                label="No"
                                id="is-chain-no"
                            />
                            {errors.partOfChina?.message && <p className="text-danger">{errors.partOfChina?.message}</p>}
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
