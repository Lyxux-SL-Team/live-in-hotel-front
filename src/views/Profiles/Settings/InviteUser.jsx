import React, {useState} from 'react';
import TitleAndFeedback from "../../../components/UserProfile/TitleAndFeedback.jsx";
import {Button, Col, Container, FloatingLabel, Form, InputGroup, Row, Stack, Table} from "react-bootstrap";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {colors} from "../../../configs/colors.js";
import {useHistory} from "react-router-dom";
import PropertyImage from "../../../assets/img/property-image.png";
import './index.css'

const propertyData =[
    {
        property:"Begin hotel",
        propertyID:"106153498",
        location:"Tel Aviv, ISR",
    },
    {
        property:"Second hotel",
        propertyID:"106153499",
        location:"Tel Aviv, ISR",
    },
]

const roleData = [
    {
        role:"Property user",
        description:"Access to all functions on the site excluding those related to managing other users. This has the most access after the Administrator role."
    },
    {
        role:"Analytics user",
        description:"Access to property content and guest communications."
    },
    {
        role:"Reservations user",
        description:"Access to reservations, property content and guest communications."
    },
    {
        role:"Finance user",
        description:"Access to all tasks within the Accounting section and guest communications."
    },
    {
        role:"Guest experience user",
        description:"Access to communicate with guests including responding to reviews, feedback and messages. This role has the most restricted access."
    },
    {
        role:"Administrator",
        description:"Access to all site functions and management of user accounts. This is the role with the highest access."
    },
    {
        role:"Accounting user",
        description:"Access to all tasks within the Accounting section."
    },
]
function InviteUser(props) {
    const [invitedData, setInvitedData] = useState({ property: [] });
    const [submitText, setSubmitText]=useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [roleVisible, setRoleVisible] = useState(false);
    const [roleSelection, setRoleSelection] = useState('');
    const [visibleRoleIndex, setVisibleRoleIndex] = useState(null);

    const history = useHistory();


    const FormData = z.object({
        firstName: z.string().min(3, {message: "First Name is required"}),
        lastName: z.string().min(3, {message: "Last Name is required"}),
        email: z.string().min(1, {message: "Email is required"}).email('Invalid email format'),
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(FormData),
    });

    const handleChanges = (e) => {
        setInvitedData({
            ...invitedData,
            [e.target.name]: e.target.value
        })
    }

    const handleCheckedProperty = (e) => {
        const { value, name, checked } = e.target;

        if (value === "all") {
            if (checked) {
                const allPropertyIDs = propertyData.map(data => data.property);
                setInvitedData({ ...invitedData, [name]: allPropertyIDs });
                setSelectAll(true);
            } else {
                setInvitedData({ ...invitedData, [name]: [] });
                setSelectAll(false);
            }
        } else {
            const property = value;
            if (checked) {
                setInvitedData(prev => ({
                    ...prev,
                    [name]: [...prev[name], property]
                }));
            } else {
                setInvitedData(prev => ({
                    ...prev,
                    [name]: prev[name].filter(id => id !== property)
                }));
                setSelectAll(false); // If unchecking an individual, uncheck "all" checkbox
            }
        }
    };

    const isChecked = (propertyID) => {
        return invitedData.property.includes(propertyID);
    };

    const toggleRoleVisibility = (index) => {
        setVisibleRoleIndex(visibleRoleIndex === index ? null : index);
    };

    const handleRoleSelection = (propertyId, role) => {
        setRoleSelection((prevSelections) => ({
            ...prevSelections,
            [propertyId]: role,
        }));
        setVisibleRoleIndex(null);
    };

    function handleInviteUser(){
        const userData = {...invitedData, role:roleSelection}
        history.push('/user-settings/people', {state:"success", message:`${invitedData.firstName} ${invitedData.lastName}`})
    }

    function handleUserDetailsSubmission(){
        setSubmitText(true)
    }

    const inputStyle = {fontSize: 12, fontWeight: 500, color: colors.Dark, borderRadius: 10,};
    const selectStyle = {inputStyle, border: `1px solid ${colors.Dark}`};
    const labelStyle = {color: colors.Grey, fontSize: 12, borderRadius: 10};
    const titleStyle = {fontSize: 16, fontWeight: 500, color: colors.Dark};
    const subTitleStyle = {fontSize: 12, color: colors.Grey};
    const descStyle = {fontSize: 14, color: colors.Dark};
    const tHeadStyle = {fontSize: 14, fontWeight: 600, color: colors.Grey};
    const tdStyle = {fontSize: 14,color: colors.Dark};
    return (
        <Container className='ps-4 pe-8 py-3'>
            <TitleAndFeedback title="Invite user"/>

            <Container className="p-3 mb-3" style={{border: `1px solid ${colors.Grey3}`}}>
                <i className="fa fa-user-o mb-3" style={{
                    backgroundColor:colors.Dark1,
                    borderRadius: "50%",
                    color: colors.white,
                    padding: "15px",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}></i>
                <h3 className="mb-3" style={titleStyle}>User details</h3>
                {
                    submitText?
                        <Stack className="w-100 w-md-50">
                            <span className="mb-3" style={subTitleStyle}>The following user will be invited to your property.</span>
                            <Row>
                                <Col>
                                    <h5 style={subTitleStyle}>Name</h5>
                                    <span style={descStyle}>{invitedData.firstName} {invitedData.lastName}</span>
                                </Col>
                                <Col>
                                    <h5 style={subTitleStyle}>Email address</h5>
                                    <span style={descStyle}>{invitedData.email}</span>
                                </Col>
                            </Row>
                            <Button
                                onClick={()=>setSubmitText(false)}
                                style={{
                                    backgroundColor: colors.Black,
                                    color: colors.white,
                                    fontSize:14,
                                    borderRadius:20,
                                    width:"fit-content"
                                }}
                                className="btn-rounded mt-3"
                            >
                                Edit details
                            </Button>
                        </Stack>:
                        <Stack className="w-100 w-md-50">
                            <Form onSubmit={handleSubmit(handleUserDetailsSubmission)}>
                            <Row>
                                <Col xs={12} md={6}>
                                    <FloatingLabel controlId="firstName" label="First name" className="mb-3" style={labelStyle}>
                                        <Form.Control {...register('firstName')} style={selectStyle} onChange={handleChanges}/>
                                        {errors.firstName?.message &&
                                            <p className="text-danger">{errors.firstName?.message}</p>}
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="lastName" label="Last name" className="mb-3" style={labelStyle}>
                                        <Form.Control {...register('lastName')} style={selectStyle} onChange={handleChanges}/>
                                        {errors.lastName?.message && <p className="text-danger">{errors.lastName?.message}</p>}
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <FloatingLabel controlId="email" label="Email address" className="mb-3" style={labelStyle}>
                                <Form.Control {...register('email')} style={selectStyle} onChange={handleChanges}/>
                                {errors.email?.message && <p className="text-danger">{errors.email?.message}</p>}
                            </FloatingLabel>
                            <FloatingLabel controlId="Language" label="Language" className="mb-3" style={labelStyle}>
                                <Form.Control {...register('language')} style={selectStyle} onChange={handleChanges}/>
                            </FloatingLabel>
                            <Button
                                type="submit"
                                style={{
                                    backgroundColor: colors.Black,
                                    color: colors.white,
                                    fontSize:14,
                                    borderRadius:20,
                                    width:"fit-content"
                                }}
                                className="btn-rounded"
                            >
                                Next
                            </Button>
                            </Form>
                        </Stack>
                }

            </Container>

            {/*    property selection*/}
            <Container className="py-3 px-0 mb-3 opacity-1" style={{border: `1px solid ${colors.Grey3}`, opacity:submitText?"unset":"50%"}}>
                <Stack gap={2} className="px-3">
                <i className="fa fa-building-o" style={{
                    backgroundColor:colors.Dark1,
                    borderRadius: "50%",
                    color: colors.white,
                    padding: "15px",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}></i>
                <h3 style={titleStyle}>Property selection</h3>
                <span style={subTitleStyle}>Select which properties you want to add the user to.</span>
                </Stack>
                <Table responsive hover className={submitText? "mb-0 p-3 mt-3":"d-none"} style={{borderBottom: `1px solid ${colors.white3}`}}>
                    <thead>
                    <tr>
                        <th style={tHeadStyle}>
                            <Stack direction="horizontal" gap={3}>
                                <Form.Check value="all" checked={selectAll} name="property" onChange={handleCheckedProperty}/>
                                Property
                            </Stack>
                        </th>
                        <th style={tHeadStyle}>Property ID</th>
                        <th style={tHeadStyle}>Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        propertyData.map((data) => (
                            <tr style={{border:"transparent"}} key={data.propertyID}>
                                <td style={tdStyle}>
                                    <Stack gap={2} direction="horizontal" className="align-items-center">
                                        <Form.Check
                                            value={data.property}
                                            name="property"
                                            checked={isChecked(data.property)}
                                            onChange={handleCheckedProperty}
                                        />
                                        <img className="rounded-30" src={PropertyImage} alt="liveinhotels" width={30}
                                             height={30}/>
                                        {data.property}
                                    </Stack>
                                </td>
                                <td style={tdStyle}>{data.propertyID}</td>
                                <td style={tdStyle}>{data.location}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>

            </Container>

            {/* role selection */}
            <Container className="p-3" style={{border: `1px solid ${colors.Grey3}`, opacity:invitedData.property.length>0 && submitText?"unset":"50%"}}>
                <Stack gap={2}>
                    <i className="fa fa-suitcase" style={{
                        backgroundColor:colors.Dark1,
                        borderRadius: "50%",
                        color: colors.white,
                        padding: "15px",
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}></i>
                    <h3 style={titleStyle}>Role selection</h3>
                    <span style={subTitleStyle}>Select what role the user should have at the properties.</span>
                </Stack>
                <Stack gap={2} direction="horizontal" className="my-3">
                    <Form.Check // prettier-ignore
                        type="radio"
                        label="Yes"
                        value="yes"
                        style={tdStyle}
                        name="roleForAll"
                        onClick={()=>setRoleSelection([])}
                        onChange={handleChanges}
                    />
                    <Form.Check // prettier-ignore
                        type="radio"
                        label="No"
                        value="no"
                        style={tdStyle}
                        name="roleForAll"
                        onClick={()=>setRoleSelection([])}
                        onChange={handleChanges}
                    />
                </Stack>
                {
                    invitedData?.roleForAll==="yes" && (
                        <InputGroup className="mb-0 border-1 w-90, w-md-30 position-relative" style={{border:`1px solid ${colors.Grey3}`, borderRadius:20}} onClick={()=>setRoleVisible(!roleVisible)}>
                                <Form.Control value={roleSelection} readOnly className="border-0" type="text" style={{fontSize:14,color:colors.Dark,backgroundColor:colors.white,borderRadius:20, height:40}}/>
                                <Form.Label hidden style={{color:colors.Grey,fontSize:12}}>Role</Form.Label>
                            <InputGroup.Text className="rounded-10 border-0"><i className={roleVisible? "fa fa-angle-up": "fa fa-angle-down"} style={{color:colors.Dark}}/></InputGroup.Text>

                            <Stack gap={2}
                                   className={roleVisible ? "position-absolute model-width pt-2 bg-white shadow" : "d-none"}
                                   style={{left:0,bottom:50, zIndex:99}}
                                   onPointerLeave={() => setRoleVisible(false)}>

                                {
                                    roleData.map((data)=>(
                                        <div as="Button" className="pb-2 px-2" key={data.role}
                                               style={{borderBottom:`1px solid ${colors.Grey3}`}}
                                              onClick={()=>setRoleSelection(data.role)}
                                               >
                                            <h5 style={inputStyle}>{data.role}</h5>
                                            <span  style={labelStyle}>{data.description}</span>
                                        </div>
                                    ))
                                }
                            </Stack>
                        </InputGroup>
                    )
                }
                {
                    invitedData?.roleForAll==="no" &&
                    (
                        <Table responsive className="mb-0 p-3 mt-3 nowrap table-advance">
                            <thead>
                            <tr>
                                <th style={tHeadStyle}>Property</th>
                                <th style={tHeadStyle}>Role</th>
                            </tr>
                            </thead>
                            <tbody>
                            {invitedData?.property?.map((data, index) => (
                                <>
                                <tr key={data}>
                                    <td style={tdStyle}>{data}</td>
                                    <td>
                                        <InputGroup
                                            className="mb-0 border-1 w-90 w-md-40 position-relative"
                                            style={{ border: `1px solid ${colors.Grey3}`, borderRadius: 20 }}
                                            onClick={() => toggleRoleVisibility(index)}
                                        >
                                            <Form.Control
                                                value={roleSelection[data] || ""}
                                                readOnly
                                                className="border-0"
                                                type="text"
                                                style={{ fontSize: 14, color: colors.Dark, backgroundColor: colors.white, borderRadius: 20, height: 40 }}
                                            />
                                            <Form.Label hidden style={{ color: colors.Grey, fontSize: 12 }}>Role</Form.Label>
                                            <InputGroup.Text className="rounded-10 border-0">
                                                <i className={visibleRoleIndex === index ? "fa fa-angle-up" : "fa fa-angle-down"} style={{ color: colors.Dark }} />
                                            </InputGroup.Text>

                                            <Stack
                                                gap={2}
                                                className={visibleRoleIndex === index ? "position-absolute model-width pt-2 bg-white shadow" : "d-none"}
                                                style={{ left: 0, bottom: 50, zIndex: 999 }}
                                                onPointerLeave={() => setVisibleRoleIndex(null)}
                                            >
                                                {roleData.map((role) => (
                                                    <div
                                                        as="Button"
                                                        className="pb-2 px-2"
                                                        key={role.role}
                                                        style={{ borderBottom: `1px solid ${colors.Grey3}` }}
                                                        onClick={() => handleRoleSelection(data, role.role)}
                                                    >
                                                        <h5 style={inputStyle}>{role.role}</h5>
                                                        <span style={labelStyle}>{role.description}</span>
                                                    </div>
                                                ))}
                                            </Stack>
                                        </InputGroup>
                                    </td>
                                </tr>
                                    <tr className="table-row-gap"><td /></tr>
                                </>
                            ))}
                            </tbody>
                        </Table>
                    )
                }
            </Container>
            <Button
                onClick={handleInviteUser}
                style={{
                    backgroundColor: colors.Black,
                    color: colors.white,
                    fontSize:14,
                    borderRadius:20,
                }}
                className="btn-rounded mt-3"
            >
                Invite User
            </Button>
        </Container>
    );
}

export default InviteUser;