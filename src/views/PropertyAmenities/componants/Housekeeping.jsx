import React from "react";
import { Form } from "react-bootstrap";
const usageOptions = [
    "On request",
    "Every 2 days",
    "Every 3 days",
    "Every 4 days",
    "Every 5 days",
    "Every 6 days",
    "Every 7 days"
];


const Often = (props) => {
    return (
        <div className="ms-4">
            <Form.Group>
                <Form.Label className="fs-12">How often?</Form.Label>
                <Form.Select
                    onChange={(e) => props.UpdateData(`Housekeeping.options.${props.Index}.often`, e.target.value, 'layer3')}
                    className='w-auto mb-2'
                    style={{ maxWidth: 'max-content' }}
                >
                    <option selected={props.Data === ''} value=''>-Select-</option>
                    {
                        usageOptions.map((ListItem, ListIndex) => (
                            <option key={ListIndex} selected={props.Data === ListItem} value={ListItem}>{ListItem}</option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
        </div>
    )
}

export {
    Often,
}