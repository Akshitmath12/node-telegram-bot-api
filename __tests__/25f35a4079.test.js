// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=5387d2293c
ROOST_METHOD_SIG_HASH=25f35a4079


*/

// ********RoostGPT********
const Telegram = require('./telegram');

describe('Telegram', () => {
  let telegram;

  beforeEach(() => {
    telegram = new Telegram();
  });

  describe('editMessageCaption', () => {
    test('should edit message caption', async () => {
      const form = { chat_id: 1, message_id: 1 };
      const caption = 'new caption';

      telegram._request = jest.fn().mockResolvedValue({ ok: true });

      const result = await telegram.editMessageCaption(caption, form);

      expect(telegram._request).toHaveBeenCalledWith('editMessageCaption', { form: { ...form, caption } });
      expect(result).toEqual({ ok: true });
    });

    test('should throw an error when request fails', async () => {
      const form = { chat_id: 1, message_id: 1 };
      const caption = 'new caption';

      telegram._request = jest.fn().mockRejectedValue(new Error('Network error'));

      await expect(telegram.editMessageCaption(caption, form)).rejects.toThrow('Network error');
    });
  });
});