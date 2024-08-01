import React, { useState} from "react";
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
import {useLocationSuggestMutation} from "../../../../redux/reducer/api/hotelSlice.js";
import SignupFooter from "../../../../components/footer/SignupFooter.jsx";

const locations = ['Abu Dhabi - United Arab Emirates', 'Abu Dhabi University - Abu Dhabi - United Arab Emirates',];
const Signup = (props) => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [error, setError] = useState(false)


  const [locationSuggest] = useLocationSuggestMutation();

  function handleInputFunction(e) {
    e.preventDefault ();
    if (selectedValue){
        history.push("signup-step-5",{success:true,location:selectedValue});
    } else {
        setError(true);
    }
  }

  // const handleChange = (event) => {
  //     const value = event.target.value;
  //     setInputValue(value);
  //     if (value.length > 0) {
  //         const filteredSuggestions = locations.filter(location => location.toLowerCase().includes(value.toLowerCase()));
  //         setSuggestions(filteredSuggestions);
  //     } else {
  //         setSuggestions([]);
  //     }
  // };
  const handleSelect = (suggestion) => {
      setInputValue(suggestion);
      setSuggestions([]);
      setSelectedValue(suggestion);
  };

    const handleChange = async (event) => {
        const value = event.target.value;
        setInputValue(value);

        if (value.length > 2) { // Fetch suggestions if input length is greater than 2
            try {
                const response = await locationSuggest(value);
                if (response.data) {
                    setSuggestions(response.data.predictions.map((prediction) => prediction.description));
                }
            } catch (error) {
                console.error('Error fetching place suggestions:', error);
            }
        } else {
            setSuggestions([]);
        }
    };

  return (
    // <div className="hk-pg-wrapper py-0">
    //   <div className="hk-pg-body py-0">
        <Container fluid className="pb-10">
          {/*<Row className="auth-split">*/}
            <SimpleHeader />
            <div className="mx-auto w-lg-50 w-md-60 w-xl-35 pt-10 pb-15">
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
                        <InputGroup className={error?"":"mb-3"} style={{ border: `3px solid ${colors.Dark}`, borderRadius: 10 }}>
                            <InputGroup.Text className="rounded-10 border-0">
                                <i className="fa fa-map-marker" style={{ color: colors.Dark1, fontSize: 20 }} />
                            </InputGroup.Text>

                            <Form.Control
                                type="text"
                                value={inputValue}
                                onChange={handleChange}
                                placeholder="Location"
                                style={{
                                    fontSize: 16,
                                    color: colors.Dark,
                                    backgroundColor: colors.white,
                                    borderRadius: 10,
                                    boxShadow: "none",
                                    border: 'none',
                                }}
                            />
                        </InputGroup>
                        {error && <p className="text-danger">Please select a your property location</p>}
                        {suggestions.length > 0 && (
                            <Stack
                                className="position-absolute p-3 overflow-hidden"
                                style={{ width: "100%", top: 45, backgroundColor: colors.white, boxShadow: 1, border: `1px solid ${colors.white1}`, borderRadius: 10 }}
                            >
                                {suggestions.map((suggestion, index) => (
                                    <div
                                        style={{ fontSize: 16, color: colors.Dark }}
                                        className="mb-2"
                                        key={index}
                                        onClick={() => handleSelect(suggestion)}
                                    >
                                        {suggestion}
                                    </div>
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
              {/*<CommanFooter1 />*/}
            </div>
            {/* Page Footer */}
            <SignupFooter/>
        </Container>
    //   </div>
    // </div>
  );
};

export default Signup;


