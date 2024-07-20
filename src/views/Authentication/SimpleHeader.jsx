import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Images
import logo from '../../assets/img/logo-light.png';

const SimpleHeader = () => {

    return (
        <Navbar expand="xl" className="hk-navbar navbar-light ">
            <Container fluid>
                {/* Start Nav */}
                <div className="nav-start-wrap">
                    <Navbar.Brand as={Link} to="/" >
                        <img className="brand-img d-inline-block ms-5 mt-2" width={104.34} height={34.61} src={logo} alt="brand" />
                    </Navbar.Brand>
                </div>
            </Container>
        </Navbar>
    )
}

export default SimpleHeader
