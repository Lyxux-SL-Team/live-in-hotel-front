import React, {useEffect, useState} from 'react';
import {Button, Container, Stack, Form} from "react-bootstrap";
import { colors as Colors} from "../../configs/colors.js";
import DropDownCustomize from "../../components/CustomDropDown/DropDownCustomize.jsx";
import * as Icon from "./Icons/index.jsx";
import CustomInputWithBlue from "../../components/CustomInput/CustomInputWithBlue.jsx";
import InfoIcon from "../../assets/img/info-icon.png";
import InputWithArrowUpAndDown from "../../components/CustomInput/InputWithArrowUpAndDown.jsx";
import CustomizedDatePicker from "../../components/DatePicker/CustomizedDatePicker.jsx";
import {
    timeList,
    dayList,
    monthList,
    guestUnitAccessList,
    ageList,
    internetList,
    netSpeedList,
    parkingList,
    poolList,
    poolHowManyList,
    diningList,
    galaDinnerList,
    dayShortList,
    spaList,
    spaServiceList,
    massageList,
    spaTreatmentsList,
    petOptionsList,
    petFeaturesList,
    wheelChairAccessibleList,
    propertyEntranceList,
    otherPropertyAccessibilityFeatures,
    guestServicesList,
    reciptionFacilitiesList,
    roomConveniencesList
} from './DataLists/DataLists.js'


