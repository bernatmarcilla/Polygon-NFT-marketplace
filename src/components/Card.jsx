import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Web3 from "web3"
import Web3EthContract from "web3-eth-contract"

const style = {
    //backgroundColor: 'grey'
};

var nftOwner;

function getNFTOwner(abi, address) {

    const tokenContract = new Web3EthContract(abi, address);
    tokenContract.setProvider('https://speedy-nodes-nyc.moralis.io/036063875a28828fa0c00596/polygon/mumbai');

    tokenContract.methods.owner().call().then(result => {
        nftOwner = result;
    });

}

export default function Card(props) {
    getNFTOwner(props.contractAbi, props.contractAddress)
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
                    Owner: {nftOwner}
                    <br />
                </div>
                <br />
                <MDBBtn href='#'>Buy NFT</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}