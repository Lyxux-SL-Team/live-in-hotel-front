import { number } from 'prop-types';
import React from 'react'
import { Form } from 'react-bootstrap'
import DateRangePicker from 'react-bootstrap-daterangepicker';

const FreeReception = (props) => {
    return (
        <div className='ms-4'>
            < Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.type == 'Daily'} type='radio' name={`FreeReception`} id={`FreeReceptionDaily`} onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.data.type`, 'Daily', 'layer4')} />
                <Form.Label htmlFor={`FreeReceptionDaily`}>Daily</Form.Label>

                <Form.Check defaultChecked={props.Data.type == 'Selectdays'} type='radio' name={`FreeReception`} id={`FreeReceptionSelectdays`} onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.data.type`, 'Selectdays', 'layer4')} />
                <Form.Label htmlFor={`FreeReceptionSelectdays`}>Select days</Form.Label>
            </Form.Group>
        </div>
    )
}

const GalaDinners = (props) => {
    const dataList = [props.Data.subopt1, props.Data.subopt2, props.Data.subopt3, props.Data.subopt4, props.Data.subopt5, props.Data.subopt6];
    const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className='ms-4'>

            {
                dataList.map((item, ind) => (
                    <div key={ind}>
                        {/* main option checked box */}
                        < Form.Group key={ind} className='d-flex gap-2'>
                            <Form.Check defaultChecked={item.isNeed == true} name={`GalaDinners${ind}`} id={`GalaDinnersfree${ind}`} onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.isNeed`, e.target.checked, 'layer4')} />
                            <Form.Label htmlFor={`GalaDinnersfree${ind}`}>{item.subOption}</Form.Label>
                        </Form.Group>
                        {/* clicked this checkbox view and is holidays */}
                        {
                            item.isNeed === true && ind + 1 !== 6 &&
                            <div className="d-flex flex-column gap-2">
                                <div className='ms-5'>
                                    < Form.Group className='d-flex gap-2'>
                                        <Form.Check defaultChecked={item.type == 'roomRate'} type='radio' name={`GalaDinners${ind}`} id={`GalaDinnersroomRate${ind}`} onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.type`, 'roomRate', 'layer4')} />
                                        <Form.Label htmlFor={`GalaDinnersroomRate${ind}`}>Included in room rate</Form.Label>

                                        <Form.Check defaultChecked={item.type == 'collectedProperty'} type='radio' name={`GalaDinners${ind}`} id={`GalaDinnerscollectedProperty${ind}`} onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.type`, 'collectedProperty', 'layer4')} />
                                        <Form.Label htmlFor={`GalaDinnerscollectedProperty${ind}`}>Collected at property</Form.Label>
                                    </Form.Group>
                                </div>
                            </div>
                        }

                        {/* type change view  */}
                        {
                            item.isNeed === true && item.type == 'collectedProperty' &&
                            <div className='d-flex flex-column dap-2'>
                                <Form.Group className='d-flex gap-3 ms-5'>
                                    <Form.Group>
                                        <Form.Label className='fs-12'>Christmas Eve gala dinner fee amount -</Form.Label>
                                        <Form.Control defaultValue={item.amount1} placeholder='3' type='number' onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.amount1`, e.target.value, 'layer4')} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className='fs-12'>Christmas Eve gala dinner fee child amount -</Form.Label>
                                        <Form.Control defaultValue={item.amount2} placeholder='3' type='number' onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.amount2`, e.target.value, 'layer4')} />
                                    </Form.Group>
                                </Form.Group>
                                <div className="d-flex gap-3 ms-5 mb-2">
                                    <Form.Group>
                                        <Form.Label className='fs-12'>Minimum child age</Form.Label>
                                        <Form.Select
                                            onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.age1`, e.target.value, 'layer4')}
                                            className='w-auto'
                                        >
                                            <option selected={item.age1 == ''} value=''>-Select-</option>
                                            {
                                                numberList.map((numItem, nimIndex) => (
                                                    <option key={nimIndex} selected={item.age1 == numItem} value={numItem}>{numItem}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className='fs-12'>Maximum child age</Form.Label>
                                        <Form.Select
                                            onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.age2`, e.target.value, 'layer4')}
                                            className='w-auto'
                                        >
                                            <option selected={item.age1 == ''} value=''>-Select-</option>
                                            {
                                                numberList.map((numItem, nimIndex) => (
                                                    <option key={nimIndex} selected={item.age2 == numItem} value={numItem}>{numItem}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                </div >
                            </div>
                        }

                        {/* vide main option checked and last option  */}
                        {
                            // date 1 data 
                            item.isNeed === true && ind + 1 === 6 &&
                            <div className='d-flex flex-column gap-2 ms-4'>
                                <Form.Group style={{ width: 'max-content' }}>
                                    <Form.Label className='fs-12'>Date 1</Form.Label>
                                    <DateRangePicker
                                        initialSettings={{
                                            singleDatePicker: true,
                                            showDropdowns: true,
                                            startDate: item.date1 != '' ? item.date1 : '01-01',
                                            locale: {
                                                format: 'MM-DD'
                                            }
                                        }}
                                        onApply={(e, picker) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date1`, picker.startDate.format('MM-DD'), 'layer4')}
                                    >
                                        <Form.Control type="text" className='bg-white' readOnly />
                                    </DateRangePicker>
                                </Form.Group>

                                < Form.Group key={'date1TyperoomRate'} className='d-flex gap-2'>
                                    <Form.Check
                                        defaultChecked={item.date1Type == 'roomRate'}
                                        type='radio' name={`GalaDinnersDate1Type${ind}`} id={`GalaDinnersDate1TyperoomRate${ind}`}
                                        onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date1Type`, 'roomRate', 'layer4')} />
                                    <Form.Label htmlFor={`GalaDinnersDate1TyperoomRate${ind}`}>Included in room rate</Form.Label>

                                    <Form.Check
                                        defaultChecked={item.date1Type == 'collectedProperty'}
                                        type='radio' name={`GalaDinnersDate1Type${ind}`} id={`GalaDinnerdate1TypescollectedProperty${ind}`}
                                        onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date1Type`, 'collectedProperty', 'layer4')} />
                                    <Form.Label htmlFor={`GalaDinnerdate1TypescollectedProperty${ind}`}>Collected at property</Form.Label>
                                </Form.Group>
                                {/* last sub option tyle change view */}

                                {
                                    item.isNeed === true && ind + 1 === 6 && item.date1Type == 'collectedProperty' &&
                                    <div className='d-flex flex-column dap-2'>
                                        <Form.Group className='d-flex gap-3 ms-5'>
                                            <Form.Group>
                                                <Form.Label className='fs-12'>Christmas Eve gala dinner fee amount -</Form.Label>
                                                <Form.Control defaultValue={item.date1Amount1} placeholder='3' type='number' onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date1Amount1`, e.target.value, 'layer4')} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label className='fs-12'>Christmas Eve gala dinner fee child amount -</Form.Label>
                                                <Form.Control defaultValue={item.date1Amount2} placeholder='3' type='number' onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date1Amount2`, e.target.value, 'layer4')} />
                                            </Form.Group>
                                        </Form.Group>
                                        <div className="d-flex gap-3 ms-5 mb-2">
                                            <Form.Group>
                                                <Form.Label className='fs-12'>Minimum child age</Form.Label>
                                                <Form.Select
                                                    onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date1Age1`, e.target.value, 'layer4')}
                                                    className='w-auto'
                                                >
                                                    <option selected={item.date1Age1 == ''} value=''>-Select-</option>
                                                    {
                                                        numberList.map((numItem, nimIndex) => (
                                                            <option key={nimIndex} selected={item.date1Age1 == numItem} value={numItem}>{numItem}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label className='fs-12'>Maximum child age</Form.Label>
                                                <Form.Select
                                                    onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date1Age2`, e.target.value, 'layer4')}
                                                    className='w-auto'
                                                >
                                                    <option selected={item.date1Age2 == ''} value=''>-Select-</option>
                                                    {
                                                        numberList.map((numItem, nimIndex) => (
                                                            <option key={nimIndex} selected={item.date1Age2 == numItem} value={numItem}>{numItem}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </div >
                                    </div>
                                }

                                {/* date 2 data  */}
                                <Form.Group style={{ width: 'max-content' }}>
                                    <Form.Label className='fs-12'>Date 1</Form.Label>
                                    <DateRangePicker
                                        initialSettings={{
                                            singleDatePicker: true,
                                            showDropdowns: true,
                                            startDate: item.date2 != '' ? item.date2 : '01-01',
                                            locale: {
                                                format: 'MM-DD'
                                            }
                                        }}
                                        onApply={(e, picker) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date2`, picker.startDate.format('MM-DD'), 'layer4')}
                                    >
                                        <Form.Control type="text" className='bg-white' readOnly />
                                    </DateRangePicker>
                                </Form.Group>

                                < Form.Group key={'date2TyperoomRate'} className='d-flex gap-2'>
                                    <Form.Check
                                        defaultChecked={item.date2Type == 'roomRate'}
                                        type='radio' name={`GalaDinnersdate2Type${ind}`} id={`GalaDinnersdate2TyperoomRate${ind}`}
                                        onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date2Type`, 'roomRate', 'layer4')} />
                                    <Form.Label htmlFor={`GalaDinnersdate2TyperoomRate${ind}`}>Included in room rate</Form.Label>

                                    <Form.Check
                                        defaultChecked={item.date2Type == 'collectedProperty'}
                                        type='radio' name={`GalaDinnersdate2Type${ind}`} id={`GalaDinnerdate2TypescollectedProperty${ind}`}
                                        onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date2Type`, 'collectedProperty', 'layer4')} />
                                    <Form.Label htmlFor={`GalaDinnerdate2TypescollectedProperty${ind}`}>Collected at property</Form.Label>
                                </Form.Group>

                                {/* last sub option tyle change view */}
                                {
                                    item.isNeed === true && ind + 1 === 6 && item.date2Type == 'collectedProperty' &&
                                    <div className='d-flex flex-column dap-2'>
                                        <Form.Group className='d-flex gap-3 ms-5'>
                                            <Form.Group>
                                                <Form.Label className='fs-12'>Christmas Eve gala dinner fee amount -</Form.Label>
                                                <Form.Control defaultValue={item.date2Amount1} placeholder='3' type='number' onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date2Amount1`, e.target.value, 'layer4')} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label className='fs-12'>Christmas Eve gala dinner fee child amount -</Form.Label>
                                                <Form.Control defaultValue={item.date2Amount2} placeholder='3' type='number' onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date2Amount2`, e.target.value, 'layer4')} />
                                            </Form.Group>
                                        </Form.Group>
                                        <div className="d-flex gap-3 ms-5 mb-2">
                                            <Form.Group>
                                                <Form.Label className='fs-12'>Minimum child age</Form.Label>
                                                <Form.Select
                                                    onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date2Age1`, e.target.value, 'layer4')}
                                                    className='w-auto'
                                                >
                                                    <option selected={item.date2Age1 == ''} value=''>-Select-</option>
                                                    {
                                                        numberList.map((numItem, minIndex) => (
                                                            <option key={minIndex} selected={item.date2Age1 == numItem} value={numItem}>{numItem}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label className='fs-12'>Maximum child age</Form.Label>
                                                <Form.Select
                                                    onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.subopt${ind + 1}.date2Age2`, e.target.value, 'layer4')}
                                                    className='w-auto'
                                                >
                                                    <option selected={item.date2Age2 == ''} value=''>-Select-</option>
                                                    {
                                                        numberList.map((numItem, numIndex) => (
                                                            <option key={numIndex} selected={item.date2Age2 == numItem} value={numItem}>{numItem}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </div >
                                    </div>
                                }
                            </div>
                        }
                    </div>
                ))
            }
        </div >
    )
}

const HostedEveningMeal = (props) => {
    const monthArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let cDate = [];
    
    const updateArr = (data, type) => {
        if (type == 'update') {
            console.log("update")
            console.log(cDate);
            cDate.includes(data) ? cDate = cDate.filter(number => number !== data) : cDate.push(data);
            console.log(cDate);
        } else {
            console.log('check')
            return cDate.includes(data);
        }
    }
    return (
        <div className='ms-4'>

            {/* select reservationRequired */}
            < Form.Group className='d-flex gap-2'>
                <Form.Check defaultChecked={props.Data.reservationRequired == true} id={`HostedEveningMealReservationRequired`}
                    onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.data.reservationRequired`, e.target.checked, 'layer4')} />
                <Form.Label htmlFor={`HostedEveningMealReservationRequired`}>Reservation required</Form.Label>
            </Form.Group>

            {/* select amount section  */}
            <Form.Group>
                <Form.Label className='fs-12'>Hosted evening meal amount</Form.Label>
                <Form.Control className='w-auto' type='number' defaultValue={''} placeholder='1'
                    onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.data.reservationRequired`, e.target.checked, 'layer4')}
                />
            </Form.Group>

            {/* select day section  daily , weekdays , weekend and select coustom day */}
            < Form.Group className='d-flex gap-2 mt-3'>
                <Form.Check defaultChecked={props.Data.dayType == 'Daily'} type='radio' name={`HostedEveningMeal`} id={`HostedEveningMealDaily`} onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.data.dayType`, 'Daily', 'layer4')} />
                <Form.Label htmlFor={`HostedEveningMealDaily`}>Daily</Form.Label>

                <Form.Check defaultChecked={props.Data.dayType == 'Weekdays'} type='radio' name={`HostedEveningMeal`} id={`HostedEveningMealWeekdays`} onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.data.dayType`, 'Weekdays', 'layer4')} />
                <Form.Label htmlFor={`HostedEveningMealWeekdays`}>Weekdays</Form.Label>

                <Form.Check defaultChecked={props.Data.dayType == 'Weekends'} type='radio' name={`HostedEveningMeal`} id={`HostedEveningMealWeekends`} onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.data.dayType`, 'Weekends', 'layer4')} />
                <Form.Label htmlFor={`HostedEveningMealWeekends`}>Weekends</Form.Label>

                <Form.Check defaultChecked={props.Data.dayType == 'SelectDays'} type='radio' name={`HostedEveningMeal`} id={`HostedEveningMealSelectDays`} onChange={(e) => props.UpdateData(`DiningVenues.options.${props.Index}.data.dayType`, 'SelectDays', 'layer4')} />
                <Form.Label htmlFor={`HostedEveningMealSelectDays`}>Select days</Form.Label>
            </Form.Group>

            <p className='fs-12 text-black'>Which Day(s)? <span className='fs-12'>Select up to five.</span></p>

            {/* coustom date selected */}
            < Form.Group className='d-flex gap-2 mt-3'>
                {
                    monthArray.map((item, index) => (
                        <React.Fragment key={index}>
                            <Form.Check className='d-none' defaultChecked={props.Data.dayType == { item }} type='radio' id={`HostedEveningMeal${item}`}
                                onChange={(e) => {
                                    updateArr(item, 'update')
                                }} />
                            <Form.Label className={updateArr(item) ? 'btn-active' : 'btn-nonActive'} htmlFor={`HostedEveningMeal${item}`}>{item}</Form.Label>
                        </React.Fragment>
                    ))
                }
            </Form.Group>
        </div>
    )
}

export {
    FreeReception,
    GalaDinners,
    HostedEveningMeal,
}