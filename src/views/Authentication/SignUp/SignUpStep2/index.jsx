import React from "react";
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


  //  get data in server pass => ( props.step.fname ) , ( props.step.lname ) , ( props.step.ccode ) , ( props.step.mobile )

  const FormData = z.object({
    fname: z.string().min(3, { message: "First Name is required" }),
    lname: z.string().min(3, { message: "Last Name is required" }),
    mobile:z.string().regex(/^\d+$/, { message: "must be a number" })
        .min(9, { message: "must contain at least 9 digits" })
    // mobile: z.number({ message: "must be a number"}).min(9, { message: "must contain at least 9 digits" })
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormData),
  });

  const nextPage=()=>{
    props.setSignUpStep(3)
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
                {...register('fname')}
                placeholder="Enter your first name"
                onChange={(e) => props.updateStep(e)}
              />
              {errors.fname?.message && <p className="text-danger">{errors.fname?.message}</p>}
            </Col>
            <Col sm={6}>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                {...register('lname')}
                placeholder="Enter your last name"
                onChange={(e) => props.updateStep(e)}
              />
              {errors.lname?.message && <p className="text-danger">{errors.lname?.message}</p>}
            </Col>
            <Form.Label className="mt-3">Phone number</Form.Label>
            <InputGroup className={errors.mobile?.message ? "": "mb-3"}>
              <Dropdown >
                <Dropdown.Toggle className="bg-white text-black" style={{ borderColor: '#DBDBDB' }}>+{props.step.ccode}</Dropdown.Toggle>
                <Dropdown.Menu className="overflow-auto" style={{ maxHeight: "200px" }}>
                  {
                    getCountryDataList().map((data, index) => {
                      return (
                        <Dropdown.Item key={index} onClick={(e) => {
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
                {...register('mobile')}
                aria-label="Text input with dropdown button"
                placeholder="00 0000 000"
                onChange={(e) => props.updateStep(e)}
              />
            </InputGroup>
            {errors.mobile?.message && <p className="text-danger mb-3">{errors.mobile?.message}</p>}
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
