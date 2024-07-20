import React from 'react'
import { Accordion, ButtonGroup, Dropdown, Form } from 'react-bootstrap'
import * as Icon from '../Icons'

// componants
import * as Internet from './internet'
import * as Parking from './parking'
import * as PoolAccess from './PoolAccess'
import * as DiningVenues from './DiningVenues'
import * as Spa from './Spa'
import * as AllowPets from './AllowPets'
import * as Accessible from './Accessibility'
import * as DepositBox from './DepositBox'
import * as Housekeeping from './Housekeeping'
import * as AdventureSport from './AdventureSport'
import * as Beach from './Beach'



const IsFontDeskYes = (props) => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const timeName = ["06.00 AM", "06.30 AM", "07.00 AM", "07.30 AM", "08.00 AM"];
    return (
        <div className='d-flex flex-column gap-3 mb-2'>
            <p className='fs-14'>What is the front desk schedule?</p>
            <Form.Group className='d-flex gap-2'>
                <Form.Check
                    onChange={() => props.UpdateData('FontDesk.selectDay', 'EveryDay', 'multi')}
                    defaultChecked={props.Data.selectDay == 'EveryDay'}
                    className='fs-14'
                    type='radio'
                    label="Every day"
                />
                <Form.Check
                    onChange={() => props.UpdateData('FontDesk.selectDay', 'SelectDay', 'multi')}
                    defaultChecked={props.Data.selectDay == 'SelectDay'}
                    className='fs-14'
                    type='radio'
                    label="Select days" />
            </Form.Group>
            {props.Data.selectDay == 'EveryDay' ?
                <div className="d-flex gap-3">
                    <Form.Group>
                        <Form.Label className="fs-14">Desk opens</Form.Label>
                        <Form.Select
                            onChange={(e) => props.UpdateData('FontDesk.deskOpens', e.target.value, 'multi')}
                            className="w-auto fs-14"
                            style={{ outline: "none" }}>
                            <option value=''>-select-</option>
                            {timeName.map((item, index) => (
                                <option key={index} className='fs-14' value={item}>{item}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="fs-14">Desk closes</Form.Label>
                        <Form.Select
                            onChange={(e) => props.UpdateData('FontDesk.deskClose', e.target.value, 'multi')}
                            className="w-auto"
                            style={{ outline: "none" }}>
                            <option value=''>-select-</option>
                            <option value=''>-select-</option>
                            {timeName.map((item, index) => (
                                <option key={index} className='fs-14' value={item}>{item}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </div>
                :
                <>
                    <div className="d-flex gap-3">
                        <Form.Group>
                            <Form.Label className="fs-14">Start day</Form.Label>
                            <Form.Select
                                onChange={(e) => props.UpdateData('FontDesk.deskOpens', e.target.value, 'multi')}
                                className="w-auto"
                                style={{ outline: "none" }}>
                                <option value=''>-select-</option>
                                <option value=''>-select-</option>
                                {timeName.map((item, index) => (
                                    <option key={index} className='fs-14' value={item}>{item}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="fs-14">End day</Form.Label>
                            <Form.Select
                                onChange={(e) => props.UpdateData('FontDesk.deskClose', e.target.value, 'multi')}
                                className="w-auto"
                                style={{ outline: "none" }}>
                                <option value=''>-select-</option>
                                {timeName.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="d-flex gap-3">
                        <Form.Group>
                            <Form.Label className="fs-14">Desk opens</Form.Label>
                            <Form.Select
                                onChange={(e) => props.UpdateData('FontDesk.startDay', e.target.value, 'multi')}
                                className="w-auto"
                                style={{ outline: "none" }}>
                                <option value=''>-select-</option>
                                {dayNames.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="fs-14">Desk closes</Form.Label>
                            <Form.Select
                                onChange={(e) => props.UpdateData('FontDesk.endDay', e.target.value, 'multi')}
                                className="w-auto"
                                style={{ outline: "none" }}>
                                <option value=''>-select-</option>
                                {dayNames.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </div>
                </>
            }

        </div>
    )
}
const IsFontDeskNo = (props) => {
    return (
        <div className='d-flex gap-3'>
            {/* <p className="fs-14">Virtual front desk &nbsp; <Icons.InfoSquare /></p> */}
            <Form.Check
                defaultChecked={props.Data.isVirtualDesk}
                type='radio'
                className='fs-14'
                onClick={() => props.UpdateData('FontDesk.isVirtualDesk', !props.Data.isVirtualDesk, 'multi')}
                id='vfd'
            />
            <Form.Label htmlFor="vfd" className='fs-14'>Virtual front desk</Form.Label>
        </div>
    )
}
const IsSelfCheckAvailable = (props) => {
    const guestsAccessTheirUnitList = {
        'Access code': 'Numeric pad that unlocks doors',
        'Key retrieval instructions': 'Hidden key, etc.',
        'Lockbox instructions': 'Locked container that holds a key',
        'Smart lock code': 'WiFi-enabled lock',
        'Express check-in': 'Guests can use a kiosk to check-in'
    };

    return (
        <div>
            <div className="d-flex flex-column gap-3">
                <p className='fs-14'>How will guests access their unit?</p>

                <Dropdown>
                    <Dropdown.Toggle style={{ border: "1px solid #EBEBEB", width: "279px", textAlign: "left", }} variant="" id="dropdown-basic">
                        {props.Data.guestsAccessTheirUnit}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ border: "1px solid #EBEBEB", width: "279px", textAlign: "left", }}>
                        {
                            Object.entries(guestsAccessTheirUnitList).map(([key, value], index) => (
                                <Dropdown.Item key={index} onClick={() => props.UpdateData('SelfCheckAvailable.guestsAccessTheirUnit', key, 'multi')}>
                                    <span className='fs-14 text-black' style={{ fontWeight: "500" }}>{key}</span><br />
                                    <span className='fs-14'>{value}</span>
                                </Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>

                <p className='fs-14'>Is a mobile app recommended or required?</p>
                <Dropdown>
                    <Dropdown.Toggle style={{ border: "1px solid #EBEBEB", width: "279px", textAlign: "left", }} variant="" id="dropdown-basic">
                        {props.Data.IsMobileApp}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ border: "1px solid #EBEBEB", width: "279px", textAlign: "left", }}>
                        <Dropdown.Item onClick={() => props.UpdateData('SelfCheckAvailable.IsMobileApp', 'Mobile app required', 'multi')}>
                            <span className='fs-14 text-black' style={{ fontWeight: "500" }}>Mobile app recommended</span>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => props.UpdateData('SelfCheckAvailable.IsMobileApp', 'Mobile app recommended', 'multi')}>
                            <span className='fs-14 text-black' style={{ fontWeight: "500" }}>Mobile app required</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>
        </div>
    )
}
const IsLateCheckAvailable = () => {
    return (
        <div>

        </div>
    )
}
const IsInternet = (props) => {

    return (
        <div className='d-flex flex-column gap-3'>
            {props.Data.options.map((item, index) => (
                <div key={index}>
                    <Form.Group className='d-flex gap-3'>
                        <Form.Check defaultChecked={props.Data.options[index].isNeeded} id={`isInternet-${index}`} onChange={(e) => props.UpdateData(`Internet.options.${index}.isNeeded`, e.target.checked, 'layer3')} />
                        <Form.Label htmlFor={`isInternet-${index}`}>{item.option}</Form.Label>
                    </Form.Group>
                    {
                        props.Data.options[index].isNeeded &&
                        (
                            index == 0 && <Internet.WiFiInGuestrooms Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 1 && <Internet.WiFiInPublicAreas Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 2 && <Internet.WiredInternetGuestrooms Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 3 && <Internet.WiredInternetPublicAreas Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 4 && <Internet.DialUpInternetGuestrooms Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} />
                        )

                    }
                </div>
            ))}
        </div>
    )
}
const IsParking = (props) => {

    return (
        <div className='d-flex flex-column gap-3'>
            {props.Data.options.map((item, index) => (
                <div key={index}>
                    <Form.Group className='d-flex gap-3'>
                        <Form.Check defaultChecked={props.Data.options[index].isNeeded} id={`isParking-${index}`} onChange={(e) => props.UpdateData(`Parking.options.${index}.isNeeded`, e.target.checked, 'layer3')} />
                        <Form.Label htmlFor={`isParking-${index}`}>{item.option}</Form.Label>
                    </Form.Group>
                    {
                        props.Data.options[index].isNeeded &&
                        (
                            index == 0 && <Parking.SelfParking Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 1 && <Parking.ValetParking Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 2 && <Parking.Extended Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 3 && <Parking.Offsite Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 4 && <Parking.OffStreet Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 6 && <Parking.RvBusOrTruck Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 7 && <Parking.ParkingLimited Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} />
                        )

                    }
                </div>
            ))
            }
        </div>
    )
}
const IsOfferBreakfast = (props) => {
    const breakfastType = [
        "Free buffet breakfast",
        "Free continental breakfast",
        "Free cooked-to-order breakfast",
        "Free English breakfast",
        "Free full breakfast",
        "Free breakfast to go",
        "Free breakfast (local cuisine)",
        "Free self-serve breakfast",
        "Free Cantonese breakfast",
        "Free Korean breakfast",
        "Free Japanese breakfast",
        "Free Taiwanese breakfast"
    ];

    const timeOptions = [
        "4:00 AM",
        "4:30 AM",
        "5:00 AM",
        "5:30 AM",
        "6:00 AM"
    ];


    return (
        <div className='d-flex flex-column gap-3'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`OfferBreakfasTtypeFree`} id={`OfferBreakfasTtypeFree`} onChange={(e) => props.UpdateData('OfferBreakfast.type', 'free', 'multi')} />
                <Form.Label htmlFor={`OfferBreakfasTtypeFree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`OfferBreakfasTtypeSurcharge`} id={`OfferBreakfasTtypeSurcharge`} onChange={(e) => props.UpdateData('OfferBreakfast.type', 'surcharge', 'multi')} />
                <Form.Label htmlFor={`OfferBreakfasTtypeSurcharge`}>Surcharge</Form.Label>
            </Form.Group>
            {props.Data.type == 'free'
                ?
                <Form.Group className='d-flex gap-3'>
                    <Form.Check
                        defaultChecked={props.Data.isFree[0].excludesChildrenFree}
                        name={`OfferBreakfastExcludesChildrenFree`}
                        id={`OfferBreakfastExcludesChildrenFree`}
                        onChange={(e) => props.UpdateData(`OfferBreakfast.isFree.0.excludesChildrenFree`, e.target.checked, 'layer3')} />
                    <Form.Label htmlFor={`OfferBreakfastExcludesChildrenFree`}>Restricted number of spaces per unit</Form.Label>
                </Form.Group>
                :
                <>
                    <Form.Group className='d-flex gap-3'>
                        <Form.Check defaultChecked={props.Data.isSurcharge[0].payType == 'SpecificAmount'} type='radio' name={`SpecificAmount`} id={`SpecificAmount`} onChange={(e) => props.UpdateData('OfferBreakfast.isSurcharge.0.payType', 'SpecificAmount', 'layer3')} />
                        <Form.Label htmlFor={`SpecificAmount`}>Specific amount</Form.Label>

                        <Form.Check defaultChecked={props.Data.isSurcharge[0].payType == 'PriceRange'} type='radio' name={`PriceRange`} id={`PriceRange`} onChange={(e) => props.UpdateData('OfferBreakfast.isSurcharge.0.payType', 'PriceRange', 'layer3')} />
                        <Form.Label htmlFor={`PriceRange`}>Price range</Form.Label>
                    </Form.Group>
                    {props.Data.isSurcharge[0].payType == 'SpecificAmount'
                        ?
                        <Form.Group key={1} className='d-flex gap-2 ms-5'>
                            <Form.Group>
                                <Form.Label className='fs-12'>Breakfast fee amount -</Form.Label>
                                <Form.Control defaultValue={props.Data.isSurcharge[0].amount} placeholder='3' type='number' onChange={(e) => props.UpdateData('OfferBreakfast.isSurcharge.0.amount', e.target.value, 'layer3')} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='fs-12'>Breakfast fee amount -</Form.Label>
                                <Form.Control defaultValue={props.Data.isSurcharge[0].childAmount} placeholder='3' type='number' onChange={(e) => props.UpdateData('OfferBreakfast.isSurcharge.0.childAmount', e.target.value, 'layer3')} />
                            </Form.Group>
                        </Form.Group>
                        :
                        <Form.Group key={2} className='d-flex gap-2 ms-5'>
                            <Form.Group>
                                <Form.Label className='fs-12'>Minimum price</Form.Label>
                                <Form.Control defaultValue={props.Data.isSurcharge[0].minPrice} placeholder='3' type='number' onChange={(e) => props.UpdateData('OfferBreakfast.isSurcharge.0.minPrice', e.target.value, 'layer3')} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='fs-12'>Maximum price</Form.Label>
                                <Form.Control defaultValue={props.Data.isSurcharge[0].maxPrice} placeholder='3' type='number' onChange={(e) => props.UpdateData('OfferBreakfast.isSurcharge.0.maxPrice', e.target.value, 'layer3')} />
                            </Form.Group>
                        </Form.Group>
                    }
                </>
            }
            <Form.Group>
                <Form.Label className="fs-12">Breakfast type</Form.Label>
                <Form.Select
                    onChange={(e) => props.UpdateData('OfferBreakfast.breakfastType', e.target.value, 'multi')}
                    className="w-auto"
                    style={{ outline: "none" }}>
                    <option value=''>-select-</option>
                    {breakfastType.map((item, index) => (
                        <option key={index} selected={props.Data.breakfastType == item} value={item}>{item}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Label className='fs-12'>Breakfast Availability</Form.Label>
            <Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.breakfastAvailability == 'Daily'} type='radio' name={`OfferBreakfasDaily`} id={`OfferBreakfasDaily`} onChange={(e) => props.UpdateData('OfferBreakfast.breakfastAvailability', 'Daily', 'multi')} />
                <Form.Label htmlFor={`OfferBreakfasDaily`}>Daily</Form.Label>

                <Form.Check defaultChecked={props.Data.breakfastAvailability == 'Weekdays'} type='radio' name={`OfferBreakfasWeekdays`} id={`OfferBreakfasWeekdays`} onChange={(e) => props.UpdateData('OfferBreakfast.breakfastAvailability', 'Weekdays', 'multi')} />
                <Form.Label htmlFor={`OfferBreakfasWeekdays`}>Weekdays</Form.Label>

                <Form.Check defaultChecked={props.Data.breakfastAvailability == 'Weekends'} type='radio' name={`OfferBreakfasWeekends`} id={`OfferBreakfasWeekends`} onChange={(e) => props.UpdateData('OfferBreakfast.breakfastAvailability', 'Weekends', 'multi')} />
                <Form.Label htmlFor={`OfferBreakfasWeekends`}>Weekends</Form.Label>
            </Form.Group>

            {/* Breakfast Availability checked is daily show */}
            {props.Data.breakfastAvailability == 'Daily'
                ?
                <>
                    < Form.Group className='d-flex gap-2'>
                        <Form.Check defaultChecked={props.Data.isDaily[0].times == 'sameTime'} type='radio' name={`OfferBreakfasDailySameTime`} id={`OfferBreakfasDailySameTime`} onChange={(e) => props.UpdateData('OfferBreakfast.isDaily.0.times', 'sameTime', 'layer3')} />
                        <Form.Label htmlFor={`OfferBreakfasDailySameTime`}>Same times every day</Form.Label>

                        <Form.Check defaultChecked={props.Data.isDaily[0].times == 'weekendWeekday'} type='radio' name={`OfferBreakfasWeekdaysWeekendWeekday`} id={`OfferBreakfasWeekdaysWeekendWeekday`} onChange={(e) => props.UpdateData('OfferBreakfast.isDaily.0.times', 'weekendWeekday', 'layer3')} />
                        <Form.Label htmlFor={`OfferBreakfasWeekdaysWeekendWeekday`}>Weekend/Weekday times</Form.Label>
                    </Form.Group>

                    {/* selected Same times every day display */}
                    {props.Data.isDaily[0].times == 'sameTime'
                        ?
                        <div className="d-flex gap-3 ms-5">
                            <Form.Group>
                                <Form.Label className='fs-12'>Start time</Form.Label>
                                <Form.Select
                                    onChange={(e) => props.UpdateData('OfferBreakfast.isDaily.0.start1', e.target.value, 'layer3')}
                                    className='w-auto'
                                >
                                    <option selected={props.Data.isDaily[0].start1 == ''} value=''>-Select-</option>
                                    {
                                        timeOptions.map((item, index) => (
                                            <option key={index} selected={props.Data.isDaily[0].start1 == item} value={item}>{item}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='fs-12'>End time</Form.Label>
                                <Form.Select
                                    onChange={(e) => props.UpdateData('OfferBreakfast.isDaily.0.end1', e.target.value, 'layer3')}
                                    className='w-auto'
                                >
                                    <option selected={props.Data.isDaily[0].end1 == ''} value=''>-Select-</option>
                                    {
                                        timeOptions.map((item, index) => (
                                            <option key={index} selected={props.Data.isDaily[0].end1 == item} value={item}>{item}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                        </div>
                        :
                        <div className='ms-5 d-flex flex-column gap-3'>
                            <p className="fs-14 text-black"><b>Weekdays</b></p>
                            <div className="d-flex gap-3">
                                <Form.Group>
                                    <Form.Label className='fs-12'>Start time</Form.Label>
                                    <Form.Select
                                        onChange={(e) => props.UpdateData('OfferBreakfast.isDaily.0.start1', e.target.value, 'layer3')}
                                        className='w-auto'
                                    >
                                        <option selected={props.Data.isDaily[0].start1 == ''} value=''>-Select-</option>
                                        {
                                            timeOptions.map((item, index) => (
                                                <option key={index} selected={props.Data.isDaily[0].start1 == item} value={item}>{item}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='fs-12'>End time</Form.Label>
                                    <Form.Select
                                        onChange={(e) => props.UpdateData('OfferBreakfast.isDaily.0.end1', e.target.value, 'layer3')}
                                        className='w-auto'
                                    >
                                        <option selected={props.Data.isDaily[0].end1 == ''} value=''>-Select-</option>
                                        {
                                            timeOptions.map((item, index) => (
                                                <option key={index} selected={props.Data.isDaily[0].end1 == item} value={item}>{item}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <p className="fs-14 text-black"><b>Weekends</b></p>
                            <div className="d-flex gap-3">
                                <Form.Group>
                                    <Form.Label className='fs-12'>Start time</Form.Label>
                                    <Form.Select
                                        onChange={(e) => props.UpdateData('OfferBreakfast.isDaily.0.start2', e.target.value, 'layer3')}
                                        className='w-auto'
                                    >
                                        <option selected={props.Data.isDaily[0].start2 == ''} value=''>-Select-</option>
                                        {
                                            timeOptions.map((item, index) => (
                                                <option key={index} selected={props.Data.isDaily[0].start2 == item} value={item}>{item}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='fs-12'>End time</Form.Label>
                                    <Form.Select
                                        onChange={(e) => props.UpdateData('OfferBreakfast.isDaily.0.end2', e.target.value, 'layer3')}
                                        className='w-auto'
                                    >
                                        <option selected={props.Data.isDaily[0].end2 == ''} value=''>-Select-</option>
                                        {
                                            timeOptions.map((item, index) => (
                                                <option key={index} selected={props.Data.isDaily[0].end2 == item} value={item}>{item}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>
                    }
                </>
                :
                <div className="d-flex gap-3 ms-5">
                    <Form.Group>
                        <Form.Label className='fs-12'>Start time</Form.Label>
                        <Form.Select
                            onChange={(e) => props.UpdateData('OfferBreakfast.isDaily.0.start', e.target.value, 'layer3')}
                            className='w-auto'
                        >
                            <option selected={props.Data.isDaily[0].start == ''} value=''>-Select-</option>
                            {
                                timeOptions.map((item, index) => (
                                    <option key={index} selected={props.Data.isDaily[0].start == item} value={item}>{item}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='fs-12'>End time</Form.Label>
                        <Form.Select
                            onChange={(e) => props.UpdateData('OfferBreakfast.isDaily.0.end', e.target.value, 'layer3')}
                            className='w-auto'
                        >
                            <option selected={props.Data.isDaily[0].end == ''} value=''>-Select-</option>
                            {
                                timeOptions.map((item, index) => (
                                    <option key={index} selected={props.Data.isDaily[0].end == item} value={item}>{item}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                </div>
            }

        </div >
    )
}
const IsPoolAccess = (props) => {
    return (
        <div className='d-flex flex-column gap-3'>
            {props.Data.options.map((item, index) => (
                <div key={index}>
                    <Form.Group className='d-flex gap-2'>
                        <Form.Check defaultChecked={props.Data.options[index].isNeeded} id={`isPoolAccess${index}`} onChange={(e) => props.UpdateData(`PoolAccess.options.${index}.isNeeded`, e.target.checked, 'layer3')} />
                        <Form.Label htmlFor={`isPoolAccess${index}`}>{item.option}</Form.Label>
                    </Form.Group>
                    {
                        props.Data.options[index].isNeeded &&
                        (
                            index == 0 && <PoolAccess.OutdoorPool Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 1 && <PoolAccess.OutdooSeasonalPool Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 2 && <PoolAccess.IndoorPool Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 4 && <PoolAccess.PoolHours Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 7 && <PoolAccess.PoolsideBar Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 8 && <PoolAccess.SwimUpBar Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 9 && <PoolAccess.WaterPack Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 13 && <PoolAccess.SpaTub Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 20 && <PoolAccess.PoolCabanas Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} />
                        )

                    }
                </div>
            ))
            }
        </div>
    )
}

const IsDiningVenues = (props) => {
    return (
        <div className='d-flex flex-column gap-1'>
            <p className="fs-14">Is there a front desk at your property?</p>
            <Form.Group>
                <Form.Label className='fs-12'>Restaurants</Form.Label>
                <Form.Select
                    onChange={(e) => props.UpdateData('DiningVenues.restaurants', e.target.value, 'multi')}
                    className='w-auto'
                >
                    <option selected={props.Data.restaurants == ''} value=''>-Select-</option>
                    <option selected={props.Data.restaurants == 'val1'} value='val1'>val1</option>
                    <option selected={props.Data.restaurants == 'val2'} value='val2'>val2</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label className='fs-12'>Bars</Form.Label>
                <Form.Select
                    onChange={(e) => props.UpdateData('DiningVenues.bars', e.target.value, 'multi')}
                    className='w-auto'
                >
                    <option selected={props.Data.bars == ''} value=''>-Select-</option>
                    <option selected={props.Data.bars == 'val1'} value='val1'>val1</option>
                    <option selected={props.Data.bars == 'val2'} value='val2'>val2</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label className='fs-12'>Coffee shop or cafe</Form.Label>
                <Form.Select
                    onChange={(e) => props.UpdateData('DiningVenues.coffeeShopOrCafe', e.target.value, 'multi')}
                    className='w-auto'
                >
                    <option selected={props.Data.coffeeShopOrCafe == ''} value=''>-Select-</option>
                    <option selected={props.Data.coffeeShopOrCafe == 'val1'} value='val1'>val1</option>
                    <option selected={props.Data.coffeeShopOrCafe == 'val2'} value='val2'>val2</option>
                </Form.Select>
            </Form.Group>
            {props.Data.options.map((item, index) => (
                <div key={index}>
                    <Form.Group className='d-flex gap-2'>
                        <Form.Check defaultChecked={props.Data.options[index].isNeed} id={`isDiningVenues${index}`} onChange={(e) => props.UpdateData(`DiningVenues.options.${index}.isNeed`, e.target.checked, 'layer3')} />
                        <Form.Label htmlFor={`isDiningVenues${index}`}>{item.option}</Form.Label>
                    </Form.Group>
                    {

                        props.Data.options[index].isNeed &&
                        (
                            index == 2 && <DiningVenues.FreeReception Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 3 && <DiningVenues.GalaDinners Data={props.Data.options[index]} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 4 && <DiningVenues.HostedEveningMeal Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} />
                        )

                    }
                </div>
            ))
            }
        </div>
    )
}
const IsSpa = (props) => {
    return (
        <div>
            {props.Data.options.map((item, index) => (
                <div key={index}>
                    <Form.Group className='d-flex gap-2'>
                        <Form.Check defaultChecked={props.Data.options[index].isNeed} id={`IsSpa${index}`}
                            onChange={(e) => props.UpdateData(`Spa.options.${index}.isNeed`, e.target.checked, 'layer3')} />
                        <Form.Label htmlFor={`IsSpa${index}`}>{item.option}</Form.Label>
                    </Form.Group>
                    {
                        props.Data.options[index].isNeed &&
                        (
                            index == 0 && <Spa.SpaService Data={props.Data.options[index]} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 1 && <Spa.Massages Data={props.Data.options[index]} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 2 && <Spa.SpaTreatmentRoom Data={props.Data.options[index]} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 3 && <Spa.SpaTreatments Data={props.Data.options[index]} UpdateData={props.UpdateData} Index={index} />
                        )

                    }
                </div>
            ))
            }
        </div>
    )
}

// allow pet section 
const IsAllowPets = (props) => {
    return (
        <div>
            <p className='fs-14 text-black'><b>Do you have a surcharge for pets?</b></p>

            {/* Do you have a surcharge for pets? */}
            <Form.Group className='d-flex gap-2 mt-2'>
                <Form.Check defaultChecked={props.Data.urchargePets == 'yes'} type='radio' name={`AllowPetsurchargePets`} id={`AllowPetsurchargePetsYes`} onChange={(e) => props.UpdateData('AllowPets.urchargePets', 'yes', 'multi')} />
                <Form.Label htmlFor={`AllowPetsurchargePetsYes`}>Daily</Form.Label>

                <Form.Check defaultChecked={props.Data.urchargePets == 'no'} type='radio' name={`AllowPetsurchargePets`} id={`AllowPetsurchargePetsno`} onChange={(e) => props.UpdateData('AllowPets.urchargePets', 'no', 'multi')} />
                <Form.Label htmlFor={`AllowPetsurchargePetsno`}>No</Form.Label>
            </Form.Group>

            <div className='d-flex gap-3 mb-2'>
                <Form.Group>
                    <Form.Label className='fs-12'>Pet fee amount -</Form.Label>
                    <Form.Control className='w-auto' type='number'
                        defaultValue={props.Data.amount}
                        onChange={(e) => props.UpdateData('AllowPets.amount', e.target.value, 'multi')} />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='fs-12'>&nbsp;</Form.Label>
                    <Form.Select
                        onChange={(e) => props.UpdateData('AllowPets.type1', e.target.value, 'multi')}
                        className='w-auto'
                    >
                        <option selected={props.Data.type1 == ''} value=''>-Select-</option>
                        <option selected={props.Data.type1 == 'Per pet'} value='Per pet'>Per pet</option>
                        <option selected={props.Data.type1 == 'Per accommodation'} value='Per accommodation'>Per accommodation</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label className='fs-12'>&nbsp;</Form.Label>
                    <Form.Select
                        onChange={(e) => props.UpdateData('AllowPets.type2', e.target.value, 'multi')}
                        className='w-auto'
                    >
                        <option selected={props.Data.type2 == ''} value=''>-Select-</option>
                        <option selected={props.Data.type2 == 'Per day'} value='Per day'>Per day</option>
                        <option selected={props.Data.type2 == 'Per night'} value='Per night'>Per night</option>
                        <option selected={props.Data.type2 == 'Per stay'} value='Per stay'>Per stay</option>
                        <option selected={props.Data.type2 == 'Per week'} value='Per week'>Per week</option>
                    </Form.Select>
                </Form.Group>

            </div>
            {/* sub option list  */}
            {props.Data.options.map((item, index) => (
                <div key={index}>
                    <Form.Group className='d-flex gap-2'>
                        <Form.Check defaultChecked={props.Data.options[index].isNeed} id={`AllowPets${index}`}
                            onChange={(e) => props.UpdateData(`AllowPets.options.${index}.isNeed`, e.target.checked, 'layer3')} />
                        <Form.Label htmlFor={`AllowPets${index}`}>{item.option}</Form.Label>
                    </Form.Group>
                    {
                        props.Data.options[index].isNeed &&
                        (
                            index == 0 && <AllowPets.MaximumReeStay Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 1 && <AllowPets.LengthStay Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 2 && <AllowPets.Restrictions Data={props.Data.options[index]} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 3 && <AllowPets.PetDeposit Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} /> ||
                            index == 4 && <AllowPets.PetCleaning Data={props.Data.options[index].data} UpdateData={props.UpdateData} Index={index} />
                        )
                    }
                    {
                        index == 4 && <p className='fs-14 text-black mb-2'><b>Pet-friendly features</b></p>
                    }
                </div>
            ))
            }

        </div>
    )
}
const IsAccessibility = (props) => {
    return (
        <div className='d-flex flex-column gap-2'>
            <p className='fs-14'>Accessible features provide comfort and convenience for guests that require additional assistance.</p>
            <p className='fs-14 text-black'><b>Are the common areas of your property wheelchair accessible?</b></p>
            <Form.Group className='d-flex gap-2 mt-2'>
                <Form.Check defaultChecked={props.Data.WheelchairAccessible == 'yes'} type='radio' name={`IsAccessibilityWheelchairAccessible`} id={`IsAccessibilityWheelchairAccessibleYes`} onChange={(e) => props.UpdateData('Accessibility.WheelchairAccessible', 'yes', 'multi')} />
                <Form.Label htmlFor={`IsAccessibilityWheelchairAccessibleYes`}>Yes (may have limitations)</Form.Label>

                <Form.Check defaultChecked={props.Data.WheelchairAccessible == 'no'} type='radio' name={`IsAccessibilityWheelchairAccessible`} id={`IsAccessibilityWheelchairAccessibleno`} onChange={(e) => props.UpdateData('Accessibility.WheelchairAccessible', 'no', 'multi')} />
                <Form.Label htmlFor={`IsAccessibilityWheelchairAccessibleno`}>No</Form.Label>
            </Form.Group>
            {props.Data.WheelchairAccessible == 'yes' && <Accessible.WheelchairAccessible Data={props.Data.isWheelchairAccessible} UpdateData={props.UpdateData} />}

            <Form.Group className='d-flex gap-2 mt-2'>
                <Form.Check defaultChecked={props.Data.thereElevators == 'yes'} type='radio' name={`IsAccessibilitythereElevators`} id={`IsAccessibilitythereElevatorsYes`} onChange={(e) => props.UpdateData('Accessibility.thereElevators', 'yes', 'multi')} />
                <Form.Label htmlFor={`IsAccessibilitythereElevatorsYes`}>Yes</Form.Label>

                <Form.Check defaultChecked={props.Data.thereElevators == 'no'} type='radio' name={`IsAccessibilitythereElevators`} id={`IsAccessibilitythereElevatorsno`} onChange={(e) => props.UpdateData('Accessibility.thereElevators', 'no', 'multi')} />
                <Form.Label htmlFor={`IsAccessibilitythereElevatorsno`}>No</Form.Label>
            </Form.Group>
            {props.Data.thereElevators == 'yes' && <Accessible.ThereElevators Data={props.Data} UpdateData={props.UpdateData} />}

            <p className='fs-14 text-dark'><b>Property entrance</b></p>
            {<Accessible.PropertyEntrance Data={props.Data.PropertyEntranceOptions} UpdateData={props.UpdateData} />}

            <p className='fs-14 text-black'><b>Do you allow service animals?</b></p>
            <p className='fs-14'>Some countries require properties to welcome service animals. Please be aware<br /> of the laws and regulations that apply to your property.</p>
            <Form.Group className='d-flex gap-2 mt-2'>
                <Form.Check defaultChecked={props.Data.allowserviceanimals == 'yes'} type='radio' name={`IsAccessibilityallowserviceanimals`} id={`IsAccessibilityallowserviceanimalsYes`} onChange={(e) => props.UpdateData('Accessibility.allowserviceanimals', 'yes', 'multi')} />
                <Form.Label htmlFor={`IsAccessibilityallowserviceanimalsYes`}>Yes (may have limitations)</Form.Label>

                <Form.Check defaultChecked={props.Data.allowserviceanimals == 'no'} type='radio' name={`IsAccessibilityallowserviceanimals`} id={`IsAccessibilityallowserviceanimalsno`} onChange={(e) => props.UpdateData('Accessibility.allowserviceanimals', 'no', 'multi')} />
                <Form.Label htmlFor={`IsAccessibilityallowserviceanimalsno`}>No</Form.Label>
            </Form.Group>
            <p className='fs-14'>Service animals are exempt from fees/restrictions</p>

            <p className='fs-14 text-dark'><b>Other property accessibility features</b></p>
            {<Accessible.AccessibilityFeatures Data={props.Data.accessibilityFeaturesOption} UpdateData={props.UpdateData} />}
        </div>
    )
}
const IsSmooking = (props) => {
    return (
        <div>
            {props.Data.smokeType == 'Designated' &&
                <Form.Group className='d-flex gap-2 ms-5'>
                    <Form.Check defaultChecked={props.Data.finesApply} id={`IsSmookingDesignatedfinesApply`}
                        onChange={(e) => props.UpdateData(`Smooking.finesApply`, e.target.checked, 'multi')} />
                    <Form.Label htmlFor={`IsSmookingDesignatedfinesApply`}>Designated smoking areas (fines apply)</Form.Label>
                </Form.Group>
            }
            {
                props.Data.options.map((item, index) => (
                    <div key={index}>
                        {
                            props.Data.smokeType == 'free' &&
                            <>
                                <Form.Group className='d-flex gap-2'>
                                    <Form.Check defaultChecked={item.isNeed} id={`IsSmooking${index}`}
                                        onChange={(e) => props.UpdateData(`Smooking.options.${index}.isNeed`, e.target.checked, 'layer3')} />
                                    <Form.Label htmlFor={`IsSmooking${index}`}>{item.option}</Form.Label>
                                </Form.Group>
                                {/* sub options */}
                                {
                                    item.isNeed && index == 2 &&
                                    <Form.Group className='d-flex gap-2 ms-5'>
                                        <Form.Check defaultChecked={item.CoinOperated} id={`IsSmookingCoinOperated`}
                                            onChange={(e) => props.UpdateData(`Smooking.options.${index}.CoinOperated`, e.target.checked, 'layer3')} />
                                        <Form.Label htmlFor={`IsSmookingCoinOperated`}>Coin-operated laundry on site</Form.Label>
                                    </Form.Group>
                                }

                                {
                                    item.isNeed && index == 6 &&
                                    <Form.Group className='d-flex gap-2 ms-4'>
                                        <Form.Check defaultChecked={item.type == 'free'} type='radio' name={`IsSmooking`} id={`IsSmookingfree`} onChange={(e) => props.UpdateData(`Smooking.options.${index}.type`, 'free', 'layer3')} />
                                        <Form.Label htmlFor={`IsSmookingfree`}>Free</Form.Label>

                                        <Form.Check defaultChecked={item.type == 'Surcharge'} type='radio' name={`IsSmooking`} id={`IsSmookingnSurcharge`} onChange={(e) => props.UpdateData(`Smooking.options.${index}.type`, 'Surcharge', 'layer3')} />
                                        <Form.Label htmlFor={`IsSmookingnSurcharge`}>Surcharge</Form.Label>
                                    </Form.Group>
                                }
                                {item.isNeed && index == 19 &&
                                    (
                                        [item.subOption1, item.subOption2, item.subOption3].map((subItem, subIndex) => (
                                            <Form.Group key={subIndex} className='d-flex gap-2 ms-5'>
                                                <Form.Check defaultChecked={subItem.isNeed} id={`IsSmookingReceptionFacilities${subIndex}`}
                                                    onChange={(e) => props.UpdateData(`Smooking.options.${index}.subOption${subIndex + 1}.isNeed`, e.target.checked, 'layer4')} />
                                                <Form.Label htmlFor={`IsSmookingReceptionFacilities${subIndex}`}>{subItem.subOption}</Form.Label>
                                            </Form.Group>
                                        ))
                                    )
                                }
                            </>
                        }
                        {
                            props.Data.smokeType == 'Designated' && index < 5 &&
                            <Form.Group className='d-flex gap-2'>
                                <Form.Check defaultChecked={item.isNeed} id={`IsSmooking${index}`}
                                    onChange={(e) => props.UpdateData(`Smooking.options.${index}.isNeed`, e.target.checked, 'layer3')} />
                                <Form.Label htmlFor={`IsSmooking${index}`}>{item.option}</Form.Label>
                            </Form.Group>
                        }
                    </div>

                ))
            }
        </div>
    )
}
const IsDepositBox = (props) => {
    return (
        <div>
            {
                props.Data.map((item, index) => (
                    <div key={index}>
                        <Form.Group className='d-flex gap-2'>
                            <Form.Check defaultChecked={item.isNeed} id={`IsDepositBox${index}`}
                                onChange={(e) => props.UpdateData(`DepositBox.options.${index}.isNeed`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`IsDepositBox${index}`}>{item.option}</Form.Label>
                        </Form.Group>
                        {
                            item.isNeed &&
                            (
                                // console.log(item)
                                index == 9 && <DepositBox.IronOrIroningBoard Data={item.data} UpdateData={props.UpdateData} Index={index} /> ||
                                index == 10 && <DepositBox.InRoomLaundry Data={item.data} UpdateData={props.UpdateData} Index={index} /> ||
                                index == 16 && <DepositBox.InRoomSafe Data={item.data} UpdateData={props.UpdateData} Index={index} /> ||
                                index == 18 && <DepositBox.FreeNewspaper Data={item.data} UpdateData={props.UpdateData} Index={index} /> ||
                                index == 19 && <DepositBox.Phone Data={item} UpdateData={props.UpdateData} Index={index} /> ||
                                index == 20 && <DepositBox.Smartphone Data={item.data} UpdateData={props.UpdateData} Index={index} />
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}
const IsHousekeeping = (props) => {
    return (
        <div>
            {/* first section  */}
            <div className='ms-4'>
                <Form.Group className='d-flex gap-2'>
                    <Form.Check defaultChecked={props.Data.housekeepingType == 'Daily'} type='radio' name={`housekeepingType`} id={`housekeepingTypeDaily`} onChange={(e) => props.UpdateData(`Housekeeping.housekeepingType`, 'Daily', 'multi')} />
                    <Form.Label htmlFor={`housekeepingTypeDaily`}>Daily</Form.Label>

                    <Form.Check defaultChecked={props.Data.housekeepingType == 'Limited'} type='radio' name={`housekeepingType`} id={`housekeepingTypenLimited`} onChange={(e) => props.UpdateData(`Housekeeping.housekeepingType`, 'Limited', 'multi')} />
                    <Form.Label htmlFor={`housekeepingTypenLimited`}>Limited</Form.Label>

                    <Form.Check defaultChecked={props.Data.housekeepingType == 'OnRequest'} type='radio' name={`housekeepingType`} id={`housekeepingTypenOnRequest`} onChange={(e) => props.UpdateData(`Housekeeping.housekeepingType`, 'OnRequest', 'multi')} />
                    <Form.Label htmlFor={`housekeepingTypenOnRequest`}>On request</Form.Label>
                </Form.Group>

                {/* fierst section housekeepingType is a Limited */}
                {
                    props.Data.housekeepingType == 'Limited' &&
                    <Form.Group className='d-flex gap-2'>
                        <Form.Check defaultChecked={props.Data.housekeepingTimeType == 'OncePerStay'} type='radio' name={`housekeepingTimeType`} id={`housekeepingTimeTypeOncePerStay`} onChange={(e) => props.UpdateData(`Housekeeping.housekeepingTimeType`, 'OncePerStay', 'multi')} />
                        <Form.Label htmlFor={`housekeepingTimeTypeOncePerStay`}>Once per stay</Form.Label>

                        <Form.Check defaultChecked={props.Data.housekeepingTimeType == 'Weekly'} type='radio' name={`housekeepingTimeType`} id={`housekeepingTimeTypenWeekly`} onChange={(e) => props.UpdateData(`Housekeeping.housekeepingTimeType`, 'Weekly', 'multi')} />
                        <Form.Label htmlFor={`housekeepingTimeTypenWeekly`}>Weekly</Form.Label>

                        <Form.Check defaultChecked={props.Data.housekeepingTimeType == 'Weekdays'} type='radio' name={`housekeepingTimeType`} id={`housekeepingTimeTypenWeekdays`} onChange={(e) => props.UpdateData(`Housekeeping.housekeepingTimeType`, 'Weekdays', 'multi')} />
                        <Form.Label htmlFor={`housekeepingTimeTypenWeekdays`}>Weekdays</Form.Label>

                        <Form.Check defaultChecked={props.Data.housekeepingTimeType == 'Weekends'} type='radio' name={`housekeepingTimeType`} id={`housekeepingTimeTypenWeekends`} onChange={(e) => props.UpdateData(`Housekeeping.housekeepingType`, 'Weekends', 'multi')} />
                        <Form.Label htmlFor={`housekeepingTimeTypenWeekends`}>Weekends</Form.Label>
                    </Form.Group>
                }

                {/* fierst section housekeepingType not a Limited */}
                {
                    props.Data.housekeepingType !== 'Limited' &&
                    <Form.Group className='d-flex gap-2'>
                        <Form.Check defaultChecked={props.Data.HousekeepingFeeCharged} id={`IsHousekeepingHousekeepingFeeCharged`}
                            onChange={(e) => props.UpdateData(`Housekeeping.HousekeepingFeeCharged`, e.target.checked, 'multi')} />
                        <Form.Label htmlFor={`IsHousekeepingHousekeepingFeeCharged`}>Housekeeping fee charged</Form.Label>
                    </Form.Group>
                }

                {/* checked housekeepingType show */}
                {
                    props.Data.HousekeepingFeeCharged &&
                    <>
                        <p className="fs-12 mb-2">Housekeeping fee amount -</p>
                        <div className="d-flex gap-3">
                            <Form.Group>
                                <Form.Control type="number" className="w-auto"
                                    placeholder="1"
                                    defaultValue={props.Data.housekeepingAmount}
                                    onChange={(e) => props.UpdateData(`Housekeeping.housekeepingAmount.`, e.target.value, 'multi')} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Select
                                    onChange={(e) => props.UpdateData(`Housekeeping.amountType.`, e.target.value, 'multi')}
                                    className='w-auto mb-2'
                                    style={{ maxWidth: 'max-content' }}
                                >
                                    <option selected={props.Data.amountType === ''} value=''>-Select-</option>
                                    <option selected={props.Data.amountType === 'Per day'} value="Per day">Per day</option>
                                    <option selected={props.Data.amountType === 'Per night'} value="Per night">Per night</option>
                                    <option selected={props.Data.amountType === 'Per stay'} value="Per stay">Per stay</option>
                                    <option selected={props.Data.amountType === 'Per week'} value="Per week">Per week</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </>
                }

                <p className='fs-14 text-black mb-2'><b>or every</b></p>
                <Form.Group>
                    <Form.Select
                        onChange={(e) => props.UpdateData(`Housekeeping.orEvery.`, e.target.value, 'multi')}
                        className='w-auto mb-2'
                        style={{ maxWidth: 'max-content' }}
                    >
                        <option selected={props.Data.orEvery === ''} value=''>-Select-</option>
                        <option selected={props.Data.orEvery === '2 days'} value="2 days">2 days</option>
                        <option selected={props.Data.orEvery === '2 days'} value="2 days">3 days</option>
                        <option selected={props.Data.orEvery === '3 days'} value="3 days">4 days</option>
                        <option selected={props.Data.orEvery === '4 days'} value="4 days">5 days</option>
                        <option selected={props.Data.orEvery === '5 days'} value="5 days">6 days</option>
                    </Form.Select>
                </Form.Group>

                {/* option section  */}
                <Form.Group className='d-flex gap-2'>
                    <Form.Check defaultChecked={props.Data.WeeklyHousekeepingNoCharge} id={`WeeklyHousekeepingNoCharge`}
                        onChange={(e) => props.UpdateData(`Housekeeping.WeeklyHousekeepingNoCharge`, e.target.checked, 'multi')} />
                    <Form.Label htmlFor={`WeeklyHousekeepingNoCharge`}>Weekly housekeeping is provided at no charge</Form.Label>
                </Form.Group>
                <Form.Group className='d-flex gap-2'>
                    <Form.Check defaultChecked={props.Data.HousekeepingVaries} id={`HousekeepingVaries`}
                        onChange={(e) => props.UpdateData(`Housekeeping.HousekeepingVaries`, e.target.checked, 'multi')} />
                    <Form.Label htmlFor={`HousekeepingVaries`}>Housekeeping fee varies</Form.Label>
                </Form.Group>
                <Form.Group className='d-flex gap-2'>
                    <Form.Check defaultChecked={props.Data.HousekeepingVariesUnitSize} id={`HousekeepingVariesUnitSize`}
                        onChange={(e) => props.UpdateData(`Housekeeping.HousekeepingVariesUnitSize`, e.target.checked, 'multi')} />
                    <Form.Label htmlFor={`HousekeepingVariesUnitSize`}>Housekeeping fee varies by unit size</Form.Label>
                </Form.Group>
            </div>

            {/* option section  */}
            {
                props.Data.options.map((item, index) => {
                    return (
                        <div key={index}>
                            <Form.Group className='d-flex gap-2'>
                                <Form.Check defaultChecked={item.isNeed} id={`HousekeepingOption${index}`}
                                    onChange={(e) => props.UpdateData(`Housekeeping.options.${index}.isNeed`, e.target.checked, 'layer3')} />
                                <Form.Label htmlFor={`HousekeepingOption${index}`}>{item.option}</Form.Label>
                            </Form.Group>
                            {
                                item.isNeed && <Housekeeping.Often Data={item.often} UpdateData={props.UpdateData} Index={index} />
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

const AdditionalAmenities = (props) => {
    return (
        <Accordion className="accordion-simple">
            <Accordion.Item eventKey="0" className='border border-0 border-bottom'>
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.AdventureSport /></span><span className='fs-14 text-black ms-2'>{props.Data.options[0].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.adventureSport.map((item, index) => (
                        <div key={index}>
                            <Form.Group className='d-flex gap-2'>
                                <Form.Check id={`AdventureSportisNeed${index}`} checked={item.isNeeded}
                                    onChange={(e) => props.UpdateData(`AdditionalAmenities.adventureSport.${index}.isNeeded`, e.target.checked, 'layer3')} />
                                <Form.Label htmlFor={`AdventureSportisNeed${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                            </Form.Group>
                            {(item.isNeeded && (index !== 4 && index !== 7 && index !== 9 && index !== 10) && <AdventureSport.LocationType Data={item} UpdateData={props.UpdateData} Index={index} />)}
                            {(item.isNeeded && index === 0 && <AdventureSport.RentalType Data={item} UpdateData={props.UpdateData} Index={index} />)}
                        </div>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='border border-0 border-bottom'>
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.Beach /></span><span className='fs-14 text-black ms-2'>{props.Data.options[1].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.beach.map((item, index) => (
                        <div key={index}>
                            <Form.Group className='d-flex gap-2'>
                                <Form.Check id={`beach${index}`} checked={item.isNeeded}
                                    onChange={(e) => props.UpdateData(`AdditionalAmenities.beach.${index}.isNeeded`, e.target.checked, 'layer3')} />
                                <Form.Label htmlFor={`beach${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                            </Form.Group>
                            {item.isNeeded && index == 0 && <Beach.BeachAccess Data={item} UpdateData={props.UpdateData} Index={index} />}
                        </div>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='border border-0 border-bottom'>
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.Business /></span><span className='fs-14 text-black ms-2'>{props.Data.options[2].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.business.map((item, index) => (
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check id={`business${index}`} checked={item.isNeeded}
                                onChange={(e) => props.UpdateData(`AdditionalAmenities.business.${index}.isNeeded`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`business${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                        </Form.Group>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className='border border-0 border-bottom'>
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.Casino /></span><span className='fs-14 text-black ms-2'>{props.Data.options[3].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.hotSprings.map((item, index) => (
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check id={`hotSprings${index}`} checked={item.isNeeded}
                                onChange={(e) => props.UpdateData(`AdditionalAmenities.hotSprings.${index}.isNeeded`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`hotSprings${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                        </Form.Group>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className='border border-0 border-bottom'>
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.Family /></span><span className='fs-14 text-black ms-2'>{props.Data.options[4].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    <p className='fs-14 mb-2 fw-600 text-black'>Childcare Options</p>
                    {props.Data.family.map((item, index) => (
                        <div key={index} >
                            <Form.Group className='d-flex gap-2'>
                                <Form.Check id={`family${index}`} checked={item.isNeeded}
                                    onChange={(e) => props.UpdateData(`AdditionalAmenities.family.${index}.isNeeded`, e.target.checked, 'layer3')} />
                                <Form.Label htmlFor={`family${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                            </Form.Group>
                            {
                                (index == 6 && <p className='fs-14 mb-2 fw-600 text-black'>Infants</p>) ||
                                (index == 9 && <p className='fs-14 mb-2 fw-600 text-black'>Activities</p>) ||
                                (index == 16 && <p className='fs-14 mb-2 fw-600 text-black'>Child safety features</p>)

                            }
                        </div>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className='border border-0 border-bottom'>
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.Golf /></span><span className='fs-14 text-black ms-2'>{props.Data.options[5].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.golf.map((item, index) => (
                        <>
                            <Form.Group key={index} className='d-flex gap-2'>
                                <Form.Check id={`golf${index}`} checked={item.isNeeded}
                                    onChange={(e) => props.UpdateData(`AdditionalAmenities.golf.${index}.isNeeded`, e.target.checked, 'layer3')} />
                                <Form.Label htmlFor={`golf${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                            </Form.Group>
                        </>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className='border border-0 border-bottom'>
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.HotSprings /></span><span className='fs-14 text-black ms-2'>{props.Data.options[6].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.casino.map((item, index) => (
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check id={`casino${index}`} checked={item.isNeeded}
                                onChange={(e) => props.UpdateData(`AdditionalAmenities.casino.${index}.isNeeded`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`casino${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                        </Form.Group>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className='border border-0 border-bottom'>
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.Romantic /></span><span className='fs-14 text-black ms-2'>{props.Data.options[7].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.romantic.map((item, index) => (
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check id={`romantic${index}`} checked={item.isNeeded}
                                onChange={(e) => props.UpdateData(`AdditionalAmenities.romantic.${index}.isNeeded`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`romantic${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                        </Form.Group>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" className='border border-0 border-bottom'>
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.Shopping /></span><span className='fs-14 text-black ms-2'>{props.Data.options[8].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.shopping.map((item, index) => (
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check id={`shopping${index}`} checked={item.isNeeded}
                                onChange={(e) => props.UpdateData(`AdditionalAmenities.shopping.${index}.isNeeded`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`shopping${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                        </Form.Group>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" className='border border-0 border-bottom'>
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.Ski /></span><span className='fs-14 text-black ms-2'>{props.Data.options[9].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.ski.map((item, index) => (
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check id={`ski${index}`} checked={item.isNeeded}
                                onChange={(e) => props.UpdateData(`AdditionalAmenities.ski.${index}.isNeeded`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`ski${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                        </Form.Group>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10" className='border border-0 border-bottom' >
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.Spa2 /></span><span className='fs-14 text-black ms-2'>{props.Data.options[10].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.spa.map((item, index) => (
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check id={`spa${index}`} checked={item.isNeeded}
                                onChange={(e) => props.UpdateData(`AdditionalAmenities.spa.${index}.isNeeded`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`spa${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                        </Form.Group>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11" className='border border-0 border-bottom' >
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.Winery /></span><span className='fs-14 text-black ms-2'>{props.Data.options[11].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.winery.map((item, index) => (
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check id={`winery${index}`} checked={item.isNeeded}
                                onChange={(e) => props.UpdateData(`AdditionalAmenities.winery.${index}.isNeeded`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`winery${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                        </Form.Group>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12" className='border border-0 border-bottom' >
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.City /></span><span className='fs-14 text-black ms-2'>{props.Data.options[12].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.city.map((item, index) => (
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check id={`city${index}`} checked={item.isNeeded}
                                onChange={(e) => props.UpdateData(`AdditionalAmenities.city.${index}.isNeeded`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`city${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                        </Form.Group>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="13" className='border border-0 border-bottom' >
                <Accordion.Header className='fs-14 d-flex gap-3'>
                    <span><Icon.Natural /></span><span className='fs-14 text-black ms-2'>{props.Data.options[13].option}</span>
                </Accordion.Header>
                <Accordion.Body className='ms-5'>
                    {props.Data.natural.map((item, index) => (
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check id={`natural${index}`} checked={item.isNeeded}
                                onChange={(e) => props.UpdateData(`AdditionalAmenities.natural.${index}.isNeeded`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`natural${index}`} className='text-black fs-14'>{item.option}</Form.Label>
                        </Form.Group>
                    ))
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}







export {
    IsFontDeskYes,
    IsFontDeskNo,
    IsSelfCheckAvailable,
    IsLateCheckAvailable,
    IsInternet,
    IsParking,
    IsOfferBreakfast,
    IsPoolAccess,
    IsDiningVenues,
    IsSpa,
    IsAllowPets,
    IsAccessibility,
    IsSmooking,
    IsDepositBox,
    IsHousekeeping,
    AdditionalAmenities,
}
