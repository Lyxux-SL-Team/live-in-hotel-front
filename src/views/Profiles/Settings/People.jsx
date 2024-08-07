import React, { useEffect, useState } from 'react';
import TitleAndFeedback from "../../../components/UserProfile/TitleAndFeedback.jsx";
import {
    Alert,
    Button,
    Col,
    Container,
    Form,
    InputGroup,
    Row,
    Stack,
    Table,
} from "react-bootstrap";
import { colors } from "../../../configs/colors.js";
import PropertyImage from "../../../assets/img/property-image.png";
import { useHistory } from "react-router-dom";
import './index.css';

const userData = [
    {
        user: "Mark Barton",
        lastLogin: "Thu, Jul 11",
        role: "Administrator"
    },
    {
        user: "Ann Kart",
        lastLogin: "Mon, Jul 8",
        role: "Administrator"
    },
    {
        user: "ishan",
        lastLogin: "Mon, Jul 8",
        role: "Administrator"
    },
];
const roleList = ["Accounting user", "Guest experience user", "Analytics user", "Reservations user", "Finance user", "Property user", "Administrator"];
const propertyList = ["Begin hotel", "Property"];

function People() {
    const [filterVisible, setFilterVisible] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedProperty, setSelectedProperty] = useState('');
    const [openRole, setOpenRole] = useState(false);
    const [openProperty, setOpenProperty] = useState(false);
    const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const history = useHistory();

    useEffect(() => {
        if (history.location?.state?.state === "success") {
            setDisplaySuccessMessage(true);
        }
    }, [history]);

    const listPerPage = 2;
    const totalPages = Math.ceil(userData.length / listPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const displayedUsers = userData.slice(
        (currentPage - 1) * listPerPage,
        currentPage * listPerPage
    );

    const tHeadStyle = { fontSize: 12, fontWeight: 700, color: colors.Grey2 };
    return (
        <Container className='ps-4 pe-8 py-3'>
            <TitleAndFeedback title="People" />
            <p style={{ fontSize: 14, color: colors.Grey }}>Manage all of your Partner Central user accounts.</p>
            {
                displaySuccessMessage &&
                <Alert className="mt-3" style={{ backgroundColor: colors.Green, color: colors.Dark, fontSize: 14, borderRadius: 0 }}>
                    <i className="fa fa-check me-3" aria-hidden="true"></i>Your invitation has been sent to {history.location.state.message}.
                </Alert>
            }
            <Container className="my-3 px-0" style={{ border: `1px solid ${colors.Grey3}` }}>
                <Row className="p-3">
                    <Col xs={12} md={6}>
                        <h3 className="text-center text-md-start"
                            style={{ fontSize: 16, fontWeight: 500, color: colors.Dark }}>All users for begin hotel</h3>
                    </Col>
                    <Col className="d-flex justify-content-center justify-content-md-end">
                        <Stack direction="horizontal" gap={2}>
                            <div className="position-relative">
                                <Button
                                    onClick={() => setFilterVisible(!filterVisible)}
                                    style={{
                                        backgroundColor: "transparent",
                                        color: colors.Dark,
                                        fontSize: 14,
                                        border: `1px solid ${colors.Grey3}`,
                                        borderRadius: 10
                                    }}>
                                    <span>
                                        <span>Filter</span>
                                        <span className="icon"><i className="fa fa-filter" /></span>
                                    </span>
                                </Button>
                                <Stack gap={3}
                                       className={filterVisible ? "position-absolute filter-model-width p-2 bg-white shadow z-index-3" : "d-none"}
                                       onPointerLeave={() => setFilterVisible(false)}>
                                    <Stack>
                                        <InputGroup className="mb-0 border-1" style={{ border: `1px solid ${colors.Dark}`, borderRadius: 10 }} onClick={() => setOpenRole(!openRole)}>
                                            <div className="form-floating">
                                                <Form.Control readOnly className="border-0" type="text" placeholder="Username" value={selectedRole} style={{ fontSize: 14, color: colors.Dark, backgroundColor: colors.white, borderRadius: 10 }} />
                                                <Form.Label style={{ color: colors.Grey, fontSize: 12 }}>Role</Form.Label>
                                            </div>
                                            <InputGroup.Text className="rounded-10 border-0"><i className={openRole ? "fa fa-angle-up" : "fa fa-angle-down"} style={{ color: colors.Dark }} onClick={() => setOpenRole(!openRole)} /></InputGroup.Text>
                                        </InputGroup>
                                        <Stack className={openRole ? "p-2 mt-1" : "d-none"} gap={1} style={{ border: `1px solid ${colors.white1}`, borderRadius: 10 }}>
                                            {
                                                roleList.map((data) => (
                                                    <span key={data} onClick={() => setSelectedRole(data)} style={{ color: colors.Dark, fontSize: 14 }}>{data}</span>
                                                ))
                                            }
                                        </Stack>
                                    </Stack>

                                    <Stack>
                                        <InputGroup className="mb-0 border-1" style={{ border: `1px solid ${colors.Dark}`, borderRadius: 10 }}>
                                            <div className="form-floating">
                                                <Form.Control readOnly className="border-0" type="text" placeholder="Username" value={selectedProperty} style={{ fontSize: 14, color: colors.Dark, backgroundColor: colors.white, borderRadius: 10 }} />
                                                <Form.Label style={{ color: colors.Grey, fontSize: 12 }}>Property</Form.Label>
                                            </div>
                                            <InputGroup.Text className="rounded-10 border-0"><i className={openProperty ? "fa fa-angle-up" : "fa fa-angle-down"} style={{ color: colors.Dark }} onClick={() => setOpenProperty(!openProperty)} /></InputGroup.Text>
                                        </InputGroup>
                                        <Stack className={openProperty ? "p-2 mt-1" : "d-none"} gap={1} style={{ border: `1px solid ${colors.white1}`, borderRadius: 10 }}>
                                            {
                                                propertyList.map((data) => (
                                                    <span key={data} onClick={() => setSelectedProperty(data)} style={{ color: colors.Dark, fontSize: 14 }}>{data}</span>
                                                ))
                                            }
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </div>

                            <Button
                                onClick={() => history.push('/user-settings/people/invite-user')}
                                style={{
                                    backgroundColor: "transparent",
                                    color: colors.Dark,
                                    fontSize: 14,
                                    border: `1px solid ${colors.Grey3}`,
                                    borderRadius: 10
                                }}>
                                Invite user
                            </Button>
                        </Stack>
                    </Col>
                </Row>
                <InputGroup className="ms-3 mb-3 border-1 w-90 w-md-40"
                            style={{ border: `1px solid ${colors.white3}`, borderRadius: 10 }}>
                    <InputGroup.Text className="rounded-10 border-0"><i className="fa fa-search" style={{
                        color: colors.Dark,
                        fontSize: 18
                    }} /></InputGroup.Text>
                    <div className="form-floating">
                        <Form.Control className="border-0" type="text" placeholder="Search by name"
                                      style={{ fontSize: 12, color: colors.Dark1, borderRadius: 10, boxShadow: "none" }} />
                        <Form.Label style={{ color: colors.Grey2, fontSize: 12, fontWeight: 500 }}>Email
                            address</Form.Label>
                    </div>
                </InputGroup>
                <Table responsive hover className="mb-0" style={{ borderTop: `1px solid ${colors.white3}` }}>
                    <thead>
                    <tr>
                        <th style={tHeadStyle}>User</th>
                        <th style={tHeadStyle}>Role</th>
                        <th style={tHeadStyle}>Last login</th>
                        <th style={tHeadStyle}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        displayedUsers.map((data, index) => (
                            <tr key={index}>
                                <td>
                                    <Stack direction="horizontal" className="align-items-center">
                                        <img className="rounded-30" src={PropertyImage} alt="liveinhotels" width={30} height={30} />
                                        <span className="ms-3" style={{
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: colors.FooterBlue
                                        }}>{data.user}</span>
                                    </Stack>
                                </td>
                                <td style={{ fontSize: 12, fontWeight: 500, color: colors.Dark }}>{data.role}</td>
                                <td style={{ fontSize: 12, fontWeight: 500, color: colors.Dark }}>{data.lastLogin}</td>
                                <td><i className="fa fa-ellipsis-v" style={{
                                    border: `1px solid ${colors.Dark1}`,
                                    borderRadius: "50%",
                                    color: colors.Dark,
                                    padding: "10px",
                                    width: "20px",
                                    height: "20px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}></i></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
                <Stack direction="horizontal" className="align-items-center justify-content-end py-3 px-2">
                    <Button variant="link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <i className="ri-arrow-left-s-line" style={{ fontSize: 24 }} />
                    </Button>
                    <span>{`${(currentPage - 1) * listPerPage + 1}-${Math.min(currentPage * listPerPage, userData.length)} of ${userData.length}`}</span>
                    <Button variant="link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <i className="ri-arrow-right-s-line" style={{ fontSize: 24 }} />
                    </Button>
                </Stack>
            </Container>
        </Container>
    );
}

export default People;
