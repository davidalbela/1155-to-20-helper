const web3Utils = require('web3-utils');

function decimalToHex(decimal) {
  const padding = 2
  var hexNumber = Number(decimal).toString(16);

  while (hexNumber.length < padding) {
      hexNumber = "0" + hexNumber;
  }

  return hexNumber;
}

const calculateBytes32 = (string) => {
  const stringAsHex = web3Utils.utf8ToHex(string).substring(2);
  const stringLength = stringAsHex.length;
  const zeroPadding = 62 - stringLength;
  if (zeroPadding < 0) {
    throw new Error(`${string} length greather than 32.`);
  }
  let stringZeroPadding = '0'.repeat(zeroPadding);
  const stringLengthAsHex = decimalToHex(stringLength);
  
  return `${stringAsHex}${stringZeroPadding}${stringLengthAsHex}`;
}

const getTokenBytecode = (tokenName, tokenSymbol, decimals) => {
  return `0x${calculateBytes32(tokenName)}${calculateBytes32(tokenSymbol)}${decimalToHex(decimals)}`;
}

module.exports = {
  getTokenBytecode
}