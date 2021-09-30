import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3"
import Web3EthContract from "web3-eth-contract"
import { getNFTs } from "../dapp/NFTs";

import Demo, { getLibrary } from "../components/Demo";
import Card from "../components/Card"

const nftList = getNFTs();

function getNFTOwner(abi, contract) {

  const tokenContract = new Web3EthContract(abi, contract);
  tokenContract.setProvider('https://speedy-nodes-nyc.moralis.io/036063875a28828fa0c00596/polygon/mumbai');

  let owner;
  tokenContract.methods.owner().call().then(result => {
    owner = result;
  });

  return owner;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="container min-h-screen mx-auto">
        <title>Polygon Marketplace</title>
        <Demo />
        <div className="hero">
          <div className="text-center hero-content">
            <div className="max-w-md px-4 py-8">


              {nftList.map((x) => {
                console.log('!');
                return (
                  <div key={x.name}>
                    <Card name={x.name} image={x.image_https} owner={getNFTOwner(x.contract.abi, x.contract.address)} description={x.description} />
                    <br />
                  </div>
                )
              })}
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
  );
}

export default App;
