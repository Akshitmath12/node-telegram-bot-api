// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=f0b6e74ec5
ROOST_METHOD_SIG_HASH=dd9fab5044


*/

// ********RoostGPT********
const Telegram = require('./telegram');

describe('Telegram', () => {
  let telegram;

  beforeEach(() => {
    telegram = new Telegram();
  });

  describe('closeWebHook', () => {
    test('should resolve promise if _webHook does not exist', async () => {
      telegram._webHook = null;
      await expect(telegram.closeWebHook()).resolves.toBeUndefined();
    });

    test('should call close method of _webHook if it exists', async () => {
      const close = jest.fn();
      telegram._webHook = { close };

      await telegram.closeWebHook();

      expect(close).toBeCalled();
    });
  });
});
