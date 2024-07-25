import {Col, Container, Row} from "react-bootstrap";
import {colors as Colors} from "../../configs/colors.js";
import {Link} from "react-router-dom";


const SignupFooter = () => {
    return (
        <div className="hk-footer">
            <Container as="footer" className="footer py-1">
                <Row>
                    <Col sm={12} md={6} className="text-center justify-content-start d-flex">
                        <p className="footer-text pb-0">
                            <span className="copy-text text-dark" style={{color:Colors.Dark}}>liveinhotels.com © {new Date().getFullYear()} All rights reserved.</span>
                            <Link to="#" style={{color:Colors.FooterBlue}}>Privacy Policy</Link><span className="footer-link-sep">|</span>
                            <Link to="#" style={{color:Colors.FooterBlue}}>6C</Link><span className="footer-link-sep">|</span>
                            <Link to="#" style={{color:Colors.FooterBlue}}>System Status</Link>
                        </p>
                    </Col>
                    <Col sm={12} md={6} className="text-center justify-content-md-end justify-content-center d-flex">
                        <p className="footer-text pb-0">
                        <Link to="#" style={{color:Colors.FooterBlue}}>Send feedback to our help forum</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default SignupFooter
