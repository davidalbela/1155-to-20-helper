const assert = require('assert');
const { expect } = require('chai');

const { getTokenBytecode } = require('../src/index');

describe('Bytecode for token metadata', () => {  
  it('Test WrappedERC-1155, WMT, and 18 decimals', () => {
    const bytes1 = getTokenBytecode("WrappedERC-1155", "WMT", 18);
    assert.equal(bytes1, "0x577261707065644552432d31313535000000000000000000000000000000001e574d54000000000000000000000000000000000000000000000000000000000612");
  });

  it('Test Wrapped ERC-1155, WMT, and 18 decimals', () => {
    const bytes2 = getTokenBytecode("Wrapped ERC-1155", "WMT", 18);
    assert.equal(bytes2, "0x57726170706564204552432d3131353500000000000000000000000000000020574d54000000000000000000000000000000000000000000000000000000000612");
  });

  if('Test 10 decimals', () => {
    const bytes = getTokenBytecode("Wrapped ERC-1155", "cWMT", 10);
    assert.equal(bytes2, "0x57726170706564204552432d313135350000000000000000000000000000002063574d54000000000000000000000000000000000000000000000000000000080a");
  });

  it('should throw an error on the tokenName', async () => {
    try {
      const bytes3 = getTokenBytecode("Wrapped ERC-1155 Gnosis Auctions", "CtGA", 6);
    } catch (error) {
      expect(error.message).to.equal('Wrapped ERC-1155 Gnosis Auctions length greather than 32.');
    }
  });

  it('should throw an error on the tokenSymbol', async () => {
    try {
      const bytes3 = getTokenBytecode("Wrapped GA", "Symbol is too long long long", 6);
    } catch (error) {
      expect(error.message).to.equal('Symbol is too long long long length greather than 32.');
    }
  });

 });
