import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import { z } from "zod";
import {colors as Colors} from "../../../../configs/colors.js";
import {useLoginMutation} from "../../../../redux/reducer/api/authSlice.js";
import {useDispatch, useSelector} from "react-redux";
import { setUser } from "../../../../redux/reducer/authSlice";
import {toast} from "react-toastify";
import CommanFooter1 from "../../CommanFooter1.jsx";
import { useForm } from 'react-hook-form';

//Images
import loginImage from '../../../../assets/img/login-img.png';
import {zodResolver} from "@hookform/resolvers/zod";



const Login = () => {
    const [userDetails, setUserDetails] = useState([]);
    const user = useSelector(state => state.auth.user);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();

    const [login] = useLoginMutation();

    const userLogin = async (data) => {
        resetField("password");
        const res = await login(data);
        if (res.data?.success) {
            dispatch(setUser(res.data))
            navigate();
        } else {
            toast.error(res.error.data.message, {
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
    const navigate = () => {
        window.location.href = "/dashboard";
    }

    if (user && token) {
        return <Redirect to="/dashboard" />
    }

    const FormData = z.object({
        email: z.string().min(1, { message: "Email is required" }).email('Invalid email format'),
        password: z.string().min(1,'Password is required')
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField
    } = useForm({
        resolver: zodResolver(FormData),
    });

    const handleChanges=(e)=>{
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const textStyle={
        fontFamily:"Poppins",
        fontWeight:500,
        fontSize:18,
        color:Colors.Dark
    }

    const inputStyle={
        color:Colors.Grey,
        fontSize:15,
        fontFamily:"Poppins",
        fontWeight:400
    }

    return (
        <Container fluid className="hk-pg-wrapper py-0">
            <Row className="auth-split">
                <Col xl={4}
                     lg={4}
                     md={5}
                     className="p-0 d-md-block d-none position-relative overflow-hidden d-sm-none" style={{backgroundColor:"rgba(0, 0, 0, 0.32)"}}>
                    <img src={loginImage} alt="live in hotel" className="bg-img" />
                </Col>
                <Col sm={12} xs={12} md={7} lg={8} className="position-relative mx-auto">
                    <Form className="mx-5 mx-lg-20 mx-xl-30 pt-15 pt-lg-20" onSubmit={handleSubmit(userLogin)}>
                        <Form.Group className="mb-3">
                            <Form.Label style={textStyle}>Email Address</Form.Label>
                            <Form.Control {...register('email')} placeholder="Enter email" style={inputStyle} onChange={handleChanges}/>
                            {errors.email?.message && <p className="text-danger">{errors.email?.message}</p>}
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label style={textStyle}>Password</Form.Label>
                            <Form.Control type="password" {...register('password')} placeholder="Enter password" style={inputStyle} onChange={handleChanges}/>
                            {errors.password?.message && <p className="text-danger">{errors.password?.message}</p>}
                        </Form.Group>
                        <Button type="submit" style={{fontFamily:"Poppins", fontSize:16}} variant="primary" className="rounded-10 col-12 py-2 mb-3">Log in</Button>
                        <div className="text-center">
                        <Link className="text-center" to="/reset-password">Forgot your password?</Link>
                        </div>
                    </Form>
                    {/* Page Footer */}
                    <CommanFooter1 />
                </Col>
            </Row>
        </Container>
    )
}

export default Login