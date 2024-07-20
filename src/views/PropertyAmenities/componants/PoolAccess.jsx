import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';

const OutdoorPool = (props) => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className='ms-4'>
            <p className="fs-12 mb-2">How many?</p>
            <Form.Select
                onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.howMany`, e.target.value, 'layer4')}
                className='w-auto'
            >
                <option selected={props.Data.howMany == ''} value=''>-Select-</option>
                {
                    number.map((item, index) => (
                        <option key={index} selected={props.Data.howMany == item} value={item}>{item}</option>
                    ))
                }
            </Form.Select>
        </div>
    )

}

const OutdooSeasonalPool = (props) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className='ms-4'>
            < Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.type == 'dateRange'} type='radio' name={`OutdooSeasonalPoolType`} id={`OutdooSeasonalPoolTypeDateRange`} onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.type`, 'dateRange', 'layer4')} />
                <Form.Label htmlFor={`OutdooSeasonalPoolTypeDateRange`}>Same times every day</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'months'} type='radio' name={`OutdooSeasonalType`} id={`OutdooSeasonalTypePoolMonths`} onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.type`, 'months', 'layer4')} />
                <Form.Label htmlFor={`OutdooSeasonalTypePoolMonths`}>Months</Form.Label>
            </Form.Group>

            {props.Data.type == 'dateRange'
                ?
                <div className="d-flex gap-3">
                    <Form.Group className='d-flex flex-column gap-2'>
                        <Form.Label className='fs-12'>From</Form.Label>
                        <DateRangePicker
                            initialSettings={{
                                singleDatePicker: true,
                                showDropdowns: true,
                                startDate: props.Data.from != '' && props.Data.from,
                                locale: {
                                    format: 'MM-DD'
                                }
                            }}
                            onApply={(e, picker) => props.UpdateData(`PoolAccess.options.${props.Index}.data.from`, picker.startDate.format('MM-DD'), 'layer4')}
                        >
                            <Form.Control type="text" className='bg-white' readOnly />
                        </DateRangePicker>
                    </Form.Group>
                    <Form.Group className='d-flex flex-column gap-2'>
                        <Form.Label className='fs-12'>To</Form.Label>
                        <DateRangePicker
                            initialSettings={{
                                singleDatePicker: true,
                                showDropdowns: true,
                                startDate: props.Data.to != '' ? props.Data.to : '01-01',
                                locale: {
                                    format: 'MM-DD'
                                }
                            }}
                            onApply={(e, picker) => props.UpdateData(`PoolAccess.options.${props.Index}.data.to`, picker.startDate.format('MM-DD'), 'layer4')}
                        >
                            <Form.Control type="text" className='bg-white' readOnly />
                        </DateRangePicker>
                    </Form.Group>
                </div>
                :
                <div className="d-flex gap-3">
                    <Form.Group className='d-flex flex-column gap-2'>
                        <Form.Label className='fs-12'>Start month</Form.Label>
                        <Form.Select
                            onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.statrMonth`, e.target.value, 'layer4')}
                            className='w-auto'
                        >
                            <option selected={props.Data.statrMonth == ''} value=''>-Select-</option>
                            {
                                months.map((item, index) => (
                                    <option key={index} selected={props.Data.statrMonth == item} value={item}>{item}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='d-flex flex-column gap-2'>
                        <Form.Label className='fs-12'>End month</Form.Label>
                        <Form.Select
                            onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.endMonth`, e.target.value, 'layer4')}
                            className='w-auto'
                        >
                            <option selected={props.Data.endMonth == ''} value=''>-Select-</option>
                            {
                                months.map((item, index) => (
                                    <option key={index} selected={props.Data.endMonth == item} value={item}>{item}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                </div>
            }
        </div >
    )

}

const IndoorPool = (props) => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className='ms-4'>
            <p className="fs-12 mb-2">How many?</p>
            <Form.Select
                onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.howMany`, e.target.value, 'layer4')}
                className='w-auto'
            >
                <option selected={props.Data.howMany == ''} value=''>-Select-</option>
                {
                    number.map((item, index) => (
                        <option key={index} selected={props.Data.howMany == item} value={item}>{item}</option>
                    ))
                }
            </Form.Select>
        </div>
    )

}

const PoolHours = (props) => {
    return (
        <div className='ms-4'>
            < Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.type == '24Hours'} type='radio' name={`PoolHoursType`} id={`PoolHoursType24Hours`} onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.type`, '24Hours', 'layer4')} />
                <Form.Label htmlFor={`PoolHoursType24Hours`}>24 hours</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'timeRange'} type='radio' name={`PoolHoursType`} id={`PoolHoursTypeTimeRange`} onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.type`, 'timeRange', 'layer4')} />
                <Form.Label htmlFor={`PoolHoursTypeTimeRange`}>Time range</Form.Label>
            </Form.Group>
        </div>
    )
}


const PoolsideBar = (props) => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className='ms-4'>
            <p className="fs-12 mb-2">How many?</p>
            <Form.Select
                onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.howMany`, e.target.value, 'layer4')}
                className='w-auto'
            >
                <option selected={props.Data.howMany == ''} value=''>-Select-</option>
                {
                    number.map((item, index) => (
                        <option key={index} selected={props.Data.howMany == item} value={item}>{item}</option>
                    ))
                }
            </Form.Select>
        </div>
    )

}

const SwimUpBar = (props) => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className='ms-4'>
            <p className="fs-12 mb-2">How many?</p>
            <Form.Select
                onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.howMany`, e.target.value, 'layer4')}
                className='w-auto'
            >
                <option selected={props.Data.howMany == ''} value=''>-Select-</option>
                {
                    number.map((item, index) => (
                        <option key={index} selected={props.Data.howMany == item} value={item}>{item}</option>
                    ))
                }
            </Form.Select>
        </div>
    )
}

const WaterPack = (props) => {
    return (
        <div className='ms-4'>
            < Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`WaterPackType`} id={`WaterPackTypefree`} onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`WaterPackTypefree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`WaterPackType`} id={`WaterPackTypesurcharge`} onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`WaterPackTypesurcharge`}>Surcharge</Form.Label>
            </Form.Group>
        </div>
    )

}

const SpaTub = (props) => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className='ms-4'>
            <p className="fs-12 mb-2">How many?</p>
            <Form.Select
                onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.howMany`, e.target.value, 'layer4')}
                className='w-auto'
            >
                <option selected={props.Data.howMany == ''} value=''>-Select-</option>
                {
                    number.map((item, index) => (
                        <option key={index} selected={props.Data.howMany == item} value={item}>{item}</option>
                    ))
                }
            </Form.Select>
        </div>
    )
}


const PoolCabanas = (props) => {
    return (
        <div className='ms-4'>
            < Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.type == 'free'} type='radio' name={`PoolCabanas`} id={`PoolCabanasfree`} onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.type`, 'free', 'layer4')} />
                <Form.Label htmlFor={`PoolCabanasfree`}>Free</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'surcharge'} type='radio' name={`PoolCabanas`} id={`PoolCabanassurcharge`} onChange={(e) => props.UpdateData(`PoolAccess.options.${props.Index}.data.type`, 'surcharge', 'layer4')} />
                <Form.Label htmlFor={`PoolCabanassurcharge`}>Surcharge</Form.Label>
            </Form.Group>
        </div>
    )
}


export {
    OutdoorPool,
    OutdooSeasonalPool,
    IndoorPool,
    PoolHours,
    PoolsideBar,
    SwimUpBar,
    WaterPack,
    SpaTub,
    PoolCabanas,
}
