import React from 'react';
import {Col, Row} from "react-bootstrap";
import {colors} from "../../configs/colors.js";
import {Link} from "react-router-dom";

function TitleAndFeedback({title}) {
    return (
        <Row className="align-items-center">
            <Col xs={6}>
                <h2 className="my-3" style={{fontSize: 18, color: colors.Dark}}>{title}</h2>
            </Col>
            <Col xs={6} className="text-end">
                <Link to="#" style={{color: colors.FooterBlue, fontWeight: 300, fontSize: 12}}>Feedback</Link>
            </Col>
        </Row>
    );
}

export default TitleAndFeedback;