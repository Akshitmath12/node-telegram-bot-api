// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=0f76d74e34
ROOST_METHOD_SIG_HASH=7a8d91f4fc


*/

// ********RoostGPT********
const Telegram = require('./telegram');

describe('Telegram', () => {
  let telegram;

  beforeEach(() => {
    telegram = new Telegram();
  });

  describe('exportChatInviteLink', () => {
    test('should return a link when given a valid chatId', async () => {
      const chatId = '12345';
      const form = {};

      const response = await telegram.exportChatInviteLink(chatId, form);

      expect(response).toBeDefined();
      expect(response).toMatch(/https:\/\/t\.me\/joinchat\/[A-Za-z0-9]+/);
    });

    test('should throw an error when given an invalid chatId', async () => {
      const chatId = 'invalid';
      const form = {};

      await expect(telegram.exportChatInviteLink(chatId, form)).rejects.toThrow();
    });
  });
});
