import React from 'react'
import { Form } from 'react-bootstrap';

const SelfParking = (props) => {
    return (
        <div className='d-flex flex-column gap-3 ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`Parking${props.Index}typeFree`} id={`Parking${props.Index}typeFree`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`Parking${props.Index}typeFree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`Parking${props.Index}typeSurcharge`} id={`Parking${props.Index}typeSurcharge`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`Parking${props.Index}typeSurcharge`}>Surcharge</Form.Label>
            </Form.Group>

            {props.Data.type == 'surcharge' &&
                <div className='d-flex gap-3'>
                    <Form.Group>
                        <Form.Label className='fs-12'>Self parking fee amount -</Form.Label>
                        <Form.Control defaultValue={props.Data.amount} placeholder='3' type='number' onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.amount`, e.target.value, 'layer4')} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='fs-12'>&nbsp;</Form.Label>
                        <Form.Select
                            onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.amountType`, e.target.value, 'layer4')}
                            className='w-auto'
                        >
                            <option selected={props.Data.amountType == ''} value=''>-Select-</option>
                            <option selected={props.Data.amountType == 'month'} value='month'>Per Month</option>
                            <option selected={props.Data.amountType == 'year'} value='year'>Per year</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            }

            <div>
                {props.Data.type == 'surcharge' &&
                    <Form.Group className='d-flex gap-3'>
                        <Form.Check defaultChecked={props.Data.InOutPrivileges} name={`InOutPrivileges${props.Index}`} id={`InOutPrivileges${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.InOutPrivileges`, e.target.checked, 'layer4')} />
                        <Form.Label htmlFor={`InOutPrivileges${props.Index}`}>In/out privileges</Form.Label>
                    </Form.Group>

                }
                <Form.Group className='d-flex gap-3'>
                    <Form.Check defaultChecked={props.Data.coveredParking} name={`coveredParking${props.Index}`} id={`coveredParking${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.coveredParking`, e.target.checked, 'layer4')} />
                    <Form.Label htmlFor={`coveredParking${props.Index}`}>Covered parking</Form.Label>
                </Form.Group>
                <Form.Group className='d-flex gap-3'>
                    <Form.Check defaultChecked={props.Data.uncoveredParking} name={`uncoveredParking${props.Index}`} id={`uncoveredParking${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.uncoveredParking`, e.target.checked, 'layer4')} />
                    <Form.Label htmlFor={`uncoveredParking${props.Index}`}>Uncovered parking</Form.Label>
                </Form.Group>
                <Form.Group className='d-flex gap-3'>
                    <Form.Check defaultChecked={props.Data.securedParking} name={`securedParking${props.Index}`} id={`securedParking${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.securedParking`, e.target.checked, 'layer4')} />
                    <Form.Label htmlFor={`securedParking${props.Index}`}>Secured parking</Form.Label>
                </Form.Group>
            </div>
        </div>
    )
}

const ValetParking = (props) => {
    return (
        <div className='d-flex flex-column gap-3 ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`Parking${props.Index}typeFree`} id={`Parking${props.Index}typeFree`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`Parking${props.Index}typeFree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`Parking${props.Index}typeSurcharge`} id={`Parking${props.Index}typeSurcharge`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`Parking${props.Index}typeSurcharge`}>Surcharge</Form.Label>
            </Form.Group>

            {props.Data.type == 'surcharge' &&
                <div className='d-flex gap-3'>
                    <Form.Group>
                        <Form.Label className='fs-12'>Valet parking fee amount -</Form.Label>
                        <Form.Control defaultValue={props.Data.amount} placeholder='3' type='number' onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.amount`, e.target.value, 'layer4')} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='fs-12'>&nbsp;</Form.Label>
                        <Form.Select
                            onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.amountType`, e.target.value, 'layer4')}
                            className='w-auto'
                        >
                            <option selected={props.Data.amountType == ''} value=''>-Select-</option>
                            <option selected={props.Data.amountType == 'month'} value='month'>Per Month</option>
                            <option selected={props.Data.amountType == 'year'} value='year'>Per year</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            }

            <div>
                {props.Data.type == 'surcharge' &&
                    <Form.Group className='d-flex gap-3'>
                        <Form.Check defaultChecked={props.Data.InOutPrivileges} name={`InOutPrivileges${props.Index}`} id={`InOutPrivileges${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.InOutPrivileges`, e.target.checked, 'layer4')} />
                        <Form.Label htmlFor={`InOutPrivileges${props.Index}`}>In/out privileges</Form.Label>
                    </Form.Group>

                }
                <Form.Group className='d-flex gap-3'>
                    <Form.Check defaultChecked={props.Data.coveredParking} name={`coveredParking${props.Index}`} id={`coveredParking${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.coveredParking`, e.target.checked, 'layer4')} />
                    <Form.Label htmlFor={`coveredParking${props.Index}`}>Covered parking</Form.Label>
                </Form.Group>
                <Form.Group className='d-flex gap-3'>
                    <Form.Check defaultChecked={props.Data.uncoveredParking} name={`uncoveredParking${props.Index}`} id={`uncoveredParking${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.uncoveredParking`, e.target.checked, 'layer4')} />
                    <Form.Label htmlFor={`uncoveredParking${props.Index}`}>Uncovered parking</Form.Label>
                </Form.Group>
                <Form.Group className='d-flex gap-3'>
                    <Form.Check defaultChecked={props.Data.securedParking} name={`securedParking${props.Index}`} id={`securedParking${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.securedParking`, e.target.checked, 'layer4')} />
                    <Form.Label htmlFor={`securedParking${props.Index}`}>Secured parking</Form.Label>
                </Form.Group>
            </div>
        </div>
    )
}

