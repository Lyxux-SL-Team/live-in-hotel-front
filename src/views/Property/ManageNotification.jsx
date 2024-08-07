import React, {useState} from 'react';
import {Form, Col, Container, Row, Stack, Collapse, Button} from "react-bootstrap";
import TitleAndFeedback from "../../components/UserProfile/TitleAndFeedback.jsx";
import {colors} from "../../configs/colors.js";

function ManageNotification(props) {
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    const titleStyle = {fontSize:16, color:colors.Dark,fontWeight:500}
    const subTitleStyle = {fontSize:14, color:colors.Dark,fontWeight:500}
    const descStyle = {fontSize:12, color:colors.Grey}
    const borderStyle = {border:`1px solid ${colors.white2}`};
    return (
        <Container className='ps-4 pe-8 py-3'>
        <TitleAndFeedback title="Notification settings"/>
            <Row>
                <Col xs={12} sm={12} md={8}>
                    <Container className="px-0 mb-3" style={borderStyle}>
                        <Stack className="p-3" style={{borderBottom:visible? `1px solid ${colors.white2}`:"none"}}>
                            <Row className="d-flex align-items-center">
                                <Col xs={10} md={11}>
                                    <h3 style={titleStyle}>Bookings and cancellations</h3>
                                    <p style={descStyle}>Find out quickly when a guest books or cancels a reservation.</p>
                                </Col>
                                <Col className="text-end" xs={1}>
                                    <i className={visible? "fa fa-angle-up": "fa fa-angle-down"}
                                       aria-controls="visible-1" aria-expanded={visible}
                                       style={{fontSize:30}} onClick={()=>setVisible(!visible)}/>
                                </Col>
                            </Row>
                        </Stack>
                        <Collapse in={visible}>
                            <div id="visible-1">
                                <Stack gap={2} className={visible?"d-display p-3":"d-none p-3"} style={{borderBottom:`1px solid ${colors.white2}`}}>
                                    <h3 style={subTitleStyle}>Bookings and cancellations</h3>
                                    <Stack direction="horizontal" className="justify-content-between w-100 w-md-60 w-lg-40">
                                        <p style={descStyle}>Email</p>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </Stack>
                                    <p style={descStyle}>This is your default notification type, so you cannot turn it off.</p>
                                </Stack>
                                <Stack className={visible?"d-display p-3":"d-none p-3"}>
                                    <h3 style={subTitleStyle}>Requests to waive cancellation fees
                                    </h3>
                                    <Stack direction="horizontal" className="justify-content-between w-100 w-md-60 w-lg-40">
                                        <p style={descStyle}>Email</p>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </Stack>
                                </Stack>
                            </div>
                        </Collapse>
                    </Container>

                    <Container className="px-0 mb-3" style={borderStyle}>
                        <Stack className="p-3" style={{borderBottom:visible1? `1px solid ${colors.white2}`:"none"}}>
                            <Row className="d-flex align-items-center">
                                <Col xs={10} md={11}>
                                    <h3 style={titleStyle}>Guest relations</h3>
                                    <p style={descStyle}>Get notified when guests send you a message, submit reviews, or provide feedback while still in-house.</p>
                                </Col>
                                <Col className="text-end" xs={1}>
                                    <i className={visible1? "fa fa-angle-up": "fa fa-angle-down"}
                                       aria-controls="visible-2" aria-expanded={visible1}
                                       style={{fontSize:30}} onClick={()=>setVisible1(!visible1)}/>
                                </Col>
                            </Row>
                        </Stack>
                        <Collapse in={visible1}>
                            <div id="example-collapse-text">
                                <Stack gap={2} className={visible1?"d-display p-3":"d-none p-3"} style={{borderBottom:`1px solid ${colors.white2}`}}>
                                    <h3 style={subTitleStyle}>In-house feedback</h3>
                                    <Stack direction="horizontal" className="justify-content-between w-100 w-md-60 w-lg-40">
                                        <p style={descStyle}>Email</p>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </Stack>
                                </Stack>
                                <Stack gap={2} className={visible1?"d-display p-3":"d-none p-3"} style={{borderBottom:`1px solid ${colors.white2}`}}>
                                    <h3 style={subTitleStyle}>Guest reviews</h3>
                                    <Stack direction="horizontal" className="justify-content-between w-100 w-md-60 w-lg-40">
                                        <p style={descStyle}>Email</p>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </Stack>
                                    <Form.Check // prettier-ignore
                                        type="checkbox"
                                        label="Instant notifications"
                                        defaultChecked
                                        style={{fontSize:14,color:colors.Dark}}
                                    />
                                    <Form.Check // prettier-ignore
                                        type="checkbox"
                                        label="Instant notifications"
                                        defaultChecked
                                        style={{fontSize:14,color:colors.Dark}}
                                    />
                                </Stack>
                                <Stack className={visible1?"d-display p-3":"d-none p-3"}>
                                    <h3 style={subTitleStyle}>Guest messages</h3>
                                    <Stack direction="horizontal" className="justify-content-between w-40">
                                        <p style={descStyle}>Email</p>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </Stack>
                                </Stack>
                            </div>
                        </Collapse>

                    </Container>

                    <Container className="px-0 mb-3" style={borderStyle}>
                        <Stack className="p-3" style={{borderBottom:visible2? `1px solid ${colors.white2}`:"none"}}>
                            <Row className="d-flex align-items-center">
                                <Col xs={10} md={11}>
                                    <h3 style={titleStyle}>Revenue management alerts</h3>
                                    <p style={descStyle}>Get notified when you can take action to improve the competitiveness of your property.</p>
                                </Col>
                                <Col className="text-end" xs={1}>
                                    <i className={visible2? "fa fa-angle-up": "fa fa-angle-down"}
                                       aria-controls="visible-3" aria-expanded={visible2}
                                       style={{fontSize:30}} onClick={()=>setVisible2(!visible2)}/>
                                </Col>
                            </Row>
                        </Stack>
                        <Collapse in={visible2}>
                            <Stack id="visible-3" gap={2} className={visible2?"d-display p-3":"d-none p-3"}>
                                <h3 style={subTitleStyle}>Guest reviews</h3>
                                <Stack direction="horizontal" className="justify-content-between w-100 w-md-60 w-lg-40">
                                    <p style={descStyle}>Email</p>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        defaultChecked
                                    />
                                </Stack>
                                <Form.Check // prettier-ignore
                                    type="checkbox"
                                    label="Daily notifications"
                                    style={{fontSize:14,color:colors.Dark}}
                                />
                                <Form.Check // prettier-ignore
                                    type="checkbox"
                                    label="Weekly summary"
                                    defaultChecked
                                    style={{fontSize:14,color:colors.Dark}}
                                />
                            </Stack>
                        </Collapse>
                    </Container>

                    <Container className="px-0 mb-3" style={borderStyle}>
                        <Stack className="p-3" style={{borderBottom:visible3? `1px solid ${colors.white2}`:"none"}}>
                            <Row className="d-flex align-items-center">
                                <Col xs={10} md={11}>
                                    <h3 style={titleStyle}>Rates and inventory monthly renewal alert</h3>
                                    <p style={descStyle}>Get a reminder before your auto-renewed rooms become available for booking.</p>
                                </Col>
                                <Col className="text-end" xs={1}>
                                    <i className={visible3? "fa fa-angle-up": "fa fa-angle-down"}
                                       aria-controls="visible-4" aria-expanded={visible3}
                                       style={{fontSize:30}} onClick={()=>setVisible3(!visible3)}/>
                                </Col>
                            </Row>
                        </Stack>
                        <Collapse in={visible3}>
                            <Stack id="visible-4" gap={2} className={visible3?"d-display p-3":"d-none p-3"}>
                                <Stack direction="horizontal" className="justify-content-between w-100 w-md-60 w-lg-40">
                                    <p style={descStyle}>Email</p>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        defaultChecked
                                    />
                                </Stack>
                            </Stack>
                        </Collapse>

                    </Container>
                </Col>

                <Col>
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
                        <h3 className="mb-3" style={titleStyle}>Where we send your notifications</h3>
                        <p className="mb-3" style={descStyle}><span style={{fontWeight:600}}>Username:</span> markbarton</p>
                        <p style={descStyle}><span style={{fontWeight:600}}>Email:</span> markbarton85@gmail.com</p>
                        <Button
                            style={{
                                border:`1px solid ${colors.Grey3}`,
                                backgroundColor: "transparent",
                                color: colors.FooterBlue,
                                fontSize:14,
                                borderRadius:25,
                                width:"fit-content"
                            }}
                            className="btn-rounded mt-3"
                        >
                            Edit details
                        </Button>
                        </Container>
                    <Container className="p-3" style={{border: `1px solid ${colors.Grey3}`}}>
                            <i className="fa fa-building mb-3" style={{
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
                            <h3 className="mb-3" style={titleStyle}>Booking notifications details</h3>
                            <p className="mb-3" style={descStyle}><span style={{fontWeight:600}}>Primary delivery to:</span> markbarton</p>
                            <p style={descStyle}><span style={{fontWeight:600}}>Language preference:</span> markbarton85@gmail.com</p>
                            <Button
                                style={{
                                    border:`1px solid ${colors.Grey3}`,
                                    backgroundColor: "transparent",
                                    color: colors.FooterBlue,
                                    fontSize:14,
                                    borderRadius:25,
                                    width:"fit-content"
                                }}
                                className="btn-rounded mt-3"
                            >
                                Edit details
                            </Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default ManageNotification;