// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=ef3f554fb1
ROOST_METHOD_SIG_HASH=c7b4a8410d


*/

// ********RoostGPT********
const Error = require('./errors');

describe('Error class', () => {
  let errorInstance;

  beforeEach(() => {
    errorInstance = new Error('This is an error message', {status: 500});
  });

  test('Error instance should be created with correct message', () => {
    expect(errorInstance.message).toEqual('This is an error message');
  });

  test('Error instance should have correct name', () => {
    expect(errorInstance.name).toEqual('ETELEGRAM');
  });

  test('Error instance should be created with correct response', () => {
    expect(errorInstance.response).toEqual({status: 500});
  });

  test('Error instance should be an instance of Error', () => {
    expect(errorInstance).toBeInstanceOf(Error);
  });
});
