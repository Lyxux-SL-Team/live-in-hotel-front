import React, {useState} from 'react';
import {Button, Container, Form, InputGroup, ListGroup, OverlayTrigger, Popover, Spinner, Stack} from "react-bootstrap";
import InputMask from 'react-input-mask';
import {colors, colors as Colors} from '../../configs/colors.js'
import InfoIcon from "../../assets/img/info-icon.png";
import './index.css'
import {X} from "tabler-icons-react";
import {useHistory} from "react-router-dom";
import DropDownLabelCustomize from "../../components/CustomDropDown/DropDownLabelCustomize.jsx";
import {useRegisterPolicyMutation} from "../../redux/reducer/api/policySlice.js";
import {toast} from "react-toastify";
import InputWithArrowUpAndDown from "../../components/CustomInput/InputWithArrowUpAndDown.jsx";

const paymentMethodList = ["Credit / debit cards","Debit cards","JCB International","Visa","Discover","Mastercard","Carte Blanche","American Express","UnionPay","Diners Club","Bank transfer","Cheque (local only)","Crypto","Installments payments offered at front desk (for locals only)","Cash"];
const paymentInstallList = ["Monthly","Quarterly","Half year","Yearly"];
const cancellationList = ["24-hour cancellation window","48-hour cancellation window","72-hour cancellation window","Non-refundable"];
const taxList = ["City tax","Federal tax","Occupancy tax","District tax","Hotel tax","Goods and services tax (GST)","Harmonized sales tax (HST)","Value added tax (VAT)","VAT","Property Charges","Municipality","Tourism"];
const rentalList =["1","2","3","4","5","6","7","8","9","10","11","12"];
const languageList =["English","Hebrew","Arabic"];
const discountList =["50 % of booking amount","100 % of booking amount"];
const regulatoryList = [
    {
        title:"Professional host",
        description:"Providing accommodation is related to your trade, business, or profession."
    },
    {
        title:"Private host",
        description:"Providing accommodation is not related to your trade, business, or profession."
    },
]
function Index2(props) {
    const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);
    const [policyData, setPolicyData] = useState({deposit:{options:[]},installPayment:{options:[]}, rental:{options:[]}});
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const [registerPolicy,{isLoad}]=useRegisterPolicyMutation();
    const message =props.location.state;

    console.log(policyData)

    const handlePaymentMethod=(e)=>{
        const {checked,value}= e.target;
        if (checked){
            setSelectedPaymentMethods([...selectedPaymentMethods, value]);
        } else{
         setSelectedPaymentMethods(
            selectedPaymentMethods.filter((data) => data !== value))
        }
    }

    const handleDeposit = (e) => {
        const { name, checked } = e.target;
        setPolicyData((prevState) => {
            const depositExists = prevState.deposit?.find((d) => d.name === name);
            if (checked && !depositExists) {
                return {
                    ...prevState,
                    deposit: [...prevState.deposit, { name: name, availability: checked, amount: 0 }]
                };
            } else if (!checked) {
                return {
                    ...prevState,
                    deposit: prevState.deposit.filter((d) => d.name !== name)
                };
            }
            return prevState;
        });
    };

    const handleDepositAmount = (e) => {
        const { name, value } = e.target;
        setPolicyData((prevState) => {
            const updatedDeposits = prevState.deposit.map((d) => {
                if (d.name === name) {
                    return { ...d, amount: value };
                }
                return d;
            });
            return { ...prevState, deposit: updatedDeposits };
        });
    };

    const handlePaymentInstall = (e) => {
        const { name, checked } = e.target;
        setPolicyData((prevState) => {
            const paymentExists = prevState.installPercentage?.find((d) => d.name === name);
            if (checked && !paymentExists) {
                return {
                    ...prevState,
                    installPercentage: [...prevState.installPercentage, { name: name, availability: checked, percentage: 0 }]
                };
            } else if (!checked) {
                return {
                    ...prevState,
                    installPercentage: prevState.installPercentage.filter((d) => d.name !== name)
                };
            }
            return prevState;
        });
    };

    const handlePercentage = (e) => {
        const { name, value } = e.target;
        setPolicyData((prevState) => {
            const updatedPayment = prevState.installPercentage.map((d) => {
                if (d.name === name) {
                    return { ...d, percentage: value };
                }
                return d;
            });
            return { ...prevState, installPercentage: updatedPayment };
        });
    };

    const handleTaxAndFees = (e) => {
        const { name, checked } = e.target;
        setPolicyData((prevState) => {
            const paymentExists = prevState.taxAndFees?.find((d) => d.name === name);
            if (checked && !paymentExists) {
                return {
                    ...prevState,
                    taxAndFees: [...prevState.taxAndFees, { name: name, availability: checked, percentage: 0 }]
                };
            } else if (!checked) {
                return {
                    ...prevState,
                    taxAndFees: prevState.taxAndFees.filter((d) => d.name !== name)
                };
            }
            return prevState;
        });
    };

    const handleTaxPercentage = (e) => {
        const { name, value } = e.target;
        setPolicyData((prevState) => {
            const updatedPayment = prevState.taxAndFees.map((d) => {
                if (d.name === name) {
                    return { ...d, percentage: value };
                }
                return d;
            });
            return { ...prevState, taxAndFees: updatedPayment };
        });
    };

    const handleRental = (e) => {
        const { name, value } = e.target;
        const availability = value === 'true';

        setPolicyData((prevState) => {
            const paymentExists = prevState.rentalDiscount?.find((d) => d.name === name);
            if (availability && !paymentExists) {
                return {
                    ...prevState,
                    rentalDiscount: [...prevState.rentalDiscount, { name: name, availability: availability, percentage: 0 }]
                };
            } else if (!availability) {
                return {
                    ...prevState,
                    rentalDiscount: prevState.rentalDiscount.map((d) =>
                        d.name === name ? { ...d, availability: false, percentage: 0 } : d
                    )
                };
            }
            return prevState;
        });
    };

    const handleRentalPercentage = (e) => {
        const { name, value } = e.target;
        setPolicyData((prevState) => {
            const updatedPayment = prevState.rentalDiscount.map((d) => {
                if (d.name === name) {
                    return { ...d, percentage: value };
                }
                return d;
            });
            return { ...prevState, rentalDiscount: updatedPayment };
        });
    };

    const handleLanguageChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        if (value.length > 0) {
            const filteredSuggestions = languageList.filter(lan => lan.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelect = (suggestion) => {
        setInputValue('');
        setSuggestions([]);
        setSelectedLanguages((prevSelectedLanguages) => {
            if (prevSelectedLanguages.includes(suggestion)) {
                return prevSelectedLanguages;
            } else {
                return [...prevSelectedLanguages, suggestion];
            }
        });
    };

    const handleDelete = (index) => {
        const newSelectedLanguages = selectedLanguages.filter((_, i) => i !== index);
        setSelectedLanguages(newSelectedLanguages);
    };

    const handleSubmit = async ()=>{
        const data={...policyData, languages:selectedLanguages, paymentMethods:selectedPaymentMethods, admin:message.data.admin}

        if(message.type==="Hotel"){
            const updatedData = {...data, hotel:message.data._id}
            const res = await registerPolicy(updatedData);
            if (res?.data?.success){
                props.history.push('/property-amenities', message)
            } else if(res?.error?.data?.message){
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
        if(message.type==="Property"){
            const updatedData = {...data, property:message.data._id}
            const res = await registerPolicy(updatedData);
            if (res?.data?.success){
                props.history.push('/property-amenities', message)
            } else if(res?.error?.data?.message){
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


    //setPolicyData(prevState => {
    //                 const newState = { ...prevState };
    //                 const keys = path.split('.');
    //                 let currentLevel = newState;
    //                 keys.slice(0, -1).forEach(key => {
    //                     if (!currentLevel[key]) {
    //                         currentLevel[key] = {};
    //                     }
    //                     currentLevel = currentLevel[key];
    //                 });
    //                 currentLevel[keys[keys.length - 1]] = value;
    //                 return newState;
    //             });
    const handleUpdate = (path, value, type='default', event = null) => {
        setPolicyData(prevState => {
            const newState = { ...prevState };
            const keys = path.split('.');
            let currentLevel = newState;

            if (type === 'default') {
                keys.slice(0, -1).forEach(key => {
                    if (!currentLevel[key]) {
                        currentLevel[key] = {};
                    }
                    currentLevel = currentLevel[key];
                });
                currentLevel[keys[keys.length - 1]] = value;
            } else if (type === 'checked' && event) {
                const optionName = event.target.name;
                const isOptionExist = currentLevel[keys[0]]?.options?.find(d => d.option === optionName);

                if (value && !isOptionExist) {
                    currentLevel[keys[0]].options.push({ option: optionName, isAvailable: event.target.checked });
                } else if (!value) {
                    currentLevel[keys[0]].options = currentLevel[keys[0]].options.map(d =>
                        d.option === optionName ? { ...d, isAvailable: event.target.checked } : d
                    );
                }
            } else if ((type === 'amount' || type === 'percentage') && event) {
                const optionName = event.target.name;
                const optionIndex = currentLevel[keys[0]].options.findIndex(d => d.option === optionName);

                if (optionIndex !== -1) {
                    currentLevel[keys[0]].options[optionIndex][type] = value;
                }
            }else if (type === 'rental' && event) {
                const optionName = event.target.name;
                const isOptionExist = currentLevel[keys[0]]?.options?.find(d => d.option === optionName);

                if (!isOptionExist) {
                    currentLevel[keys[0]].options.push({ option: optionName, isAvailable: value });
                } else {
                    currentLevel[keys[0]].options = currentLevel[keys[0]].options.map(d =>
                        d.option === optionName ? { ...d, isAvailable: value } : d
                    );
                }
            }
                return newState;
        });
    };

    const popover = (
        <Popover id="popover-basic" className="custom-popover ms-3">
            <Popover.Body style={{color:colors.white,fontSize:10, backgroundColor:colors.FooterBlue, }}>
                If you have an additional charges you can add (optional)
            </Popover.Body>
        </Popover>
    );

    const titleStyle = {fontSize:18, color:Colors.Dark};
    const descStyle = {fontSize:14, color:Colors.Grey};
    const labelStyle = {fontSize:14, color:Colors.Dark};
    const depositLabelStyle = {fontSize:12, color:Colors.Grey};
    const paymentInstallLabelStyle = {fontSize:12, color:Colors.FooterBlue};
    const borderStyle = {border:`1px solid ${Colors.Grey3}`, borderRadius:10};
    const inputBorderStyle = {border:`1px solid ${Colors.Dark}`, borderRadius:10, boxShadow:"none"};
    const inputLanBorderStyle = {border:`1px solid ${Colors.Grey3}`, borderRadius:10, boxShadow:"none"};
    const inputDepositStyle = {...inputBorderStyle,fontSize:14, color:Colors.Dark};
    const inputPaymentInstallStyle = {...inputBorderStyle,fontSize:14, color:Colors.FooterBlue};
    const buttonStyle = {fontSize:14, color:Colors.white, backgroundColor:Colors.Dark, border:`1px solid ${Colors.Grey3}`}
    return (
        <Container className="py-3 ps-3 pe-3 pe-md-5">

            {/* language*/}
            <Container className="p-3">
            <h3 className="mb-3" style={titleStyle}>Which languages are spoken at your property?</h3>
            <Stack direction="horizontal" gap={2} className="mb-3">
            {selectedLanguages.map((data, index) => (

                <div key={index} className='my-2 px-2 py-1' style={{border:`1px solid ${Colors.Grey3}`, borderRadius:20, width:"fit-content"}}>
                    <span style={labelStyle}>{data}</span>
                    <X className="ms-1" color={Colors.Grey} size={15} onClick={() => handleDelete(index)}/>
                </div>

            ))}
            </Stack>
            <p className="mb-2" style={descStyle}>Add a language</p>
            <Stack className="position-relative mb-2 px-0 w-90 w-md-40">
            <InputGroup style={inputLanBorderStyle}>
                <Form.Control type="text" value={inputValue} onChange={handleLanguageChange}
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
            </Stack>
            </Container>

            {/* Payment methods*/}
            <Container className="p-3 mb-3" style={borderStyle}>
                <h3 className="mb-3" style={titleStyle}>Which payment methods do you accept at your property?</h3>
                <p className="mb-3" style={descStyle}>Types of card you accept:</p>
                {
                    paymentMethodList.slice(0,12).map((data,index)=>(
                        <Form.Check className="mb-2" key={index} type="checkbox" label={data} value={data} onChange={handlePaymentMethod} />
                    ))
                }
                <p className="mb-3" style={descStyle}>Other settings:</p>
                {
                    paymentMethodList.slice(13).map((data,index)=>(
                        <Form.Check className="mb-2" key={index} type="checkbox" label={data} value={data} onChange={handlePaymentMethod} />
                    ))
                }
            </Container>

            {/* deposit*/}
            <Container className="p-3 mb-3" style={borderStyle}>
                <h3 className="mb-3" style={titleStyle}>Do you require any deposits?</h3>
                <Button
                    style={{...buttonStyle, backgroundColor:policyData.deposit?.isDeposit ? '':Colors.white, color:policyData.deposit?.isDeposit? '':Colors.Dark}}
                    className="btn-rounded mb-3"
                    type="button"
                    onClick={() => handleUpdate('deposit.isDeposit', true)}
                >
                    Yes
                </Button>
                <Button
                    style={{...buttonStyle, backgroundColor:policyData.deposit?.isDeposit===false? '':Colors.white,color:policyData.deposit?.isDeposit===false? '':Colors.Dark}}
                    className="btn-rounded mb-3 ms-3"
                    type="button"
                    onClick={() => handleUpdate('deposit.isDeposit', false)}
                >
                    No
                </Button>
                {
                    policyData?.deposit?.isDeposit &&
                    <>
                        {
                            ["Yearly", "Monthly"].map((data) => (
                                <div key={data}>
                                    <Form.Check className="mb-2" type="checkbox" name={data} label={`${data} Deposit`} style={labelStyle} onChange={(e) => handleUpdate('deposit.options', e.target.checked, 'checked', e)} />
                                    {
                                        policyData.deposit.options.find(option => option.option === data)?.isAvailable &&
                                        <Form.Group className="mb-3 w-100 w-md-20">
                                            <Form.Label style={depositLabelStyle}>How much</Form.Label>
                                            <Form.Control
                                                type="number"
                                                style={inputDepositStyle}
                                                name={data}
                                                value={policyData.deposit.options.find(option => option.option === data)?.amount || ''}
                                                onChange={(e) => handleUpdate('deposit.options', e.target.value, 'amount', e)}
                                            />
                                        </Form.Group>
                                    }
                                </div>
                            ))
                        }
                    </>
                }
            </Container>

            {/* payment install*/}
            <Container className="p-3 mb-3" style={borderStyle}>
                <h3 className="mb-3" style={titleStyle}>Do you accept install payments</h3>
                <Button
                    style={{...buttonStyle, backgroundColor:policyData?.installPayment?.isInstallPayment? '':Colors.white, color:policyData?.installPayment?.isInstallPayment ? '':Colors.Dark}}
                    className="btn-rounded mb-3"
                    type="button"
                    onClick={() => handleUpdate('installPayment.isInstallPayment', true)}

                >
                    Yes
                </Button>
                <Button
                    style={{...buttonStyle, backgroundColor:policyData?.installPayment?.isInstallPayment===false? '':Colors.white,color:policyData?.installPayment?.isInstallPayment===false? '':Colors.Dark}}
                    className="btn-rounded mb-3 ms-3"
                    type="button"
                    onClick={() => handleUpdate('installPayment.isInstallPayment', false)}
                >
                    No
                </Button>
                {
                    policyData?.installPayment?.isInstallPayment &&
                    <>
                    {
                        paymentInstallList.map((data, index)=>(
                            <div key={index}>
                                <Form.Check className="mb-2" type="checkbox" name={data} label={data} style={labelStyle} onChange={(e)=>handleUpdate('installPayment.options', e.target.checked, 'checked', e)} />
                                {
                                    policyData.installPayment.options.find(option => option.option === data)?.isAvailable && (
                                        <InputGroup className="mb-3 w-40 w-md-10 ms-4 position-relative">
                                            <InputMask className='form-control' style={inputPaymentInstallStyle} mask="99" name={data} onChange={(e) => handleUpdate('installPayment.options', e.target.value, 'percentage', e)} />
                                            <span className="position-absolute" style={{right:5, top:"20%"}}>%</span>
                                            <OverlayTrigger placement="top" overlay={popover} >
                                                <span className="d-inline-block">
                                                    <img className="ms-2" src={InfoIcon} alt="liveinhotel" style={{position:"absolute", right:-25, top:10}}/>
                                                </span>
                                            </OverlayTrigger>
                                        </InputGroup>
                                    )
                                }
                            </div>
                        ))
                    }
                    </>
                }
            </Container>

            {/*Regulatory information*/}
            {/*<Container className="p-3 mb-3" style={borderStyle}>*/}
            {/*    <h3 className="mb-3" style={titleStyle}>Regulatory information</h3>*/}
            {/*    <p className="mb-3" style={descStyle}>Are you a professional host or a private host?</p>*/}
            {/*    {*/}
            {/*        regulatoryList.map((data, index)=>(*/}
            {/*            <div key={index} className="mb-3">*/}
            {/*                <Form.Check*/}
            {/*                    key={index}*/}
            {/*                    type="radio"*/}
            {/*                    name="regulatory"*/}
            {/*                    label={data.title}*/}
            {/*                    style={labelStyle}*/}
            {/*                    onChange={(e) => handleUpdate(`regulatory`, data.title)} />*/}
            {/*                <span className="ps-0 ps-md-3" style={descStyle}>{data.description}</span>*/}
            {/*            </div>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Container>*/}

            {/*cancellation*/}
            <Container className="p-3 mb-3" style={borderStyle}>
                <h3 className="mb-3" style={titleStyle}>Default cancellation policy</h3>
                <p className="mb-3" style={descStyle}>Cancellation policy options</p>
                <p className="mb-3 w-100 w-md-70" style={labelStyle}>A cancellation window is the amount of time before your local cancellation cutoff (18:00) on the day of check-in.</p>
                {
                    cancellationList.map((data, index)=>(
                        <div key={data}>
                            <Form.Check
                                className="mb-2"
                                type="radio"
                                name="cancellationPolicy"
                                value={data}
                                label={data}
                                style={labelStyle}
                                onChange={(e) => handleUpdate(`cancellationPolicy.policy`, data)} />
                            {
                                index===0 &&
                                <div className={policyData?.cancellationPolicy?.policy === data ? "":"d-none"}>
                                    <ul className="w-100 w-md-70" style={{...labelStyle,listStyleType:"disc"}}>
                                        <li>Travelers who cancel 24 hours or more before 18:00 on the day of check-in are charged no fee.</li>
                                        <li>Travelers who cancel less than 24 hours before 18:00 on the day of check-in (including no-shows) are charged:</li>
                                    </ul>
                                    <div className="w-100 w-md-35 ps-3 mb-3">
                                        <DropDownLabelCustomize list={discountList} label="ddddd" onChange={(selectedValue) => handleUpdate('cancellationPolicy.option', selectedValue)}/>
                                    </div>

                                </div>
                            }
                            {
                                index===1 &&
                                <div className={policyData?.cancellationPolicy?.policy === data ? "":"d-none"}>
                                    <ul className="w-100 w-md-70" style={{...labelStyle,listStyleType:"disc"}}>
                                        <li>Travelers who cancel 48 hours or more before 18:00 on the day of check-in are charged no fee.</li>
                                        <li>Travelers who cancel less than 48 hours before 18:00 on the day of check-in (including no-shows) are charged:</li>
                                    </ul>
                                    <div className="w-100 w-md-35 ps-3 mb-3">
                                        <DropDownLabelCustomize list={discountList} label="ddddd" onChange={(selectedValue) => handleUpdate('cancellationPolicy.option', selectedValue)}/>
                                    </div>

                                </div>
                            }
                            {
                                index===2 &&
                                <div className={policyData?.cancellationPolicy?.policy === data ? "":"d-none"}>
                                    <ul className="w-100 w-md-70" style={{...labelStyle,listStyleType:"disc"}}>
                                        <li>Travelers who cancel 72 hours or more before 18:00 on the day of check-in are charged no fee.</li>
                                        <li>Travelers who cancel less than 72 hours before 18:00 on the day of check-in (including no-shows) are charged:</li>
                                    </ul>
                                    <div className="w-100 w-md-35 ps-3 mb-3">
                                        <DropDownLabelCustomize list={discountList} label="ddddd" onChange={(selectedValue) => handleUpdate('cancellationPolicy.option', selectedValue)}/>
                                    </div>

                                </div>
                            }
                            {
                                index===3 &&
                                <div className={policyData?.cancellationPolicy?.policy === data ? "":"d-none"}>
                                    <ul className="w-100 w-md-70" style={{...labelStyle,listStyleType:"disc"}}>
                                        <li>Travelers who cancel 72 hours or more before 18:00 on the day of check-in are charged no fee.</li>
                                    </ul>
                                </div>
                            }

                        </div>
                    ))
                }
            </Container>

            {/* tax and fees */}
            {/*<Container className="p-3 mb-3" style={borderStyle}>*/}
            {/*    <h3 className="mb-3" style={titleStyle}>Taxes and fees</h3>*/}
            {/*    <p className="mb-3" style={descStyle}>What taxes do you include in your rates?</p>*/}
            {/*    {*/}
            {/*        taxList.map((data, index)=>(*/}
            {/*            <div key={index}>*/}
            {/*                <Form.Check className="mb-2" type="checkbox" name={data} label={data} style={labelStyle} onChange={handleTaxAndFees} />*/}
            {/*                {*/}
            {/*                    policyData.taxAndFees?.map(installData => (*/}
            {/*                        installData.name === data && (*/}
            {/*                            <div key={installData}>*/}
            {/*                                <InputGroup className="mb-3 w-40 w-md-10 ms-4 position-relative">*/}
            {/*                                    <InputMask className='form-control' style={inputPaymentInstallStyle} mask="99 %" name={data} onChange={handleTaxPercentage}/>*/}
            {/*                                    /!*<Form.Control type="number" min={0} max={100} style={inputPaymentInstallStyle} name={data} onChange={handleTaxPercentage} />*!/*/}
            {/*                                </InputGroup>*/}
            {/*                            </div>*/}
            {/*                        )))*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Container>*/}

            {/* rental */}
            <Container className="p-3 mb-3" style={borderStyle}>
                <h3 className="mb-3" style={titleStyle}>Discounts for Long-Term Rentals</h3>
                <p className="mb-3" style={descStyle}>Would you like to offer a discount?</p>
                {
                    rentalList.map((data, index)=>(
                        <div key={index}>
                            <h4 className="mb-3" style={labelStyle}>For rentals over {data} months</h4>
                            {/*<Form.Control type="submit" style={buttonStyle} name={data} onChange={handleTaxPercentage} />*/}
                            <Button
                                style={{...buttonStyle, backgroundColor:policyData.rental.options.find(option => option.option === `For rentals over ${data} months`)?.isAvailable ? '':Colors.white, color:policyData.rental.options.find(option => option.option === `For rentals over ${data} months`)?.isAvailable ? '':Colors.Dark}}
                                className="btn-rounded mb-3"
                                type="button"
                                name={`For rentals over ${data} months`}
                                onClick={(e)=>handleUpdate('rental.options', true, 'rental', e)}
                            >
                                Yes
                            </Button>
                            <Button
                                style={{...buttonStyle, backgroundColor:policyData.rental.options.find(option => option.option === `For rentals over ${data} months`)?.isAvailable === false? '':Colors.white,color:policyData.rental.options.find(option => option.option === `For rentals over ${data} months`)?.isAvailable === false? '':Colors.Dark}}
                                className="btn-rounded mb-3 ms-3"
                                type="button"
                                name={`For rentals over ${data} months`}
                                onClick={(e)=>handleUpdate('rental.options', false, 'rental', e)}
                            >
                                No
                            </Button>
                            {
                                policyData.rental.options.find(option => option.option === `For rentals over ${data} months`)?.isAvailable &&(
                                    <>
                                        <p className="mb-1" style={depositLabelStyle}>Discount percentage</p>
                                        <InputWithArrowUpAndDown
                                            name={`For rentals over ${data} months`}
                                            value={policyData.rental.options.find(option => option.option === `For rentals over ${data} months`)?.percentage || ''}
                                            onChange={(value, e) => handleUpdate(`rental.options`, value, 'percentage', e)}
                                        />
                                    </>
                                )
                            }
                        </div>
                    ))
                }
            </Container>

            <Stack className="align-items-end">
                <Button
                    style={{backgroundColor: Colors.Dark, fontSize:16, fontWeight:500}}
                    className="btn-rounded mb-3 px-5"
                    onClick={handleSubmit}
                >
                        <span>
                            <span>Next</span>
                            {isLoad && (
                                <span className="input-suffix ms-2"> <Spinner animation="border" size="sm" /></span>
                            )}
                         </span>
                </Button>
            </Stack>
        </Container>
    );
}

export default Index2;