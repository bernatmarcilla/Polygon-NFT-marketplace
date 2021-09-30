import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

const style = {
    //backgroundColor: 'grey'
};

export default function Card(props) {
    return (
        <MDBCard style={{ maxWidth: '42rem', backgroundColor: '#222222' }}>
            <MDBCardImage src={props.image} position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>{props.name}</MDBCardTitle>
                <MDBCardText>
                    {props.description}
                </MDBCardText>
                <hr />
                <div style={style}>
                    Owner: 0xB85Ec4586A4f7e16e6624A3fa148db2398753a79 {props.owner}
                    <br />
                </div>
                <br />
                <MDBBtn href='#'>Buy NFT</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}