const Extended = (props) => {
    return (
        <div className='ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`Parking${props.Index}typeFree`} id={`Parking${props.Index}typeFree`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`Parking${props.Index}typeFree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`Parking${props.Index}typeSurcharge`} id={`Parking${props.Index}typeSurcharge`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`Parking${props.Index}typeSurcharge`}>Surcharge</Form.Label>
            </Form.Group>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.coveredParking} name={`coveredParking${props.Index}`} id={`coveredParking${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.coveredParking`, e.target.checked, 'layer4')} />
                <Form.Label htmlFor={`coveredParking${props.Index}`}>Covered parking</Form.Label>
            </Form.Group>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.uncoveredParking} name={`uncoveredParking${props.Index}`} id={`uncoveredParking${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.uncoveredParking`, e.target.checked, 'layer4')} />
                <Form.Label htmlFor={`uncoveredParking${props.Index}`}>Uncovered parking</Form.Label>
            </Form.Group>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.securedParking} name={`securedParking${props.Index}`} id={`securedParking${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.securedParking`, e.target.checked, 'layer4')} />
                <Form.Label htmlFor={`securedParking${props.Index}`}>Secured parking</Form.Label>
            </Form.Group>
        </div>
    )

}

const Offsite = (props) => {
    return (
        <div className='d-flex flex-column gap-3 ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`Parking${props.Index}typeFree`} id={`Parking${props.Index}typeFree`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`Parking${props.Index}typeFree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`Parking${props.Index}typeSurcharge`} id={`Parking${props.Index}typeSurcharge`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`Parking${props.Index}typeSurcharge`}>Surcharge</Form.Label>
            </Form.Group>
            {props.Data.type == 'surcharge' &&
                <>
                    <div className='d-flex gap-3'>
                        <Form.Group>
                            <Form.Label className='fs-12'>Nearby parking fee amount -</Form.Label>
                            <Form.Control defaultValue={props.Data.nearbyParkingAmunt} placeholder='3' type='number' onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.nearbyParkingAmunt`, e.target.value, 'layer4')} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='fs-12'>&nbsp;</Form.Label>
                            <Form.Select
                                onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.nearbyParkingAmuntType`, e.target.value, 'layer4')}
                                className='w-auto'
                            >
                                <option selected={props.Data.nearbyParkingAmuntType == ''} value=''>-Select-</option>
                                <option selected={props.Data.nearbyParkingAmuntType == 'stay'} value='stay'>Per stay</option>
                                <option selected={props.Data.nearbyParkingAmuntType == 'month'} value='month'>Per month</option>
                                <option selected={props.Data.nearbyParkingAmuntType == 'year'} value='year'>Per year</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <Form.Group className='d-flex gap-3'>
                        <Form.Check defaultChecked={props.Data.discountedRates} name={`discountedRates${props.Index}`} id={`discountedRates${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.discountedRates`, e.target.checked, 'layer4')} />
                        <Form.Label htmlFor={`discountedRates${props.Index}`}>Offsite parking discounted rates available</Form.Label>
                    </Form.Group>
                </>
            }
            <div className='d-flex gap-3'>
                <Form.Group>
                    <Form.Label className='fs-12'>Offsite parking distance from property</Form.Label>
                    <Form.Control defaultValue={props.Data.OffsiteParkingDistance} placeholder='3' type='number' onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.OffsiteParkingDistance`, e.target.value, 'layer4')} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='fs-12'>&nbsp;</Form.Label>
                    <Form.Select
                        onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.offsiteParkingDistanceType`, e.target.value, 'layer4')}
                        className='w-auto'
                    >
                        <option selected={props.Data.offsiteParkingDistanceType == ''} value=''>-Select-</option>
                        <option selected={props.Data.offsiteParkingDistanceType == 'Feet'} value='Feet'>Feet</option>
                        <option selected={props.Data.offsiteParkingDistanceType == 'Kilometers'} value='Kilometers'>Kilometers</option>
                        <option selected={props.Data.offsiteParkingDistanceType == 'Meters'} value='Meters'>Meters</option>
                        <option selected={props.Data.offsiteParkingDistanceType == 'Miles'} value='Miles'>Miles</option>
                    </Form.Select>
                </Form.Group>
            </div>
            {props.Data.type == 'free' &&
                <>
                    <Form.Group className='d-flex gap-3'>
                        <Form.Check defaultChecked={props.Data.parkingHours} name={`parkingHours${props.Index}`} id={`parkingHours${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.parkingHours`, e.target.checked, 'layer4')} />
                        <Form.Label htmlFor={`parkingHours${props.Index}`}>Offsite parking lot hours</Form.Label>
                    </Form.Group>
                    <Form.Group className='d-flex gap-3'>
                        <Form.Check defaultChecked={props.Data.reservationsRequired} name={`reservationsRequired${props.Index}`} id={`reservationsRequired${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.reservationsRequired`, e.target.checked, 'layer4')} />
                        <Form.Label htmlFor={`reservationsRequired${props.Index}`}>Offsite parking reservations required</Form.Label>
                    </Form.Group>
                    <Form.Group className='d-flex gap-3'>
                        <Form.Check defaultChecked={props.Data.streetParking} name={`streetParking${props.Index}`} id={`streetParking${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.streetParking`, e.target.checked, 'layer4')} />
                        <Form.Label htmlFor={`streetParking${props.Index}`}>Street parking</Form.Label>
                    </Form.Group>
                </>
            }
        </div>
    )
}

