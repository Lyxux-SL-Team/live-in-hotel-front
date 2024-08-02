import React, {useEffect, useState} from 'react';
import {colors as Colors} from "../../configs/colors.js";
import {Button, Container, Spinner, Stack, Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useIsContactVerifiedMutation, useRegisterContactMutation} from "../../redux/reducer/api/contractSlice.js";

function Agreement(props) {
    const [contractAgree, setContractAgree] = useState(false);

    const message =props.location.state?.message;
    const user = useSelector(state => state.auth.user);
    const [isContactVerified]=useIsContactVerifiedMutation();
    const [registerContact,{isLoading}]=useRegisterContactMutation()

    useEffect(()=>{
        isContractSigned();
    },[message])
    async function isContractSigned(){
        const res = await isContactVerified(message?.data._id);
        if(res.data?.success){
            setContractAgree(true);
        }
    }

    const paragraphStyle = {color: Colors.Dark, fontSize: 14};
    const titleStyle = {color: Colors.Dark, fontSize: 14, fontWeight:600,backgroundColor:"transparent"}
    const handleAgree = async ()=>{
        isContractSigned();
        const data = {adminId:message.data.admin,contractVersion:"v.1.0",signature:true};
        if(!contractAgree){
            if (message.type==="Hotel"){
                const res = await registerContact({...data,hotelId:message.data._id});
                console.log(res);
            }
            if (message.type==="Property"){
                const res = await registerContact({...data, hotelId:message.data._id});
                console.log(res);
            }
        }
    }
    return (
        <Container className="px-3 px-md-6">
            <Container className="ps-2 pe-2 pe-md-6 ps-md-4 py-3" style={{backgroundColor:Colors.white}}>
                <h2 className="my-3 pb-1" style={{
                    borderBottom: `1px solid ${Colors.Black}`,
                    width: "fit-content",
                    fontSize: 20,
                    color: Colors.Dark,
                    fontWeight: 600
                }}>Live in Hotels LODGING AGREEMENT</h2>
                <p className="mb-3" style={paragraphStyle}>
                    Lorem ipsum dolor sit amet consectetur. Ultrices nisi ut rhoncus sed est libero. Dolor porttitor
                    pharetra dui maecenas massa eu amet. Elementum amet ligula varius ullamcorper pretium. Eu vitae
                    lorem varius bibendum platea molestie nec sapien risus. Est id at amet erat facilisis. Cursus dui eu
                    commodo sed lorem turpis porta ullamcorper. Egestas nec sem velit morbi integer dui dolor. Massa a
                    ut viverra consectetur. Morbi scelerisque et turpis bibendum laoreet ipsum. Hac facilisi ullamcorper
                    tortor rhoncus vitae. Venenatis lectus sed pulvinar mus pulvinar orci ultrices. Non auctor nibh
                    facilisi nulla massa donec. Sed donec adipiscing justo amet cras lectus lacus consectetur viverra.
                    Laoreet elit turpis sit proin sit elit.
                </p>
                <h3 className="my-3" style={{fontSize: 18, color: Colors.Dark, fontWeight: 600}}>SPECIAL TERMS</h3>
                <ol className="border-bottom mb-4" style={{listStyleType: "numbers", color: Colors.Dark, fontSize: 16}}>
                    <li className="mb-3"><span
                        style={{fontWeight: 600}}>Lorem ipsum dolor sit amet consectetur.</span> Egestas malesuada
                        integer
                    </li>
                    <li className="mb-3"><span style={{fontWeight: 600}}>Lorem ipsum dolor sit amet.</span> Egestas
                        malesuada integer adipiscing convallis
                    </li>
                    <li className="mb-3"><span
                        style={{fontWeight: 600}}>Lorem ipsum dolor sit amet consectetur.</span> Egestas malesuada
                        integer adipiscing
                    </li>
                    <li className="mb-3"><span
                        style={{fontWeight: 600}}>Lorem ipsum dolor sit  consectetur.</span> Egestas malesuada integer
                        adipiscing convallis
                    </li>
                </ol>
                <h3 className="my-3" style={{fontSize: 18, color: Colors.Dark, fontWeight: 600}}>GENERAL TERMS</h3>
                <p className="mb-3" style={{color: Colors.Dark, fontSize: 14}}>
                    LIVE IN HOTELS COLLECT AND HOTEL COLLECT BOOKINGS
                </p>
                <ol style={{listStyleType: "numbers", color: Colors.Dark, fontSize: 16}}>
                    <li className="mb-3"><span style={{fontWeight: 600}}>
                    Lorem ipsum dolor sit amet consectetur.</span> Ultrices nisi ut rhoncus sed est libero. Dolor
                        porttitor pharetra dui maecenas massa eu amet. Elementum amet ligula varius ullamcorper pretium.
                        Eu vitae lorem varius bibendum platea molestie nec sapien risus. Est id at amet erat facilisis.
                        Cursus dui eu commodo sed lorem turpis porta ullamcorper. Egestas nec sem velit morbi integer
                        dui dolor. Massa a ut viverra consectetur. Morbi scelerisque et turpis bibendum laoreet ipsum.
                        Hac facilisi ullamcorper tortor rhoncus vitae. Venenatis lectus sed pulvinar mus pulvinar orci
                        ultrices. Non auctor nibh facilisi nulla massa donec. Sed donec adipiscing justo amet cras
                        lectus lacus consectetur viverra. Laoreet elit turpis sit proin sit elit.
                    </li>
                    <li className="mb-3"><span style={{fontWeight: 600}}>
                    Lorem ipsum dolor sit amet consectetur.</span> Ultrices nisi ut rhoncus sed est libero. Dolor
                        porttitor pharetra dui maecenas massa eu amet. Elementum amet ligula varius ullamcorper pretium.
                        Eu vitae lorem varius bibendum platea molestie nec sapien risus. Est id at amet erat facilisis.
                        Cursus dui eu commodo sed lorem turpis porta ullamcorper. Egestas nec sem velit morbi integer
                        dui dolor. Massa a ut viverra consectetur.
                    </li>
                    <li className="mb-3"><span style={{fontWeight: 600}}>
                    Lorem ipsum dolor sit amet consectetur.</span> Ultrices nisi ut rhoncus sed est libero. Dolor
                        porttitor pharetra dui maecenas massa eu amet. Elementum amet ligula varius ullamcorper pretium.
                        Eu vitae lorem varius bibendum platea molestie nec sapien risus. Est id at amet erat facilisis.
                        Cursus dui eu commodo sed lorem turpis porta ullamcorper. Egestas nec sem velit morbi integer
                        dui dolor. Massa a ut viverra consectetur. Morbi scelerisque et turpis bibendum laoreet ipsum.
                        Hac facilisi ullamcorper tortor rhoncus vitae. Venenatis lectus sed pulvinar mus pulvinar orci
                        ultrices.
                    </li>
                    <li className="mb-3"><span style={{fontWeight: 600}}>
                    Lorem ipsum dolor sit amet consectetur.</span> Ultrices nisi ut rhoncus sed est libero. Dolor
                        porttitor pharetra dui maecenas massa eu amet. Elementum amet ligula varius ullamcorper pretium.
                        Eu vitae lorem varius bibendum platea molestie nec sapien risus. Est id at amet erat facilisis.
                    </li>
                </ol>
                <Stack className="align-items-end mt-5">
                    <Button
                        style={{backgroundColor: Colors.Dark}}
                        className="btn-rounded mb-3"
                        onClick={handleAgree}
                        disabled={contractAgree}
                    >
                        <span>
                            <span>Agree</span>
                            {isLoading && (
                                <span className="input-suffix ms-2"> <Spinner animation="border" size="sm" /></span>
                            )}
                         </span>
                    </Button>
                </Stack>
            </Container>
            {
                contractAgree &&
                <Container className="my-3 py-4 px-0" style={{borderTop:`1px solid ${Colors.Grey8}`}}>
                    <h3 style={{...titleStyle,fontSize:18}}>CONTRACT ACCEPTANCE</h3>

                    <Table className="mt-3 " bordered responsive>
                        <thead>
                        <tr>
                            <th style={titleStyle}>Property name</th>
                            <th style={titleStyle}>Address</th>
                            <th style={titleStyle}>Owner</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{...titleStyle,fontWeight:400}}>{message?.data?.propertyName}</td>
                            <td style={{...titleStyle,fontWeight:400}}>{message?.data?.location}</td>
                            <td style={{...titleStyle,fontWeight:400}}>{user.firstName} {user.lastName}</td>
                        </tr>
                        </tbody>
                    </Table>

                    <Table bordered responsive>
                        <thead>
                        <tr>
                            <th style={titleStyle}>Contract Stakeholder</th>
                            <th style={titleStyle}>Title</th>
                            <th style={titleStyle}>Signature Date and Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{...titleStyle,fontWeight:400}}>{user.firstName} {user.lastName}</td>
                            <td style={{...titleStyle,fontWeight:400}}>Signatory</td>
                            <td style={{...titleStyle,fontWeight:400}}>07-10-2024 11:51:06</td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            }
        </Container>
    );
}

export default Agreement;