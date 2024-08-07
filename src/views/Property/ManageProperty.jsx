import React from 'react';
import {Container, Form} from "react-bootstrap";
import TitleAndFeedback from "../../components/UserProfile/TitleAndFeedback.jsx";
import {colors} from "../../configs/colors.js";
import {Link} from "react-router-dom";

function ManageProperty(props) {
    return (
        <Container className='ps-4 pe-8 py-3'>
            <TitleAndFeedback title="Manage a property"/>
            <Form.Group className="mb-4 w-100 w-md-30" controlId="formGroupExampleInput">
                <Form.Label style={{color:colors.Grey, fontSize:12}}>Search</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Property name, city, or ID" style={{color:colors.Dark, fontSize:14,border:`1px solid ${colors.Dark1}`, boxShadow:"none"}}/>
            </Form.Group>

            <h3 className="pb-2" style={{color:colors.Dark, fontSize:14, fontWeight:500, borderBottom:`1px solid ${colors.Grey}`}}>Your Properties</h3>

            <Container className="py-2 mb-3" style={{borderBottom:`1px solid ${colors.Grey3}`}}>
                <p className="mb-1" style={{color:colors.FooterBlue, fontSize:14}}>begin hotel</p>
                <p style={{color:colors.Grey4, fontSize:12}}>ID: 106153498</p>
                <p className="mb-2" style={{color:colors.Grey4, fontSize:12}}>Tel Aviv, ISR</p>
            </Container>

            <Link to="#" style={{color:colors.FooterBlue, fontSize:14, textDecoration:"underline"}}>Add a property</Link>

        </Container>
    );
}

export default ManageProperty;