import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import CommanFooter1 from "../CommanFooter1";
import loginImage from "../../../assets/img/login-img.png";
import {useSelector} from "react-redux";
import {colors as Colors} from "../../../configs/colors.js";
import {Link} from "react-router-dom";

function Welcome() {

  const user = useSelector(state => state.auth.user);
  return (
      <Container fluid className="hk-pg-wrapper py-0">
        <Row className="auth-split">
          <Col xl={5}
               lg={5}
               md={5}
               className="p-0 d-md-block d-none position-relative overflow-hidden d-sm-none" style={{backgroundColor:"rgba(0, 0, 0, 0.32)"}}>
            <img src={loginImage} alt="live in hotel" className="bg-img" />
          </Col>
            <Col sm={12} xs={12} md={7} lg={7} className="position-relative mx-auto">
              <div className="mx-5 mx-lg-10 mx-xl-15 pt-15 pt-lg-20">
                <h4 className="mb-3 font-scale-vf" style={{color:Colors.Dark}}>Welcome to LiveInHotel</h4>
                <p className="mb-3" style={{color:Colors.Dark, fontSize:16}}>
                  We'll send an email to {user.email} to verify your account
                  and let you know what to expect next.
                </p>
                <h6 className="mb-3" style={{color:Colors.Dark, fontSize:18, fontWeight:500}}>To build your listing you'll need:</h6>
                <ul className="mb-4" style={{ listStyleType: "disc", color:Colors.Dark, fontSize:16 }}>
                  <li>Pictures of your property</li>
                  <li>
                    Information about your rooms and the amenities you offer
                    guests
                  </li>
                  <li>
                    Any tax or regulatory information required by your local
                    government
                  </li>
                </ul>
                <h6 className="mb-3" style={{color:Colors.Dark, fontSize:18, fontWeight:500}}>Unsure if you have enough</h6>
                <p style={{color:Colors.Dark, fontSize:18}}>
                  No need to worry! We'll guide you through each step, and
                  you'll have the opportunity to edit your listing before it
                  goes live.
                </p>
                <Button
                    style={{backgroundColor:Colors.Dark, fontSize:16, fontWeight:500}}
                    className="btn-rounded col-11 mt-5"
                    as={Link}
                    to='/auth/signup-step-4'
                >
                  Continue
                </Button>
              </div>
              <CommanFooter1 />
            </Col>
        </Row>
      </Container>
  );
}

export default Welcome;
