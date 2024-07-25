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
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "react-toastify";
import {colors as Colors} from "../../../../configs/colors.js";


const Signup = (props) => {
  const [validateEmail, { isLoading, data }] = useValidateEmailMutation();

  let email = props.step.email;

  const checkEmail = async () => {
    const res = await validateEmail({email});
    if (res.data.status){
      props.setSignUpStep(2);
    } else {
      toast.error(res.data.message, {
        toastId: "toast4",
        position: "top-right",
        className: 'jq-toast-danger',
        theme: 'light',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      })
    }
  };

  // const checkFontEmail = (email) => {
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return regex.test(email);
  // }

  //
  // { data?.status && props.setSignUpStep(2) }

  const FormData = z.object({
    email: z.string().min(1, { message: "Email is required" }).email('Invalid email format')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormData),
  });

  return (
    <Form className="w-sm-100 w-md-80 w-xl-55 smooth"  onSubmit={handleSubmit(checkEmail)}>
          <h4 className="mb-4 font-scale-vf" style={{color:Colors.Dark}}>Create your Partner account</h4>
          <h6 className="mb-4 justify-content-center">
            Create an account to list and manage your property.
          </h6>
          <Form.Label>Email</Form.Label>
          <InputGroup className="mt-3">
            <span className="input-affix-wrapper">
              <Form.Control
                  {...register('email')}
                placeholder="Enter your email id"
                onChange={(e) => {
                  props.updateStep(e);
                }}
              />
              {isLoading && (
                <span className="input-suffix"> <Spinner animation="border" size="sm" /></span>
              )}
            </span>
          </InputGroup>
            {errors.email?.message && <p className="text-danger">{errors.email?.message}</p>}
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
              with our <Link to="#">Terms of use</Link> and{" "}
              <Link to="#">Privacy policy</Link>. We may keep you inform about
              latest updates through our default{" "}
              <Link to="#">notification settings</Link>
            </Form.Check.Label>
          </Form.Check>

          <Button
            type="submit"
            variant="dark"
            className="btn-rounded btn-uppercase btn-block mt-4"
            disabled={(props.step.agre == 'true') ? false : true}
          >
            Continue
          </Button>

          <div className="title-sm title-wth-divider divider-center my-4"></div>
          <p className="text-dark">
            Do you have questions about your property or the extranet? Visit
            Partner Help or ask another question on the partner Community
          </p>
          <Button
            variant="outline-dark"
            className="btn-outline btn-rounded  btn-block my-5 my-md-7 my-lg-5"
            as={Link}
            to='/login'
          >
            Sign in
          </Button>
    </Form>
  );
};

export default Signup;
