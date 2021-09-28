import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function Card(props) {
    const { myProps } = props;
    return (
        <MDBCard style={{ maxWidth: '42rem', backgroundColor: '#222222' }}>
            <MDBCardImage src={myProps.image} position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>{myProps.name}</MDBCardTitle>
                <MDBCardText>
                    {myProps.description}
                    Owner: {myProps.owner}
                </MDBCardText>
                <br />
                <MDBBtn href='#'>Buy NFT</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}