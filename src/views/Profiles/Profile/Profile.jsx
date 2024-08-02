import React, {useState} from 'react';
import {
    Button,
    Col,
    Container,
    FloatingLabel,
    OverlayTrigger,
    Popover,
    Row,
    Form,
    Table,
    Stack,
    Badge,
    Pagination, InputGroup
} from "react-bootstrap";
import TitleAndFeedback from "../../../components/UserProfile/TitleAndFeedback.jsx";
import {colors} from "../../../configs/colors.js";
import {Link} from "react-router-dom";

//images
import UserIcon from "../../../assets/img/User-big-icon.png"
import UserSmallIcon from "../../../assets/img/User-small-icon.png"
import EmailIcon from "../../../assets/img/Emails-Icon.png"
import SuitcaseIcon from "../../../assets/img/Suitcase-Icon.png"
import PhoneIcon from "../../../assets/img/Phone-Icon.png"
import WwwIcon from "../../../assets/img/www-icon.png"
import InfoIcon from "../../../assets/img/info-icon.png"
import MenuIcon from "../../../assets/img/Menu-Icon.png"
import PropertyImage from "../../../assets/img/property-image.png"
import {getCountryDataList} from "countries-list";
import timezones from 'timezones-list';
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Plus} from "react-feather";

const hotelList=[
    {
        hotel:"Begin Hotel",
        id:"344343"
    },
    {
        hotel:"Aview var",
        id:"344343"
    },
    {
        hotel:"Sha Hotel",
        id:"344343"
    },
]

