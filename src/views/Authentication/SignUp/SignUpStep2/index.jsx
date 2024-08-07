import React, {useState} from "react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { getCountryDataList } from 'countries-list'
import '../style.css'
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const SignUpStep2 = (props) => {
  const [errorMessage, setErrorMessage] = useState(false);

  //  get data in server pass => ( props.step.fname ) , ( props.step.lname ) , ( props.step.ccode ) , ( props.step.mobile )

  const FormData = z.object({
    firstName: z.string().min(3, { message: "First Name is required" }),
    lastName: z.string().min(3, { message: "Last Name is required" }),
    phoneNumber:z.string().min(9, { message: "must contain at least 9 digits" })
        .regex(/^\d+$/, { message: "must be a number" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormData),
  });

  const nextPage=()=>{
    if (props.step.countryCode === undefined || props.step.countryCode === null){
      setErrorMessage(true);
    } else{
      props.setSignUpStep(3)
    }
  }

  return (
    <Form className="w-sm-100 w-md-80 w-xl-55 smooth" onSubmit={handleSubmit(nextPage)}>
      {/*<Row>*/}
      {/*  <Col xxl={5} xl={7} lg={10} className="mx-auto">*/}
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
                {...register('firstName')}
                placeholder="Enter your first name"
                onChange={(e) => props.updateStep(e)}
              />
              {errors.firstName?.message && <p className="text-danger">{errors.firstName?.message}</p>}
            </Col>
            <Col sm={6}>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                {...register('lastName')}
                placeholder="Enter your last name"
                onChange={(e) => props.updateStep(e)}
              />
              {errors.lastName?.message && <p className="text-danger">{errors.lastName?.message}</p>}
            </Col>
            <Form.Label className="mt-3">Phone number</Form.Label>
            <InputGroup className={(errors.phoneNumber?.message || errorMessage) ? "": "mb-3"}>
              <Dropdown >
                <Dropdown.Toggle className="bg-white text-black" style={{ borderColor: '#DBDBDB' }}>+{props.step.countryCode}</Dropdown.Toggle>
                <Dropdown.Menu className="overflow-auto" style={{ maxHeight: "200px" }}>
                  {
                    getCountryDataList().map((data, index) => {
                      return (
                        <Dropdown.Item key={index} onClick={(e) => {
                          e.target.name = 'countryCode'
                          e.target.value = data.phone[0]
                          props.updateStep(e)
                        }} >+{data.phone} - {data.name}</Dropdown.Item>
                      )
                    })
                  }
                  <Dropdown.Divider />
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control
                {...register('phoneNumber')}
                aria-label="Text input with dropdown button"
                placeholder="00 0000 000"
                onChange={(e) => props.updateStep(e)}
              />
            </InputGroup>
            {errors.phoneNumber?.message && <p className="text-danger mb-3">{errors.phoneNumber?.message}</p>}
            {errorMessage && <p className="text-danger mb-3">Select a country code</p>}
          </Row>
          <p>{`We'll text a two-factor authentication code to this number when you sign in`}</p>

          <Button
            variant="dark"
            className="btn-rounded btn-uppercase btn-block my-6"
            type="submit"
          >
            Next
          </Button>


      {/*  </Col>*/}
      {/*</Row>*/}
    </Form>
  );
};

export default SignUpStep2;
