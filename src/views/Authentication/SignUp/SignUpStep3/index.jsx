import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Row,
} from "react-bootstrap";
import '../style.css'

const SignUpStep3 = (props) => {

  // pass server password is ( props.step.password )

  const [passCheck, setpassCheck] = useState({
    pass: "", cpass: "", match: '', errMassage: ''
  })

  const updatepassCheck = (name, value) => {
    setpassCheck({
      ...passCheck,
      [name]: value,
    })
  }

  const isPasswordValid = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    // return regex.test(passCheck.pass) && passCheck.pass === passCheck.cpass && passCheck.pass.length >= 10;
    if (passCheck.pass.length > 0) {
      const isValidate = regex.test(passCheck.pass) && passCheck.pass === passCheck.cpass && passCheck.pass.length >= 10;
      updatepassCheck('match', `${isValidate}`);
    }
  };

  return (
    <Form className="w-100 smooth">
      <Row>
        <Col xxl={5} xl={7} lg={10} className="mx-auto">
          <h4 className=" mb-4 fw-bold font-scale-vf">Create password</h4>
          <h6 className=" mb-4">
            Use a minimum of 10 characters, including uppercare
            letters, lowercase letters and numbers.
          </h6>
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={passCheck.match == '' ? "" : (passCheck.match == 'true' ? "border-success" : "border-danger")}
            name="password"
            placeholder="Enter your password"
            type="password"
            onChange={(e) => {
              updatepassCheck('pass', e.target.value);
              props.updateStep(e);
            }}
          />
          <Form.Label className="mt-4">Confirm password</Form.Label>
          <Form.Control
            className={passCheck.match == '' ? "" : (passCheck.match == 'true' ? "border-success" : "border-danger")}
            name="chechPassword"
            placeholder="Confirm your password"
            type="password"
            onChange={(e) => {
              updatepassCheck('cpass', e.target.value);
            }}
          />
          <Button
            // onClick={() => props.setSignUpStep(3)}
            onClick={() => props.registerHandler()}
            variant="dark"
            className="btn-rounded  btn-block mt-4"
            disabled={passCheck.pass.length < 1 || passCheck.cpass.length < 1}
          >
            Create account
          </Button>
          <div className="text-center m-2"><p className={passCheck.match == '' ? "" : (passCheck.match == 'true' ? "text-success" : "text-danger")}>
            {
              passCheck.match == 'false' && 'Password and confirm password is not match!' ||
              passCheck.match == 'true' && 'Password and confirm password is matched!'
            }
          </p></div>
        </Col>
      </Row>
    </Form>
  );
};


export default SignUpStep3;
