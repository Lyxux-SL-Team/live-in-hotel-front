import React from 'react';
import TitleAndFeedback from "../../components/UserProfile/TitleAndFeedback.jsx";
import {Button, Container, FloatingLabel, Form, Stack} from "react-bootstrap";
import {colors as Colors, colors} from "../../configs/colors.js";

function RoleSpecialties(props) {

    const radioStyle = {fontSize:14, color:colors.Dark};
    const titleStyle={fontSize:14, color:colors.Dark,fontWeight:600};
    const bottomBorderStyle={borderBottom:`1px solid ${colors.Grey3}`}
    return (
        <Container className='ps-4 pe-8 py-3'>
            <TitleAndFeedback title="Role specialties"/>
            <p className="mb-3 w-100 w-md-60 w-lg-50" style={{fontSize:14, color:colors.Grey}}>
                We can share more relevant content with you when we know what tasks you perform at your properties. Select one or more items from the list below.
            </p>
            <Container className="py-3 px-0" style={{border:`1px solid ${colors.white2}`}}>
                <Stack className="px-3 pb-2" style={bottomBorderStyle}>
                <h3 style={titleStyle}>Are you the property owner?</h3>
                <Stack gap={3} direction="horizontal">
                    <Form.Check // prettier-ignore
                        type="radio"
                        id="propertyOwner"
                        label="yes"
                        defaultChecked
                        style={radioStyle}
                    />
                    <Form.Check // prettier-ignore
                        type="radio"
                        id="propertyOwner"
                        label="No"
                        style={radioStyle}
                    />
                </Stack>
                </Stack>

                <Stack className="px-3 py-3" style={bottomBorderStyle}>
                    <h3 style={titleStyle}>What tasks do you perform at your properties?</h3>
                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="accounting"
                        label="Accounting"
                        defaultChecked
                        style={radioStyle}
                    />
                    <span className="mb-3" style={{color:colors.Grey, fontSize:14, paddingLeft:"21px"}}>Invoicing, payments, and general finances</span>

                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="administration"
                        label="Administration"
                        defaultChecked
                        style={radioStyle}
                    />
                    <span className="mb-3" style={{color:colors.Grey, fontSize:14, paddingLeft:"21px"}}>Profile, account, and channel management</span>

                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="guest-relations"
                        label="Guest Relations"
                        defaultChecked
                        style={radioStyle}
                        className="mb-3"
                    />

                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="communal-living-room"
                        label="Communal living room"
                        defaultChecked
                        style={radioStyle}
                        className="mb-3"
                    />
                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="marketing-and-advertising"
                        label="Marketing and Advertising"
                        defaultChecked
                        style={radioStyle}
                        className="mb-3"
                    />

                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="property-information"
                        label="Property Information"
                        defaultChecked
                        style={radioStyle}
                    />
                    <span className="mb-3" style={{color:colors.Grey, fontSize:14, paddingLeft:"21px"}}>Property-related content and policies</span>

                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="property-photos"
                        label="Property Photos"
                        defaultChecked
                        style={radioStyle}
                        className="mb-3"
                    />

                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="reservations"
                        label="Reservations"
                        defaultChecked
                        style={radioStyle}
                        className="mb-3"
                    />

                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="revenue-management"
                        label="Revenue Management"
                        defaultChecked
                        style={radioStyle}
                    />
                    <span className="mb-3" style={{color:colors.Grey, fontSize:14, paddingLeft:"21px"}}>Property analytics, competitive set pricing, and inventory management</span>

                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="rooms-and-rates"
                        label="Rooms and Rates"
                        defaultChecked
                        style={radioStyle}
                    />
                    <span className="mb-3" style={{color:colors.Grey, fontSize:14, paddingLeft:"21px"}}>Room rates, descriptions, and rate plans</span>

                    <FloatingLabel className="w-100 w-md-60 w-lg-50" controlId="otherTasks" label="Other tasks" style={{color:colors.Grey,fontSize:12, border:`1px solid ${colors.Dark}`, borderRadius:10}}>
                        <Form.Control placeholder="What other tasks do you perform?" style={{fontSize:12, color:colors.Dark, borderRadius:10, boxShadow:"none"}}/>
                    </FloatingLabel>
                </Stack>

                <Button
                    style={{backgroundColor:Colors.Dark, color:colors.white, fontSize:14}}
                    className="btn-rounded m-3"
                    type="submit"
                >
                    Save details
                </Button>
            </Container>
        </Container>
    );
}

export default RoleSpecialties;