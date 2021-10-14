import { Web3ReactProvider } from "@web3-react/core";
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import Select from 'react-select';
import Demo, { getLibrary } from "../components/Demo";
import { addNFT } from "../dapp/NFTs";
import Image from 'next/image'

const style = {
    fontSize: '40px'
};


const buttonStyle = {
    backgroundColor: '#7530ff',
    fontSize: '20px'
};

const inputStyle = {
    padding: '10px',
    borderRadius: '10px',
    width: '100%',
    fontFamily: 'inherit',
    fontFize: 'inherit',
    color: 'black',
}

const inputTitle = {
    textAlign: 'left',
}

const dropStyle = {
    backgroundColor: 'grey',
};
const options = [
    { value: '', label: '--Please choose an option--' },
    { value: 'yes', label: 'YES' },
    { value: 'no', label: 'NO' }
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getImage(ipfsLink) {
    //function to get the image from IPFS
    //const ipfs = IPFS.create()
    //const { cid } = ipfs.get(ipfsLink)
    //console.log(cid)
    // QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf
    //return cid;

    return 0;
}

function Minting() {
    let selectedOption;
    const [ipfs, setIpfs] = useState([])
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [ipfsLink, setIpfsLink] = useState([])


    function mintToken() {
        console.log("Minting token...");

        console.log("Form values: ", name, description, ipfsLink);
        addNFT(name, description, getImage(ipfsLink), ipfsLink, getRandomInt(999999));
    }

    function handleChange(selectedOption) {
        // defining the initial state for the form
        setIpfs(selectedOption.value);
        console.log(`Option selected:`, selectedOption);
    }

    function forceUpdate() {
        forceUpdate();
    }

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <div className="container min-h-screen mx-auto">
                <title>Polygon Marketplace</title>
                <Demo />
                <div className="hero">
                    <div className="text-center hero-content">
                        <div className="max-w-md px-4 py-8">
                            <h1 style={style} className="card-title">Mint NFT</h1>
                            <br />
                            <form>
                                <h1 style={inputTitle}>Name:</h1>
                                <input style={inputStyle} type="text" id="fname" name="fname" onChange={(e) => setName(e.target.value)} /><br /><br />

                                <h1 style={inputTitle}>Description: </h1>
                                <textarea style={inputStyle} name="message" rows="5" cols="30" onChange={(e) => setDescription(e.target.value)}> </textarea><br /><br />

                                <h1 style={inputTitle}>Is the NFT File deployed in the IPFS?:</h1>
                                <Select style={inputStyle} options={options} value={selectedOption} onChange={handleChange} />

                                <div>
                                    {ipfs == 'yes'
                                        ? <div>
                                            <br />
                                            <h1 style={inputTitle}>IPFS File url:</h1>
                                            <input style={inputStyle} type="text" id="lname" onChange={(e) => setIpfsLink(e.target.value)} /> <br /> <br />
                                        </div>
                                        : <div id='Dropzone'>
                                            <br />
                                            <div style={dropStyle}>
                                                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                                    {({ getRootProps, getInputProps }) => (
                                                        <section>
                                                            <div {...getRootProps()}>
                                                                <input {...getInputProps()} />
                                                                <Image
                                                                    src="/src/dapp/dragNdropContainer.PNG"
                                                                    width={2400}
                                                                    height={1598}
                                                                    layout="responsive"
                                                                />
                                                            </div>
                                                        </section>
                                                    )}
                                                </Dropzone>
                                            </div>
                                            <br />
                                        </div>
                                    }
                                </div>
                            </form>
                            <h1 style={buttonStyle} onClick={mintToken} className="btn btn-ghost btn-sm rounded-btn">Mint NFT</h1>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="p-10 footer bg-base-200 text-base-content">
                <div>
                    <p>
                        ProductsWay
                        <br />
                        Built with love from{" "}
                        <a className="link" href="https://github.com/jellydn">
                            jellydn
                        </a>
                    </p>
                </div>
                <div>
                    <span className="footer-title">Document</span>
                    <a
                        href="https://nextjs.org/docs/getting-started"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-hover"
                    >
                        Nextjs Docs
                    </a>
                    <a href="https://hardhat.org/" target="_blank" rel="noopener noreferrer" className="link link-hover">
                        Hardhat
                    </a>
                    <a href="https://daisyui.com/" target="_blank" rel="noopener noreferrer" className="link link-hover">
                        daisyUI
                    </a>
                    <a
                        href="https://github.com/NoahZinsmeister/web3-react"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-hover"
                    >
                        Web3 React
                    </a>
                </div>
                <div>
                    <span className="footer-title">1-click Deployment</span>
                    <a
                        className="pl-2"
                        href="https://vercel.com/new/git/external?repository-url=https://github.com/jellydn/dapp-starter/"
                    >
                        <img src="https://vercel.com/button" alt="Deploy with Vercel" />
                    </a>
                </div>
            </footer>
        </Web3ReactProvider>
    )
}

export default Minting