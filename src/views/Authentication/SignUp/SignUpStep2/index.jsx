import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { getCountryDataList } from 'countries-list'
import { Link } from "react-router-dom";
import '../style.css'

const SignUpStep2 = (props) => {

  //  get data in server pass => ( props.step.fname ) , ( props.step.lname ) , ( props.step.ccode ) , ( props.step.mobile )

  return (
    <Form className="w-100 smooth">
      <Row>
        <Col xxl={5} xl={7} lg={10} className="mx-auto">
          <h4 className=" mb-4 fw-bold font-scale-vf">
            Authorized person contact details
          </h4>
          <h6 className=" mb-4">
            Your full name and phone number are needed to ensure the
            security of your liveinhotels account.
          </h6>
          <Row>
            <Col sm={6}>
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="fname"
                placeholder="Enter your first name"
                type="text"
                onChange={(e) => props.updateStep(e)}
              />
            </Col>
            <Col sm={6}>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lname"
                placeholder="Enter your last name"
                type="text"
                onChange={(e) => props.updateStep(e)}
              />
            </Col>
            <Form.Label className="mt-3">Phone number</Form.Label>
            <InputGroup className="mb-3">
              <Dropdown >
                <Dropdown.Toggle className="bg-white text-black" style={{ borderColor: '#DBDBDB' }}>+{props.step.ccode}</Dropdown.Toggle>
                <Dropdown.Menu className="overflow-auto" style={{ maxHeight: "200px" }}>
                  {
                    getCountryDataList().map((data, index) => {
                      return (
                        <Dropdown.Item key={ImageBitmapRenderingContext} onClick={(e) => {
                          e.target.name = 'ccode'
                          e.target.value = data.phone
                          props.updateStep(e)
                        }} >+{data.phone} - {data.name}</Dropdown.Item>
                      )
                    })
                  }
                  <Dropdown.Divider />
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control
                name="mobile"
                aria-label="Text input with dropdown button"
                placeholder="00 0000 000"
                onChange={(e) => props.updateStep(e)}
              />
            </InputGroup>
          </Row>
          <p>{`We'll text a two-factor authentication code to this number when you sign in`}</p>

          <Button
            variant="dark"
            className="btn-rounded btn-uppercase btn-block mt-4"
            disabled={props.step.fname && props.step.lname && props.step.ccode && props.step.mobile.length >= 9 ? false : true}
            onClick={() => props.setSignUpStep(3)}
          >
            Next
          </Button>


        </Col>
      </Row>
    </Form>
  );
};

export default SignUpStep2;
