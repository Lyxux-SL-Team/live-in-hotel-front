import React from "react";
import { Form } from "react-bootstrap";

const LocationType = (props) => {
    return (
        <div className="ms-4">
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.locationType == 'Onsite'} type='radio' name={`LocationType${props.Index}`} id={`LocationType${props.Index}Onsite`} onChange={(e) => props.UpdateData(`AdditionalAmenities.adventureSport.${props.Index}.locationType`, 'Onsite', 'layer3')} />
                <Form.Label htmlFor={`LocationType${props.Index}Onsite`}>Onsite</Form.Label>

                <Form.Check defaultChecked={props.Data.locationType == 'Nearby'} type='radio' name={`LocationType${props.Index}`} id={`LocationType${props.Index}Nearby`} onChange={(e) => props.UpdateData(`AdditionalAmenities.adventureSport.${props.Index}.locationType`, 'Nearby', 'layer3')} />
                <Form.Label htmlFor={`LocationType${props.Index}Nearby`}>Nearby</Form.Label>
            </Form.Group>
        </div>
    )
}

const RentalType = (props) => {
    return (
        <div className="ms-4">
            <Form.Group className='d-flex gap-3'>
                <Form.Check defaultChecked={props.Data.rentalType == 'Free'} type='radio' name={`RentalType${props.Index}`} id={`RentalType${props.Index}Free`} onChange={(e) => props.UpdateData(`AdditionalAmenities.adventureSport.${props.Index}.rentalType`, 'Free', 'layer3')} />
                <Form.Label htmlFor={`RentalType${props.Index}Free`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.rentalType == 'Rental'} type='radio' name={`RentalType${props.Index}`} id={`RentalType${props.Index}Rental`} onChange={(e) => props.UpdateData(`AdditionalAmenities.adventureSport.${props.Index}.rentalType`, 'Rental', 'layer3')} />
                <Form.Label htmlFor={`RentalType${props.Index}Rental`}>Rental</Form.Label>
            </Form.Group>
        </div>
    )
}

export {
    LocationType,
    RentalType,
}