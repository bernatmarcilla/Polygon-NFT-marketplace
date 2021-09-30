//import * as IPFS from 'ipfs-core'
/*
function getIPFScid() {
    const ipfs = IPFS.create()
    const { cid } = ipfs.add('Hello world')
    //console.info(cid)
    // QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf
    return cid;
}
*/

/* eslint-disable import/prefer-default-export */
export function getNFTs() {

    const values = [
        {
            "name": "NFT Charles",
            "description": "This image shows the true nature of Cardano.",
            "image": "https://ipfs.io/ipfs/QmNxfYJbg9QTEYTC8cTumH1csQP37C5YF43N3aeePaRK3J?filename=2.jpg",
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
            "name": "NFT Shiba",
            "description": "This image shows the true nature of ToTheMoon Meaning.",
            "image": "https://ipfs.io/ipfs/QmNxfYJbg9QTEYTC8cTumH1csQP37C5YF43N3aeePaRK3J?filename=2.jpg",
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
            "image": "https://ipfs.io/ipfs/QmXm2FmMfwk7gtDzwXcJR57mm4AoZPAMRi4cEnQPPDg39d",
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
    ]

    return values
}