function MyProfile(props) {
    const [editProfile, setEditProfile] = useState(false);
    const [editData, setEditData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [manageNotificationOpen, setManageNotificationOpen] = useState({});
    console.log(manageNotificationOpen)

    const listPerPage = 2;
    const totalPages = Math.ceil(hotelList.length / listPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const displayedProperties = hotelList.slice(
        (currentPage - 1) * listPerPage,
        currentPage * listPerPage
    );

    console.log(editData);

    const countryList = getCountryDataList().map(data => data.phone.toString());
    const timeZoneList = timezones.map(data => data.label.toString());

    const FormData = z.object({
        firstName: z.string().min(3, {message: "First Name is required"}),
        lastName: z.string().min(3, {message: "Last Name is required"}),
        phoneNumber: z.string().regex(/^\d+$/, {message: "must be a number"})
            .min(9, {message: "must contain at least 9 digits"}),
        socialPhone: z.string().regex(/^\d+$/, {message: "must be a number"})
            .min(9, {message: "must contain at least 9 digits"}),
        timeZone: z.enum(timeZoneList, {message: "Please select a timeZone"}),
        countryCode: z.enum(countryList, {message: "Please select a country code"}),
        socialMediaMessaging_phoneNumber: z.enum(countryList, {message: "Please select a country code"}),
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(FormData),
    });

    const handleChanges = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    const handleChecked = (e) => {
        const {name, checked} = e.target;
        setEditData({
            ...editData,
            [name]: checked
        })

    }

    const updateProfile = (e) => {
        e.preventDefault();
        console.log("hello")
    };

    const popover2 = (
        <Popover id="disabled-popover">
            <Popover.Body style={{color: colors.white, fontSize: 10, backgroundColor: colors.FooterBlue}}>
                Communication is an important part of our global marketplace. By knowing your language preferences, we
                can make sure you get the information you need in the way that best suits you.
            </Popover.Body>
        </Popover>
    );
    const popover = (
        <Popover id="popover-basic" className="custom-popover">
            <Popover.Body style={{color: colors.white, fontSize: 10, backgroundColor: colors.FooterBlue,}}>
                You cant edit your name
            </Popover.Body>
        </Popover>
    );


    const paragraphStyle = {fontSize: 12, colors: colors.Grey4};
    const labelStyle = {color: colors.Grey, fontSize: 12, border: `1px solid ${colors.Dark}`, borderRadius: 10};
    const inputStyle = {fontSize: 12, fontWeight: 500, color: colors.Dark1, borderRadius: 10, boxShadow: "none"};
    const selectStyle = {inputStyle, border: `1px solid ${colors.Dark}`}
    return (
        <Container className='ps-4 pe-8 py-3'>
            <TitleAndFeedback title="My profile"/>
            <Row>
                <Col sm={12} lg={8} className="mb-3">
                    <Container className="p-3 mb-3" style={{border: `1px solid ${colors.white2}`}}>
                        <Row>
                            <Col xs={2} md={1}>
                                <img className="d-flex justify-content-center align-items-center p-2 mb-3"
                                     src={UserIcon} width={42}
                                     alt="liveinhotels" style={{backgroundColor: 'black', borderRadius: '50%'}}/>
                            </Col>
                            {
                                editProfile ?
                                    <>
                                        <Col xs={9} md={10} lg={9} className="ps-4">
                                            <h3 className="mb-3"
                                                style={{fontSize: 16, color: colors.Dark, fontWeight: 600}}>Mark
                                                Barton</h3>
                                            <Form onSubmit={handleSubmit(updateProfile)}>
                                                {/*username*/}
                                                <InputGroup className="mb-3 border-1" style={{
                                                    position: "relative",
                                                    border: `1px solid ${colors.white3}`,
                                                    borderRadius: 10
                                                }}>
                                                    <InputGroup.Text className="rounded-10 border-0"><i
                                                        className="fa fa-user-o" style={{
                                                        color: colors.Grey6,
                                                        opacity: "41%"
                                                    }}/></InputGroup.Text>
                                                    <div className="form-floating">
                                                        <Form.Control readOnly className="border-0" type="text"
                                                                      placeholder="Username" style={{
                                                            fontSize: 12,
                                                            fontWeight: 500,
                                                            color: colors.Dark1,
                                                            opacity: "41%",
                                                            backgroundColor: colors.white,
                                                            borderRadius: 10
                                                        }}/>
                                                        <Form.Label style={{
                                                            color: colors.Grey5,
                                                            opacity: "41%",
                                                            fontSize: 12
                                                        }}>Username</Form.Label>
                                                    </div>
                                                    {/*<i className="fa fa-user-o" style={{position:"absolute", right:-20, top:20}}/>*/}
                                                    <OverlayTrigger placement="top" overlay={popover}>
                                                    <span className="d-inline-block">
                                                        <img className="ms-2" src={InfoIcon} alt="liveinhotel"
                                                             style={{position: "absolute", right: -20, top: 20}}/>
                                                    </span></OverlayTrigger>
                                                </InputGroup>

                                                {/*first name | last name*/}
                                                <Row>
                                                    <Col xs={12} md={6}>
                                                        <FloatingLabel controlId="firstName" label="First name"
                                                                       className="mb-3">
                                                            <Form.Control {...register('firstName')} style={selectStyle}
                                                                          onChange={handleChanges}/>
                                                            {errors.firstName?.message &&
                                                                <p className="text-danger">{errors.firstName?.message}</p>}
                                                        </FloatingLabel>
                                                    </Col>
                                                    <Col>
                                                        <FloatingLabel controlId="lastName" label="Last name"
                                                                       className="mb-3">
                                                            <Form.Control {...register('lastName')} style={selectStyle}
                                                                          onChange={handleChanges}/>
                                                            {errors.lastName?.message &&
                                                                <p className="text-danger">{errors.lastName?.message}</p>}
                                                        </FloatingLabel>
                                                    </Col>
                                                </Row>
                                                <InputGroup className="mb-1 border-1" style={{
                                                    border: `1px solid ${colors.white3}`,
                                                    borderRadius: 10
                                                }}>
                                                    <InputGroup.Text className="rounded-10 border-0"><i
                                                        className="fa fa-envelope-o" style={{
                                                        color: colors.Grey6,
                                                        opacity: "41%"
                                                    }}/></InputGroup.Text>
                                                    <div className="form-floating">
                                                        <Form.Control readOnly className="border-0" type="text"
                                                                      placeholder="Username" style={{
                                                            fontSize: 12,
                                                            fontWeight: 500,
                                                            color: colors.Dark1,
                                                            opacity: "41%",
                                                            backgroundColor: colors.white,
                                                            borderRadius: 10
                                                        }}/>
                                                        <Form.Label
                                                            style={{color: colors.Grey5, opacity: "41%", fontSize: 12}}>Email
                                                            address</Form.Label>
                                                    </div>
                                                </InputGroup>

                                                <Stack direction="horizontal" gap={2} className="justify-content-end mb-3 ">
                                                    <span style={{fontSize:12, color:colors.Dark}}>Add more</span>
                                                    <Plus color={colors.FooterBlue}/>
                                                </Stack>

                                                {/* phone */}
                                                <Row>
                                                    <Col xs={12} md={6}>
                                                        <FloatingLabel controlId="phone" label="Country/Region code"
                                                                       className="mb-3 overflow-x-hidden">
                                                            <Form.Select
                                                                style={selectStyle} {...register('countryCode')}
                                                                onChange={handleChanges}>
                                                                {
                                                                    getCountryDataList().map((data, index) => (
                                                                        <option key={index}
                                                                                value={data.phone}>{data.name} +{data.phone}</option>
                                                                    ))
                                                                }
                                                            </Form.Select>
                                                            {errors.countryCode?.message &&
                                                                <p className="text-danger">{errors.countryCode?.message}</p>}
                                                        </FloatingLabel>
                                                    </Col>
                                                    <Col className="mb-3">
                                                        <InputGroup className="border-1" style={labelStyle}>
                                                            <InputGroup.Text className="rounded-10 border-0"><i
                                                                className="fa fa-phone"
                                                                style={{color: colors.Dark}}/></InputGroup.Text>
                                                            <div className="form-floating overflow-x-hidden">
                                                                <Form.Control
                                                                    className="border-0" {...register('phoneNumber')}
                                                                    placeholder="Username" style={inputStyle}
                                                                    onChange={handleChanges}/>
                                                                <Form.Label style={{
                                                                    color: colors.Grey5,
                                                                    opacity: "41%",
                                                                    fontSize: 12
                                                                }}>Mobile number</Form.Label>
                                                            </div>
                                                        </InputGroup>
                                                        {errors.phoneNumber?.message &&
                                                            <p className="text-danger">{errors.phoneNumber?.message}</p>}
                                                    </Col>
                                                </Row>

                                                {/* written language*/}
                                                <FloatingLabel controlId="writtenLan" label="Write Language"
                                                               className="mb-3" style={labelStyle}>
                                                    <Form.Control {...register('writeLanguage')} style={inputStyle}/>
                                                    {errors.writeLanguage?.message &&
                                                        <p className="text-danger">{errors.writeLanguage?.message}</p>}
                                                </FloatingLabel>

                                                {/* spoken language*/}
                                                <FloatingLabel controlId="spokenLan" label="Spoken Language"
                                                               className="mb-3" style={labelStyle}>
                                                    <Form.Control {...register('spokenLanguage')} style={inputStyle}/>
                                                    {errors.spokenLanguage?.message &&
                                                        <p className="text-danger">{errors.spokenLanguage?.message}</p>}
                                                </FloatingLabel>

                                                {/*Time zone*/}
                                                <FloatingLabel controlId="timeZone" label="Time Zone" className="mb-3">
                                                    <Form.Select style={selectStyle} {...register('timeZone')}
                                                                 onChange={handleChanges}>
                                                        {
                                                            timezones.map((data, index) => (
                                                                <option key={index}
                                                                        value={data.label}>{data.label}</option>
                                                            ))
                                                        }
                                                    </Form.Select>
                                                    {errors.timeZone?.message &&
                                                        <p className="text-danger">{errors.timeZone?.message}</p>}
                                                </FloatingLabel>

                                                {/* phone */}
                                                <Row>
                                                    <Col xs={12} md={6}>
                                                        <FloatingLabel controlId="countryCode"
                                                                       label="Social media messaging"
                                                                       className="mb-3 overflow-x-hidden">
                                                            <Form.Select
                                                                style={selectStyle} {...register('socialMediaMessaging_countryCode')}
                                                                onChange={handleChanges}>
                                                                {
                                                                    getCountryDataList().map((data, index) => (
                                                                        <option key={index}
                                                                                value={data.phone}>{data.name} +{data.phone}</option>
                                                                    ))
                                                                }
                                                            </Form.Select>
                                                            {errors.socialMediaMessaging_countryCode?.message &&
                                                                <p className="text-danger">{errors.socialMediaMessaging_countryCode?.message}</p>}
                                                        </FloatingLabel>
                                                    </Col>
                                                    <Col className="mb-3">
                                                        <InputGroup className="border-1" style={labelStyle}>
                                                            <InputGroup.Text className="rounded-10 border-0"><i
                                                                className="fa fa-phone"
                                                                style={{color: colors.Dark}}/></InputGroup.Text>
                                                            <div className="form-floating">
                                                                <Form.Control
                                                                    className="border-0" {...register('socialMediaMessaging_phoneNumber')}
                                                                    style={inputStyle} onChange={handleChanges}/>
                                                                <Form.Label style={{
                                                                    color: colors.Grey5,
                                                                    opacity: "41%",
                                                                    fontSize: 12
                                                                }}>Mobile number</Form.Label>
                                                            </div>
                                                        </InputGroup>
                                                        {errors.socialMediaMessaging_phoneNumber?.message &&
                                                            <p className="text-danger">{errors.socialMediaMessaging_phoneNumber?.message}</p>}
                                                    </Col>
                                                </Row>
                                                <p className="mb-2" style={{color: colors.Grey, fontSize: 12}}>I want to
                                                    receive notifications on:</p>
                                                <Form.Check
                                                    type="checkbox"
                                                    label="WhatApp"
                                                    className="form-check-sm"
                                                    {...register('whatsapp')}
                                                    onChange={handleChecked}
                                                />

                                                <Form.Check
                                                    type="checkbox"
                                                    label="SMS"
                                                    className="form-check-sm mb-3"
                                                    {...register('sms')}
                                                    onChange={handleChecked}
                                                />

                                                <Button
                                                    type="submit"
                                                    style={{
                                                        backgroundColor: colors.Black,
                                                        color: colors.white,
                                                        fontSize: 14
                                                    }}
                                                    className="btn-rounded mb-3 mb-md-0"
                                                >
                                                    Update details
                                                </Button>
                                                <Button
                                                    onClick={() => setEditProfile(false)}
                                                    style={{
                                                        border: `1px solid ${colors.white2}`,
                                                        backgroundColor: "transparent",
                                                        color: colors.Black,
                                                        fontSize: 14
                                                    }}
                                                    className="btn-rounded ms-0 ms-md-2"
                                                >
                                                    Cancel
                                                </Button>
                                            </Form>
                                        </Col>
                                    </> :
                                    <>
                                        <Col xs={10} md={6} lg={6} className="ps-4">
                                            <h3 className="mb-3"
                                                style={{fontSize: 16, color: colors.Dark, fontWeight: 600}}>Mark
                                                Barton</h3>
                                            <div className="mb-3">
                                            <span style={paragraphStyle}><img className="me-2" src={UserSmallIcon}
                                                                              alt=""/>mark
                                                barton</span>
                                            </div>

                                            <div className="mb-3">
                                            <span style={paragraphStyle}><img className="me-2" src={EmailIcon} alt=""/>markbarton85@gmail.com
                                            </span>
                                            </div>
                                            <div className="mb-3">
                                            <span style={paragraphStyle}><img className="me-2" src={PhoneIcon} alt=""/>+972
                                                522222911</span>
                                            </div>
                                            <div className="mb-3">
                                            <span style={paragraphStyle}><img className="me-2" src={SuitcaseIcon}
                                                                              alt=""/>External
                                                User Profile</span>
                                            </div>

                                            <Button
                                                onClick={() => setEditProfile(true)}
                                                style={{
                                                    border: `1px solid ${colors.Grey3}`,
                                                    backgroundColor: "transparent",
                                                    color: colors.FooterBlue
                                                }}
                                                className="btn-rounded mt-4"
                                            >
                                                Edit details
                                            </Button>
                                        </Col>
                                        <Col sx={12} md={5} lg={5} className="text-center text-md-end pe-5">
                                            <p className="mb-3 mt-5" style={paragraphStyle}>
                                                <img className="me-2" src={WwwIcon} alt=""/>Written: English (US)
                                                <OverlayTrigger placement="top" overlay={popover2}>
                                        <span className="d-inline-block">
                                    <img className="ms-2" src={InfoIcon} alt=""/>
                                        </span></OverlayTrigger>
                                            </p>
                                            <p className="mb-3 me-4" style={paragraphStyle}>Spoken: English (US)</p>
                                        </Col>
                                    </>
                            }
                        </Row>
                    </Container>
                    <Container className="p-4" style={{border: `1px solid ${colors.white2}`}}>
                        <h3 className="mb-3" style={{fontSize: 16, color: colors.Dark, fontWeight: 600}}>My
                            properties</h3>
                        <FloatingLabel controlId="floatingEmail" label="Search by property name, ID, or location"
                                       className="mb-5" style={{fontSize: 16, color: colors.Dark, overflowX: "hidden"}}>
                            <Form.Control type="text" style={{border: `1px solid ${colors.Dark}`, borderRadius: 10}}/>
                        </FloatingLabel>
                        <Table responsive borderless className="nowrap table-advance">
                            <thead>
                            <tr>
                                <th className="ps-10"
                                    style={{color: colors.Dark, fontWeight: 600, fontSize: 12}}>Property
                                </th>
                                <th style={{color: colors.Dark, fontWeight: 600, fontSize: 12}}>Role</th>
                                <th style={{color: colors.Dark, fontWeight: 600, fontSize: 12}}>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                displayedProperties.map((data,index)=>
                                    <>
                                        <tr>
                                            <td>
                                                <Stack direction="horizontal" className="align-items-start">
                                                    <img className="rounded-30" src={PropertyImage} alt="liveinhotels" width={40}
                                                         height={40}/>
                                                    <Stack className="ms-2">
                                                        <p className="mb-1" style={{color: colors.FooterBlue, fontSize: 12}}>{data.hotel}</p>
                                                        <p style={{color: colors.Grey4, fontSize: 12}}>ID: 106153498</p>
                                                        <p className="mb-2" style={{color: colors.Grey4, fontSize: 12}}>Tel Aviv,
                                                            ISR</p>
                                                        <Badge bg="primary"
                                                               style={{width: 'fit-content', transform: 'skew(-10deg)',}}>
                                                        <span style={{fontSize: 10, color: colors.white, transform: 'skew(10deg)'
                                                            }}>Inactive</span>
                                                        </Badge>
                                                    </Stack>
                                                </Stack>
                                            </td>
                                            <td
                                                style={{color: colors.Grey4, fontSize: 12}}>Administrator
                                            </td>
                                            <td>
                                                <div className="position-relative">
                                                <img src={MenuIcon} alt="liveinhotels" width={20} onClick={()=>setManageNotificationOpen({index:index})} />
                                                    <Container
                                                        className={manageNotificationOpen.index===index? "position-absolute py-1 px-2 bg-white z-index-10": "d-none"}
                                                        style={{border:`1px solid ${colors.white1}`, borderRadius:10, right:30, bottom:25, width:"fit-content"}}
                                                        onMouseLeave={()=>setManageNotificationOpen({})}
                                                    >
                                                        <span style={{fontSize:14,color:colors.Dark}}>Manage notifications</span>
                                                    </Container>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="table-row-gap">
                                            <td/>
                                        </tr>
                                    </>
                                )
                            }
                            </tbody>
                        </Table>
                        <Stack direction="horizontal" className="justify-content-end py-3 px-1 px-md-2">
                            <Button variant="link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                <i className="ri-arrow-left-s-line" style={{ fontSize: 24 }} />
                            </Button>
                            <span>{`${(currentPage - 1) * listPerPage + 1}-${Math.min(currentPage * listPerPage, hotelList.length)} of ${hotelList.length}`}</span>
                            <Button variant="link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                <i className="ri-arrow-right-s-line" style={{ fontSize: 24 }} />
                            </Button>
                        </Stack>
                    </Container>
                </Col>
                <Col>
                    <Container className="p-3" style={{border: `1px solid ${colors.white2}`}}>
                        <h3 className="mb-3" style={{fontSize: 16, color: colors.Dark}}>Quick links</h3>
                        <Link className="d-block mb-2" to="/manage-property" style={{color: colors.FooterBlue, fontSize: 12}}>Edit
                            multi-property notifications</Link>
                        <Link className="d-block mb-2" to="#" style={{color: colors.FooterBlue, fontSize: 12}}>Secure
                            your account</Link>
                        <Link className="d-block mb-2" to="/role-specialties" style={{color: colors.FooterBlue, fontSize: 12}}>Manage
                            role specialties</Link>
                    </Container>
                </Col>
            </Row>

        </Container>
    );
}

export default MyProfile;