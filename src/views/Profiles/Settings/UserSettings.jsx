import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {colors as Colors, colors} from "../../../configs/colors.js";
import {Link} from "react-router-dom";

//images
import UserIcon from "../../../assets/img/user-icon.png"
import LockIcon from "../../../assets/img/LockIcon.png"
import BellIcon from "../../../assets/img/bell-notifications-icon.png"
import UserProfileIcon from "../../../assets/img/users-profile-icon.png"
import TitleAndFeedback from "../../../components/UserProfile/TitleAndFeedback.jsx";

const settings = [
    {
        title: "User settings",
        description: "Provide personal details and how we can reach you.",
        path: "",
        settings: "Edit profile",
        image:UserIcon
    },
    {
        title: "Security and password",
        description: "Manage your property's account security and update your password.",
        path: "",
        settings: "Secure account",
        image:LockIcon
    },
    {
        title: "People",
        description: "Manage all of your Partner Central user accounts.",
        path: "",
        settings: "Manage users",
        image:UserProfileIcon
    },
    {
        title: "Notifications",
        description: "Manage your notification preferences and how you want to be contacted.",
        path: "",
        settings: "Manage notifications",
        image:BellIcon
    },
]

function UserSettings(props) {
    return (
        <Container className='ps-4 pe-8 py-3'>
            <TitleAndFeedback title="User settings"/>
            <p className="mb-3" style={{color: colors.Grey, fontSize: 14}}>
                Manage your info, security, users and notifications to make Partner Central work better for you.
            </p>
            <Row>
                {
                    settings.map((data) => (
                        <Col key={data.title} xs={4} className="p-2 w-100 w-md-50 w-lg-25" >
                            <Container className="p-3 h-100" style={{border: `1px solid ${colors.Grey3}`}}>
                                {/*<div class="d-flex justify-content-center align-items-center p-2" style={{backgroundColor: 'black', borderRadius: '50%', width: 'fit-content'}}>*/}
                                    <img className="d-flex justify-content-center align-items-center p-2 mb-3" src={data.image} alt="liveinhotels" width={18} style={{backgroundColor: 'black', borderRadius: '50%', width: 'fit-content'}}/>
                                {/*</div>*/}
                            <h3 className="mb-3"
                                style={{fontSize: 16, color: colors.Dark, fontWeight: 500}}>{data.title}</h3>
                            <p style={{fontSize: 12, color: colors.Grey}}>
                                {data.description}
                            </p>
                            <Button
                                style={{
                                    border: `1px solid ${colors.Grey3}`,
                                    backgroundColor: "transparent",
                                    color: colors.FooterBlue
                                }}
                                className="btn-rounded mt-4"
                            >
                                {data.settings}
                            </Button>
                            </Container>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default UserSettings;