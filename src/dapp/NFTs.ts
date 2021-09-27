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

export function getNFTs() {

    const values = [
        {
            "name": "NFT Shiba",
            "description": "This image shows the true nature of ToTheMoon Meaning.",
            "image": "https://ipfs.io/ipfs/QmXm2FmMfwk7gtDzwXcJR57mm4AoZPAMRi4cEnQPPDg39d",
        },
        {
            "name": "NFT Shiba",
            "description": "This image shows the true nature of ToTheMoon Meaning.",
            "image": "https://ipfs.io/ipfs/QmXm2FmMfwk7gtDzwXcJR57mm4AoZPAMRi4cEnQPPDg39d",
        },
        {
            "name": "NFT Shiba",
            "description":
                getIPFScid(),
            "image": "https://ipfs.io/ipfs/QmXm2FmMfwk7gtDzwXcJR57mm4AoZPAMRi4cEnQPPDg39d",
        }
    ]

    return values
}
