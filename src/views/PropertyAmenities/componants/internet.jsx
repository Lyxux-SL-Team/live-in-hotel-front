import React from 'react'
import { Form } from 'react-bootstrap';

const WiFiInGuestrooms = (props) => {
    const speed = [25, 50, 100, 250, 5800];
    return (
        <div className='d-flex flex-column gap-3 ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`InternetT${props.Index}ypeFree`} id={`InternetT${props.Index}ypeFree`} onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`InternetT${props.Index}ypeFree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`InternetT${props.Index}ypeSurchange`} id={`InternetT${props.Index}ypeSurchange`} onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`InternetT${props.Index}ypeSurchange`}>Surcharge</Form.Label>
            </Form.Group>
            {props.Data.type == 'free'
                ?
                <Form.Group>
                    <Form.Label className='fs-12'>Minimum WiFi speed</Form.Label>
                    <Form.Select
                        onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.speed`, e.target.value, 'layer4')}
                        className='w-auto'
                        aria-placeholder=''>
                        <option value=''>-select-</option>
                        {
                            speed.map((item, index) => (
                                <option key={index}
                                    value={item}>
                                    {item}+ Mbps
                                </option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
                :
                <div className='d-flex gap-2'>
                    <Form.Group>
                        <Form.Label className='fs-12'>In-room WiFi fee amount -</Form.Label>
                        <Form.Control defaultValue={3} type='number' onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.amount`, e.target.value, 'layer4')} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='fs-12'>Payment Type</Form.Label>
                        <Form.Select
                            onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.payType`, e.target.value, 'layer4')}
                            className='w-auto'
                        >
                            <option value=''>-Select-</option>
                            <option value='month'>Per Month</option>
                            <option value='year'>Per year</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='fs-12'>Minimum WiFi speed</Form.Label>
                        <Form.Select
                            onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.speed`, e.target.value, 'layer4')}
                            className='w-auto'
                            aria-placeholder=''>
                            <option value=''>-select-</option>
                            {
                                speed.map((item, index) => (
                                    <option
                                        key={index}
                                        value={item}>
                                        {item}+ Mbps
                                    </option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                </div>
            }
            <Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.restrictionsApply} id={`restrictionsApply${props.Index}`} type='radio' onClick={(e) => props.UpdateData(`Internet.options.${props.Index}.data.restrictionsApply`, !props.Data.restrictionsApply, 'layer4')} />
                <Form.Label htmlFor={`restrictionsApply${props.Index}`}>Restrictions apply</Form.Label>
            </Form.Group>
        </div>
    )
}


const WiFiInPublicAreas = (props) => {
    const speed = [25, 50, 100, 250, 5800];
    return (
        <div className='d-flex flex-column gap-3 ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`InternetT${props.Index}ypeFree`} id={`InternetT${props.Index}ypeFree`} onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`InternetT${props.Index}ypeFree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`InternetT${props.Index}ypeSurcharge`} id={`InternetT${props.Index}ypeSurcharge`} onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`InternetT${props.Index}ypeSurcharge`}>Surcharge</Form.Label>
            </Form.Group>
            <Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.restrictionsApply} id={`restrictionsApply${props.Index}`} type='radio' onClick={(e) => props.UpdateData(`Internet.options.${props.Index}.data.restrictionsApply`, !props.Data.restrictionsApply, 'layer4')} />
                <Form.Label htmlFor={`restrictionsApply${props.Index}`}>Restrictions apply</Form.Label>
            </Form.Group>
            {props.Data.restrictionsApply &&
                <div className='ms-4 d-flex flex-column gap-3'>
                    <Form.Group className='d-flex gap-2'>
                        <Form.Check id={`RestrictionLimitTime${props.Index}`} onClick={(e) => props.UpdateData(`Internet.options.${props.Index}.data.timeLimit`, e.target.checked, 'layer4')} />
                        <Form.Label htmlFor={`RestrictionLimitTime${props.Index}`} className='text-black fs-14'>Time limit</Form.Label>
                    </Form.Group>
                    {props.Data.timeLimit &&
                        <div className='d-flex gap-2'>
                            <Form.Group>
                                <Form.Label className='fs-12'>Free WiFi limited time</Form.Label>
                                <Form.Control className='w-auto' defaultValue={3} type='number' onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.limitedTime`, e.target.value, 'layer4')} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='fs-12'>Limit Type</Form.Label>
                                <Form.Select
                                    onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.LimitType`, e.target.value, 'layer4')}
                                    className='w-auto'
                                >
                                    <option value=''>-Select-</option>
                                    <option value='Hours '>Hours</option>
                                    <option value='Minutes'>Minutes</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='fs-12'>Minimum WiFi speed</Form.Label>
                                <Form.Select
                                    onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.speed`, e.target.value, 'layer4')}
                                    className='w-auto'
                                    aria-placeholder=''>
                                    <option value=''>-select-</option>
                                    {
                                        speed.map((item, index) => (
                                            <option key={index}
                                                value={item}>
                                                {item}+ Mbps
                                            </option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                        </div>
                    }
                    <Form.Group className='d-flex gap-2'>
                        <Form.Check id={`RestrictionLimitDvice${props.Index}`} onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.deviceLimit`, e.target.checked, 'layer4')} />
                        <Form.Label htmlFor={`RestrictionLimitDvice${props.Index}`} className='text-black fs-14'>Device limit</Form.Label>
                    </Form.Group>
                    {props.Data.deviceLimit &&
                        <Form.Group className='ms-4'>
                            <Form.Select
                                onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.deviceCount`, e.target.value, 'layer4')}
                                className='w-auto'
                            >
                                <option value=''>-Select-</option>
                                <option value='1 '>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </Form.Select>
                        </Form.Group>
                    }
                </div>

            }
        </div>
    )
}


const WiredInternetGuestrooms = (props) => {
    return (
        <div className='d-flex flex-column gap-3 ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`InternetT${props.Index}ypeFree`} id={`InternetT${props.Index}ypeFree`} onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`InternetT${props.Index}ypeFree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`InternetT${props.Index}ypeSurcharge`} id={`InternetT${props.Index}ypeSurcharge`} onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`InternetT${props.Index}ypeSurcharge`}>Surcharge</Form.Label>
            </Form.Group>
        </div>
    )
}
const WiredInternetPublicAreas = (props) => {
    return (
        <div className='d-flex flex-column gap-3 ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`InternetT${props.Index}ypeFree`} id={`InternetT${props.Index}ypeFree`} onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`InternetT${props.Index}ypeFree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`InternetT${props.Index}ypeSurcharge`} id={`InternetT${props.Index}ypeSurcharge`} onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`InternetT${props.Index}ypeSurcharge`}>Surcharge</Form.Label>
            </Form.Group>
        </div>
    )
}
const DialUpInternetGuestrooms = (props) => {
    return (
        <div className='d-flex flex-column gap-3 ms-4'>
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`InternetT${props.Index}ypeFree`} id={`InternetT${props.Index}ypeFree`} onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`InternetT${props.Index}ypeFree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`InternetT${props.Index}ypeSurcharge`} id={`InternetT${props.Index}ypeSurcharge`} onChange={(e) => props.UpdateData(`Internet.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`InternetT${props.Index}ypeSurcharge`}>Surcharge</Form.Label>
            </Form.Group>
        </div>
    )
}

export {
    WiFiInGuestrooms,
    WiFiInPublicAreas,
    WiredInternetGuestrooms,
    WiredInternetPublicAreas,
    DialUpInternetGuestrooms,
}
