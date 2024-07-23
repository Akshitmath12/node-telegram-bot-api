// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=dff8200c8b
ROOST_METHOD_SIG_HASH=14526a1a42


*/

// ********RoostGPT********
const Telegram = require('./telegram');

describe('Telegram', () => {
  let telegram;

  beforeEach(() => {
    telegram = new Telegram();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('stopPolling', () => {
    it('should resolve immediately if not polling', async () => {
      telegram._polling = null;
      const stopPollingSpy = jest.spyOn(telegram, 'stopPolling');
      await telegram.stopPolling();
      expect(stopPollingSpy).toHaveBeenCalled();
    });

    it('should stop polling if polling', () => {
      const options = {};
      telegram._polling = {
        stop: jest.fn().mockReturnValue(Promise.resolve())
      };
      telegram.stopPolling(options);
      expect(telegram._polling.stop).toHaveBeenCalledWith(options);
    });
  });
});
