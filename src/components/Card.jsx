import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function Card(props) {
    return (
        <MDBCard style={{ maxWidth: '22rem', backgroundColor: '#222222' }}>
            <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>{props.name}</MDBCardTitle>
                <MDBCardText>
                    {props.description}
                </MDBCardText>
                <br></br>
                <MDBBtn href='#'>Buy NFT</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}