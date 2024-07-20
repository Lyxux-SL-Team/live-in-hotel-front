import React, { useRef, useState } from 'react';
import { AlignLeft, Bell, Inbox, Search, User } from 'react-feather';
import { Button, Container, Dropdown, Form, InputGroup, Nav, Navbar, Overlay } from 'react-bootstrap';
import { toggleCollapsedNav } from '../../redux/action/Theme';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import CustomInput from './CustomInput';
import HkBadge from '../../components/@hk-badge/@hk-badge';
import { useDispatch } from "react-redux";
import { logout } from '../../redux/reducer/authSlice';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import './TopNav.css'


const TopNav = ({ navCollapsed, toggleCollapsedNav }) => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const [showDropdown, setShowDropdown] = useState(false);
    const [searchValue, setSearchValue] = useState("")

    const CloseSearchInput = () => {
        setSearchValue("");
        setShowDropdown(false);
    }

    const pageVariants = {
        initial: {
            opacity: 0,
            y: 10
        },
        open: {
            opacity: 1,
            y: 0
        },
        close: {
            opacity: 0,
            y: 10
        }
    };

    // logout function
    const logoutUser = () => {
        dispatch(logout())
        window.location.href = "/"
    }



    return (
        <Navbar expand="xl" className="hk-navbar navbar-light fixed-top" >
            <Container fluid>
                {/* Start Nav */}
                <div className="nav-start-wrap">
                    <Button variant="flush-dark" onClick={() => toggleCollapsedNav(!navCollapsed)} className="btn-icon btn-rounded flush-soft-hover navbar-toggle d-xl-none">
                        <span className="icon">
                            <span className="feather-icon"><AlignLeft /></span>
                        </span>
                    </Button>
                    {/* Search */}
                    <div className="no-caret position-relative border border rounded">
                        <Search className='position-absolute top-50 start-0 translate-middle-y ms-2' />
                        <InputGroup className="ms-5 border border-0 d-xl-flex d-none">
                            <span className="input-affix-wrapper input-search affix-border">
                                <Form.Control
                                    type="text"
                                    className="search-inp" data-navbar-search-close="false"
                                    placeholder="Search" aria-label="Search"
                                    onFocus={() => setShowDropdown(true)}
                                    onBlur={() => setShowDropdown(false)}
                                    value={searchValue} onChange={e =>
                                        setSearchValue(e.target.value)
                                    }
                                />
                            </span>
                        </InputGroup>
                    </div>
                </div>
                {/* /Start Nav */}

                {/* End Nav */}
                <div className="nav-end-wrap me-5">
                    <Nav className="navbar-nav flex-row">
                        <Nav.Item>
                            <Button variant="flush-dark" as={Link} to="/apps/email" className="btn-icon btn-rounded flush-soft-hover">
                                <span className="icon">
                                    <span className=" position-relative">
                                        <span className="feather-icon "><Inbox /></span>
                                        <HkBadge bg="" soft pill size="sm" className="position-top-end-overflow-1 icon-top" >1</HkBadge>
                                    </span>
                                </span>
                            </Button>
                        </Nav.Item>

                        <Nav.Item>
                            <Button variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover">
                                <span className="icon">
                                    <span className=" position-relative">
                                        <span className="feather-icon "><Bell /></span>
                                        <HkBadge bg="success" indicator className="position-top-end-overflow-1" />
                                    </span>
                                </span>
                            </Button>
                        </Nav.Item>

                        <Nav.Item>
                            <Button variant="flush-dark" ref={target} onClick={() => setShow(!show)}
                                className="btn-icon btn-rounded flush-soft-hover">
                                <span className="icon">
                                    <span className=" position-relative">
                                        <span className="feather-icon">
                                            <User
                                                style={{ height: '22px', width: '22px' }}
                                                className='bg-dark text-white rounded-circle p-1'
                                            />
                                        </span>
                                    </span>
                                </span>
                            </Button>
                        </Nav.Item>

                        <Overlay target={target.current} show={show} placement="bottom">
                            {({
                                placement: _placement,
                                arrowProps: _arrowProps,
                                show: _show,
                                popper: _popper,
                                hasDoneInitialMeasure: _hasDoneInitialMeasure,
                                ...props
                            }) => (
                                <div
                                    {...props}
                                    style={{
                                        position: 'absolute',
                                        marginLeft: '-45px',
                                        marginTop: '18px',
                                        height: '78px',
                                        width: '180px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderRadius: '10px',
                                        ...props.style,
                                    }}
                                    className='border'
                                >
                                    <button className='btn'>User settings</button>
                                    <button className='btn' onClick={logoutUser}>Sing out</button>
                                </div>
                            )}
                        </Overlay>
                    </Nav>
                </div>
                {/* /End Nav */}
            </Container>
        </Navbar>
    )
}

const mapStateToProps = ({ theme }) => {
    const { navCollapsed } = theme;
    return { navCollapsed }
};

export default connect(mapStateToProps, { toggleCollapsedNav })(TopNav);