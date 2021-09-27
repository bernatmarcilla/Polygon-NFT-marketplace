import { Web3ReactProvider } from "@web3-react/core";
import { getNFTs } from "../dapp/NFTs";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Demo, { getLibrary } from "../components/Demo";
import Card from "../components/Card"

const nftList = getNFTs();


const element = <h1>Hello World</h1>;


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
                console.log('Test');
                return (
                  <div>
                    <Card name={x.name} image={x.image} description={x.description} />
                    <br></br>
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
