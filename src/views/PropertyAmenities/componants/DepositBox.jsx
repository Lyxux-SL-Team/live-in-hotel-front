import React from "react";
import { Form } from "react-bootstrap";

const IronOrIroningBoard = (props) => {
    return (
        <div>
            <Form.Group className='d-flex gap-2 ms-4'>
                <Form.Check defaultChecked={props.Data.type == 'in'} type='radio' name={`IronOrIroningBoard`} id={`IronOrIroningBoardin`} onChange={(e) => props.UpdateData(`DepositBox.options.${props.Index}.data.type`, 'in', 'layer4')} />
                <Form.Label htmlFor={`IronOrIroningBoardin`}>In room</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'on'} type='radio' name={`IronOrIroningBoard`} id={`IronOrIroningBoardOn`} onChange={(e) => props.UpdateData(`DepositBox.options.${props.Index}.data.type`, 'on', 'layer4')} />
                <Form.Label htmlFor={`IronOrIroningBoardOn`}>On request</Form.Label>
            </Form.Group>
        </div>
    )
}

const InRoomLaundry = (props) => {
    return (
        <div className="ms-4">
            <Form.Group>
                <Form.Select
                    onChange={(e) => props.UpdateData(`DepositBox.options.${props.Index}.data.type`, e.target.value, 'layer4')}
                    className='w-auto mb-2'
                    style={{ maxWidth: 'max-content' }}
                >
                    <option selected={props.Data.type === ''} value=''>-Select-</option>
                    <option selected={props.Data.type === 'Washer/dryer'} value="Washer/dryer">Washer/dryer</option>
                    <option selected={props.Data.type === 'In-room safe (laptop compatible)'} value="In-room safe (laptop compatible)">In-room safe (laptop compatible)</option>
                    <option selected={props.Data.type === 'In-room safe (surcharge)'} value="In-room safe (surcharge)">In-room safe (surcharge)</option>
                </Form.Select>
            </Form.Group>
        </div>
    )
}


const InRoomSafe = (props) => {
    return (
        <div className="ms-4">
            <Form.Group>
                <Form.Select
                    onChange={(e) => props.UpdateData(`DepositBox.options.${props.Index}.data.type`, e.target.value, 'layer4')}
                    className='w-auto mb-2'
                    style={{ maxWidth: 'max-content' }}
                >
                    <option selected={props.Data.type === ''} value=''>-Select-</option>
                    <option selected={props.Data.type === 'In-room safer'} value="In-room safer">In-room safer</option>
                    <option selected={props.Data.type === 'In-room safe (laptop compatible)'} value="In-room safe (laptop compatible)">In-room safe (laptop compatible)</option>
                    <option selected={props.Data.type === 'Dryer'} value="Dryer">Dryer</option>
                    <option selected={props.Data.type === 'All-in-one washer and dryer'} value="All-in-one washer and dryer">All-in-one washer and dryer</option>
                </Form.Select>
            </Form.Group>
        </div>
    )
}

const FreeNewspaper = (props) => {
    return (
        <div className="">
            <Form.Group className='d-flex gap-2 ms-4'>
                <Form.Check defaultChecked={props.Data.type == 'Daily'} type='radio' name={`FreeNewspaper`} id={`FreeNewspaperDaily`} onChange={(e) => props.UpdateData(`DepositBox.options.${props.Index}.data.type`, 'Daily', 'layer4')} />
                <Form.Label htmlFor={`FreeNewspaperDaily`}>Daily</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'Weekdays'} type='radio' name={`FreeNewspaper`} id={`FreeNewspaperWeekdays`} onChange={(e) => props.UpdateData(`DepositBox.options.${props.Index}.data.type`, 'Weekdays', 'layer4')} />
                <Form.Label htmlFor={`FreeNewspaperWeekdays`}>Weekdays</Form.Label>
            </Form.Group>
        </div>
    )
}

const Phone = (props) => {
    return (
        <div className="ms-4">
            {
                [props.Data.subOption1, props.Data.subOption2, props.Data.subOption3].map((item, index) => (
                    <Form.Group key={index} className='d-flex gap-2'>
                        <Form.Check defaultChecked={item.isNeed} id={`Phone${index}`}
                            onChange={(e) => props.UpdateData(`DepositBox.options.${props.Index}.subOption${index + 1}.isNeed`, e.target.checked, 'layer4')} />
                        <Form.Label htmlFor={`Phone${index}`}>{item.subOption}</Form.Label>
                    </Form.Group>
                ))
            }
        </div>
    )
}

const Smartphone = (props) => {
    return (
        <div className="ms-4">
            <Form.Group className="d-flex gap-2">
                <Form.Group>
                    <Form.Label className="fs-12">Data speed</Form.Label>
                    <Form.Select
                        onChange={(e) => props.UpdateData(`DepositBox.options.${props.Index}.data.speed`, e.target.value, 'layer4')}
                        className='w-auto mb-2'
                        style={{ maxWidth: 'max-content' }}
                    >
                        <option selected={props.Data.speed === ''} value=''>-Select-</option>
                        <option selected={props.Data.speed === '3G'} value="3G">3G</option>
                        <option selected={props.Data.speed === '4G'} value="4G">4G</option>
                        <option selected={props.Data.speed === '4G LTE'} value="4G LTE">4G LTE</option>
                        <option selected={props.Data.speed === '5G'} value="5G">5G</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="fs-12">Data usage</Form.Label>
                    <Form.Select
                        onChange={(e) => props.UpdateData(`DepositBox.options.${props.Index}.data.dataUsage`, e.target.value, 'layer4')}
                        className='w-auto mb-2'
                        style={{ maxWidth: 'max-content' }}
                    >
                        <option selected={props.Data.dataUsage === ''} value=''>-Select-</option>
                        <option selected={props.Data.dataUsage === 'val1'} value="val1">val1</option>
                        <option selected={props.Data.dataUsage === 'val2'} value="val2">val2</option>
                        <option selected={props.Data.dataUsage === 'val3'} value="val3">val3</option>
                        <option selected={props.Data.dataUsage === 'val4'} value="val4">val4</option>
                    </Form.Select>
                </Form.Group>
            </Form.Group>

            <Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.PhoneCalls} id={`SmartphonePhoneCall`}
                    onChange={(e) => props.UpdateData(`DepositBox.options.${props.Index}.data.PhoneCalls`, e.target.checked, 'layer4')} />
                <Form.Label htmlFor={`SmartphonePhoneCall`}>Phone calls</Form.Label>
            </Form.Group>

            {/* checked phoneCall  */}
            {
                props.Data.PhoneCalls &&
                <Form.Select
                    onChange={(e) => props.UpdateData(`DepositBox.options.${props.Index}.data.callType`, e.target.value, 'layer4')}
                    className='w-auto mb-2'
                    style={{ maxWidth: 'max-content' }}
                >
                    <option selected={props.Data.callType === ''} value=''>-Select-</option>
                    <option selected={props.Data.callType === 'Limited'} value="Limited">Limited</option>
                    <option selected={props.Data.callType === 'Unlimited'} value="Unlimited">Unlimited</option>
                </Form.Select>
            }
        </div>
    )
}

export {
    IronOrIroningBoard,
    InRoomLaundry,
    InRoomSafe,
    FreeNewspaper,
    Phone,
    Smartphone,
}