import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CommanFooter1 from "../../CommanFooter1";
import * as Icons from "tabler-icons-react";

import "../../../../styles/css/signup.css";
import SimpleHeader from "../../SimpleHeader";

const Signup = (props) => {
  const [propertyName, setPropertyName] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [legalNameOfProperty, setLegalNameOfProperty] = useState("");
  const [selectCurrency, setSelectCurrency] = useState("");
  const [isPropertyChannelManager, setIsPropertyChannelManager] =
    useState(null);
  const [isPropertyPartOfChain, setIsPropertyChain] = useState(null);

  const [isPropertyNameValid, setIsPropertyNameValid] = useState(true);
  const [isPropertyTypeValid, setIsPropertyTypeValid] = useState(true);
  const [isNumberOfRoomsValid, setIsNumberOfRoomsValid] = useState(true);
  const [isLegalNameOfPropertyValid, setIsLegalNameOfPropertyValid] =
    useState(true);
  const [isSelectCurrencyValid, setIsSelectCurrencyValid] = useState(true);
  const [isPropertyChannelManagerValid, setIsPropertyChannelManagerValid] =
    useState(true);
  const [isPropertyPartOfChainValid, setIsPropertyPartOfChainValid] =
    useState(true);

  const validateForm = () => {
    let isValid = true;

    if (propertyName.trim() === "") {
      setIsPropertyNameValid(false);
      isValid = false;
    } else {
      setIsPropertyNameValid(true);
    }

    if (propertyType.trim() === "") {
      setIsPropertyTypeValid(false);
      isValid = false;
    } else {
      setIsPropertyTypeValid(true);
    }

    if (numberOfRooms.trim() === "") {
      setIsNumberOfRoomsValid(false);
      isValid = false;
    } else {
      setIsNumberOfRoomsValid(true);
    }

    if (legalNameOfProperty.trim() === "") {
      setIsLegalNameOfPropertyValid(false);
      isValid = false;
    } else {
      setIsLegalNameOfPropertyValid(true);
    }

    if (selectCurrency.trim() === "") {
      setIsSelectCurrencyValid(false);
      isValid = false;
    } else {
      setIsSelectCurrencyValid(true);
    }

    if (isPropertyChannelManager === null) {
      setIsPropertyChannelManagerValid(false);
      isValid = false;
    } else {
      setIsPropertyChannelManagerValid(true);
    }

    if (isPropertyPartOfChain === null) {
      setIsPropertyPartOfChainValid(false);
      isValid = false;
    } else {
      setIsPropertyPartOfChainValid(true);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      props.history.push("/dashboard");
    }
  };

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
                <Form className="w-100" onSubmit={handleSubmit}>
                  <Row>
                    <Col xxl={7} xl={7} lg={10} className="mx-auto" gap={5}>
                      <div className="form-step">
                        <span className="fs-7 text-light">Step 2 of 2</span>
                        <h4 className="font-scale-vf">
                          Tell us a little about your property
                        </h4>

                        {/* Property Name */}
                        <p className="fw-bolder text-black">Property name</p>
                        <Form.Group className="mb-3">
                          <Form.Label>Enter your property name</Form.Label>
                          <Form.Control
                            onChange={(e) => setPropertyName(e.target.value)}
                            placeholder="Enter your property name"
                            type="text"
                            className={!isPropertyNameValid ? "is-invalid" : ""}
                          />
                          {!isPropertyNameValid && (
                            <Form.Text className="invalid-feedback">
                              Please enter the property name.
                            </Form.Text>
                          )}
                        </Form.Group>

                        {/* Property Type */}
                        <p className="fw-bolder text-black">Property Type</p>
                        <Form.Group className="mb-3">
                          <Form.Label>Select property type</Form.Label>
                          <Form.Select
                            onChange={(e) => setPropertyType(e.target.value)}
                            className={!isPropertyTypeValid ? "is-invalid" : ""}
                          >
                            <option value="">-Select-</option>
                            <option value="1">Abidabi</option>
                            <option value="2">Abidabi</option>
                          </Form.Select>
                          {!isPropertyTypeValid && (
                            <Form.Text className="invalid-feedback">
                              Please select property type.
                            </Form.Text>
                          )}
                        </Form.Group>

                        {/* Number of Rooms */}
                        <p className="fw-bolder text-black">Number of rooms</p>
                        <Form.Group className="mb-3">
                          <Form.Control
                            onChange={(e) => setNumberOfRooms(e.target.value)}
                            placeholder="Enter Number of rooms"
                            type="text"
                            className={
                              !isNumberOfRoomsValid ? "is-invalid" : ""
                            }
                          />
                          {!isNumberOfRoomsValid && (
                            <Form.Text className="invalid-feedback">
                              Please enter number of rooms.
                            </Form.Text>
                          )}
                        </Form.Group>

                        {/* Legal Name of Property */}
                        <p className="fw-bolder text-black">
                          Legal name of your property
                        </p>
                        <Form.Group className="mb-3">
                          <Form.Control
                            onChange={(e) =>
                              setLegalNameOfProperty(e.target.value)
                            }
                            placeholder="Enter Legal name of your property"
                            type="text"
                            className={
                              !isLegalNameOfPropertyValid ? "is-invalid" : ""
                            }
                          />
                          {!isLegalNameOfPropertyValid && (
                            <Form.Text className="invalid-feedback">
                              Please enter legal name of your property.
                            </Form.Text>
                          )}
                        </Form.Group>

                        {/* Currency */}
                        <p className="fw-bolder text-black">Currency</p>
                        <Form.Group className="mb-3">
                          <Form.Select
                            onChange={(e) => setSelectCurrency(e.target.value)}
                            className={
                              !isSelectCurrencyValid ? "is-invalid" : ""
                            }
                          >
                            <option value="">
                              United Arab Emirates Dirhams
                            </option>
                            <option value="lkr">LKR</option>
                            <option value="kud">KUD</option>
                          </Form.Select>
                          {!isSelectCurrencyValid && (
                            <Form.Text className="invalid-feedback">
                              Please select currency.
                            </Form.Text>
                          )}
                        </Form.Group>

                        {/* Channel Manager */}
                        <p className="fw-bolder text-black">
                          Does this property work with a channel manager?{" "}
                          <span className="text-light">
                            <Icons.InfoSquare />
                          </span>
                        </p>
                        <Form.Group className="mb-3">
                          <Form.Check
                            type="radio"
                            name="channel-manager"
                            value={true}
                            onChange={(e) =>
                              setIsPropertyChannelManager(e.target.value)
                            }
                            label="Yes"
                            id="channel-manager-yes"
                            className={
                              !isPropertyChannelManagerValid ? "is-invalid" : ""
                            }
                          />
                          <Form.Check
                            type="radio"
                            name="channel-manager"
                            value={false}
                            onChange={(e) =>
                              setIsPropertyChannelManager(e.target.value)
                            }
                            label="No"
                            id="channel-manager-no"
                            className={
                              !isPropertyChannelManagerValid ? "is-invalid" : ""
                            }
                          />
                          {!isPropertyChannelManagerValid && (
                            <Form.Text className="invalid-feedback">
                              Please select whether property uses a channel
                              manager.
                            </Form.Text>
                          )}
                        </Form.Group>

                        {/* Property Chain */}
                        <p className="fw-bolder text-black">
                          Is this property part of a chain?{" "}
                          <span className="text-light">
                            <Icons.InfoSquare />
                          </span>
                        </p>
                        <Form.Group className="mb-3">
                          <Form.Check
                            type="radio"
                            name="is-chain"
                            value={true}
                            onChange={() => setIsPropertyChain(true)}
                            label="Yes"
                            id="is-chain-yes"
                            className={
                              !isPropertyPartOfChainValid ? "is-invalid" : ""
                            }
                          />
                          <Form.Check
                            type="radio"
                            name="is-chain"
                            value={false}
                            onChange={() => setIsPropertyChain(false)}
                            label="No"
                            id="is-chain-no"
                            className={
                              !isPropertyPartOfChainValid ? "is-invalid" : ""
                            }
                          />
                          {!isPropertyPartOfChainValid && (
                            <Form.Text className="invalid-feedback">
                              Please select whether property is part of a chain.
                            </Form.Text>
                          )}
                        </Form.Group>

                        {/* Submit Button */}
                        <Button
                          variant="dark"
                          className="btn-rounded btn-block mb-3"
                          type="submit"
                        >
                          Next
                        </Button>
                      </div>
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
