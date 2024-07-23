// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=eb9bff1d05
ROOST_METHOD_SIG_HASH=49b4d11349


*/

// ********RoostGPT********
const Telegram = require('../src/telegram');
const axios = require('axios');

jest.mock('axios');

describe('sendPoll method', () => {
  let telegram;

  beforeEach(() => {
    telegram = new Telegram();
  });

  test('should send poll', async () => {
    const response = { data: { ok: true } };
    axios.post.mockResolvedValue(response);

    const chatId = 12345;
    const question = 'Test Question';
    const pollOptions = ['option1', 'option2'];

    const result = await telegram.sendPoll(chatId, question, pollOptions);

    expect(axios.post).toHaveBeenCalledWith('https://api.telegram.org/bot/sendPoll', {
      chat_id: chatId,
      question,
      options: JSON.stringify(pollOptions),
    });
    expect(result).toEqual(response.data);
  });

  test('should throw error if request fails', async () => {
    const error = new Error('Request failed');
    axios.post.mockRejectedValue(error);

    const chatId = 12345;
    const question = 'Test Question';
    const pollOptions = ['option1', 'option2'];

    await expect(telegram.sendPoll(chatId, question, pollOptions)).rejects.toThrow('Request failed');
  });
});
