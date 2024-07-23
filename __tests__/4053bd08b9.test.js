// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=c0e5605f41
ROOST_METHOD_SIG_HASH=4053bd08b9


*/

// ********RoostGPT********
const Telegram = require('./telegram');

describe('Telegram Module', () => {
  let telegram;

  beforeAll(() => {
    telegram = new Telegram();
  });

  test('should delete commands successfully', () => {
    const form = { command: 'test' };

    const mockRequest = jest.spyOn(telegram, '_request').mockImplementation(() => Promise.resolve(true));
    return telegram.deleteMyCommands(form).then((response) => {
      expect(response).toBe(true);
      expect(mockRequest).toHaveBeenCalledWith('deleteMyCommands', { form });
    });
  });

  test('should throw error when request fails', () => {
    const form = { command: 'test' };

    const mockRequest = jest.spyOn(telegram, '_request').mockImplementation(() => Promise.reject(new Error('Request failed')));
    return telegram.deleteMyCommands(form).catch((error) => {
      expect(error).toEqual(new Error('Request failed'));
      expect(mockRequest).toHaveBeenCalledWith('deleteMyCommands', { form });
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});