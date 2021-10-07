/* eslint-disable no-nested-ternary */
import { useWeb3React } from "@web3-react/core";
import Link from 'next/link'

import { Account } from "./Account";
import { Balance } from "./Balance";
import { ChainId } from "./ChainId";

const style = {
  backgroundColor: '#7530ff'
};

export function Header() {
  const { active, error, chainId } = useWeb3React();

  return (
    <div className="mb-2 shadow-lg navbar bg-neutral text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">{chainId == 80001 ? "🟢" : error ? "🔴" : "🟠"}</span>
        <h1 className="btn btn-ghost btn-sm rounded-btn" >{chainId == 80001 ? "Polygon Network" : "No Polygon Network"}</h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/">
          <h1 style={style} className="btn btn-ghost btn-sm rounded-btn">Marketplace</h1>
        </Link>
        &nbsp;&nbsp;
        <Link href="/minting">
          <h1 style={style} className="btn btn-ghost btn-sm rounded-btn">Mint NFT</h1>
        </Link>
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <ChainId />
          <Account />
          <Balance />
        </div>
      </div>
    </div>
  );
}

export default Header;
