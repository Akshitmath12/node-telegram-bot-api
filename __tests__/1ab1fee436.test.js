// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=565853ffb0
ROOST_METHOD_SIG_HASH=1ab1fee436


*/

// ********RoostGPT********
const Telegram = require('./telegram');

describe('Telegram', () => {
  let telegram;

  beforeEach(() => {
    telegram = new Telegram();
  });

  describe('getMyCommands', () => {
    test('should send a request with the correct parameters when scope is provided', () => {
      const form = { scope: { type: 'all' } };
      const expectedForm = { scope: JSON.stringify(form.scope) };

      telegram._request = jest.fn();

      telegram.getMyCommands(form);

      expect(telegram._request).toHaveBeenCalledWith('getMyCommands', { form: expectedForm });
    });

    test('should send a request with the correct parameters when scope is not provided', () => {
      const form = { };

      telegram._request = jest.fn();

      telegram.getMyCommands(form);

      expect(telegram._request).toHaveBeenCalledWith('getMyCommands', { form });
    });

    test('should throw an error if _request method fails', () => {
      const form = { scope: { type: 'all' } };

      telegram._request = jest.fn(() => {
        throw new Error('Request failed');
      });

      expect(() => telegram.getMyCommands(form)).toThrow('Request failed');
    });
  });
});
