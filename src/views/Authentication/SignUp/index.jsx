  import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";



//pages
import CommanFooter1 from "../CommanFooter1";
import Signup from "./Signup";
import SignUpStep2 from "./SignUpStep2";
import SignUpStep3 from "./SignUpStep3";

//Images
import logo from "../../../assets/img/logo-light.png";
import bgVideo from "../../../assets/video/signupBg.mp4";
import { useRegisterMutation } from "../../../redux/reducer/api/authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/reducer/authSlice";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Index = () => {
  const user = useSelector(state => state.auth.user)
    const token = useSelector(state => state.auth.token)
    const [signUpStep, setSignUpStep] = useState(1);
    const [register, { isLoading, isError, error, data }] = useRegisterMutation();

    const dispatch = useDispatch()
    
    const [step1, setstep1] = useState({
      email: "",
      agre: "true",
    });
    
    const [step2, setstep2] = useState({
      fname: "",
      lname: "",
      ccode: "94",
      mobile: "",
    });
    
    const [step3, setstep3] = useState({
      password: "",
    });

    
    if (user && token) {
        return <Redirect to="/property-contract" />
    }



    const registerHandler = async() => {
      const contact = String(step2.ccode) + String(step2.mobile);
      const res = await register({
        email: step1.email,
        password: step3.password,
        firstName: step2.fname,
        lastName: step2.lname,
        contact: contact,
      });
      
    
      if (res.data.status) {
        dispatch(setUser(res.data))
        navigate();
      }else{
        toast.error(res.data.message, {
          toastId: "toast4",
          position: "top-right",
          className: 'jq-toast-danger',
          theme: 'light',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
      })}
    }

 

  const userRegister = async () => {
    const res = await register({
      email: step1.email,
      password: step3.password,
      firstName: step2.fname,
      lastName: step2.lname,
      contact: step2.mobile,
    })
    if (res.data.status) {
      navigate()
    }
  };
  const navigate = () => {
    window.location.href = "/auth/signup-step-4";
  }


  const updateStep = (e) => {
    switch (signUpStep) {
      case 1:
        setstep1({
          ...step1,
          [e.target.name]: e.target.value,
        });
        break;
      case 2:
        setstep2({
          ...step2,
          [e.target.name]: e.target.value,
        });
        break;
      case 3:
        setstep3({
          ...step3,
          [e.target.name]: e.target.value,
        });
        break;
    }
  };

  return (
    <div className="hk-pg-wrapper py-0">

      <div className="hk-pg-body py-0">
        <Container fluid>
          <Row className="auth-split">
            <Col
              xl={5}
              lg={6}
              md={5}
              className=" p-0 d-md-block d-none position-relative overflow-hidden"
            >
              <video className=" bg-img" autoPlay loop muted src={bgVideo} />
            </Col>
            <Col
              xl={7}
              lg={6}
              md={7}
              sm={10}
              className="position-relative mx-auto"
            >
              <div className="auth-content flex-column pt-8 pb-md-8 pb-13">
                <div className="text-center mb-7">
                  <Link to="/" className="navbar-brand me-0">
                    <img
                      className="brand-img d-inline-block w-45"
                      src={logo}
                      alt="brand"
                    />
                  </Link>
                </div>
                {signUpStep == 1 ? (
                  <Signup
                    setSignUpStep={setSignUpStep}
                    step={step1}
                    updateStep={updateStep}
                  />
                ) : null}
                {signUpStep == 2 ? (
                  <SignUpStep2
                    setSignUpStep={setSignUpStep}
                    step={step2}
                    updateStep={updateStep}
                  />
                ) : null}
                {signUpStep == 3 ? (
                  <SignUpStep3
                    setSignUpStep={setSignUpStep}
                    step={step3}
                    updateStep={updateStep}
                    userRegister={userRegister}
                    isLoading={isLoading}
                    registerHandler={registerHandler}
                  />
                ) : null}
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

export default Index;
