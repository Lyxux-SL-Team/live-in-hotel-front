import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {colors as Colors} from "../../configs/colors.js";

const CommanFooter1 = () => {
    return (
        <div className="hk-footer border-0">
            <Container as="footer" className="footer">
                <Row>
                    <Col xl={8} className="text-center">
                        <p className="footer-text pb-0">
                            <span className="copy-text text-dark" style={{color:Colors.Dark}}>liveinhotels.com © {new Date().getFullYear()} All rights reserved.</span>
                            <Link to="#" style={{color:Colors.FooterBlue}}>Privacy Policy</Link><span className="footer-link-sep">|</span>
                            <Link to="#" style={{color:Colors.FooterBlue}}>6C</Link><span className="footer-link-sep">|</span>
                            <Link to="#" style={{color:Colors.FooterBlue}}>System Status</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CommanFooter1
