import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useValidateEmailMutation } from "../../../../redux/reducer/api/authSlice";
import '../style.css'


const Signup = (props) => {
  const [validateEmail, { isLoading, isError, error, data }] = useValidateEmailMutation();

  let email = props.step.email;

  const checkEmail = async () => {
    const res = await validateEmail({ email })
  };

  const chackFontEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  { data?.status && props.setSignUpStep(2) }

  const redirectDashBoard = () => {
    window.location.href = '/policies-and-settings'
  }

  return (
    <Form className="w-100 smooth">
      <Row>
        <Col xxl={5} xl={7} lg={10} className="mx-auto">
          <h4 className=" mb-4 fw-bold font-scale-vf">Create your Parnter account</h4>
          <h6 className=" mb-4">
            Create an account to list and manage your property.
          </h6>
          <Form.Label>Email</Form.Label>

          <InputGroup className="mt-3">
            <span className="input-affix-wrapper">
              <Form.Control
                name="email"
                placeholder="Enter your email id"
                type="text"
                onChange={(e) => {
                  props.updateStep(e);
                }}
              />
              {isLoading && (
                <span className="input-suffix"> <Spinner animation="border" size="sm" /></span>
              )}
            </span>
          </InputGroup>

          {(data) && (
            <span className={` ${data?.status ? "text-success" : "text-danger"} ` + "m-1 fs-7"}>{`${data?.message}`}</span>
          )}


          <Form.Check id="logged_in" className="form-check-sm mt-3">
            <Form.Check.Input
              name="agre"
              type="checkbox"
              className="bg-dark"
              defaultChecked
              onChange={(e) => {
                e.target.value = e.target.checked;
                props.updateStep(e);
              }}
            />
            <Form.Check.Label className="text-muted fs-7 text-dark">
              By creating an account you specify that you have read and agree
              with our <Link to="#">Tearms of use</Link> and{" "}
              <Link to="#">Privacy policy</Link>. We may keep you inform about
              latest updates through our default{" "}
              <Link to="#">notification settings</Link>
            </Form.Check.Label>
          </Form.Check>

          <Button
            onClick={checkEmail}
            // onClick={() => { props.setSignUpStep(2) }}
            variant="dark"
            className="btn-rounded btn-uppercase btn-block mt-4"
            disabled={chackFontEmail(props.step.email) && (props.step.agre == 'true') ? false : true}

          >
            Continue
          </Button>

          <div className="title-sm title-wth-divider divider-center my-4"></div>
          <p className="text-dark">
            Do you have questions about your property or the extranet? Visit
            Partner Help or ask another question on the patner Community
          </p>
          <Button
            variant="outline-dark"
            className="btn-outline btn-rounded  btn-block my-5"
            as={Link}
            onClick={redirectDashBoard}
          // to="login"
          >
            Sign in
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Signup;
