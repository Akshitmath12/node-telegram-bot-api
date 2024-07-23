// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=0216b20e25
ROOST_METHOD_SIG_HASH=d7b666e3e7


*/

// ********RoostGPT********
const Telegram = require('./telegram');

describe('unpinAllChatMessages', () => {
  let telegram;
  let chatId;
  let form;

  beforeEach(() => {
    telegram = new Telegram();
    chatId = '1234567890';
    form = {};
  });

  test('should unpin all chat messages', async () => {
    const response = await telegram.unpinAllChatMessages(chatId, form);
    expect(response).toBeTruthy();
    expect(form.chat_id).toBe(chatId);
  });

  test('should fail to unpin all chat messages if chatId is not provided', async () => {
    chatId = '';
    await expect(telegram.unpinAllChatMessages(chatId, form)).rejects.toThrow();
  });
});
