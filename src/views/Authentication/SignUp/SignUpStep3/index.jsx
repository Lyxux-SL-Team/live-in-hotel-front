import React, {useState} from "react";
import {
    Button,
    Col,
    Form,
    Row,
} from "react-bootstrap";
import '../style.css'
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {colors as Colors} from "../../../../configs/colors.js";

const SignUpStep3 = (props) => {

    // pass server password is ( props.step.password )

    // const [passCheck, setpassCheck] = useState({
    //     pass: "", cpass: "", match: '', errMassage: ''
    // })
    //
    // const updatepassCheck = (name, value) => {
    //     setpassCheck({
    //         ...passCheck,
    //         [name]: value,
    //     })
    // }

    // const isPasswordValid = () => {
    //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    //     // return regex.test(passCheck.pass) && passCheck.pass === passCheck.cpass && passCheck.pass.length >= 10;
    //     if (passCheck.pass.length > 0) {
    //         const isValidate = regex.test(passCheck.pass) && passCheck.pass === passCheck.cpass && passCheck.pass.length >= 10;
    //         updatepassCheck('match', `${isValidate}`);
    //     }
    // };

    const FormData = z.object({
        password: z.string().min(9, "Password must be at least 10 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[a-z]/, "Password must contain at least one lowercase letter").regex(/\d/, "Password must contain at least one digit").regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
        checkPassword: z.string().min(9,'Password must contain at least 10 characters')
    }).refine((data) => data.password === data.checkPassword, {
        message: "Passwords don't match",
        path: ["confirm"],
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(FormData),
    });

    const registerUser=()=>{
        props.registerHandler();
    }

    return (
        <Form className="w-sm-100 w-md-80 w-xl-55 smooth" onSubmit={handleSubmit(registerUser)}>
            <h4 className="mb-4 fw-bold font-scale-vf">Create password</h4>
            <h6 className="mb-4">
                Use a minimum of 10 characters, including uppercase
                letters, lowercase letters and numbers.
            </h6>
            <Form.Label>Password</Form.Label>
            <Form.Control
                {...register('password')}
                placeholder="Enter your password"
                type="password"
                onChange={(e) => props.updateStep(e)}
            />
            {errors.password?.message && <p className="text-danger">{errors.password?.message}</p>}
            <Form.Label className="mt-4">Confirm password</Form.Label>
            <Form.Control
                {...register('checkPassword')}
                placeholder="Confirm your password"
                type="password"
            />
            {errors.checkPassword?.message && <p className="text-danger">{errors.checkPassword?.message}</p>}
            {errors.confirm && <p className="text-danger">{errors.confirm?.message}</p>}
            <Button
                type="submit"
                style={{backgroundColor:Colors.Dark}}
                className="btn-rounded btn-block mt-4"
            >
                Create account
            </Button>
        </Form>
    );
};


export default SignUpStep3;
