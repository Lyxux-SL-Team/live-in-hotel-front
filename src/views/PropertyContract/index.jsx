import React, {useState} from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import {colors as Colors} from "../../configs/colors.js";
import {Briefcase} from "react-feather";
import {Link, useHistory} from "react-router-dom";
import Agreement from "./Agreement.jsx";

const repeat = [1, 2, 3]
const PropertyContract = () => {

    const history = useHistory();

    const [nextPage, setNextPage] = useState(false)

    const paragraphStyle = {color: Colors.Grey, fontSize: 14};
    return (
        nextPage ? <Agreement/> :
            <Container className="px-4">
                <h2 className="my-3" style={{fontSize: 24, color: Colors.Dark, fontWeight: 600}}>Property contract</h2>
                <p className="mb-3" style={paragraphStyle}>
                    You’re one step closer to listing your property with us.
                </p>
                <h3 className="my-3" style={{fontSize: 16, color: Colors.Dark, fontWeight: 600}}>What we do for
                    you</h3>
                <Row className="justify-content-around mb-3">
                    {
                        repeat.map(data => (
                            <Col key={data} sm={12} md={4}
                                 className="ps-3 pe-2 pe-lg-10 py-3 w-md-30 w-100 mb-3 mb-md-0"
                                 style={{border: `1px solid ${Colors.white2}`}}>
                                <Briefcase size={40} color={Colors.Purple}/>
                                <p className="mt-3" style={{fontSize: 14, color: Colors.Dark}}>
                                    Lorem ipsum dolor sit amet consectetur. Facilisis nibh lacus sit fermentum
                                    nullam purus sed.
                                </p>
                            </Col>
                        ))
                    }
                </Row>
                <h3 className="my-3" style={{fontSize: 18, color: Colors.Dark, fontWeight: 600}}>Special terms</h3>
                <Container className="mb-3 p-3" style={{border: `1px solid ${Colors.white2}`}}>
                    <h5 style={{fontSize: 14, color: Colors.Dark, fontWeight: 600}}>No long-term commitment</h5>
                    <p style={{fontSize: 12, color: Colors.Grey}}>You can terminate this agreement for any reason by
                        giving us
                        14 days prior written notice.</p>
                </Container>

                <Container className="mb-3 p-3" style={{border: `1px solid ${Colors.white2}`}}>
                    <p style={{fontSize: 14, color: Colors.Dark}}>Agreement Type: <span style={{fontWeight: 600}}>Live in Hotels Traveler Preference</span>
                    </p>
                    <p className="w-80" style={{fontSize: 14, color: Colors.Dark}}>Travelers have the option to pay
                        you when
                        they stay, or pay us when they book. This is the most flexible payment option and appeals to
                        the widest
                        range of travelers.</p>
                </Container>

                <Container className="mb-3 p-3" style={{border: `1px solid ${Colors.white2}`}}>
                    <Row>
                        <Col xs={4} md={2} lg={1} className="d-flex justify-content-center">
                            <h4 style={{fontSize: 36, color: Colors.Dark, fontWeight: 600}}>20%</h4>
                        </Col>
                        <Col>
                            <h4 style={{fontSize: 14, color: Colors.Dark, fontWeight: 600}}>Lorem ipsum dolor sit
                                amet
                                consectetur.</h4>
                            <p style={{fontSize: 12, color: Colors.Grey}}>Lorem ipsum dolor sit amet
                                consectetur.</p>
                        </Col>
                    </Row>
                </Container>

                <Container className="mb-3 p-3" style={{border: `1px solid ${Colors.white2}`}}>
                    <Row>
                        <Col xs={4} md={2} lg={1} className="d-flex justify-content-center">
                            <h4 style={{fontSize: 36, color: Colors.Dark, fontWeight: 600}}>100%</h4>
                        </Col>
                        <Col>
                            <h4 style={{fontSize: 14, color: Colors.Dark, fontWeight: 600}}>Lorem ipsum dolor sit
                                amet
                                consectetur.</h4>
                            <p style={{fontSize: 12, color: Colors.Grey}}>Lorem ipsum dolor sit amet
                                consectetur.</p>
                        </Col>
                    </Row>
                </Container>
                <div className="mb-3">
                    <Link to="#" style={{color: Colors.FooterBlue, fontWeight: 300, fontSize: 12}}>View
                        contract</Link>
                </div>
                <Button
                    style={{backgroundColor: Colors.Dark}}
                    className="btn-rounded mb-3"
                    onClick={() => history.push('property-contract/agreement')}
                >
                    Next
                </Button>
            </Container>
    )
}

export default PropertyContract
