import { Web3ReactProvider } from "@web3-react/core";
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import Select from 'react-select';
import Demo, { getLibrary } from "../components/Demo";
import { addNFT } from "../dapp/NFTs";

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

const dropStyle = {
    backgroundColor: 'grey',
};
const options = [
    { value: '', label: '--Please choose an option--' },
    { value: 'yes', label: 'YES' },
    { value: 'no', label: 'NO' }
];

function Minting() {
    let selectedOption;
    const [ipfs, setIpfs] = useState([])
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [ipfsLink, setIpfsLink] = useState([])

    function mintToken() {
        console.log("Minting token...");

        addNFT(name, description, 'https://ipfs.io/ipfs/QmXJ153E2EncomkYUnXJyGVzj1otFCg2uHYDj3VU2uWP19?filename=4.png', 'ipfs://bafybeiefbn3etbsvhrnwk4aj4vlilf2lpllehjlytoqthrp5j3ceyjmrja/', '123');
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
                                <h1>Name:</h1>
                                <input style={inputStyle} type="text" id="fname" name="fname" onChange={(e) => setName(e.target.value)} /><br /><br />

                                <h1>Description: </h1>
                                <textarea style={inputStyle} name="message" rows="5" cols="30" onChange={(e) => setDescription(e.target.value)}> </textarea><br /><br />

                                <h1>Is the NFT File deployed in the IPFS?:</h1>
                                <Select style={inputStyle} options={options} value={selectedOption} onChange={handleChange} />

                                <div>
                                    {ipfs == 'yes'
                                        ? <div>
                                            <br />
                                            <h1>IPFS File url:</h1>
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
                                                                <p>Drag,n drop some files here, or click to select files</p>
                                                            </div>
                                                        </section>
                                                    )}
                                                </Dropzone>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </form>
                            <br />
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