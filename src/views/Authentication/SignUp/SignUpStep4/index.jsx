import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import CommanFooter1 from "../../CommanFooter1";
import bgVideo from "../../../../assets/video/signupBg.mp4";

//Images
import logo from "../../../../assets/img/logo-light.png";
import SimpleHeader from "../../SimpleHeader";

const Signup = (props) => {
  const [address, setAddress] = useState("");
  const [isAddressValid, setIsAddressValid] = useState(true);
  const history = useHistory();

  function validateAddress () {
    if (address.trim() === "") {
      setIsAddressValid(false);
    } else {
      setIsAddressValid(true);
    }
  };

  function handleInputFunction(e) {
    e.preventDefault ();
    validateAddress  ();
    if (address.trim() !== "" && isAddressValid) {
      history.push("signup-step-5");
    }
  }

  return (
    <div className="hk-pg-wrapper py-0">
      <div className="hk-pg-body py-0">
        <Container fluid>
          <Row className="auth-split">
            <SimpleHeader />
            <Col
              xl={7}
              lg={6}
              md={7}
              sm={10}
              className="position-relative mx-auto"
            >
              <div className="auth-content flex-column pt-8 pb-md-8 pb-13">
                <Form className="w-100" onSubmit={handleInputFunction}>
                  <Row>
                    <Col xxl={5} xl={7} lg={10} className="mx-auto form-step">
                      <span className="fs-7 text-light">Step 1 of 2</span>
                      <h4 className="my-3 font-scale-vf">
                        Where is your property located?
                      </h4>
                      <p className="mb-3">
                        Start with your property name, like Hilton Dubai. This
                        will make it easier to find your address.
                      </p>
                      <Row className="gx-3">
                        <Col lg={12} as={Form.Group} className="mb-3">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            onChange={(e) => {
                              setAddress(e.target.value);
                              setIsAddressValid(true); // Reset validation state on change
                            }}
                            onBlur={validateAddress} // Validate on blur
                            placeholder="Enter address"
                            type="text"
                            className={!isAddressValid ? "is-invalid" : ""}
                          />
                          {!isAddressValid && (
                            <div className="invalid-feedback">
                              Please enter an address.
                            </div>
                          )}
                        </Col>
                      </Row>
                      <Button
                        variant="dark"
                        className="btn-rounded  btn-block"
                        as={Link}
                        to="signup-step-5"
                        onClick={handleInputFunction}
                      >
                        Next
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
              {/* Page Footer */}
              <CommanFooter1 />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
