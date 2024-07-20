import React from "react";
import { Form } from "react-bootstrap";
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const WheelchairAccessible = (props) => {
    return (
        <div className="ms-4 mb-2">
            {
                props.Data.map((item, index) => (
                    <div key={index}>
                        <Form.Group className='d-flex gap-2'>
                            <Form.Check defaultChecked={item.isNeed} id={`WheelchairAccessible${index}`} onChange={(e) => props.UpdateData(`Accessibility.isWheelchairAccessible.${index}.isNeed`, e.target.checked, 'layer3')} />
                            <Form.Label htmlFor={`WheelchairAccessible${index}`}>{item.option}</Form.Label>
                        </Form.Group>
                        {
                            index == 0 && item.isNeed &&
                            <div className="d-flex gap-3 pb-2">
                                <Form.Group>
                                    <Form.Label className="fs-12">Registration desk height (inches)</Form.Label>
                                    <Form.Control type="number" className="w-auto"
                                        placeholder="1"
                                        defaultValue={item.data.inches}
                                        onChange={(e) => props.UpdateData(`Accessibility.isWheelchairAccessible.${index}.data.inches`, e.target.value, 'layer4')} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-12">Registration desk height (centimeters)</Form.Label>
                                    <Form.Control type="number" className="w-auto"
                                        placeholder="1"
                                        defaultValue={item.data.centimeters}
                                        onChange={(e) => props.UpdateData(`Accessibility.isWheelchairAccessible.${index}.data.centimeters`, e.target.value, 'layer4')} />
                                </Form.Group>
                            </div>
                        }

                        {
                            index == 6 && item.isNeed &&
                            <div>
                                <Form.Label className="fs-12">Number of on-site accessible parking spots</Form.Label>
                                <Form.Select
                                    onChange={(e) => props.UpdateData(`Accessibility.isWheelchairAccessible.${index}.data.parkingSpots`, e.target.value, 'layer4')}
                                    className='w-auto mb-2'
                                    style={{ maxWidth: 'max-content' }}
                                >
                                    <option selected={item.data.parkingSpots === 0} value={0}>-Select-</option>
                                    {
                                        numberList.map((number, numberIndex) => (
                                            <option key={numberIndex} selected={item.data.parkingSpots === number.toString()} value={number}>{number}</option>
                                        ))
                                    }
                                </Form.Select>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

const ThereElevators = (props) => {
    return (
        <div className="ms-4">
            <div className="d-flex gap-3 pb-2">
                <Form.Group>
                    <Form.Label className="fs-12">Elevator door width (inches)</Form.Label>
                    <Form.Control type="number" className="w-auto"
                        placeholder="1"
                        defaultValue={props.Data.inches}
                        onChange={(e) => props.UpdateData(`Accessibility.inches`, e.target.value, 'multi')} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="fs-12">Elevator door width (centimeters)</Form.Label>
                    <Form.Control type="number" className="w-auto"
                        placeholder="1"
                        defaultValue={props.Data.centimeters}
                        onChange={(e) => props.UpdateData(`Accessibility.centimeters`, e.target.value, 'multi')} />
                </Form.Group>
            </div>
            <Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.accessiblePathElevator} id={`accessiblePathElevator`} onChange={(e) => props.UpdateData(`Accessibility.accessiblePathElevator`, e.target.checked, 'multi')} />
                <Form.Label htmlFor={`accessiblePathElevator`}>Wheelchair-accessible path to elevator</Form.Label>
            </Form.Group>
        </div>
    )
}

const PropertyEntrance = (props) => {
    return (
        <div className="">
            {
                props.Data.map((item, index) => (
                    <>
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check
                                defaultChecked={item.isNeed}
                                id={`PropertyEntrance${index}`}
                                onChange={(e) => props.UpdateData(`Accessibility.PropertyEntranceOptions.${index}.isNeed`, e.target.checked, 'layer3')}
                            />
                            <Form.Label htmlFor={`PropertyEntrance${index}`}>
                                {item.option.toString()}
                            </Form.Label>
                        </Form.Group>
                        {index == 2 && item.isNeed &&
                            <Form.Group className="ms-4">
                                <Form.Label className="fs-12">Number of on-site accessible parking spots</Form.Label>
                                <Form.Select
                                    onChange={(e) => props.UpdateData(`Accessibility.PropertyEntranceOptions.${index}.accessibleParkingSpots`, e.target.value, 'layer3')}
                                    className='w-auto mb-2'
                                    style={{ maxWidth: 'max-content' }}
                                >
                                    <option selected={item.accessibleParkingSpots === 0} value={0}>-Select-</option>
                                    {
                                        numberList.map((number, numberIndex) => (
                                            <option key={numberIndex} selected={item.accessibleParkingSpots === number.toString()} value={number}>{number}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                        }
                    </>
                ))
            }
        </div>
    )
}

const AccessibilityFeatures = (props) => {
    return (
        <div className="">
            {
                props.Data.map((item, index) => (
                    <>
                        <Form.Group key={index} className='d-flex gap-2'>
                            <Form.Check
                                defaultChecked={item.isNeed}
                                id={`accessibilityFeatures${index}`}
                                onChange={(e) => props.UpdateData(`Accessibility.accessibilityFeaturesOption.${index}.isNeed`, e.target.checked, 'layer3')}
                            />
                            <Form.Label htmlFor={`accessibilityFeatures${index}`}>
                                {item.option.toString()}
                            </Form.Label>
                        </Form.Group>
                        {(index == 3 || index == 4) && item.isNeed &&
                            <div className="d-flex gap-3 mb-2 ms-4">
                                <Form.Group>
                                    <Form.Label className="fs-12">Hallway handrail height (inches)</Form.Label>
                                    <Form.Control type="number" className="w-auto"
                                        placeholder="1"
                                        defaultValue={item.inches}
                                        onChange={(e) => props.UpdateData(`Accessibility.accessibilityFeaturesOption.${index}.inches`, e.target.value, 'layer3')} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="fs-12">Hallway handrail height (centimeters)</Form.Label>
                                    <Form.Control type="number" className="w-auto"
                                        placeholder="1"
                                        defaultValue={item.centimeters}
                                        onChange={(e) => props.UpdateData(`Accessibility.accessibilityFeaturesOption.${index}.centimeters`, e.target.value, 'layer3')} />
                                </Form.Group>
                            </div>
                        }
                    </>
                ))
            }
        </div>
    )
}

export {
    WheelchairAccessible,
    ThereElevators,
    PropertyEntrance,
    AccessibilityFeatures,
}