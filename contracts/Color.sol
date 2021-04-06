// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Color is ERC721 {
    string[] public colors;
    mapping(string => bool) _colorExists;

    //works like an initialize funcion that runs everytime a contract is deployed to the blockchain
    constructor() ERC721("Color", "COLOR") {}

    function mint(string memory _color) public {
        //Require unique color
        require(!_colorExists[_color]);

   colors.push(_color); 
      uint256 _id = colors.length - 1;
        _mint(msg.sender, _id);
        _colorExists[_color] = true;
        //Color - track it and add it
        //Call the mint function inside de contract
    }
}
