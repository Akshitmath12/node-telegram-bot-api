// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=81515c9777
ROOST_METHOD_SIG_HASH=b352346e8d


*/

// ********RoostGPT********
const Telegram = require('./telegram');

describe('Telegram', () => {
  let telegram;

  beforeAll(() => {
    telegram = new Telegram();
  });

  test('forwardMessage should correctly forward the message', async () => {
    const chatId = '123456';
    const fromChatId = '654321';
    const messageId = '999999';
    const form = {};

    const response = await telegram.forwardMessage(chatId, fromChatId, messageId, form);

    expect(response).toBeDefined();
    expect(form).toEqual({
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_id: messageId
    });
  });

  test('forwardMessage should throw an error if chatId is not provided', async () => {
    const fromChatId = '654321';
    const messageId = '999999';
    const form = {};

    await expect(telegram.forwardMessage(undefined, fromChatId, messageId, form)).rejects.toThrow();
  });

  test('forwardMessage should throw an error if fromChatId is not provided', async () => {
    const chatId = '123456';
    const messageId = '999999';
    const form = {};

    await expect(telegram.forwardMessage(chatId, undefined, messageId, form)).rejects.toThrow();
  });

  test('forwardMessage should throw an error if messageId is not provided', async () => {
    const chatId = '123456';
    const fromChatId = '654321';
    const form = {};

    await expect(telegram.forwardMessage(chatId, fromChatId, undefined, form)).rejects.toThrow();
  });
});
