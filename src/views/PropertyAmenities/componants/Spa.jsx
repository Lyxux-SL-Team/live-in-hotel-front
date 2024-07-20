import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { HelicopterLanding } from "tabler-icons-react";

const SpaService = (props) => {

    const dataListFull = [props.Data.subOptionFull1, props.Data.subOptionFull2, props.Data.subOptionFull3, props.Data.subOptionFull4, props.Data.subOptionFull5, props.Data.subOptionFull6, props.Data.subOptionFull7];
    const dataListOnsite = [props.Data.subOptionOnsite1, props.Data.subOptionOnsite2, props.Data.subOptionOnsite3, props.Data.subOptionOnsite4]

    return (
        <div className="ms-5">
            {/* check service type  */}
            < Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.serviceType == 'full'} type='radio' name={`SpaServiceType`} id={`SpaServiceTypefull`}
                    onChange={(e) => props.UpdateData(`Spa.options.${props.Index}.serviceType`, 'full', 'layer3')} />
                <Form.Label htmlFor={`SpaServiceTypefull`}>Full-service spa</Form.Label>

                <Form.Check defaultChecked={props.Data.serviceType == 'onsite'} type='radio' name={`SpaServiceType`} id={`SpaServiceTypeOnsite`}
                    onChange={(e) => props.UpdateData(`Spa.options.${props.Index}.serviceType`, 'onsite', 'layer3')} />
                <Form.Label htmlFor={`SpaServiceTypeOnsite`}>Spa services onsite</Form.Label>
            </Form.Group>


            {/* selected service type full  */}
            {
                props.Data.serviceType == 'full' &&
                <>
                    {/* spa Name section  */}
                    <Form.Group>
                        <Form.Label className="fs-12">Spa name</Form.Label>
                        <Form.Control type="text" className="w-auto mb-2" defaultValue={props.Data.spaName}
                            onChange={(e) => props.UpdateData(`Spa.options.${props.Index}.spaName`, e.target.value, 'layer3')} />
                    </Form.Group>

                    {/* select day type section  */}
                    < Form.Group className='d-flex gap-2'>
                        <Form.Check defaultChecked={props.Data.dayType == 'daily'} type='radio' name={`SpaDayType`} id={`SpaDayTypeDaily`} onChange={(e) => props.UpdateData(`Spa.options.${props.Index}.dayType`, 'daily', 'layer3')} />
                        <Form.Label htmlFor={`SpaDayTypeDaily`}>Open daily</Form.Label>

                        <Form.Check defaultChecked={props.Data.dayType == 'coustom'} type='radio' name={`SpaDayType`} id={`SpaDayTypeCoustom`} onChange={(e) => props.UpdateData(`Spa.options.${props.Index}.dayType`, 'coustom', 'layer3')} />
                        <Form.Label htmlFor={`SpaDayTypeCoustom`}>Open select days</Form.Label>
                    </Form.Group>

                    {/* checked spa sub option item  */}
                    {
                        dataListFull.map((item, ind) => (

                            <Form.Group key={ind} className='d-flex gap-2'>
                                <Form.Check defaultChecked={item.isNeed} id={`IsSpaFull${ind + 1}`} onChange={(e) => props.UpdateData(`Spa.options.${props.Index}.subOptionFull${ind + 1}.isNeed`, e.target.checked, 'layer4')} />
                                <Form.Label htmlFor={`IsSpaFull${ind + 1}`}>{item.subOption}</Form.Label>
                            </Form.Group>
                        ))
                    }
                </>
            }

            {/* selected service type onsite  */}
            {
                props.Data.serviceType == 'onsite' &&
                <>
                    {
                        dataListOnsite.map((item, ind) => (

                            <Form.Group key={ind} className='d-flex gap-2'>
                                <Form.Check defaultChecked={item.isNeed} id={`IsSpaOnsite${ind + 1}`} onChange={(e) => props.UpdateData(`Spa.options.${props.Index}.subOptionOnsite${ind + 1}.isNeed`, e.target.checked, 'layer4')} />
                                <Form.Label htmlFor={`IsSpaOnsite${ind + 1}`}>{item.subOption}</Form.Label>
                            </Form.Group>
                        ))
                    }
                </>
            }

        </div>
    )
}


