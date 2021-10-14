//import * as IPFS from 'ipfs-core'
import { int } from "hardhat/internal/core/params/argumentTypes";
import Web3EthContract from "web3-eth-contract";
import { useWeb3React } from "@web3-react/core";
/*
function getIPFScid() {
    const ipfs = IPFS.create()
    const { cid } = ipfs.add('Hello world')
    //console.info(cid)
    // QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf
    return cid;
}
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let values = [
    {
        "name": "NFT Charles",
        "description": "This image shows the true nature of Cardano.",
        "image_https": "https://ipfs.io/ipfs/QmNxfYJbg9QTEYTC8cTumH1csQP37C5YF43N3aeePaRK3J/",
        "image_ipfs": "ipfs://bafybeiel6555j5mnlkhwffwrewqxh5vfrqysbvzsndc3xjstrl5yquh62q/",
        "contract": {
            "abi": [
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
                {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "renounceOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ],
            "address": "0x25fF1f3CEc4B29Db77455AdfC1a01cB1E43F1FeB",
            "tokenId": 234234,
        }
    },
    {
        "name": "NFT Charles Falcon",
        "description": "This image shows the true nature of Cardano Falcon.",
        "image_https": "https://ipfs.io/ipfs/Qmevqum3PWZDVVE7tRFhJZrBUEu6fd4pFpkxETUPCyeEHo/",
        "image_ipfs": "ipfs://bafybeihwpvttxipkgma4toqsuqmhijiv4x73kbai3f35xqdewxfxpx5uzi/",
        "contract": {
            "abi": [
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
                {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "renounceOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ],
            "address": "0x25fF1f3CEc4B29Db77455AdfC1a01cB1E43F1FeB",
            "tokenId": 456456,
        }
    },
    {
        "name": "NFT Shiba",
        "description": "This image shows the true nature of ToTheMoon Meaning.",
        "image_https": "https://ipfs.io/ipfs/QmXm2FmMfwk7gtDzwXcJR57mm4AoZPAMRi4cEnQPPDg39d/",
        "image_ipfs": "ipfs://bafybeiel6555j5mnlkhwffwrewqxh5vfrqysbvzsndc3xjstrl5yquh62q/",
        "contract": {
            "abi": [
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
                {
                    "inputs": [],
                    "name": "renounceOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ],
            "address": "0x1A1BB07da7EFAa8Bdc98B4F1c66d5616FC262042",
            "tokenId": 123123,
        }
    }
];

/* eslint-disable import/prefer-default-export */
export function getNFTs() {

    return values;
}

export function addNFT(name, description, image_https, image_ipfs, tokenId) {

    values[values.length] = {
        "name": name,
        "description": description,
        "image_https": image_https,
        "image_ipfs": image_ipfs,
        "contract": {
            "abi": [
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
                {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "renounceOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ],
            "address": "0x3d197B62Bf1Ed7300499551F1B75af13899AE507",
            "tokenId": tokenId,
        }
    }

    //const account = useWeb3React();


    const tokenContract = new Web3EthContract(values[values.length - 1].contract.abi, values[values.length - 1].contract.address);
    tokenContract.setProvider('https://speedy-nodes-nyc.moralis.io/036063875a28828fa0c00596/polygon/mumbai');

    console.log("Contract", tokenContract);
    const tokenID = getRandomInt(999999);

    const myAddres = "0x9244D74d9795bC161306119E2026027C1693b3F9";
    const tokenUri = "https";
    console.log(myAddres, tokenID, tokenUri);

    //tokenContract.methods._mint(myAddres, tokenID, tokenUri).call().then(result => {
    tokenContract.methods.owner().call().then(result => {
        console.log("MINT RESULT!", result);
    });



}