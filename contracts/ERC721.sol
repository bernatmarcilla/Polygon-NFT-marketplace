pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including
 * the Metadata extension, but not including the Enumerable extension, which is available separately as
 * {ERC721Enumerable}.
 */

contract newNFT is ERC721, Ownable {
	using Strings for uint256;

	// mapping for token URIs
	mapping(uint256 => string) private _tokenURIs;

	// Base URI
	string private _baseURIextended;

	constructor(string memory _name, string memory _symbol)
		ERC721(_name, _symbol)
	{}

	function setBaseURI(string memory baseURI_) external onlyOwner {
		_baseURIextended = baseURI_;
	}

	function _setTokenURI(uint256 tokenId, string memory _tokenURI)
		internal
		virtual
	{
		require(
			_exists(tokenId),
			"ERC721Metadata: URI set of nonexistent token"
		);
		_tokenURIs[tokenId] = _tokenURI;
	}

	function _baseURI() internal view virtual override returns (string memory) {
		return _baseURIextended;
	}

	function tokenURI(uint256 tokenId)
		public
		view
		virtual
		override
		returns (string memory)
	{
		require(
			_exists(tokenId),
			"ERC721Metadata: URI query for nonexistent token"
		);

		string memory _tokenURI = _tokenURIs[tokenId];
		string memory base = _baseURI();

		// If there is no base URI, return the token URI.
		if (bytes(base).length == 0) {
			return _tokenURI;
		}
		// If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
		if (bytes(_tokenURI).length > 0) {
			return string(abi.encodePacked(base, _tokenURI));
		}
		// If there is a baseURI but no tokenURI, concatenate the tokenID to the baseURI.
		return string(abi.encodePacked(base, tokenId.toString()));
	}

	function mint(
		address _to,
		uint256 _tokenId,
		string memory tokenURI_
	) external onlyOwner {
		_mint(_to, _tokenId);
		_setTokenURI(_tokenId, tokenURI_);
	}
}