const Massages = (props) => {
    const dataListFull = [props.Data.subOption1, props.Data.subOption2, props.Data.subOption3, props.Data.subOption4, props.Data.subOption5, props.Data.subOption6, props.Data.subOption7];

    return (
        <div className="ms-4 mb-2">
            {
                dataListFull.map((item, ind) => (
                    <div key={ind}>
                        <Form.Group className='d-flex gap-2'>
                            <Form.Check defaultChecked={item.isNeed} id={`IsSpaOnsite${ind + 1}`} onChange={(e) => props.UpdateData(`Spa.options.${props.Index}.subOptionOnsite${ind + 1}.isNeed`, e.target.checked, 'layer4')} />
                            <Form.Label htmlFor={`IsSpaOnsite${ind + 1}`}>{item.subOption}</Form.Label>
                        </Form.Group>
                        {
                            ind == 0 &&
                            <p className="fs-12 mb-2">Types of massages available</p>
                        }
                    </div>
                ))
            }
        </div>
    )
}

const SpaTreatmentRoom = (props) => {
    const DataList = [props.Data.subOption1, props.Data.subOption2];
    return (
        <div className="ms-4 mb-2">
            <Form.Group>
                <Form.Label className="fs-12">Number of treatment rooms</Form.Label>
                <Form.Select
                    onChange={(e) => props.UpdateData(`Spa.options.${props.Index}.numberOfRoom`, e.target.value, 'layer3')}
                    className='w-auto mb-2'
                >
                    <option selected={props.Data.numberOfRoom == ''} value=''>-Select-</option>
                    <option selected={props.Data.numberOfRoom == 'val1'} value='val1'>val1</option>
                    <option selected={props.Data.numberOfRoom == 'val2'} value='val2'>val2</option>
                </Form.Select>
            </Form.Group>
            {
                DataList.map((item, ind) => (
                    <div key={ind}>
                        <Form.Group className='d-flex gap-2'>
                            <Form.Check defaultChecked={item.isNeed} id={`IsSpaSpaTreatmentRoom${ind + 1}`} onChange={(e) => props.UpdateData(`Spa.options.${props.Index}.subOption${ind + 1}.isNeed`, e.target.checked, 'layer4')} />
                            <Form.Label htmlFor={`IsSpaSpaTreatmentRoom${ind + 1}`}>{item.subOption}</Form.Label>
                        </Form.Group>
                    </div>
                ))
            }
        </div>
    )
}

const SpaTreatments = (props) => {
    const dataList = [props.Data.subOption1, props.Data.subOption2, props.Data.subOption3, props.Data.subOption4, props.Data.subOption5, props.Data.subOption6, props.Data.subOption7, props.Data.subOption8, props.Data.subOption9, props.Data.subOption10, props.Data.subOption11, props.Data.subOption12];
    return (
        <div className="ms-4 mb-2">
            {
                dataList.map((item, ind) => (
                    <div key={ind}>
                        <Form.Group className='d-flex gap-2'>
                            <Form.Check defaultChecked={item.isNeed} id={`IsSpaSpaTreatmentRoom${ind + 1}`} onChange={(e) => props.UpdateData(`Spa.options.${props.Index}.subOption${ind + 1}.isNeed`, e.target.checked, 'layer4')} />
                            <Form.Label htmlFor={`IsSpaSpaTreatmentRoom${ind + 1}`}>{item.subOption}</Form.Label>
                        </Form.Group>
                    </div>
                ))
            }
        </div>
    )
}


export {
    SpaService,
    Massages,
    SpaTreatmentRoom,
    SpaTreatments,

}