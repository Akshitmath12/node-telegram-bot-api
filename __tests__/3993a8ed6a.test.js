// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=efc78f5876
ROOST_METHOD_SIG_HASH=3993a8ed6a


*/

// ********RoostGPT********
const Telegram = require('./telegram');

describe('Telegram editMessageMedia', () => {
  let telegram;
  
  beforeAll(() => {
    telegram = new Telegram();
    telegram._request = jest.fn();
    telegram._formatSendData = jest.fn();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should handle media with attach string correctly', () => {
    const media = {
      media: 'attach://sample',
      fileOptions: 'options',
      type: 'photo'
    };
    const form = {};

    telegram._formatSendData.mockReturnValue([{0: 'sampleData'}]);

    telegram.editMessageMedia(media, form);

    expect(telegram._formatSendData).toHaveBeenCalledWith('0', 'sample', 'options');
    expect(telegram._request).toHaveBeenCalledWith('editMessageMedia', {
      qs: form,
      formData: {'0': 'sampleData'}
    });
  });

  test('should throw error if formatSendData returns no formData', () => {
    const media = {
      media: 'attach://sample',
      fileOptions: 'options',
      type: 'photo'
    };
    const form = {};

    telegram._formatSendData.mockReturnValue([{}]);

    expect(() => telegram.editMessageMedia(media, form)).toThrow('Failed to process the replacement action for your photo');
  });

  test('should handle media without attach string correctly', () => {
    const media = {
      media: 'sample',
      fileOptions: 'options',
      type: 'photo'
    };
    const form = {};

    telegram.editMessageMedia(media, form);

    expect(telegram._request).toHaveBeenCalledWith('editMessageMedia', {
      form: {
        media: '{"media":"sample","fileOptions":"options","type":"photo"}'
      }
    });
  });
});