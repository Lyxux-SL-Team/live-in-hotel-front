import React, {useState} from 'react';
import {Button, Container, Stack, Form} from "react-bootstrap";
import {colors as Colors} from "../../configs/colors.js";
import DropDownCustomize from "./Components/DropDownCustomize.jsx";
import * as Icon from "./Icons/index.jsx";
import CustomInputWithBlue from "./Components/CustomInputWithBlue.jsx";
import {
    AnimalPrint,
    CarParking, Cleaningbroom,
    CoffeeCup, DepositBox,
    Smooking,
    Spa,
    SpoonKnife,
    SwimmingPool,
    Wheelchair
} from "./Icons/index.jsx";

const timeList = ["06.00 AM", "06.30 AM", "07.00 AM", "07.30 AM", "08.00 AM"];
const guestUnitAccessList =[
    {
        title:"Access code",
        description:"Numeric pad that unlocks doors"
    },
    {
        title:"Key retrieval instructions",
        description:"Hidden key, etc."
    },
    {
        title:"Lockbox instructions",
        description:"Locked container that holds a key"
    },
    {
        title:"Smart lock code",
        description:"WiFi-enabled lock"
    },
    {
        title:"Express check-in",
        description:"Guests can use a kiosk to check-in"
    }
]
const ageList = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const internetList = ["Wi-Fi in guestrooms","Wi-Fi in public areas","Wired internet in guestrooms","Wired internet in public areas","Dial-up internet in guestrooms","Dial-up internet in public areas"];
const netSpeedList=["25+ Mbps","50+ Mbps","100+ Mbps","250+ Mbps","500+ Mbps"];
const Amenities = (props) => {
    const [amenitiesData, setAmenitiesData] = useState({});
    console.log(amenitiesData)

    const handleUpdate = (path, value) => {
        setAmenitiesData(prevState => {
            const newState = { ...prevState };
            const keys = path.split('.');
            let currentLevel = newState;
            keys.slice(0, -1).forEach(key => {
                if (!currentLevel[key]) {
                    currentLevel[key] = {};
                }
                currentLevel = currentLevel[key];
            });
            currentLevel[keys[keys.length - 1]] = value;
            return newState;
        });
    };

    const titleStyle = {fontSize: 18, color: Colors.Dark};
    const subStyle = {fontSize: 20, color: Colors.Dark, fontWeight:600};
    const buttonStyle = {
        fontSize: 14,
        color: Colors.white,
        border: `1px solid ${Colors.Grey3}`,
        backgroundColor: Colors.Dark,
        borderRadius: 20
    };
    const descStyle = {fontSize: 14, color: Colors.Grey};
    const labelStyle = {fontSize: 14, color: Colors.Dark};
    const containerBorder = {borderBottom: `1px solid ${Colors.Grey3}`};
    const containerBorderFull = {border: `1px solid ${Colors.Grey3}`, borderRadius: 10};

    return (
        <Container className="ps-3 pe-3 pe-md-6 py-4">
            {/* checkin/checkout */}
            <Container className="pb-3" style={containerBorder}>
                <h3 className="mb-3" style={titleStyle}>Check-in / Check-out</h3>
                <Stack direction="horizontal" gap={3}>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.options === "standard" ? '' : Colors.white,
                            color: amenitiesData?.options === "standard" ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('options', 'standard')}
                    >
                        Standard Options
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.options === "advanced" ? '' : Colors.white,
                            color: amenitiesData?.options === "advanced" ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('options', 'advanced')}
                    >
                        Advanced Options
                    </Button>
                </Stack>
            </Container>

            {/* checkin options */}
            <Container className="py-3" style={containerBorder}>
                <h3 className="mb-3" style={titleStyle}>Check-in options</h3>
                <p className="mb-3" style={descStyle}>Is there a front desk at your property?</p>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.fontDesk?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.fontDesk?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('fontDesk.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.fontDesk?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.fontDesk?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('fontDesk.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
                {amenitiesData?.fontDesk?.isAvailable && (
                    <>
                        <p className="mb-3" style={descStyle}>What is the front desk schedule?</p>
                        <Stack direction="horizontal" gap={2}>
                            <Form.Check name="deskSchedule" type="radio" label="Every day" style={labelStyle}
                                        onChange={() => handleUpdate('fontDesk.deskSchedule.schedule', 'every day')}/>
                            <Form.Check name="deskSchedule" type="radio" label="Select days" style={labelStyle}
                                        onChange={() => handleUpdate('fontDesk.deskSchedule.schedule', 'selected days')}/>
                            <Form.Check name="deskSchedule" type="radio" label="24/7" style={labelStyle}
                                        onChange={() => handleUpdate('fontDesk.deskSchedule.schedule', '24/7')}/>
                        </Stack>

                        {amenitiesData?.fontDesk?.deskSchedule?.schedule && (
                            <Stack direction="horizontal" className="my-3 w-80 w-md-30" gap={3}>
                                <Stack>
                                    <p style={{...descStyle, fontSize: 12}}>Desk opens</p>
                                    <DropDownCustomize list={timeList} onChange={(selectedValue) => handleUpdate('fontDesk.deskSchedule.deskOpens', selectedValue)}/>
                                </Stack>
                                <Stack>
                                    <p style={{...descStyle, fontSize: 12}}>Desk closes</p>
                                    <DropDownCustomize list={timeList} onChange={(selectedValue) => handleUpdate('fontDesk.deskSchedule.deskCloses', selectedValue)}/>
                                </Stack>
                            </Stack>
                        )}
                    </>
                )}

                <p className="mb-3" style={descStyle}>Is self check-in available?</p>
                <Stack direction="horizontal" gap={2} className={amenitiesData?.fontDesk?.selfChecking?.isAvailable? "mb-3": "mb-0"}>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.fontDesk?.selfChecking?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.fontDesk?.selfChecking?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('fontDesk.selfChecking.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.fontDesk?.selfChecking?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.fontDesk?.selfChecking?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('fontDesk.selfChecking.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
                {
                    amenitiesData?.fontDesk?.selfChecking?.isAvailable &&
                    <>
                        <p className="mb-2" style={{...descStyle, fontSize: 12}}>How will guests access their unit?</p>
                        <Stack className="w-80 w-md-30 mb-3">
                        <DropDownCustomize list={guestUnitAccessList} onChange={(selectedValue) => handleUpdate('fontDesk.selfChecking.guestAccess', selectedValue)}/>
                        </Stack>
                        <p className="mb-2" style={{...descStyle, fontSize: 12}}>Is a mobile app recommended or required?</p>
                        <Stack className="w-80 w-md-30">
                            <DropDownCustomize list={["Mobile app recommended","Mobile app required"]} onChange={(selectedValue) => handleUpdate('fontDesk.selfChecking.mobileApp', selectedValue)}/>
                        </Stack>
                    </>
                }
            </Container>

            {/* guests check in */}
            <Container className="py-3" style={containerBorder}>
                <h3 className="mb-3" style={titleStyle}>When can guests check in?</h3>
                <Stack direction="horizontal" className="my-3 w-80 w-md-30" gap={3}>
                    <Stack>
                        <p style={{...descStyle, fontSize: 12}}>From</p>
                        <DropDownCustomize list={timeList} onChange={(selectedValue) => handleUpdate('fontDesk.guestCheckIn.from', selectedValue)}/>
                    </Stack>
                    <Stack>
                        <p style={{...descStyle, fontSize: 12}}>To</p>
                        <DropDownCustomize list={timeList} onChange={(selectedValue) => handleUpdate('fontDesk.guestCheckIn.to', selectedValue)}/>
                    </Stack>
                </Stack>
                <Form.Check name="deskSchedule" type="radio" label="No check-in end time" style={labelStyle}
                            onChange={() => handleUpdate('fontDesk.guestCheckIn.noCheckingEndTime', true)}/>
                <p className="my-2" style={descStyle}>Is late check-in available?</p>
                <Stack direction="horizontal" gap={2}>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.fontDesk?.guestCheckIn?.isLateCheckingAvailable ? '' : Colors.white,
                            color: amenitiesData?.fontDesk?.guestCheckIn?.isLateCheckingAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('fontDesk.guestCheckIn.isLateCheckingAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.fontDesk?.guestCheckIn?.isLateCheckingAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.fontDesk?.guestCheckIn?.isLateCheckingAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('fontDesk.guestCheckIn.isLateCheckingAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
            </Container>

            {/* guests check out */}
            <Container className="py-3" style={containerBorder}>
                <h3 className="mb-3" style={titleStyle}>When do guests need to check out?</h3>
                    <Stack className="w-80 w-md-30 w-lg-20">
                        <p style={{...descStyle, fontSize: 12}}>Check-out time</p>
                        <DropDownCustomize list={timeList} onChange={(selectedValue) => handleUpdate('fontDesk.guestCheckOut', selectedValue)}/>
                    </Stack>

            </Container>

            {/* Age restrictions */}
            <Container className="py-3 mb-3">
                <h3 className="mb-3" style={titleStyle}>Age restrictions</h3>
                <Stack className="w-80 w-md-30 w-lg-20">
                    <p style={{...descStyle, fontSize: 12}}>Minimum check-in age</p>
                    <DropDownCustomize list={ageList} onChange={(selectedValue) => handleUpdate('fontDesk.minimumCheckingAge', selectedValue)}/>
                </Stack>
            </Container>

            {/* Do you offer internet? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}><span className="me-2 pb-1"><Icon.Wifi/></span>Do you offer internet?</h3>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.internet?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.internet?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('internet.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.internet?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.internet?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('internet.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
                {
                    amenitiesData?.internet?.isAvailable &&
                    <>
                    {
                        internetList.map((data,index)=>(
                            <div className="mb-3" key={index}>
                            <Form.Check type="checkbox" label={data} onChange={(e) => handleUpdate(`internet.${data}.isAvailable`, e.target.checked)}/>
                                {
                                    index !== 5 && amenitiesData?.internet?.[data]?.isAvailable &&
                                    <div className="ps-3">
                                        <Stack direction="horizontal" gap={3} className="mt-3">
                                            <Form.Check type="radio" name="internetType" label="Free" onChange={(e) => handleUpdate(`internet.${data}.type`, 'free')}/>
                                            <Form.Check type="radio" name="internetType" label="Surcharge" onChange={(e) => handleUpdate(`internet.${data}.type`, "Surcharge")}/>
                                        </Stack>
                                        {
                                            index===0 && amenitiesData?.internet?.[data]?.type==='free' &&
                                            <Stack className="my-3 w-80 w-md-30 w-lg-20">
                                                <p style={{...descStyle, fontSize: 12}}>Minimum WiFi speed</p>
                                                <DropDownCustomize list={netSpeedList} onChange={(selectedValue) => handleUpdate(`internet.${data}.speed`, selectedValue)}/>
                                            </Stack>
                                        }
                                        {
                                            amenitiesData?.internet?.[data]?.type==='Surcharge' &&
                                            <Stack direction="horizontal" gap={2} className="w-100 w-md-60 my-3 align-items-center">
                                                <Stack className="w-80 w-md-20">
                                                    <p style={{...descStyle, fontSize: 12}}>In-room WiFi fee amount -</p>
                                                    <CustomInputWithBlue onChange={(value) => handleUpdate(`internet.${data}.fee`, value)}/>
                                                </Stack>
                                                <Stack className="w-80 w-md-20 pt-5 pt-lg-3 mt-1">
                                                    <DropDownCustomize borderChange={true} list={["Per month","Per year"]} onChange={(selectedValue) => handleUpdate(`internet.${data}.duration`, selectedValue)}/>
                                                </Stack>
                                                <Stack className="w-80 w-md-20">
                                                    <p style={{...descStyle, fontSize: 12}}>Minimum WiFi speed</p>
                                                    <DropDownCustomize borderChange={true} list={netSpeedList} onChange={(selectedValue) => handleUpdate(`internet.${data}.speed`, selectedValue)}/>
                                                </Stack>
                                            </Stack>
                                        }
                                        {
                                            (index === 0 || index === 1) && amenitiesData?.internet?.[data]?.type &&
                                            <>
                                                <Form.Check type="radio" label="Restrictions apply" onChange={(e) => handleUpdate(`internet.${data}.restrictions.isRestrict`, e.target.checked)}/>
                                                {
                                                    amenitiesData?.internet?.[data]?.restrictions?.isRestrict &&
                                                    <div className="ps-2 my-3">
                                                        <Form.Check type="checkbox" label="Time limit" onChange={(e) => handleUpdate(`internet.${data}.restrictions.timeLimit.isAvailable`, e.target.checked)}/>
                                                        {
                                                            amenitiesData?.internet?.[data]?.restrictions?.timeLimit?.isAvailable &&
                                                            <Stack direction="horizontal" gap={2} className="w-100 w-md-60 my-3 align-items-center">
                                                                <Stack className="w-80 w-md-20">
                                                                    <p style={{...descStyle, fontSize: 12}}>Free WiFi (limited) time</p>
                                                                    <CustomInputWithBlue onChange={(value) => handleUpdate(`internet.${data}.restrictions.timeLimit.limitedTime`, value)}/>
                                                                </Stack>
                                                                <Stack className="w-80 w-md-20 pt-5 pt-lg-3 mt-1">
                                                                    <DropDownCustomize borderChange={true} list={["Hours","Minutes"]} onChange={(selectedValue) => handleUpdate(`internet.${data}.restrictions.timeLimit.duration`, selectedValue)}/>
                                                                </Stack>
                                                                <Stack className="w-80 w-md-20">
                                                                    <p style={{...descStyle, fontSize: 12}}>Minimum WiFi speed</p>
                                                                    <DropDownCustomize borderChange={true} list={netSpeedList} onChange={(selectedValue) => handleUpdate(`internet.${data}.restrictions.timeLimit.speed`, selectedValue)}/>
                                                                </Stack>
                                                            </Stack>
                                                        }
                                                        <Form.Check type="checkbox" label="Device limit" onChange={(e) => handleUpdate(`internet.${data}.restrictions.deviceLimit.isAvailable`, e.target.checked)}/>
                                                        {
                                                            amenitiesData?.internet?.[data]?.restrictions?.deviceLimit?.isAvailable &&
                                                            <Stack className="w-80 w-md-30 mt-3">
                                                                <DropDownCustomize borderChange={true} list={["1","2","3","4","5"]} onChange={(selectedValue) => handleUpdate(`internet.${data}.restrictions.deviceLimit.devices`, selectedValue)}/>
                                                            </Stack>
                                                        }
                                                    </div>
                                                }
                                            </>
                                        }
                                    </div>
                                }
                            </div>
                        ))
                    }
                    </>
                }
            </Container>

            {/* Do you offer parking? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}>
                    <span className="me-2 pb-1">
                        <Icon.CarParking />
                    </span>
                    Do you offer parking?
                </h3>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.parking?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.parking?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('parking.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.parking?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.parking?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('parking.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
                {
                    amenitiesData?.parking?.isAvailable &&
                    <>
                    {
                        ["Self parking","Valet parking"].map((data,index)=>(
                            <div key={index}>
                                <Form.Check className="mb-2" type="checkbox" label={data} onChange={(e) => handleUpdate(`parking.${data}.isAvailable`, e.target.checked)}/>
                                {
                                    amenitiesData?.parking?.[data]?.isAvailable &&
                                    <div className="ps-3 mb-3">
                                        <Stack direction="horizontal" gap={3}>
                                            <Form.Check type="radio" name="parking" label="Free" onChange={(e) => handleUpdate(`parking.${data}.type`, 'free')}/>
                                            <Form.Check type="radio" name="parking" label="Surcharge" onChange={(e) => handleUpdate(`parking.${data}.type`, 'surcharge')}/>
                                        </Stack>
                                        {
                                            amenitiesData?.parking?.[data].type==='free' &&
                                            ["Covered parking","Uncovered parking","Secured parking"].map((item)=>(
                                                <Form.Check className="mt-2" key={item} type="checkbox" label={item} onChange={(e) => handleUpdate(`parking.${data}.${item}`, e.target.checked)}/>
                                            ))
                                        }
                                        {
                                            amenitiesData?.parking?.[data].type==='surcharge' &&
                                            <>
                                                <Stack direction="horizontal" gap={2} className="w-100 w-md-40 my-3 align-items-center">
                                                    <Stack className="w-80 w-md-20">
                                                        <p style={{...descStyle, fontSize: 12}}>Self parking fee amount -</p>
                                                        <CustomInputWithBlue onChange={(value) => handleUpdate(`parking.${data}.fee`, value)}/>
                                                    </Stack>
                                                    <Stack className="w-80 w-md-20 pt-5 pt-lg-3">
                                                        <DropDownCustomize borderChange={true} list={["Month","Year"]} onChange={(selectedValue) => handleUpdate(`parking.${data}.duration`, selectedValue)}/>
                                                    </Stack>
                                                </Stack>
                                                {

                                                ["In/out privileges","Covered parking","Uncovered parking","Secured parking"].map((item)=>(
                                                <Form.Check className="mt-2" key={item} type="checkbox" label={item} onChange={(e) => handleUpdate(`parking.${data}.${item}`, e.target.checked)}/>
                                                ))
                                                }
                                            </>
                                        }
                                    </div>
                                }
                            </div>
                        ))
                    }
                    </>
                }
            </Container>

            {/* Do you offer breakfast? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}>
                    <span className="me-2 pb-1">
                        <Icon.CoffeeCup/>
                    </span>
                    Do you offer breakfast?
                </h3>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.breakfast?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.breakfast?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('breakfast.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.breakfast?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.breakfast?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('breakfast.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
            </Container>

            <h3 className="mb-3" style={subStyle}>Popular facilities and services</h3>

            {/* Do your guests have pool access? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}>
                    <span className="me-2 pb-1">
                        <Icon.SwimmingPool/>
                    </span>
                    Do your guests have pool access?
                </h3>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.poolAccess?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.poolAccess?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('poolAccess.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.poolAccess?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.poolAccess?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('poolAccess.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
            </Container>

            {/* Do you offer dining venues? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}>
                    <span className="me-2 pb-1">
                        <Icon.SpoonKnife/>
                    </span>
                    Do you offer dining venues?
                </h3>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.diningVenues?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.diningVenues?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('diningVenues.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.diningVenues?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.diningVenues?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('diningVenues.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
            </Container>

            {/* Do you have a spa or spa services? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}>
                    <span className="me-2 pb-1">
                        <Icon.Spa/>
                    </span>
                    Do you have a spa or spa services?
                </h3>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.spa?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.spa?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('spa.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.spa?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.spa?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('spa.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
            </Container>

            {/* Do you allow pets? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}>
                    <span className="me-2 pb-1">
                        <Icon.AnimalPrint/>
                    </span>
                    Do you allow pets?
                </h3>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.pet?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.pet?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('pet.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.pet?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.pet?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('pet.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
            </Container>

            {/* Do you have accessibility features at your property? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}>
                    <span className="me-2 pb-1">
                        <Icon.Wheelchair/>
                    </span>
                    Do you have accessibility features at your property?
                </h3>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?. accessibilityFeatures?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.accessibilityFeatures?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('accessibilityFeatures.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.accessibilityFeatures?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.accessibilityFeatures?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('accessibilityFeatures.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
            </Container>

            {/* Do you offer guest services such as, smoking areas, laundry, or concierge? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}>
                    <span className="me-2 pb-1">
                        <Icon.Smooking/>
                    </span>
                    Do you offer guest services such as, smoking areas, laundry, or concierge?
                </h3>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.guestServices?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.guestServices?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('guestServices.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.guestServices?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.guestServices?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('guestServices.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
            </Container>

            <h3 className="mb-3" style={subStyle}>Room conveniences</h3>

            {/* Do you offer in-room conveniences such as ironing boards or safes? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}>
                    <span className="me-2 pb-1">
                        <Icon.DepositBox/>
                    </span>
                    Do you offer in-room conveniences such as ironing boards or safes?
                </h3>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.inRoomConveniences?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.inRoomConveniences?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('inRoomConveniences.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.inRoomConveniences?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.inRoomConveniences?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('inRoomConveniences.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
            </Container>

            {/* Do you provide housekeeping? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}>
                    <span className="me-2 pb-1">
                        <Icon.Cleaningbroom/>
                    </span>
                    Do you provide housekeeping?
                </h3>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.housekeeping?.isAvailable ? '' : Colors.white,
                            color: amenitiesData?.housekeeping?.isAvailable ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('housekeeping.isAvailable', true)}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            ...buttonStyle,
                            backgroundColor: amenitiesData?.housekeeping?.isAvailable === false ? '' : Colors.white,
                            color: amenitiesData?.housekeeping?.isAvailable === false ? '' : Colors.Dark
                        }}
                        onClick={() => handleUpdate('housekeeping.isAvailable', false)}
                    >
                        No
                    </Button>
                </Stack>
            </Container>

            <h3 className="mb-3" style={subStyle}>Additional Amenities (optional)</h3>
            </Container>
    );
};

export default Amenities;
