pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/**
 * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including
 * the Metadata extension, but not including the Enumerable extension, which is available separately as
 * {ERC721Enumerable}.
 */

contract newNFT is ERC721 {
	constructor(
		string memory name_,
		string memory symbol_,
		address to_,
		uint256 tokenId_
	) public ERC721(name_, symbol_) {
		_safeMint(to_, tokenId_);
	}
}
