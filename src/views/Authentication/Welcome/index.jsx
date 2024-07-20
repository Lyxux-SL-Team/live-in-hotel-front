import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommanFooter1 from "../CommanFooter1";
import bgVideo from "../../../assets/video/signupBg.mp4";

function Welcome() {
  return (
    <div className="hk-pg-wrapper py-0">
      <div className="hk-pg-body py-0">
        <Container fluid>
          <Row className="auth-split">
            <Col
              xl={5}
              lg={6}
              md={5}
              className="p-0 d-md-block d-none position-relative overflow-hidden"
            >
              <video className="bg-img" autoPlay loop muted src={bgVideo} />
            </Col>
            <Col
              xl={7}
              lg={6}
              md={7}
              sm={10}
              className="position-relative mx-auto d-flex justify-content-center align-items-center flex-column"
            >
              <div
                className="d-flex justify-content-evenly flex-column gap-3"
                style={{ maxWidth: "600px" }}
              >
                <p className="text-black fw-bolder fs-2 font-scale-vf">
                  Welcome to LiveInHotel
                </p>
                <p className="fw-medium">
                  We'll send an email to dvdfvh@hhdv.com to verify your account
                  and let you know what to expect next.
                </p>
                <p className="text-black fs-5 fw-bold">
                  To build your listing you'll need:
                </p>
                <ul style={{ listStyleType: "disc" }}>
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
                <p className="text-black fs-5 fw-bold">Unsure if you have enough</p>
                <p>
                  No need to worry! We'll guide you through each step, and
                  you'll have the opportunity to edit your listing before it
                  goes live.
                </p>
              </div>
              <CommanFooter1 />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Welcome;
