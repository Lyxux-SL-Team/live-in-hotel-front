import React, {useEffect, useState} from 'react';
import * as Icons from "tabler-icons-react";
import {Form} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";

function PropertiesAndRates2(props) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [bedTypes, setBedTypes] = useState([{id: 1, count: 0}]);
    const history = useHistory();

    const handleBack = () => {
        // Navigate to the previous page or a specific route
        history.goBack(); // This will go back to the previous page in history
        // history.push('/previous-page'); // This will navigate to a specific route
    };

    const handleNext = () => {
        // Navigate to the next page or a specific route
        history.push('/properties-and-rates3');
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const increment = (index) => {
        const newBedTypes = [...bedTypes];
        newBedTypes[index].count += 1;
        setBedTypes(newBedTypes);
    };

    const decrement = (index) => {
        const newBedTypes = [...bedTypes];
        if (newBedTypes[index].count > 0) {
            newBedTypes[index].count -= 1;
        }
        setBedTypes(newBedTypes);
    };

    const addBedType = () => {
        setBedTypes([...bedTypes, {id: bedTypes.length + 1, count: 0}]);
    };

    const deleteBedType = (index) => {
        const newBedTypes = bedTypes.filter((_, i) => i !== index);
        setBedTypes(newBedTypes);
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
    };

    const formGroupStyle = {
        marginRight: isMobile ? '0' : '10px',
        marginBottom: isMobile ? '10px' : '0',
    };

    const selectStyle = {
        border: '1.5px solid black',
    };

    return (
        <div>
            <section className="p-4">
                <form action="" className="d-flex flex-column gap-4">
                    <p className="fs-18 d-flex gap-2" style={{fontSize: "15px", fontWeight: 500, color: '#02BCBC'}}>
                        <Icons.ArrowLeft style={{width: '20px', height: '20px', color: '#02BCBC'}}/>
                        Exit to Rooms and Rates overview
                    </p>

                    <p className="text-black" style={{fontSize: "19px", fontWeight: 500}}>Set up your property</p>

                    <div className="border p-3 rounded d-flex flex-column gap-3">
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <p className="text-black" style={{fontSize: "15px", fontWeight: 700}}>
                                Start with the basics
                            </p>
                            <p style={{fontSize: "15px", marginTop: '10px'}}>
                                Property types are the basic description of a room, like if it's a single or double. If
                                you add a room class, make sure to use it consistently across all rooms.
                            </p>
                        </div>

                        <div style={containerStyle}>
                            <Form.Group style={formGroupStyle}>
                                <Form.Select className="w-auto" style={selectStyle}>
                                    <option value={0}>Property type</option>
                                    <option value="double-or-twin-room">Double or Twin Room</option>
                                    <option value="double-room">Double Room</option>
                                    <option value="double-room-single-use">Double Room Single Use</option>
                                    <option value="quadruple-room">Quadruple Room</option>
                                    <option value="room">Room</option>
                                    <option value="single-room">Single Room</option>
                                    <option value="studio">Studio</option>
                                    <option value="studio-suit">Studio Suit</option>
                                    <option value="suit">Suit</option>
                                    <option value="triple-room">Triple Room</option>
                                    <option value="twin-room">Twin Room</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="cabin">Cabin</option>
                                    <option value="chalet">Chalet</option>
                                    <option value="condo">Condo</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group>
                                <Form.Select className="w-auto" style={selectStyle}>
                                    <option value={0}>Property class (optional)</option>
                                    <option value="basic">Basic</option>
                                    <option value="classic">Classic</option>
                                    <option value="comfort">Comfort</option>
                                    <option value="deluxe">Deluxe</option>
                                    <option value="economy">Economy</option>
                                    <option value="family">Family</option>
                                    <option value="junior">Junior</option>
                                    <option value="standard">Standard</option>
                                    <option value="superior">Superior</option>
                                    <option value="triple-room">Triple Room</option>
                                    <option value="twin-room">Twin Room</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="cabin">Cabin</option>
                                    <option value="chalet">Chalet</option>
                                    <option value="condo">Condo</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <p className="text-black" style={{fontSize: "15px", fontWeight: 700}}>
                                What's the smoking policy?
                            </p>
                            <Form.Group style={{marginTop: '20px'}}>
                                <Form.Select className="w-auto" style={{border: '1.5px solid black'}}>
                                    <option value={0}>Smoking policy</option>
                                    <option value="smoking">Smoking</option>
                                    <option value="non-smoking">Non-smoking</option>
                                </Form.Select>
                            </Form.Group>
                            <p className="text-black" style={{fontSize: "15px", fontWeight: 700, marginTop: '20px'}}>
                                How many of these rooms do you have?
                            </p>
                            <Form.Group style={{marginTop: '20px'}}>
                                <Form.Select className="w-auto" style={{border: '1.5px solid black'}}>
                                    <option value={0}>Number of rooms</option>
                                    <option value={2}>1</option>
                                    <option value={3}>2</option>
                                    <option value={3}>3</option>
                                    <option value={3}>4</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>


                    <div className="border p-3 rounded d-flex flex-column gap-3">
                        <p className="text-black" style={{fontSize: "15px", fontWeight: 700, marginTop: '20px'}}>Set up
                            sleeping spaces</p>
                        <p style={{fontSize: "15px", marginTop: '10px'}}>
                            Adding the number of beds and bed types sets the occupancy for this room. You can add cribs
                            and <br/> rollaways after you're live.
                        </p>

                        {bedTypes.map((bedType, index) => (
                            <div key={bedType.id} className="d-flex flex-column flex-md-row gap-3 align-items-center">
                                <Form.Group className="flex-grow-1">
                                    <Form.Select className="w-100" style={{border: '1.5px solid black'}}>
                                        <option value={0}>Bed Type</option>
                                        <option value={1}>Single Bed</option>
                                        <option value={2}>Double Bed</option>
                                        <option value={3}>Queen Bed</option>
                                        <option value={4}>King Bed</option>
                                    </Form.Select>
                                </Form.Group>

                                <p className="flex-grow-1" style={{fontSize: "15px",}}>How many of
                                    these beds?</p>

                                <div className="d-flex align-items-center flex-grow-1">
                                    <button
                                        type="button"
                                        onClick={() => decrement(index)}
                                        style={{
                                            backgroundColor: 'transparent',
                                            fontSize: '11px',
                                            marginRight: '10px',
                                            borderRadius: '80px',
                                            border: '1px solid black',
                                            padding: '5px 10px',
                                        }}
                                    >
                                        -
                                    </button>
                                    <div style={{fontSize: '20px', margin: '0 10px'}}>{bedType.count}</div>
                                    <button
                                        type="button"
                                        onClick={() => increment(index)}
                                        style={{
                                            backgroundColor: 'transparent',
                                            fontSize: '11px',
                                            marginLeft: '10px',
                                            borderRadius: '80px',
                                            border: '1px solid black',
                                            padding: '5px 10px',
                                        }}
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => deleteBedType(index)}
                                    style={{
                                        backgroundColor: 'transparent',
                                        fontSize: '12px',
                                        marginLeft: '10px',
                                        borderRadius: '80px',
                                        border: 'none',
                                        padding: '5px 10px',
                                        color: '#02BCBC',
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: '4px'
                                    }}
                                >
                                    <Icons.Trash style={{width: '20px', height: '20px', marginRight: '5px'}}/>
                                    Delete
                                </button>
                            </div>
                        ))}
                        <p
                            className="fs-18 d-flex gap-2"
                            style={{fontSize: "15px", fontWeight: 500, color: '#02BCBC', cursor: 'pointer'}}
                            onClick={addBedType}
                        >
                            <Icons.Plus style={{width: '20px', height: '20px'}}/>
                            Add another bed type
                        </p>
                    </div>


                    <div className="border p-3 rounded d-flex flex-column gap-3">
                        <p className="text-black"
                           style={{fontSize: "15px", fontWeight: 700, marginTop: '20px'}}>Recommended occupancy</p>

                        <p style={{fontSize: "15px", marginTop: '10px'}}>
                            We recommend this occupancy based on the number of bed types you added. You
                            can <br/> increase the occupancy as long as you have enough sleeping space.
                        </p>

                        <div className="d-flex flex-column flex-md-row  align-items-left">
                            <Form.Group>
                                <Form.Select className="w-100" style={{border: '1.5px solid black'}}>
                                    <option value={0}>Room Occupancy</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                </Form.Select>
                            </Form.Group>

                            <p style={{fontSize: "15px", marginLeft: '20px', marginTop: '5px'}}>person (18 and
                                older)</p>
                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

                        <button
                            type="button"
                            className={`btn btn-link}`}
                            onClick={handleBack}
                            style={{
                                textDecoration: 'none',
                                border: '1px solid black',
                                borderRadius: "15px",
                                color: 'black',
                                marginRight: '20px',
                                fontSize: '14px',
                                backgroundColor: 'none',
                                marginTop: '15px'

                            }}
                        >
                            Back
                        </button>


                        <Link to="/properties-and-rates3">
                            <button
                                type="button"
                                className="btn btn-link"
                                style={{
                                    textDecoration: 'none',
                                    border: 'none',
                                    borderRadius: "15px",
                                    color: 'white',
                                    marginRight: '20px',
                                    fontSize: '14px',
                                    backgroundColor: 'black',
                                    marginTop: '15px'
                                }}
                            >
                                next
                            </button>
                        </Link>

                    </div>

                </form>
            </section>
        </div>
    );
}

export default PropertiesAndRates2;
