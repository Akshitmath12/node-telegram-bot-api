// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=0d6bf8ddeb
ROOST_METHOD_SIG_HASH=1d1c6e321a


*/

// ********RoostGPT********
const Telegram = require('./telegram.js');
const telegram = new Telegram();

describe('Testing sendMediaGroup function', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should correctly send media group', async () => {
    const mockRequest = jest.spyOn(telegram, '_request').mockImplementation(() => Promise.resolve({ ok: true }));
    const mockFormatSendData = jest.spyOn(telegram, '_formatSendData').mockImplementation(() => [null, 'fileId']);

    const chatId = 123;
    const media = [
      {
        media: 'test.jpg',
        fileOptions: {}
      }
    ];
    const options = {};

    await telegram.sendMediaGroup(chatId, media, options);

    expect(mockRequest).toHaveBeenCalledWith('sendMediaGroup', expect.objectContaining({
      qs: {
        chat_id: chatId,
        media: expect.any(String)
      },
      formData: {}
    }));

    expect(mockFormatSendData).toHaveBeenCalledWith('0', 'test.jpg', {});
  });

  test('should handle error when formatting data', async () => {
    const mockFormatSendData = jest.spyOn(telegram, '_formatSendData').mockImplementation(() => { throw new Error('Format Error'); });

    const chatId = 123;
    const media = [
      {
        media: 'test.jpg',
        fileOptions: {}
      }
    ];
    const options = {};

    try {
      await telegram.sendMediaGroup(chatId, media, options);
    } catch (ex) {
      expect(ex).toEqual(new Error('Format Error'));
    }

    expect(mockFormatSendData).toHaveBeenCalledWith('0', 'test.jpg', {});
  });
});