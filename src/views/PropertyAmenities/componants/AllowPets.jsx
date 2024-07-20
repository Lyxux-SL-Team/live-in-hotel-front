import React from "react";
import { Form } from "react-bootstrap";
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const MaximumReeStay = (props) => {
    return (
        <div className="ms-4 mb-2">
            <Form.Group>
                <Form.Label className="fs-12">FeePet-MaxAmt</Form.Label>
                <Form.Control type="number" className="w-auto"
                    placeholder="1"
                    defaultValue={props.Data.MaxAmt}
                    onChange={(e) => props.UpdateData(`AllowPets.options.${props.Index}.data.MaxAmt`, e.target.value, 'layer4')} />
            </Form.Group>
        </div>
    )
}

const LengthStay = (props) => {
    return (
        <div className="ms-4 mb-2 d-flex flex-column gap-2">
            <p className="fs-14 text-black"><b>Do you have a surcharge for pets?</b></p>
            <Form.Select
                onChange={(e) => props.UpdateData(`AllowPets.options.${props.Index}.data.surchargePets`, e.target.value, 'layer4')}
                className='w-auto mb-2'
                style={{ maxWidth: 'max-content' }}
            >
                <option value=''>-Select-</option>
                <option selected={props.Data.surchargePets == 'Only dogs are allowed'} value='Only dogs are allowed'>Only dogs are allowed</option>
                <option selected={props.Data.surchargePets == 'Only cats are allowed'} value='Only cats are allowed'>Only cats are allowed</option>
                <option selected={props.Data.surchargePets == 'Only dogs and cats are allowed'} value='Only dogs and cats are allowed'>Only dogs and cats are allowed</option>
            </Form.Select>
        </div>
    )
}

const Restrictions = (props) => {
    const dataList = [props.Data.subOption1, props.Data.subOption2, props.Data.subOption3, props.Data.subOption4, props.Data.subOption5, props.Data.subOption6];
    return (
        <div className="ms-4 mb-2">
            {
                dataList.map((item, ind) => (
                    <div key={ind}>
                        <Form.Group className='d-flex gap-2'>
                            <Form.Check defaultChecked={item.isNeed} id={`Restrictions${ind + 1}`} onChange={(e) => props.UpdateData(`AllowPets.options.${props.Index}.subOption${ind + 1}.isNeed`, e.target.checked, 'layer4')} />
                            <Form.Label htmlFor={`Restrictions${ind + 1}`}>{item.subOption}</Form.Label>
                        </Form.Group>
                        {
                            item.isNeed && ind == 0 &&
                            <div className="ms-5 my-2 d-flex gap-2">
                                <Form.Group>
                                    <Form.Control type="number" className="w-auto"
                                        placeholder="1"
                                        defaultValue={item.val1}
                                        onChange={(e) => props.UpdateData(`AllowPets.options.${props.Index}.subOption${ind + 1}.val1`, e.target.value, 'layer4')} />
                                </Form.Group>
                                <Form.Select
                                    onChange={(e) => props.UpdateData(`AllowPets.options.${props.Index}.subOption${ind + 1}.val2`, e.target.value, 'layer4')}
                                    className='w-auto mb-2'
                                    style={{ maxWidth: 'max-content' }}
                                >
                                    <option value=''>-Select-</option>
                                    <option selected={item.val2 === 'Only dogs'} value='Only dogs'>Only dogs  are allowed</option>
                                    <option selected={item.val2 === 'Only cats'} value='Only cats'>Only cats  are allowed</option>
                                    <option selected={item.val2 === 'Only dogs and cats'} value='Only dogs and cats'>Only dogs and cats are allowed</option>
                                </Form.Select>
                            </div>
                        }
                        {
                            item.isNeed && ind == 1 &&
                            <Form.Group className="ms-5">
                                <Form.Label className="fs-12">Maximum per room</Form.Label>
                                <Form.Select
                                    onChange={(e) => props.UpdateData(`AllowPets.options.${props.Index}.subOption${ind + 1}.val`, e.target.value, 'layer4')}
                                    className='w-auto mb-2'
                                    style={{ maxWidth: 'max-content' }}
                                >
                                    <option value=''>-Select-</option>
                                    {
                                        numberList.map((item2, index2) => (
                                            <option key={index2} selected={item.val === item2.toString()} value={item2}>{item2}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                        }
                    </div>
                ))
            }
        </div>
    )
}

const PetDeposit = (props) => {
    return (
        <div className="ms-4 mb-2">
            <p className="fs-12 mb-1">Pet deposit amount -</p>
            <div className="d-flex gap-2">
                <Form.Group>
                    <Form.Control type="number" className="w-auto"
                        placeholder="1"
                        defaultValue={props.Data.amount}
                        onChange={(e) => props.UpdateData(`AllowPets.options.${props.Index}.data.amount`, e.target.value, 'layer4')} />

                </Form.Group>
                <Form.Select
                    onChange={(e) => props.UpdateData(`AllowPets.options.${props.Index}.data.type`, e.target.value, 'layer4')}
                    className='w-auto mb-2'
                    style={{ maxWidth: 'max-content' }}
                >
                    <option selected={props.Data.type == ''} value=''>-Select-</option>
                    <option selected={props.Data.type == 'Per day'} value='Per day'>Per day</option>
                    <option selected={props.Data.type == 'Per night'} value='Per night'>Per night</option>
                    <option selected={props.Data.type == 'Per stay'} value='Per stay'>Per stay</option>
                    <option selected={props.Data.type == 'Per week'} value='Per week'>Per week</option>
                </Form.Select>
            </div>
        </div>
    )
}

const PetCleaning = (props) => {
    return (
        <div className="ms-4 mb-2">
            <Form.Group>
                <Form.Label className="fs-12">Pet cleaning fee amount -</Form.Label>
                <Form.Control type="number" className="w-auto"
                    placeholder="1"
                    defaultValue={props.Data.amount}
                    onChange={(e) => props.UpdateData(`AllowPets.options.${props.Index}.data.amount`, e.target.value, 'layer4')} />
            </Form.Group>
        </div>
    )
}

export {
    MaximumReeStay,
    LengthStay,
    Restrictions,
    PetDeposit,
    PetCleaning,
}