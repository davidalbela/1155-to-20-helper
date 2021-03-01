const assert = require('assert');

const { getTokenBytecode, getBatchTokenBytecode } = require('../src/index');

describe('Bytecode for token metadata', () => {  
  it('Test batch', () => {
    const tokenNameBatch = new Array("WrappedERC-1155", "Wrapped ERC-1155", "Wrapped ERC-1155");
    const tokenSymbolBatch = new Array("WMT", "WMT", "cWMT");
    const tokenDecimalsBatch = new Array(18, 18, 10);
    console.log(tokenNameBatch);
    console.log()
    const bytes = getBatchTokenBytecode(tokenNameBatch, tokenSymbolBatch, tokenDecimalsBatch);

    const bytes1 = getTokenBytecode(tokenNameBatch[0], tokenSymbolBatch[0], tokenDecimalsBatch[0]).substring(2);
    const bytes2 = getTokenBytecode(tokenNameBatch[1], tokenSymbolBatch[1], tokenDecimalsBatch[1]).substring(2);
    const bytes3 = getTokenBytecode(tokenNameBatch[2], tokenSymbolBatch[2], tokenDecimalsBatch[2]).substring(2);
    
    assert.equal(bytes, `0x${bytes1}${bytes2}${bytes3}`);

    console.log(bytes);
  });

 });