const OffStreet = (props) => {
    return (
        <div className='ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.carport} name={`carport${props.Index}`} id={`carport${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.carport`, e.target.checked, 'layer4')} />
                <Form.Label htmlFor={`carport${props.Index}`}>Offsite parking reservations required</Form.Label>
            </Form.Group>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.garage} name={`garage${props.Index}`} id={`garage${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.garage`, e.target.checked, 'layer4')} />
                <Form.Label htmlFor={`garage${props.Index}`}>Street parking</Form.Label>
            </Form.Group>
        </div>
    )

}

const RvBusOrTruck = (props) => {
    return (
        <div className='ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`Parking${props.Index}typeFree`} id={`Parking${props.Index}typeFree`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`Parking${props.Index}typeFree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`Parking${props.Index}typeSurcharge`} id={`Parking${props.Index}typeSurcharge`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`Parking${props.Index}typeSurcharge`}>Surcharge</Form.Label>
            </Form.Group>
        </div>
    )

}

const ParkingLimited = (props) => {
    const numberList = [1, 2, 3, 4, 5, 6];
    return (
        <div className='ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.isRestrictedNumber} name={`isRestrictedNumber${props.Index}`} id={`isRestrictedNumber${props.Index}`} onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.isRestrictedNumber`, e.target.checked, 'layer4')} />
                <Form.Label htmlFor={`isRestrictedNumber${props.Index}`}>Restricted number of spaces per unit</Form.Label>
            </Form.Group>
            {props.Data.isRestrictedNumber &&
                <Form.Group>
                    <Form.Label className='fs-12'>How many?</Form.Label>
                    <Form.Select
                        onChange={(e) => props.UpdateData(`Parking.options.${props.Index}.data.howMeny`, e.target.value, 'layer4')}
                        className='w-auto'
                    >
                        <option selected={props.Data.howMeny == ''} value=''>-Select-</option>
                        {
                            numberList.map((item, index) => (
                                <option key={index} selected={props.Data.howMeny == { item }} value={item}>{item}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
            }
        </div>
    )

}


export {
    SelfParking,
    ValetParking,
    Extended,
    Offsite,
    OffStreet,
    RvBusOrTruck,
    ParkingLimited,
}
