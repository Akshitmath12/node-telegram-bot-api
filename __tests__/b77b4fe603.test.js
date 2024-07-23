// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=290ee04d27
ROOST_METHOD_SIG_HASH=b77b4fe603


*/

// ********RoostGPT********
const TelegramBot = require('./telegram');
const deprecate = jest.fn();
const startPolling = jest.fn();

describe('TelegramBot', () => {
  let bot;

  beforeEach(() => {
    bot = new TelegramBot();
    bot.deprecate = deprecate;
    bot.startPolling = startPolling;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('initPolling', () => {
    test('should call deprecate with correct message', () => {
      bot.initPolling();
      expect(deprecate).toHaveBeenCalledWith('TelegramBot#initPolling() is deprecated. Use TelegramBot#startPolling() instead.');
    });

    test('should call startPolling', () => {
      bot.initPolling();
      expect(startPolling).toHaveBeenCalled();
    });
  });
});