const Amenities = (props) => {
    const [amenitiesData, setAmenitiesData] = useState({internet:{options:[]}, parking:{options:[]}, poolAccess:{options:[]}, diningVenues:{options:[]}, spa:{options:[]}, pet:{}});
    console.log(amenitiesData)
    const [selectedDays, setSelectedDays] = useState([]);

    // update the selected date in amenities data
    useEffect(() => {
        handleUpdate(`diningVenues.options`, selectedDays, 'type', "selectedDays", "Hosted evening meal")
    }, [selectedDays]);
    const handleDayClick = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter(d => d !== day));
        } else if (selectedDays.length < 5) {
            setSelectedDays([...selectedDays, day]);
        }

    };

    const handleUpdate = (path, value, type = 'default', event = null, name = null) => {
        setAmenitiesData(prevState => {
            const newState = { ...prevState };
            const keys = path.split('.');
            let currentLevel = newState;
            console.log("sdds",keys)

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
                const isChecked = event.target.checked;
                const optionIndex = currentLevel[keys[0]].options.findIndex(d => d.option === optionName);

                if (optionIndex === -1 && isChecked) {
                    currentLevel[keys[0]].options.push({ option: optionName, isAvailable: true });
                } else if (optionIndex !== -1) {
                    currentLevel[keys[0]].options[optionIndex].isAvailable = isChecked;
                }
            } else if (type === 'type' && event) {
                const optionIndex = currentLevel[keys[0]].options.findIndex(d => d.option === name);
                if (optionIndex !== -1) {
                    currentLevel[keys[0]].options[optionIndex][event?.target?.name || event] = value;
                }
            } else if ((type === 'amount' || type === 'percentage') && event) {
                const optionName = event.target.name;
                const optionIndex = currentLevel[keys[0]].options.findIndex(d => d.option === optionName);

                if (optionIndex !== -1) {
                    currentLevel[keys[0]].options[optionIndex][type] = value;
                }
            } else if (type === 'layer 3 checked' && event) {
                const optionName = name;
                const optionIndex = currentLevel[keys[0]].options.findIndex(d => d.option === optionName);

                if (optionIndex !== -1) {
                    if (event.target.checked) {
                        if (!currentLevel[keys[0]].options[optionIndex].restrictions) {
                            currentLevel[keys[0]].options[optionIndex].restrictions = { isAvailable: true, options: [] };
                        } else {
                            currentLevel[keys[0]].options[optionIndex].restrictions.isAvailable = true;
                        }
                    } else {
                        currentLevel[keys[0]].options[optionIndex].restrictions.isAvailable = false;
                    }
                }
            } else if (type === 'layer 4 checked' && event) {
                const optionName = name;
                const restrictionOptionName = event.target.name;
                const optionIndex = currentLevel[keys[0]].options.findIndex(d => d.option === optionName);

                if (optionIndex !== -1) {
                    if (!currentLevel[keys[0]].options[optionIndex].restrictions) {
                        currentLevel[keys[0]].options[optionIndex].restrictions = { isAvailable: true, options: [] };
                    }

                    const restrictionOptionIndex = currentLevel[keys[0]].options[optionIndex].restrictions.options.findIndex(opt => opt.option === restrictionOptionName);

                    if (event.target.checked) {
                        if (restrictionOptionIndex === -1) {
                            currentLevel[keys[0]].options[optionIndex].restrictions.options.push({ option: restrictionOptionName });
                        }
                    } else {
                        if (restrictionOptionIndex !== -1) {
                            currentLevel[keys[0]].options[optionIndex].restrictions.options.splice(restrictionOptionIndex, 1);
                        }
                    }
                }
            } else if (type === 'nested update' && name) {
                const [optionName, restrictionOptionName] = name.split(':');
                const optionIndex = currentLevel[keys[0]].options.findIndex(d => d.option === optionName);

                if (optionIndex !== -1) {
                    const restrictionOptionIndex = currentLevel[keys[0]].options[optionIndex].restrictions.options.findIndex(opt => opt.option === restrictionOptionName);

                    if (restrictionOptionIndex !== -1) {
                        currentLevel[keys[0]].options[optionIndex].restrictions.options[restrictionOptionIndex][keys[keys.length - 1]] = value;
                    }
                }
            } else if (type === 'layer 5 checked' && event) {
                const optionName = name;
                const restrictionOptionName = event.target.name;
                const optionIndex = currentLevel[keys[0]].options.findIndex(d => d.option === optionName);

                if (optionIndex !== -1) {
                    if (!currentLevel[keys[0]].options[optionIndex].data) {
                        currentLevel[keys[0]].options[optionIndex].data = [];
                    }

                    const restrictionOptionIndex = currentLevel[keys[0]].options[optionIndex].data.findIndex(opt => opt.name === restrictionOptionName);

                    if (event.target.checked) {
                        if (restrictionOptionIndex === -1) {
                            currentLevel[keys[0]].options[optionIndex].data.push({ name: restrictionOptionName, isAvailable: true });
                        }
                    } else {
                        if (restrictionOptionIndex !== -1) {
                            currentLevel[keys[0]].options[optionIndex].data.splice(restrictionOptionIndex, 1);
                        }
                    }
                }
            } else if (type === 'gala nested update' && name) {
                const [optionName, restrictionOptionName] = name.split(':');
                const optionIndex = currentLevel[keys[0]].options.findIndex(d => d.option === optionName);

                if (optionIndex !== -1) {
                    const restrictionOptionIndex = currentLevel[keys[0]].options[optionIndex].data.findIndex(opt => opt.name === restrictionOptionName);

                    if (restrictionOptionIndex !== -1) {
                        currentLevel[keys[0]].options[optionIndex].data[restrictionOptionIndex][keys[keys.length - 1]] = value;
                    }
                }
            } else if (type === 'checked array' && event) {
                const optionName = event.target.name;
                const isChecked = event.target.checked;
                let targetLevel = currentLevel;
                keys.forEach((key, index) => {
                    if (!targetLevel[key]) {
                        targetLevel[key] = (index === keys.length - 1) && [];
                    }
                    targetLevel = targetLevel[key];
                });
                // const featuresArray = targetLevel;
                // if (!Array.isArray(featuresArray)) {
                //     console.error(`Expected an array at the last key, but found: ${typeof featuresArray}`);
                //     return;
                // }
                const optionIndex = targetLevel.findIndex(d => d.option === optionName);
                if (optionIndex === -1 && isChecked) {
                    targetLevel.push({ option: optionName, isAvailable: true });
                } else if (optionIndex !== -1) {
                    targetLevel[optionIndex].isAvailable = isChecked;
                }
            } else if (type === 'options update' && event) {
                const optionName = event?.target?.name || event;
                let targetLevel = currentLevel;
                keys.forEach((key) => {
                    targetLevel = targetLevel[key];
                });
                const optionIndex = targetLevel.findIndex(d => d.option === name);

                if (optionIndex !== -1) {
                    targetLevel[optionIndex][optionName] = value;
                }
            }
            return newState;
        });
    };

    const titleStyle = {fontSize: 18, color: Colors.Dark};
    const subStyle = {fontSize: 20, color: Colors.Dark, fontWeight:600};
    const buttonStyle = {fontSize: 14, color: Colors.white, border: `1px solid ${Colors.Grey3}`, backgroundColor: Colors.Dark, borderRadius: 20};
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
                {
                    amenitiesData?.fontDesk?.isAvailable ===false &&

                    <Stack className="position-relative mb-3" style={{width:"fit-content"}}>
                        <Form.Check name="virtualFontDesk" type="checkbox" label="Virtual front desk" style={labelStyle}
                                    onChange={(e) => handleUpdate('fontDesk.virtualFontDesk', e.target.checked)}/>
                        {/*<OverlayTrigger placement="top" overlay={popover} >*/}
                        <span className="d-inline-block">
                                 <img className="ms-2" src={InfoIcon} alt="liveinhotel" style={{position:"absolute", right:-25, top:3}}/>
                             </span>
                        {/*</OverlayTrigger>*/}
                    </Stack>
                }
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

                        {amenitiesData?.fontDesk?.deskSchedule?.schedule ==='selected days' && (
                            <Stack direction="horizontal" className="my-3 w-90 w-md-40 w-lg-30" gap={3}>
                                <Stack>
                                    <p style={{...descStyle, fontSize: 12}}>Start Day</p>
                                    <DropDownCustomize list={dayList} onChange={(selectedValue) => handleUpdate('fontDesk.deskSchedule.startDay', selectedValue)}/>
                                </Stack>
                                <Stack>
                                    <p style={{...descStyle, fontSize: 12}}>End Day</p>
                                    <DropDownCustomize list={dayList} onChange={(selectedValue) => handleUpdate('fontDesk.deskSchedule.endDay', selectedValue)}/>
                                </Stack>
                            </Stack>
                        )}

                        {amenitiesData?.fontDesk?.deskSchedule?.schedule && (
                            <Stack direction="horizontal" className="my-3 w-100 w-md-40 w-lg-30" gap={3}>
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
                <Form.Check name="deskSchedule" type="checkbox" label="No check-in end time" style={labelStyle}
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
                <h3 className="mb-3" style={titleStyle}>
                    <span className="me-2 pb-1"><Icon.Wifi/></span>Do you offer internet?
                </h3>
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
                            internetList.map((data, index) => (
                                <div className="mb-3" key={index}>
                                    <Form.Check
                                        type="checkbox"
                                        label={data}
                                        name={data}
                                        onChange={(e) => handleUpdate('internet.options', e.target.checked, 'checked', e)}
                                    />
                                    {
                                        index !== 5 && amenitiesData?.internet?.options.find(option => option.option === data)?.isAvailable &&
                                        <div className="ps-3">
                                            <Stack direction="horizontal" gap={3} className="mt-3">
                                                {
                                                    ["Free", "Surcharge"].map((item) =>
                                                        <Form.Check
                                                            key={item}
                                                            type="radio"
                                                            name="type"
                                                            label={item}
                                                            onChange={(e) => handleUpdate(`internet.options`, item.toLowerCase(), 'type', e, data)}
                                                        />
                                                    )
                                                }
                                            </Stack>
                                            {
                                                index === 0 && amenitiesData?.internet?.options.find(option => option.option === data)?.type === 'free' &&
                                                <Stack className="my-3 w-80 w-md-30 w-lg-20">
                                                    <p style={{ ...descStyle, fontSize: 12 }}>Minimum WiFi speed</p>
                                                    <DropDownCustomize
                                                        list={netSpeedList}
                                                        onChange={(selectedValue) => handleUpdate(`internet.options`, selectedValue, 'type', 'minimumSpeed', data)}
                                                    />
                                                </Stack>
                                            }
                                            {
                                                amenitiesData?.internet?.options.find(option => option.option === data)?.type === 'surcharge' &&
                                                <Stack direction="horizontal" gap={2} className="w-100 w-md-60 my-3 align-items-end">
                                                    <div className="w-80 w-md-35">
                                                        <p style={{ ...descStyle, fontSize: 12 }}>In-room WiFi fee amount -</p>
                                                        <InputWithArrowUpAndDown
                                                            mask={false}
                                                            value={amenitiesData?.internet?.options.find(option => option.option === data)?.wifiFee || 0}
                                                            onChange={(value) => handleUpdate(`internet.options`, value, 'type', 'wifiFee', data)}
                                                        />
                                                    </div>
                                                    <div className="w-80 w-md-35">
                                                        <DropDownCustomize
                                                            borderChange={true}
                                                            list={["Per month", "Per year"]}
                                                            onChange={(selectedValue) => handleUpdate(`internet.options`, selectedValue, 'type', 'duration', data)}
                                                        />
                                                    </div>
                                                    <div className="w-80 w-md-35">
                                                        <p style={{ ...descStyle, fontSize: 12 }}>Minimum WiFi speed</p>
                                                        <DropDownCustomize
                                                            borderChange={true}
                                                            list={netSpeedList}
                                                            onChange={(selectedValue) => handleUpdate(`internet.options`, selectedValue, 'type', 'minimumSpeed', data)}
                                                        />
                                                    </div>
                                                </Stack>
                                            }
                                            {
                                                (index === 0 || index === 1) && amenitiesData?.internet?.options.find(option => option.option === data)?.type &&
                                                <>
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Restrictions apply"
                                                        name="restrictions"
                                                        onChange={(e) => handleUpdate('internet.options', e.target.checked, 'layer 3 checked', e, data)}
                                                    />
                                                    {
                                                        amenitiesData?.internet?.options.find(option => option.option === data)?.restrictions?.isAvailable &&
                                                        <div className="ps-2 my-3">
                                                            <Form.Check
                                                                type="checkbox"
                                                                label="Time limit"
                                                                name="timeLimit"
                                                                onChange={(e) => handleUpdate(`internet.options`, e.target.checked, 'layer 4 checked', e, data)}
                                                            />
                                                            {
                                                                amenitiesData?.internet?.options.find(option => option.option === data)?.restrictions?.options.find(opt => opt.option === 'timeLimit') &&
                                                                <Stack direction="horizontal" gap={2} className="w-100 w-md-60 my-3 d-flex align-items-end">
                                                                    <div className="w-80 w-md-35">
                                                                        <p style={{ ...descStyle, fontSize: 12 }}>Free WiFi (limited) time</p>
                                                                        <InputWithArrowUpAndDown
                                                                            mask={false}
                                                                            value={amenitiesData?.internet?.options?.find(option => option.option === data)?.restrictions?.options?.find(option => option.option === 'timeLimit')?.limitedTime || 0}
                                                                            onChange={(value) => handleUpdate(`internet.options.${data}.restrictions.timeLimit.limitedTime`, value, 'nested update', null, `${data}:timeLimit`)}
                                                                        />
                                                                    </div>
                                                                    <div className="w-80 w-md-35">
                                                                        <DropDownCustomize
                                                                            borderChange={true}
                                                                            list={["Hours", "Minutes"]}
                                                                            onChange={(selectedValue) => handleUpdate(`internet.options.${data}.restrictions.timeLimit.duration`, selectedValue, 'nested update', null, `${data}:timeLimit`)}
                                                                        />
                                                                    </div>
                                                                    <div className="w-80 w-md-35">
                                                                        <p style={{ ...descStyle, fontSize: 12 }}>Minimum WiFi speed</p>
                                                                        <DropDownCustomize
                                                                            borderChange={true}
                                                                            list={netSpeedList}
                                                                            onChange={(selectedValue) => handleUpdate(`internet.options.${data}.restrictions.timeLimit.minimumSpeed`, selectedValue, 'nested update', null, `${data}:timeLimit`)}
                                                                        />
                                                                    </div>
                                                                </Stack>
                                                            }
                                                            <Form.Check
                                                                type="checkbox"
                                                                label="Device limit"
                                                                name="deviceLimit"
                                                                onChange={(e) => handleUpdate(`internet.options`, e.target.checked, 'layer 4 checked', e, data)}
                                                            />
                                                            {
                                                                amenitiesData?.internet?.options.find(option => option.option === data)?.restrictions?.options.find(opt => opt.option === 'deviceLimit') &&
                                                                <Stack className="w-80 w-md-30 mt-3">
                                                                    <DropDownCustomize
                                                                        borderChange={true}
                                                                        list={["1", "2", "3", "4", "5"]}
                                                                        onChange={(selectedValue) => handleUpdate(`internet.options.${data}.restrictions.deviceLimit.devices`, selectedValue, 'nested update', null, `${data}:deviceLimit`)}
                                                                    />
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
                                    <Form.Check className="mb-2" type="checkbox" label={data} name={data} onChange={(e) => handleUpdate(`parking.options`, e.target.checked, 'checked', e)}/>
                                    {
                                        amenitiesData?.parking?.options?.find(option => option.option === data)?.isAvailable &&
                                        <div className="ps-3 mb-3">
                                            <Stack direction="horizontal" gap={3} className="mt-3">
                                                {
                                                    ["Free", "Surcharge"].map((item) =>
                                                        <Form.Check
                                                            key={item}
                                                            type="radio"
                                                            name="type"
                                                            label={item}
                                                            onChange={(e) => handleUpdate(`parking.options`, item.toLowerCase(), 'type', e, data)}
                                                        />
                                                    )
                                                }
                                            </Stack>
                                            {
                                                amenitiesData?.parking?.options.find(option => option.option === data)?.type === 'free' &&
                                                parkingList.slice(1).map((item)=>(
                                                    <Form.Check className="mt-2" key={item.id} checked={amenitiesData?.parking?.options?.find(option => option.option === data)?.[item.path] || false} type="checkbox" name={item.path} label={item.id} onChange={(e) => handleUpdate(`parking.options`, e.target.checked,'type',e, data)}/>
                                                ))
                                            }
                                            {
                                                amenitiesData?.parking?.options.find(option => option.option === data)?.type ==='surcharge' &&
                                                <>
                                                    <Stack direction="horizontal" gap={2} className="w-100 w-md-40 my-3 align-items-center">
                                                        <Stack className="w-80 w-md-20">
                                                            <p style={{...descStyle, fontSize: 12}}>Self parking fee amount -</p>
                                                            <CustomInputWithBlue onChange={(value) => handleUpdate(`parking.options`, value,'type','parkingFee', data)}/>
                                                        </Stack>
                                                        <Stack className="w-80 w-md-20 pt-5 pt-lg-3">
                                                            <DropDownCustomize borderChange={true} list={["Month","Year"]} onChange={(selectedValue) => handleUpdate(`parking.options`, selectedValue,'type','duration', data)}/>
                                                        </Stack>
                                                    </Stack>
                                                    {
                                                        parkingList.map((item)=>(
                                                            <Form.Check className="mt-2" key={item.id} checked={amenitiesData?.parking?.options?.find(option => option.option === data)?.[item.path] || false} type="checkbox" name={item.path} label={item.id} onChange={(e) => handleUpdate(`parking.options`, e.target.checked,'type',e, data)}/>
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
                {
                    amenitiesData?.breakfast?.isAvailable &&
                    <Stack direction="horizontal" gap={3} className="my-3">
                        {
                            ["Free", "Surcharge"].map((data) =>
                                <Form.Check
                                    key={data}
                                    type="radio"
                                    name="type"
                                    label={data}
                                    onChange={(e) => handleUpdate(`breakfast.options.option`, data)}
                                />
                            )
                        }
                    </Stack>
                }

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
                {
                    amenitiesData?.poolAccess?.isAvailable &&
                    <>
                        {
                            poolList.map((data,index)=>(
                                <div key={index}>
                                    <Form.Check className="mb-2" type="checkbox" label={data} name={data} onChange={(e) => handleUpdate(`poolAccess.options`, e.target.checked, 'checked', e)}/>
                                    {
                                        (index ===0 || index ===2 || index === 7 || index === 8 || index ===13) && amenitiesData?.poolAccess?.options?.find(option => option.option === data)?.isAvailable &&
                                        <Stack gap={1} className="ps-3 my-3 w-80 w-md-20">
                                            <p style={{...descStyle,fontSize:12}}>How many?</p>
                                            <DropDownCustomize
                                                borderChange={true}
                                                list={poolHowManyList}
                                                onChange={(selectedValue) => handleUpdate(`poolAccess.options`, selectedValue, 'type', 'howMany', data)}
                                            />
                                        </Stack>
                                    }

                                    {
                                        (index ===4) && amenitiesData?.poolAccess?.options?.find(option => option.option === data)?.isAvailable &&
                                        <div className="ps-3">
                                            <Stack direction="horizontal" gap={3} className="my-3">
                                                {
                                                    ["24 hours", "Time range"].map((item) =>
                                                        <Form.Check
                                                            key={item}
                                                            type="radio"
                                                            name="type"
                                                            label={item}
                                                            onChange={(e) => handleUpdate(`poolAccess.options`,item.toLowerCase(),'type', e, data)}
                                                        />
                                                    )
                                                }
                                            </Stack>
                                            {
                                                amenitiesData?.poolAccess?.options?.find(option => option.option === data)?.type ==="time range" &&
                                                <Stack direction="horizontal" className="my-3 w-100 w-md-40 w-lg-30" gap={3}>
                                                    <Stack>
                                                        <p style={{...descStyle, fontSize: 12}}>Start time</p>
                                                        <DropDownCustomize list={timeList} onChange={(selectedValue) => handleUpdate('poolAccess.options', selectedValue,'type','startTime', data)}/>
                                                    </Stack>
                                                    <Stack>
                                                        <p style={{...descStyle, fontSize: 12}}>End time</p>
                                                        <DropDownCustomize list={timeList} onChange={(selectedValue) => handleUpdate('poolAccess.options', selectedValue,'type','endTime', data)}/>
                                                    </Stack>
                                                </Stack>
                                            }
                                        </div>
                                    }

                                    {
                                        (index ===1) && amenitiesData?.poolAccess?.options?.find(option => option.option === data)?.isAvailable &&
                                        <div className="ps-3">
                                            <Stack direction="horizontal" gap={3} className="my-3">
                                                {
                                                    ["Date range", "Months"].map((item) =>
                                                        <Form.Check
                                                            key={item}
                                                            type="radio"
                                                            name="type"
                                                            label={item}
                                                            onChange={(e) => handleUpdate(`poolAccess.options`,item.toLowerCase(),'type', e, data)}
                                                        />
                                                    )
                                                }
                                            </Stack>
                                            {
                                                amenitiesData?.poolAccess?.options?.find(option => option.option === data)?.type ==="months" &&
                                                <Stack direction="horizontal" className="my-3 w-100 w-md-40 w-lg-30" gap={3}>
                                                    <Stack>
                                                        <p style={{...descStyle, fontSize: 12}}>Start Month</p>
                                                        <DropDownCustomize list={monthList} onChange={(selectedValue) => handleUpdate('poolAccess.options', selectedValue,'type','startMonth', data)}/>
                                                    </Stack>
                                                    <Stack>
                                                        <p style={{...descStyle, fontSize: 12}}>End Month</p>
                                                        <DropDownCustomize list={monthList} onChange={(selectedValue) => handleUpdate('poolAccess.options', selectedValue,'type','endMonth', data)}/>
                                                    </Stack>
                                                </Stack>
                                            }

                                            {
                                                amenitiesData?.poolAccess?.options?.find(option => option.option === data)?.type ==="date range" &&
                                                <Stack direction="horizontal" className="my-3 w-100 w-md-40 w-lg-30" gap={3}>
                                                    <Stack>
                                                        <p style={{...descStyle, fontSize: 12}}>From</p>
                                                        <CustomizedDatePicker onChange={(value)=> handleUpdate('poolAccess.options', value,'type','from', data)}/>
                                                        {/*<DropDownCustomize list={monthList} onChange={(selectedValue) => handleUpdate('poolAccess.options', selectedValue,'type','startMonth', data)}/>*/}
                                                    </Stack>
                                                    <Stack>
                                                        <p style={{...descStyle, fontSize: 12}}>To</p>
                                                        <CustomizedDatePicker onChange={(value)=> handleUpdate('poolAccess.options', value,'type','to', data)}/>
                                                        {/*<DropDownCustomize list={monthList} onChange={(selectedValue) => handleUpdate('poolAccess.options', selectedValue,'type','endMonth', data)}/>*/}
                                                    </Stack>
                                                </Stack>
                                            }
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </>
                }
            </Container>

            {/* Do you offer dining venues? */}
            <Container className="pt-3 mb-3" style={containerBorderFull}>
                <h3 className="mb-3" style={titleStyle}>
                <span className="me-2 pb-1">
                    <Icon.SpoonKnife />
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
                {
                    amenitiesData?.diningVenues?.isAvailable &&
                    <>
                        <p className="mb-3" style={descStyle}>How many venues do you have at your property?</p>
                        <Stack className="w-80 w-md-15 mb-3">
                            <p style={{ ...descStyle, fontSize: 12 }}>Restaurants</p>
                            <DropDownCustomize list={monthList} onChange={(selectedValue) => handleUpdate('diningVenues.restaurants', selectedValue)} />
                        </Stack>
                        <Stack className="w-80 w-md-15 mb-3">
                            <p style={{ ...descStyle, fontSize: 12 }}>Bars</p>
                            <DropDownCustomize list={monthList} onChange={(selectedValue) => handleUpdate('diningVenues.bars', selectedValue)} />
                        </Stack>
                        <Stack className="w-80 w-md-15 mb-3">
                            <p style={{ ...descStyle, fontSize: 12 }}>Coffee shop or café</p>
                            <DropDownCustomize list={monthList} onChange={(selectedValue) => handleUpdate('diningVenues.coffeShopOrCafe', selectedValue)} />
                        </Stack>
                        {
                            diningList.map((data, index) => (
                                <div key={index} className="mb-3">
                                    <Form.Check className="mb-2" type="checkbox" label={data} name={data} onChange={(e) => handleUpdate('diningVenues.options', e.target.checked, 'checked', e)} />
                                    {
                                        index === 2 && amenitiesData?.diningVenues?.options?.find(option => option.option === data)?.isAvailable &&
                                        <div className="ps-3 mb-3">
                                            <Stack direction="horizontal" gap={3} className="mt-3">
                                                {
                                                    ["Daily", "Select days"].map((item) =>
                                                        <Form.Check
                                                            key={item}
                                                            type="radio"
                                                            name="type"
                                                            label={item}
                                                            onChange={(e) => handleUpdate('diningVenues.options', item.toLowerCase(), 'type', e, data)}
                                                        />
                                                    )
                                                }
                                            </Stack>
                                        </div>
                                    }
                                    {
                                        index === 3 && amenitiesData?.diningVenues?.options?.find(option => option.option === data)?.isAvailable &&
                                        <div className="ps-3 mb-3">
                                            <Stack gap={3} className="mt-3">
                                                {
                                                    galaDinnerList.map((item, index) =>
                                                        <div key={index}>
                                                            <Form.Check
                                                                type="checkbox"
                                                                name={item}
                                                                label={item}
                                                                onChange={(e) => handleUpdate('diningVenues.options', e.target.checked, 'layer 5 checked', e, data)}
                                                            />
                                                            {
                                                                index !==5 && amenitiesData?.diningVenues?.options?.find(option => option.option === data)?.data?.find(d => d.name === item)?.isAvailable &&
                                                                <>
                                                                    <Stack direction="horizontal" className="ps-0 ps-md-4 mt-3" gap={3}>
                                                                        {
                                                                            ["Included in room rate", "Collected at property"].map((items, index) =>
                                                                                <Form.Check
                                                                                    key={index}
                                                                                    type="radio"
                                                                                    name="type"
                                                                                    label={items}
                                                                                    onChange={(e) => handleUpdate(`diningVenues.options.${data}.data.${item}.type`, items.toLowerCase(), 'gala nested update', null, `${data}:${item}`)}
                                                                                />
                                                                            )
                                                                        }
                                                                    </Stack>
                                                                    {
                                                                        amenitiesData?.diningVenues?.options.find(option => option.option === data)?.data?.find(d => d.name === item)?.type ==="collected at property" &&
                                                                        <>
                                                                            <Stack direction="horizontal" gap={3} className="my-3 ps-0 ps-md-4">
                                                                                <div>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>{item} fee amount -</p>
                                                                                    <InputWithArrowUpAndDown
                                                                                        mask={false}
                                                                                        value={amenitiesData?.diningVenues?.options.find(option => option.option === data)?.data?.find(d => d.name === item)?.feeAmount || 0}
                                                                                        onChange={(value) => handleUpdate(`diningVenues.options.${data}.data.${item}.feeAmount`, value, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </div>
                                                                                <div>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>{item} fee child amount -</p>
                                                                                    <InputWithArrowUpAndDown
                                                                                        mask={false}
                                                                                        value={amenitiesData?.diningVenues?.options.find(option => option.option === data)?.data?.find(d => d.name === item)?.childAmount || 0}
                                                                                        onChange={(value) => handleUpdate(`diningVenues.options.${data}.data.${item}.childAmount`, value, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </div>
                                                                            </Stack>
                                                                            <Stack direction="horizontal" gap={3} className="w-100 w-md-45 w-lg-40 ps-0 ps-md-4">
                                                                                <Stack>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>Minimum child age</p>
                                                                                    <DropDownCustomize
                                                                                        list={poolHowManyList}
                                                                                        onChange={(selectedValue) => handleUpdate(`diningVenues.options.${data}.data.${item}.minChildAge`, selectedValue, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </Stack>
                                                                                <Stack>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>Maximum child age</p>
                                                                                    <DropDownCustomize
                                                                                        list={poolHowManyList}
                                                                                        onChange={(selectedValue) => handleUpdate(`diningVenues.options.${data}.data.${item}.maxChildAge`, selectedValue, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </Stack>
                                                                            </Stack>
                                                                        </>
                                                                    }
                                                                </>
                                                            }
                                                            {
                                                                index ===5 && amenitiesData?.diningVenues?.options?.find(option => option.option === data)?.data?.find(d => d.name === item)?.isAvailable &&
                                                                <>
                                                                    <Stack className="mt-3 w-80 w-md-20 w-lg-15">
                                                                        <p style={{...descStyle, fontSize: 12}}>Date 1</p>
                                                                        <CustomizedDatePicker onChange={(value)=> handleUpdate(`diningVenues.options.${data}.data.${item}.dayOne`, value, 'gala nested update', null, `${data}:${item}`)}/>
                                                                    </Stack>
                                                                    <Stack direction="horizontal" className="my-3" gap={3}>
                                                                        {
                                                                            ["Included in room rate", "Collected at property"].map((items, index) =>
                                                                                <Form.Check
                                                                                    key={index}
                                                                                    type="radio"
                                                                                    name="dayOneType"
                                                                                    label={items}
                                                                                    onChange={(e) => handleUpdate(`diningVenues.options.${data}.data.${item}.dayOneType`, items.toLowerCase(), 'gala nested update', null, `${data}:${item}`)}
                                                                                />
                                                                            )
                                                                        }
                                                                    </Stack>
                                                                    {
                                                                        amenitiesData?.diningVenues?.options.find(option => option.option === data)?.data?.find(d => d.name === item)?.dayOneType ==="collected at property" &&
                                                                        <>
                                                                            <Stack direction="horizontal" gap={3} className="mb-3 ps-0 ps-md-4">
                                                                                <div>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>Gala dinner fee amount -</p>
                                                                                    <InputWithArrowUpAndDown
                                                                                        mask={false}
                                                                                        value={amenitiesData?.diningVenues?.options.find(option => option.option === data)?.data?.find(d => d.name === item)?.dayOneFeeAmount || 0}
                                                                                        onChange={(value) => handleUpdate(`diningVenues.options.${data}.data.${item}.dayOneFeeAmount`, value, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </div>
                                                                                <div>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>Gala dinner fee child amount -</p>
                                                                                    <InputWithArrowUpAndDown
                                                                                        mask={false}
                                                                                        value={amenitiesData?.diningVenues?.options.find(option => option.option === data)?.data?.find(d => d.name === item)?.dayOneChildAmount || 0}
                                                                                        onChange={(value) => handleUpdate(`diningVenues.options.${data}.data.${item}.dayOneChildAmount`, value, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </div>
                                                                            </Stack>
                                                                            <Stack direction="horizontal" gap={3} className="w-100 w-md-45 w-lg-40 ps-0 ps-md-4">
                                                                                <Stack>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>Minimum child age</p>
                                                                                    <DropDownCustomize
                                                                                        list={poolHowManyList}
                                                                                        onChange={(selectedValue) => handleUpdate(`diningVenues.options.${data}.data.${item}.dayOneMinChildAge`, selectedValue, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </Stack>
                                                                                <Stack>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>Maximum child age</p>
                                                                                    <DropDownCustomize
                                                                                        list={poolHowManyList}
                                                                                        onChange={(selectedValue) => handleUpdate(`diningVenues.options.${data}.data.${item}.dayOneMaxChildAge`, selectedValue, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </Stack>
                                                                            </Stack>
                                                                        </>
                                                                    }
                                                                    {/*    day 2 */}
                                                                    <Stack className="mt-3 w-80 w-md-20 w-lg-15">
                                                                        <p style={{...descStyle, fontSize: 12}}>Date 2</p>
                                                                        <CustomizedDatePicker onChange={(value)=> handleUpdate(`diningVenues.options.${data}.data.${item}.dayTwo`, value, 'gala nested update', null, `${data}:${item}`)}/>
                                                                    </Stack>
                                                                    <Stack direction="horizontal" className="mt-3" gap={3}>
                                                                        {
                                                                            ["Included in room rate", "Collected at property"].map((items, index) =>
                                                                                <Form.Check
                                                                                    key={index}
                                                                                    type="radio"
                                                                                    name="dayTwoType"
                                                                                    label={items}
                                                                                    onChange={(e) => handleUpdate(`diningVenues.options.${data}.data.${item}.dayTwoType`, items.toLowerCase(), 'gala nested update', null, `${data}:${item}`)}
                                                                                />
                                                                            )
                                                                        }
                                                                    </Stack>
                                                                    {
                                                                        amenitiesData?.diningVenues?.options.find(option => option.option === data)?.data?.find(d => d.name === item)?.dayTwoType ==="collected at property" &&
                                                                        <>
                                                                            <Stack direction="horizontal" gap={3} className="mb-3 ps-0 ps-md-4">
                                                                                <div>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>Gala dinner fee (second date) amount -</p>
                                                                                    <InputWithArrowUpAndDown
                                                                                        mask={false}
                                                                                        value={amenitiesData?.diningVenues?.options.find(option => option.option === data)?.data?.find(d => d.name === item)?.dayTwoFeeAmount || 0}
                                                                                        onChange={(value) => handleUpdate(`diningVenues.options.${data}.data.${item}.dayTwoFeeAmount`, value, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </div>
                                                                                <div>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>Gala dinner fee (second date) child amount -</p>
                                                                                    <InputWithArrowUpAndDown
                                                                                        mask={false}
                                                                                        value={amenitiesData?.diningVenues?.options.find(option => option.option === data)?.data?.find(d => d.name === item)?.dayTwoChildAmount || 0}
                                                                                        onChange={(value) => handleUpdate(`diningVenues.options.${data}.data.${item}.dayTwoChildAmount`, value, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </div>
                                                                            </Stack>
                                                                            <Stack direction="horizontal" gap={3} className="w-100 w-md-45 w-lg-40 ps-0 ps-md-4">
                                                                                <Stack>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>Minimum child age</p>
                                                                                    <DropDownCustomize
                                                                                        list={poolHowManyList}
                                                                                        onChange={(selectedValue) => handleUpdate(`diningVenues.options.${data}.data.${item}.dayTwoMinChildAge`, selectedValue, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </Stack>
                                                                                <Stack>
                                                                                    <p style={{ ...descStyle, fontSize: 12 }}>Maximum child age</p>
                                                                                    <DropDownCustomize
                                                                                        list={poolHowManyList}
                                                                                        onChange={(selectedValue) => handleUpdate(`diningVenues.options.${data}.data.${item}.dayTwoMaxChildAge`, selectedValue, 'gala nested update', null, `${data}:${item}`)}
                                                                                    />
                                                                                </Stack>
                                                                            </Stack>
                                                                        </>
                                                                    }
                                                                </>
                                                            }
                                                        </div>
                                                    )
                                                }
                                            </Stack>
                                        </div>
                                    }
                                    {
                                        index ===4 && amenitiesData?.diningVenues?.options?.find(option => option.option === data)?.isAvailable &&
                                        <Stack className="ps-3 my-3" gap={3}>
                                            <Form.Check
                                                key={index}
                                                type="checkbox"
                                                name="reservationRequired"
                                                label="Reservation required"
                                                onChange={(e) => handleUpdate(`diningVenues.options`, e.target.checked, 'type', e, data )}
                                            />
                                            <Stack className="w-80 w-md-25">
                                                <p className="mb-1" style={{ ...descStyle, fontSize: 12 }}>Hosted evening meal amount</p>
                                                <InputWithArrowUpAndDown
                                                    mask={false}
                                                    value={amenitiesData?.diningVenues?.options.find(option => option.option === data)?.mealAmount || 0}
                                                    onChange={(value) => handleUpdate(`diningVenues.options`, value, 'type', 'mealAmount', data )}
                                                />
                                            </Stack>
                                            <Stack direction="horizontal" gap={3} className="d-none d-md-flex">
                                                {
                                                    ["Daily","Weekdays","Weekends","Select days"].map((item)=>
                                                        <Form.Check
                                                            key={item}
                                                            type="radio"
                                                            name="type"
                                                            label={item}
                                                            onChange={(e) => handleUpdate(`diningVenues.options`, item.toLowerCase(), 'type', e, data)}
                                                        />
                                                    )
                                                }
                                            </Stack>
                                            {/*<Row className="w-60">*/}
                                            {/*    {*/}
                                            {/*        ["Daily","Weekdays","Weekends","Select days"].map((item)=>*/}
                                            {/*            <Col xs={6} md={3} key={item}>*/}
                                            {/*                <Form.Check*/}
                                            {/*                    key={item}*/}
                                            {/*                    type="radio"*/}
                                            {/*                    name="type"*/}
                                            {/*                    label={item}*/}
                                            {/*                    onChange={(e) => handleUpdate(`diningVenues.options.${data}.data.${item}.type`, items.toLowerCase(), 'gala nested update', null, `${data}:${item}`)}*/}
                                            {/*                />*/}
                                            {/*            </Col>*/}
                                            {/*        )*/}
                                            {/*    }*/}
                                            {/*</Row>*/}
                                            <Stack direction="horizontal" gap={3} className="d-md-none">
                                                {
                                                    ["Daily","Weekdays"].map((item)=>
                                                        <Form.Check
                                                            key={item}
                                                            type="radio"
                                                            name="type"
                                                            label={item}
                                                            onChange={(e) => handleUpdate(`diningVenues.options`, item.toLowerCase(), 'type', e, data)}
                                                        />
                                                    )
                                                }
                                            </Stack>
                                            <Stack direction="horizontal" gap={3} className="d-md-none ">
                                                {
                                                    ["Weekends","Select days"].map((item)=>
                                                        <Form.Check
                                                            key={item}
                                                            type="radio"
                                                            name="type"
                                                            label={item}
                                                            onChange={(e) => handleUpdate(`diningVenues.options`, item.toLowerCase(), 'type', e, data)}
                                                        />
                                                    )
                                                }
                                            </Stack>
                                            {
                                                amenitiesData?.diningVenues?.options?.find(option => option.option === data)?.type === 'select days' &&
                                                <>
                                                    {
                                                        <div className="d-md-block d-none">
                                                            <p className="mb-2" style={{...labelStyle, fontSize:12}}>Which Day(s)? <span style={{...descStyle,fontSize:12}}>Select up to five.</span></p>
                                                            <Stack direction="horizontal" gap={1}>
                                                                {
                                                                    dayShortList.map((day,index)=>
                                                                        <span className="px-2 py-1" key={index}
                                                                              style={{...containerBorderFull,...labelStyle,borderRadius:20,
                                                                                  backgroundColor: selectedDays.includes(day) ? Colors.Dark : 'transparent',
                                                                                  color: selectedDays.includes(day) ? Colors.white : Colors.Dark,}} onClick={() => handleDayClick(day)}>{day}</span>
                                                                    )
                                                                }
                                                            </Stack>
                                                        </div>
                                                    }
                                                    {
                                                        <div className="d-md-none">
                                                            <p className="mb-2" style={{...labelStyle, fontSize:12}}>Which Day(s)? <span style={{...descStyle,fontSize:12}}>Select up to five.</span></p>
                                                            <Stack direction="horizontal" gap={1}>
                                                                {
                                                                    dayShortList.slice(0,5).map((day,index)=>
                                                                        <span className="px-2 py-1" key={index}
                                                                              style={{...containerBorderFull,...labelStyle,borderRadius:20,
                                                                                  backgroundColor: selectedDays.includes(day) ? Colors.Dark : 'transparent',
                                                                                  color: selectedDays.includes(day) ? Colors.white : Colors.Dark,}} onClick={() => handleDayClick(day)}>{day}</span>
                                                                    )
                                                                }
                                                            </Stack>
                                                        </div>
                                                    }
                                                    {
                                                        <div className="d-md-none">
                                                            <Stack direction="horizontal" gap={1}>
                                                                {
                                                                    dayShortList.slice(5,7).map((day,index)=>
                                                                        <span className="px-2 py-1" key={index}
                                                                              style={{...containerBorderFull,...labelStyle,borderRadius:20,
                                                                                  backgroundColor: selectedDays.includes(day) ? Colors.Dark : 'transparent',
                                                                                  color: selectedDays.includes(day) ? Colors.white : Colors.Dark,}} onClick={() => handleDayClick(day)}>{day}</span>
                                                                    )
                                                                }
                                                            </Stack>
                                                        </div>
                                                    }
                                                </>
                                            }
                                        </Stack>
                                    }
                                </div>
                            ))
                        }
                    </>
                }
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
                {
                    amenitiesData?.spa?.isAvailable &&
                    <>
                        {
                            spaList.map((data,index)=>(
                                <div key={index}>
                                    <Form.Check className="mb-2" type="checkbox" label={data} name={data} onChange={(e) => handleUpdate(`spa.options`, e.target.checked, 'checked', e)}/>
                                    {
                                        index ===0 && amenitiesData?.spa?.options?.find(option => option.option === data)?.isAvailable &&
                                        <div className="ps-4 mb-3">
                                            <Stack direction="horizontal" gap={3} className="mt-3">
                                                {
                                                    ["Full-service spa", "Spa services onsite"].map((item) =>
                                                        <Form.Check
                                                            key={item}
                                                            type="radio"
                                                            name="type"
                                                            label={item}
                                                            onChange={(e) => handleUpdate(`spa.options`, item.toLowerCase(), 'type', e, data)}
                                                        />
                                                    )
                                                }
                                            </Stack>
                                            {
                                                amenitiesData?.spa?.options.find(option => option.option === data)?.type === 'full-service spa' &&
                                                <>
                                                    <Stack className="w-80 w-md-15 my-3">
                                                        <p style={{ ...descStyle, fontSize: 12 }}>Spa name</p>
                                                        <Form.Control
                                                            type="text"
                                                            name="spaName"
                                                            onChange={(e) => handleUpdate(`spa.options`, e.target.value, 'type', e, data)}
                                                        />
                                                    </Stack>
                                                    <Stack direction="horizontal" gap={3}>
                                                        {
                                                            ["Open daily", "Open select days"].map((item) =>
                                                                <Form.Check
                                                                    key={item}
                                                                    type="radio"
                                                                    name="openType"
                                                                    label={item}
                                                                    onChange={(e) => handleUpdate(`spa.options`, item.toLowerCase(), 'type', e, data)}
                                                                />
                                                            )
                                                        }
                                                    </Stack>
                                                    {
                                                        spaServiceList.map((item) =>
                                                            <Form.Check className="mt-2" key={item} type="checkbox"
                                                                        label={item}
                                                                        name={item}
                                                                        onChange={(e) => handleUpdate(`spa.options`, e.target.checked, 'layer 5 checked', e, data)}/>
                                                        )}
                                                </>
                                            }
                                        </div>
                                    }
                                    {
                                        index ===1 && amenitiesData?.spa?.options?.find(option => option.option === data)?.isAvailable &&
                                        <Stack className="ps-4 my-3" gap={3}>
                                            {
                                                massageList.map((item,index) =>
                                                    <div key={index}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            name={item}
                                                            label={item}
                                                            onChange={(e) => handleUpdate(`spa.options`, e.target.checked, 'layer 5 checked', e, data)}
                                                        />
                                                        {
                                                            index ===0 &&
                                                            <p className="mt-3" style={{...descStyle,fontSize:12}}>Types of massages available</p>
                                                        }
                                                    </div>
                                                )
                                            }
                                        </Stack>
                                    }
                                    {
                                        index ===2 && amenitiesData?.spa?.options?.find(option => option.option === data)?.isAvailable &&
                                        <Stack className="ps-4 my-3" gap={2}>
                                            <Stack gap={1} className="w-80 w-md-35 w-lg-25">
                                                <p style={{...descStyle,fontSize:12}}>Number of treatment rooms</p>
                                                <DropDownCustomize
                                                    borderChange={true}
                                                    list={poolHowManyList}
                                                    onChange={(selectedValue) => handleUpdate(`spa.options`, selectedValue, 'type', 'treatmentRooms', data)}
                                                />
                                            </Stack>
                                            {
                                                ["Couples treatment rooms","Outdoor treatment areas"].map((item,index) =>
                                                    <Form.Check
                                                        key={index}
                                                        type="checkbox"
                                                        name={item}
                                                        label={item}
                                                        onChange={(e) => handleUpdate(`spa.options`, e.target.checked, 'layer 5 checked', e, data)}
                                                    />
                                                )
                                            }
                                        </Stack>
                                    }
                                    {
                                        index ===3 && amenitiesData?.spa?.options?.find(option => option.option === data)?.isAvailable &&
                                        <Stack className="ps-4 my-3" gap={2}>
                                            {
                                                spaTreatmentsList.map((item,index) =>
                                                    <Form.Check
                                                        key={index}
                                                        type="checkbox"
                                                        name={item}
                                                        label={item}
                                                        onChange={(e) => handleUpdate(`spa.options`, e.target.checked, 'layer 5 checked', e, data)}
                                                    />
                                                )
                                            }
                                        </Stack>
                                    }
                                </div>
                            ))
                        }
                    </>
                }
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
                {
                    amenitiesData?.pet?.isAvailable &&
                    <>
                        <p style={{...subStyle,fontSize:14}}>Do you have a surcharge for pets?</p>
                        <Stack direction="horizontal" gap={3} className="mt-3">
                            {
                                ["Yes", "No"].map(data=>
                                    <Form.Check key={data} className="mb-2" type="radio" label={data} name="surcharge" onChange={(e) => handleUpdate(`pet.surcharge.isAvailable`, data.toLowerCase())}/>
                                )
                            }
                        </Stack>
                        {
                            amenitiesData?.pet?.surcharge?.isAvailable==="yes" &&
                            <>
                                <Stack direction="horizontal" gap={2} className="w-100 w-md-60 mb-3 d-flex align-items-end">
                                    <div className="w-80 w-md-35">
                                        <p style={{ ...descStyle, fontSize: 12 }}>Pet fee amount -</p>
                                        <InputWithArrowUpAndDown
                                            mask={false}
                                            value={amenitiesData?.pet?.surcharge?.petFeeAmount || 0}
                                            onChange={(value) => handleUpdate(`pet.surcharge.petFeeAmount`, value)}
                                        />
                                    </div>
                                    <div className="w-80 w-md-35">
                                        <DropDownCustomize
                                            borderChange={true}
                                            list={["Per pet", "Per accommodation"]}
                                            onChange={(selectedValue) => handleUpdate(`pet.surcharge.type`, selectedValue)}
                                        />
                                    </div>
                                    <div className="w-80 w-md-35">
                                        <DropDownCustomize
                                            borderChange={true}
                                            list={["Per day","Per night","Per stay","Per week"]}
                                            onChange={(selectedValue) => handleUpdate(`pet.surcharge.duration`, selectedValue)}
                                        />
                                    </div>
                                </Stack>

                                <Form.Check className="mb-2" type="checkbox" label="Maximum fee per stay" name="MaximumFeePerStay" onChange={(e) => handleUpdate(`pet.surcharge.MaximumFeePerStay`, e.target.checked)}/>
                                {
                                    amenitiesData?.pet?.surcharge?.MaximumFeePerStay &&
                                    <div className="w-80 w-md-35 my-3">
                                        <p style={{ ...descStyle, fontSize: 12 }}>FeePet-MaxAmt</p>
                                        <InputWithArrowUpAndDown
                                            mask={false}
                                            value={amenitiesData?.pet?.surcharge?.feePerStay || 0}
                                            onChange={(value) => handleUpdate(`pet.surcharge.feePerStay`, value)}
                                        />
                                    </div>
                                }
                                <Form.Check className="mb-2" type="checkbox" label="Pet fee may vary based on length of stay" name="feeVary" onChange={(e) => handleUpdate(`pet.surcharge.feeVary`, e.target.checked)}/>
                            </>
                        }
                        <p className="my-3" style={{...subStyle,fontSize:14}}>Do you have pet type restrictions?</p>
                        <div className="w-80 w-md-30 mb-3">
                            <DropDownCustomize
                                borderChange={true}
                                list={["Only dogs are allowed","Only cats are allowed","Only dogs and cats are allowed"]}
                                onChange={(selectedValue) => handleUpdate(`pet.typeRestrictions`, selectedValue)}
                            />
                        </div>
                        {
                            petOptionsList.map((item, index)=>
                                <div key={index}>
                                    <Form.Check className="mb-2" type="checkbox" label={item.id} name={item.id} onChange={(e) => handleUpdate(`pet.${item.path}.isAvailable`, e.target.checked)}/>
                                    {
                                        index === 0 && amenitiesData?.pet?.[`${item.path}`]?.isAvailable &&
                                        <Stack className="ps-4">
                                            <Form.Check className="mb-2" type="checkbox" label="Maximum weight limit per pet" name="maxWeightLimitPerPet" onChange={(e) => handleUpdate(`pet.${item.path}.maxWeightLimitPerPet.isAvailable`, e.target.checked)}/>
                                            {
                                                amenitiesData?.pet?.[`${item.path}`]?.maxWeightLimitPerPet?.isAvailable &&
                                                <Stack direction="horizontal" gap={2} className="w-100 w-md-40 mb-3 d-flex align-items-end">
                                                    <InputWithArrowUpAndDown
                                                        mask={false}
                                                        value={amenitiesData?.pet?.[`${item.path}`]?.maxWeightLimitPerPet.amount || 0}
                                                        onChange={(value) => handleUpdate(`pet.${item.path}.maxWeightLimitPerPet.amount`, value)}
                                                    />
                                                    <DropDownCustomize
                                                        borderChange={true}
                                                        list={["Kilograms", "Pounds"]}
                                                        onChange={(selectedValue) => handleUpdate(`pet.${item.path}.maxWeightLimitPerPet.unit`, selectedValue)}
                                                    />
                                                </Stack>
                                            }
                                            <Form.Check className="mb-2" type="checkbox" label="Small pets only" name="smallPetOnly" onChange={(e) => handleUpdate(`pet.${item.path}.smallPetOnly`, e.target.checked)}/>
                                            <div className="w-80 w-md-25 mb-3">
                                                <p style={{ ...descStyle, fontSize: 12 }}>Maximum per room</p>
                                                <DropDownCustomize
                                                    borderChange={true}
                                                    list={["1","2","3","4"]}
                                                    onChange={(selectedValue) => handleUpdate(`pet.${item.path}.maxPerRoom`, selectedValue)}
                                                />
                                            </div>
                                            {
                                                ["Pets allowed in smoking rooms only", "Pets allowed in specific rooms only", "Pets cannot be left unattended", "Other pet restrictions apply"].map(data => (
                                                    <Form.Check
                                                        key={data}
                                                        className="mb-2"
                                                        type="checkbox"
                                                        label={data}
                                                        name={data}
                                                        onChange={(e) => handleUpdate(`pet.restrictions.features`, e.target.checked, 'checked array', e)}
                                                    />
                                                ))
                                            }
                                        </Stack>
                                    }
                                    {
                                        index ===1 && amenitiesData?.pet?.[`${item.path}`]?.isAvailable &&
                                        <Stack direction="horizontal" gap={2} className="w-100 w-md-60 mb-3 d-flex align-items-end ps-4">
                                            <div className="w-80 w-md-35">
                                                <p style={{ ...descStyle, fontSize: 12 }}>Pet deposit amount -</p>
                                                <InputWithArrowUpAndDown
                                                    mask={false}
                                                    value={amenitiesData?.pet?.[`${item.path}`]?.petDepositAmount || 0}
                                                    onChange={(value) => handleUpdate(`pet.${item.path}.petDepositAmount`, value)}
                                                />
                                            </div>
                                            <div className="w-80 w-md-35">
                                                <DropDownCustomize
                                                    borderChange={true}
                                                    list={["Per day","Per night","Per stay","Per week"]}
                                                    onChange={(selectedValue) => handleUpdate(`pet.${item.path}.duration`, selectedValue)}
                                                />
                                            </div>
                                        </Stack>

                                    }
                                    {
                                        index ===2 && amenitiesData?.pet?.[`${item.path}`]?.isAvailable &&
                                        <Stack className="w-80 w-md-30 mb-3 ps-4">
                                            <p style={{ ...descStyle, fontSize: 12 }}>Pet deposit amount -</p>
                                            <InputWithArrowUpAndDown
                                                mask={false}
                                                value={amenitiesData?.pet?.[`${item.path}`]?.petDepositAmount || 0}
                                                onChange={(value) => handleUpdate(`pet.${item.path}.petDepositAmount`, value)}
                                            />
                                        </Stack>

                                    }
                                </div>
                            )
                        }
                        <p className="mb-2" style={{...subStyle,fontSize:14}}>Pet-friendly features</p>
                        {
                            petFeaturesList.map(item=>
                                <Form.Check key={item} className="mb-2" type="checkbox" label={item} name={item} onChange={(e) => handleUpdate(`pet.options`, e.target.checked, 'checked array', e)}/>
                            )
                        }
                    </>
                }
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
                {
                    amenitiesData?.accessibilityFeatures?.isAvailable &&
                    <>
                        <p className="mb-2" style={descStyle}>Accessible features provide comfort and convenience for guests that require additional assistance.</p>
                        <p className="mb-2" style={{...subStyle,fontSize:14}}>Are the common areas of your property wheelchair accessible?</p>
                        <Stack direction="horizontal" gap={3} className="my-3">
                            {
                                [{id:"Yes (may have limitations)",checked:true},{id:"No",checked:false}].map(data=>
                                    <Form.Check key={data.id} className="mb-2" type="radio" label={data.id} name="wheelchairAccessible" onChange={(e) => handleUpdate(`accessibilityFeatures.wheelchairAccessible.isAvailable`, data.checked)}/>
                                )
                            }
                        </Stack>
                        {
                            amenitiesData?.accessibilityFeatures?.wheelchairAccessible?.isAvailable &&
                            <Stack className="ps-4">
                                <p className="mb-2" style={{...subStyle,fontSize:14}}>Which features of your property are wheelchair accessible?</p>
                                {
                                    wheelChairAccessibleList.map((data,index)=>
                                        <div key={index}>
                                            <Form.Check key={data} className="mb-2" type="checkbox" label={data} name={data} onChange={(e) => handleUpdate(`accessibilityFeatures.wheelchairAccessible.accessibleList`, e.target.checked,'checked array', e)}/>
                                            {
                                                index ===0 && amenitiesData?.accessibilityFeatures?.wheelchairAccessible?.accessibleList?.find(option => option.option === data)?.isAvailable &&
                                                <Stack direction="horizontal" gap={2} className="w-100 w-md-60 mb-3 d-flex align-items-end ps-4">
                                                    <div>
                                                        <p style={{ ...descStyle, fontSize: 12 }}>Registration desk height (inches)</p>
                                                        <InputWithArrowUpAndDown
                                                            mask={false}
                                                            value={amenitiesData?.accessibilityFeatures?.wheelchairAccessible?.accessibleList?.find(option => option.option === data)?.registrationDeskHeightInches || 0}
                                                            onChange={(value) => handleUpdate(`accessibilityFeatures.wheelchairAccessible.accessibleList`, value, "options update","registrationDeskHeightInches",data)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <p style={{ ...descStyle, fontSize: 12 }}>Registration desk height (centimeters)</p>
                                                        <InputWithArrowUpAndDown
                                                            mask={false}
                                                            value={amenitiesData?.accessibilityFeatures?.wheelchairAccessible?.accessibleList?.find(option => option.option === data)?.registrationDeskHeightCentiMeters || 0}
                                                            onChange={(value) => handleUpdate(`accessibilityFeatures.wheelchairAccessible.accessibleList`, value, "options update","registrationDeskHeightCentiMeters",data)}
                                                        />
                                                    </div>
                                                </Stack>
                                            }
                                            {
                                                index === 6 && amenitiesData?.accessibilityFeatures?.wheelchairAccessible?.accessibleList?.find(option => option.option === data)?.isAvailable &&
                                                <div className="ps-4 mb-3">
                                                    <p style={{ ...descStyle, fontSize: 12 }}>Number of on-site accessible parking spots</p>
                                                    <div className="w-100 w-md-45">
                                                        <DropDownCustomize
                                                            borderChange={true}
                                                            list={poolHowManyList}
                                                            onChange={(selectedValue) => handleUpdate(`accessibilityFeatures.wheelchairAccessible.accessibleList`, selectedValue, "options update","noOfOnSiteParkingSpots",data)}
                                                        />
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                }
                            </Stack>
                        }

                        <p className="mb-2" style={{...subStyle,fontSize:14}}>Are there elevators?</p>
                        <Stack direction="horizontal" gap={3} className="mt-3">
                            {
                                [{id:"Yes",checked:true},{id:"No",checked:false}].map(data=>
                                    <Form.Check key={data.id} className="mb-2" type="radio" label={data.id} name="elevators" onChange={(e) => handleUpdate(`accessibilityFeatures.elevators.isAvailable`, data.checked)}/>
                                )
                            }
                        </Stack>
                        {
                            amenitiesData?.accessibilityFeatures?.elevators?.isAvailable &&
                            <Stack className="ps-4">
                                <Stack direction="horizontal" gap={2} className="w-100 w-md-60 mb-3 d-flex align-items-end">
                                    <div>
                                        <p style={{ ...descStyle, fontSize: 12 }}>Elevator door width (inches)</p>
                                        <InputWithArrowUpAndDown
                                            mask={false}
                                            value={amenitiesData?.accessibilityFeatures?.elevators?.registrationDeskHeightInches || 0}
                                            onChange={(value) => handleUpdate(`accessibilityFeatures.elevators.registrationDeskHeightInches`, value)}
                                        />
                                    </div>
                                    <div>
                                        <p style={{ ...descStyle, fontSize: 12 }}>Elevator door width (centimeters)</p>
                                        <InputWithArrowUpAndDown
                                            mask={false}
                                            value={amenitiesData?.accessibilityFeatures?.elevators?.registrationDeskHeightCentimeters || 0}
                                            onChange={(value) => handleUpdate(`accessibilityFeatures.elevators.registrationDeskHeightCentimeters`, value)}
                                        />
                                    </div>
                                </Stack>
                                <Form.Check className="mb-2" type="checkbox" label="Wheelchair-accessible path to elevator" name="WheelchairAccessiblePathToElevator" onChange={(e) => handleUpdate(`accessibilityFeatures.elevators.WheelchairAccessiblePathToElevator`, e.target.checked)}/>
                            </Stack>
                        }
                        <p className="mb-3" style={{...subStyle,fontSize:14}}>Property entrance</p>
                        <Stack className="mb-3">
                            {
                                propertyEntranceList.map((item,index)=>
                                    <div className="ps-3" key={item}>
                                        <Form.Check className="mb-2" type="checkbox" label={item} name={item} onChange={(e) => handleUpdate(`accessibilityFeatures.propertyEntranceList`, e.target.checked, 'checked array',e)}/>
                                        {
                                            index === 2 && amenitiesData?.accessibilityFeatures?.propertyEntranceList?.find(option => option.option === item)?.isAvailable &&
                                            <div className="ps-4 mb-3">
                                                <p style={{ ...descStyle, fontSize: 12 }}>Number of on-site accessible parking spots</p>
                                                <div className="w-100 w-md-45">
                                                    <DropDownCustomize
                                                        borderChange={true}
                                                        list={poolHowManyList}
                                                        onChange={(selectedValue) => handleUpdate(`accessibilityFeatures.propertyEntranceList`, selectedValue, "options update","noOfOnSiteParkingSpots",item)}
                                                    />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            }
                        </Stack>
                        <p className="mb-2" style={{...subStyle,fontSize:14}}>Do you allow service animals?</p>
                        <p className="mb-2 w-100 w-md-60" style={descStyle}>Some countries require properties to welcome service animals. Please be aware of the laws and regulations that apply to your property.</p>
                        <Stack direction="horizontal" gap={3} className="mt-3">
                            {
                                [{id:"Yes",checked:true},{id:"No",checked:false}].map(data=>
                                    <Form.Check key={data.id} className="mb-2" type="radio" label={data.id} name="elevators" onChange={(e) => handleUpdate(`accessibilityFeatures.elevators.isAvailable`, data.checked)}/>
                                )
                            }
                        </Stack>
                        <p className="mb-3" style={descStyle}>Service animals are exempt from fees/restrictions</p>
                        <p className="mb-3" style={{...subStyle,fontSize:14}}>Other property accessibility features</p>
                        <Stack className="mb-3">
                            {
                                otherPropertyAccessibilityFeatures.map((item,index)=>
                                    <div className="ps-3" key={index}>
                                        <Form.Check className="mb-2" type="checkbox" label={item} name={item} onChange={(e) => handleUpdate(`accessibilityFeatures.otherPropertyAccessibilityFeatures`, e.target.checked, 'checked array',e)}/>
                                        {
                                            (index === 4 || index ===3) && amenitiesData?.accessibilityFeatures?.otherPropertyAccessibilityFeatures?.find(option => option.option === item)?.isAvailable &&
                                            <Stack direction="horizontal" gap={2} className="w-100 w-md-60 mb-3 d-flex align-items-end ps-4">
                                                <div>
                                                    <p style={{ ...descStyle, fontSize: 12 }}>Hallway handrail height (inches)</p>
                                                    <InputWithArrowUpAndDown
                                                        mask={false}
                                                        value={amenitiesData?.accessibilityFeatures?.otherPropertyAccessibilityFeatures?.find(option => option.option === item)?.hallwayHandrailHeightInches || 0}
                                                        onChange={(value) => handleUpdate(`accessibilityFeatures.otherPropertyAccessibilityFeatures`, value, 'options update','hallwayHandrailHeightInches',item )}
                                                    />
                                                </div>
                                                <div>
                                                    <p style={{ ...descStyle, fontSize: 12 }}>Hallway handrail height (centimeters)</p>
                                                    <InputWithArrowUpAndDown
                                                        mask={false}
                                                        value={amenitiesData?.accessibilityFeatures?.otherPropertyAccessibilityFeatures?.find(option => option.option === item)?.hallwayHandrailHeightCentimeters || 0}
                                                        onChange={(value) => handleUpdate(`accessibilityFeatures.otherPropertyAccessibilityFeatures`, value, 'options update','hallwayHandrailHeightCentimeters',item )}
                                                    />
                                                </div>
                                            </Stack>
                                        }
                                    </div>
                                )
                            }
                        </Stack>
                    </>

                }
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
                {
                    amenitiesData?.guestServices?.isAvailable &&
                    <>
                        <p className="mb-2" style={{...subStyle,fontSize:14}}>Smoking Preferences</p>
                        <Stack direction="horizontal" gap={3} className="mb-2">
                            {
                                ["Smoke-free property","Designated smoking areas"].map(data=>
                                    <Form.Check key={data} type="radio" label={data} name="smokingPreferences" onChange={(e) => handleUpdate(`guestServices.smokingPreferences`, data.toLowerCase())}/>
                                )
                            }
                        </Stack>
                        {
                            amenitiesData?.guestServices?.smokingPreferences ==='designated smoking areas' &&
                            <div className="ps-4 mb-2">
                                <Form.Check type="checkbox" label="Designated smoking areas (fines apply)" name="smokingAreas" onChange={(e) => handleUpdate(`guestServices.smokingAreas`, e.target.checked)}/>
                            </div>
                        }
                        {guestServicesList.map((item, index) =>
                            <div className="" key={index}>
                                <Form.Check className="mb-2" type="checkbox" label={item} name={item}
                                            onChange={(e) => handleUpdate(`guestServices.guestServicesList`, e.target.checked, 'checked array', e)}/>
                                {
                                    index ===2 && amenitiesData?.guestServices?.guestServicesList?.find(option => option.option === item)?.isAvailable &&
                                    <div className="ps-4">
                                        <Form.Check className="mb-2" type="checkbox" label="Coin-operated laundry on site" name="coinOperatedLaundryOnSite"
                                                    onChange={(e) => handleUpdate(`guestServices.guestServicesList`, e.target.checked, 'options update',e,item)}/>
                                    </div>
                                }
                                {
                                    index ===6 && amenitiesData?.guestServices?.guestServicesList?.find(option => option.option === item)?.isAvailable &&
                                    <Stack direction="horizontal" gap={3} className="mb-2 ps-4">
                                        {
                                            ["Free","Surcharge"].map(data=>
                                                <Form.Check key={data} type="radio" label={data} name="type" onChange={(e) => handleUpdate(`guestServices.guestServicesList`, data.toLowerCase(), 'options update',e,item)}/>
                                            )
                                        }
                                    </Stack>
                                }
                                {
                                    index ===19 && amenitiesData?.guestServices?.guestServicesList?.find(option => option.option === item)?.isAvailable &&
                                    <div className="ps-4">
                                        {
                                            reciptionFacilitiesList.map(data=>
                                                <Form.Check key={data.id} type="checkbox" label={data.id} name={data.path} onChange={(e) => handleUpdate(`guestServices.guestServicesList`, e.target.checked, 'options update',e,item)}/>
                                            )
                                        }
                                    </div>
                                }
                            </div>
                        )
                        }
                    </>
                }
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
                {
                    amenitiesData?.inRoomConveniences?.isAvailable &&
                    <>
                        {roomConveniencesList.map((item, index) =>
                            <div className="" key={index}>
                                <Form.Check className="mb-2" type="checkbox" label={item} name={item}
                                            onChange={(e) => handleUpdate(`inRoomConveniences.roomConveniencesList`, e.target.checked, 'checked array', e)}/>
                                {
                                    index ===10 && amenitiesData?.inRoomConveniences?.roomConveniencesList?.find(option => option.option === item)?.isAvailable &&
                                    <div className="w-80 w-md-35 ps-4 mb-2">
                                        <DropDownCustomize
                                            borderChange={true}
                                            list={["Washer/dryer", "Washing machine","Dryer","All-in-one washer and dryer"]}
                                            onChange={(selectedValue) => handleUpdate(`inRoomConveniences.roomConveniencesList`, selectedValue, 'options update',"type",item)}
                                        />
                                    </div>
                                }
                                {
                                    index ===16 && amenitiesData?.inRoomConveniences?.roomConveniencesList?.find(option => option.option === item)?.isAvailable &&
                                    <div className="w-80 w-md-35 ps-4 mb-2">
                                        <DropDownCustomize
                                            borderChange={true}
                                            list={["In-room safe","In-room safe (laptop compatible)","In-room safe (surcharge)"]}
                                            onChange={(selectedValue) => handleUpdate(`inRoomConveniences.roomConveniencesList`, selectedValue, 'options update',"type",item)}
                                        />
                                    </div>
                                }
                                {
                                    index ===9 && amenitiesData?.inRoomConveniences?.roomConveniencesList?.find(option => option.option === item)?.isAvailable &&
                                    <Stack direction="horizontal" gap={3} className="mb-2 ps-4">
                                        {
                                            ["In room","On request"].map(data=>
                                                <Form.Check key={data} type="radio" label={data} name="type" onChange={(e) => handleUpdate(`inRoomConveniences.roomConveniencesList`, data.toLowerCase(), 'options update',e,item)}/>
                                            )
                                        }
                                    </Stack>
                                }
                                {
                                    index ===18 && amenitiesData?.inRoomConveniences?.roomConveniencesList?.find(option => option.option === item)?.isAvailable &&
                                    <Stack direction="horizontal" gap={3} className="mb-2 ps-4">
                                        {
                                            ["Daily","Weekdays"].map(data=>
                                                <Form.Check key={data} type="radio" label={data} name="type" onChange={(e) => handleUpdate(`inRoomConveniences.roomConveniencesList`, data.toLowerCase(), 'options update',e,item)}/>
                                            )
                                        }
                                    </Stack>
                                }
                                {
                                    index ===19 && amenitiesData?.inRoomConveniences?.roomConveniencesList?.find(option => option.option === item)?.isAvailable &&
                                    <Stack className="mb-2 ps-4" gap={1}>
                                        {
                                            [{id:"Smartphone",path:"smartphone"},{id:"Electrical adapters/chargers",path:"electricalAdaptersChargers"},{id:"Computer monitor",path: "computerMonitor"}].map(data=>
                                                <Form.Check key={data.id} type="checkbox" label={data.id} name={data.path} onChange={(e) => handleUpdate(`inRoomConveniences.roomConveniencesList`, e.target.checked, 'options update',e,item)}/>
                                            )
                                        }
                                    </Stack>
                                }
                                {
                                    index ===20 && amenitiesData?.inRoomConveniences?.roomConveniencesList?.find(option => option.option === item)?.isAvailable &&
                                    <div className="w-80 w-md-35 ps-4 mb-2">
                                        <Stack direction="horizontal" gap={3} className="mb-3">
                                            <Stack>
                                                <p style={{...descStyle,fontSize:12}}>Data speed</p>
                                                <DropDownCustomize
                                                    borderChange={true}
                                                    list={["3G","4G","4G LTE","5G"]}
                                                    onChange={(selectedValue) => handleUpdate(`inRoomConveniences.roomConveniencesList`, selectedValue, 'options update',"dataSpeed",item)}
                                                />
                                            </Stack>
                                            <Stack>
                                                <p style={{...descStyle,fontSize:12}}>Data usage</p>
                                                <DropDownCustomize
                                                    borderChange={true}
                                                    list={["Free","Limited"]}
                                                    onChange={(selectedValue) => handleUpdate(`inRoomConveniences.roomConveniencesList`, selectedValue, 'options update',"dataUsage",item)}
                                                />
                                            </Stack>
                                        </Stack>
                                        <Form.Check type="checkbox" label="Phone calls" name="phoneCalls" onChange={(e) => handleUpdate(`inRoomConveniences.roomConveniencesList`, e.target.checked, 'options update',e,item)}/>
                                        {
                                            amenitiesData?.inRoomConveniences?.roomConveniencesList?.find(option => option.option === item)?.phoneCalls &&
                                            <div className="my-3 w-80 w-md-50">
                                                <DropDownCustomize
                                                    borderChange={true}
                                                    list={["Limited","Unlimited"]}
                                                    onChange={(selectedValue) => handleUpdate(`inRoomConveniences.roomConveniencesList`, selectedValue, 'options update',"callType",item)}
                                                />
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        )
                        }
                    </>
                }
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
