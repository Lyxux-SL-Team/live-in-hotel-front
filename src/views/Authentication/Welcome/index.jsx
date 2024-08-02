import React from "react";
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import CommanFooter1 from "../CommanFooter1";
import loginImage from "../../../assets/img/login-img.png";
import {useSelector} from "react-redux";
import {colors as Colors} from "../../../configs/colors.js";
import {Link} from "react-router-dom";
import {useIsHotelVerifiedMutation} from "../../../redux/reducer/api/hotelSlice.js";
import {toast} from "react-toastify";
import {useIsPropertyVerifiedMutation} from "../../../redux/reducer/api/propertySlice.js";

function Welcome(props) {

  const user = useSelector(state => state.auth.user);
  const [isHotelVerified , { isLoad }] = useIsHotelVerifiedMutation();
  const [isPropertyVerified , { isLoading }]= useIsPropertyVerifiedMutation();

  const titleStyle={color:Colors.Dark, fontSize:18, fontWeight:500}
  const descStyle = {color:Colors.Dark, fontSize:16}
  const message =props.location.state;
  const handleSubmit= async ()=>{
    if(message.type==="Hotel"){
      const res = await isHotelVerified(message.data._id);
      if (res.data.success){
        props.history.push('/property-contract',{message})
      } else{
        toast.error("Please Confirm the Email", {
          toastId: "toast4",
          position: "top-right",
          className: 'jq-toast-danger',
          theme: 'light',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }
    }
    if(message.type==="Property"){
      const res = await isPropertyVerified(message.data._id);
      if (res.data?.success){
        props.history.push('/property-contract',{message})
      } else{
        toast.error(res.error.data.message, {
          toastId: "toast4",
          position: "top-right",
          className: 'jq-toast-danger',
          theme: 'light',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }
    }


  }
  return (
      <Container fluid className="hk-pg-wrapper py-0">
        <Row className="auth-split">
          <Col xl={5}
               lg={5}
               md={5}
               className="p-0 d-md-block d-none position-relative overflow-hidden d-sm-none" style={{backgroundColor:"rgba(0, 0, 0, 0.32)"}}>
            <img src={loginImage} alt="live in hotel" className="bg-img" />
          </Col>
            <Col sm={12} xs={12} md={7} lg={7} className="position-relative mx-auto my-auto">
              <div className="mx-5 mx-lg-10 mx-xl-15 pt-5 pb-15 pb-lg-10" style={{minHeight:"100vh"}}>
                <h4 className="mb-3 font-scale-vf" style={{color:Colors.Dark}}>Welcome to LiveInHotel</h4>
                <p className="mb-3" style={descStyle}>
                  We'll send an email to {user.email} to verify your account
                  and let you know what to expect next.
                </p>
                <h6 className="mb-3" style={titleStyle}>To build your listing you'll need:</h6>
                <ul className="mb-4" style={{...descStyle, listStyleType: "disc" }}>
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
                <h6 className="mb-3" style={titleStyle}>Unsure if you have enough</h6>
                <p style={descStyle}>
                  No need to worry! We'll guide you through each step, and
                  you'll have the opportunity to edit your listing before it
                  goes live.
                </p>
                <Button
                    style={{backgroundColor:Colors.Dark, fontSize:16, fontWeight:500}}
                    className="btn-rounded col-11 mt-5"
                    onClick={handleSubmit}
                >
                  <span>
                    <span>Continue</span>
                    {(isLoading || isLoad) && (
                     <span className="input-suffix ms-3"> <Spinner animation="border" size="sm" /></span>
                    )}
                  </span>
                </Button>
              </div>
              <CommanFooter1 />
            </Col>
        </Row>
      </Container>
  );
}

export default Welcome;
