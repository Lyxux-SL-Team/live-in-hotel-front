import React, { useState } from "react";
import {
    Button,
    Container,
    Form,
    Stack, InputGroup,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import CommanFooter1 from "../../CommanFooter1";

//Images
import SimpleHeader from "../../SimpleHeader";
import {colors, colors as Colors} from "../../../../configs/colors.js";

const locations = ['Abu Dhabi - United Arab Emirates', 'Abu Dhabi University - Abu Dhabi - United Arab Emirates',];
const Signup = (props) => {
  const [address, setAddress] = useState("");
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

    console.log(inputValue)

  function handleInputFunction(e) {
    e.preventDefault ();
    history.push("signup-step-5");
  }

  const handleChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
      if (value.length > 0) {
          const filteredSuggestions = locations.filter(location => location.toLowerCase().includes(value.toLowerCase()));
          setSuggestions(filteredSuggestions);
      } else {
          setSuggestions([]);
      }
  };
  const handleSelect = (suggestion) => {
      setInputValue(suggestion);
      setSuggestions([]);
  };

  return (
    <div className="hk-pg-wrapper py-0">
      <div className="hk-pg-body py-0">
        <Container fluid>
          {/*<Row className="auth-split">*/}
            <SimpleHeader />
            <div className=" mx-auto w-lg-50 w-md-60 w-xl-35 pt-10">
                <Form onSubmit={handleInputFunction}>
                      <span style={{color:Colors.Grey, fontSize:16}}>Step 1 of 2</span>
                      <h4 className="my-3 font-scale-vf" style={{fontSize:24,color:Colors.Dark}}>
                        Where is your property located?
                      </h4>
                      <p className="mb-3" style={{color:Colors.Dark, fontSize:16}}>
                        Start with your property name, like Hilton Dubai. This
                        will make it easier to find your address.
                      </p>
                    <Container className="position-relative mb-6 px-0">
                        <InputGroup className="mb-3" style={{border:`3px solid ${colors.Dark}`, borderRadius:10}}>
                            <InputGroup.Text className="rounded-10 border-0"><i className="fa fa-map-marker" style={{color:colors.Dark1, fontSize:20}}/></InputGroup.Text>

                            <Form.Control type="text" value={inputValue} onChange={handleChange}
                                          placeholder="Location"
                                          style={{fontSize:16,color:colors.Dark,backgroundColor:colors.white,borderRadius:10, boxShadow:"none", border:'none'}}
                            />
                        </InputGroup>
                        {suggestions.length > 0 && (
                            <Stack className="position-absolute p-3" style={{width:"100%",top:45, backgroundColor:colors.white, boxShadow:1, border:`1px solid ${colors.white1}`,borderRadius:10}}>
                                {suggestions.map((suggestion, index) => (
                                    <option style={{fontSize:16, color:colors.Dark,}} className="mb-2" key={index} onClick={() => handleSelect(suggestion)}>{suggestion}</option>
                                ))}
                            </Stack>
                        )}
                    </Container>
                      <Button
                        className="btn-rounded btn-block"
                        style={{backgroundColor:Colors.Dark, fontSize:16, fontWeight:500}}
                        as={Link}
                        to="signup-step-5"
                        onClick={handleInputFunction}
                      >
                        Next
                      </Button>
                </Form>
              {/* Page Footer */}
              <CommanFooter1 />
            </div>
        </Container>
      </div>
    </div>
  );
};

export default Signup;


