import { Web3ReactProvider } from "@web3-react/core";
import Demo, { getLibrary } from "../components/Demo";
import Dropzone from 'react-dropzone'
import Select from 'react-select'

const style = {
    fontSize: '40px'
};

const dropStyle = {
    backgroundColor: 'grey',
};
const options = [
    { value: '', label: '--Please choose an option--' },
    { value: 'yes', label: 'YES' },
    { value: 'no', label: 'NO' }
]

function Minting() {

    function onSubmit() {
        // defining the initial state for the form
        const initialState = {
            email: "",
            password: "",
        };
    }

    function onChange() {
        // defining the initial state for the form
        const initialState = {
            email: "",
            password: "",
        };
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
                                <input type="text" id="fname" name="fname" /><br /><br />

                                <h1>Description:</h1>
                                <textarea name="message" rows="5" cols="30">The cat was playing in the garden.</textarea><br /><br />

                                <h1>Is the NFT File deployed in the IPFS?:</h1>
                                <Select options={options} />

                                <h1>IPFS File url:</h1>
                                <input type="text" id="lname" name="lname" /><br /><br />

                                <div style={dropStyle} id='Dropzone'>
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
                            </form>
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