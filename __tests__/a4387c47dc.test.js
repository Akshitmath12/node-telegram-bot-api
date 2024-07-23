// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=778d9178ac
ROOST_METHOD_SIG_HASH=a4387c47dc


*/

// ********RoostGPT********
const Telegram = require('./telegram');

describe('Telegram', () => {
  let telegram;

  beforeEach(() => {
    telegram = new Telegram();
    telegram._request = jest.fn();
  });

  test('sendLocation should set chat_id, latitude, and longitude in form', () => {
    const chatId = 12345;
    const latitude = 37.7749;
    const longitude = 122.4194;
    const form = {};

    telegram.sendLocation(chatId, latitude, longitude, form);

    expect(form).toEqual({
      chat_id: chatId,
      latitude: latitude,
      longitude: longitude
    });
    expect(telegram._request).toHaveBeenCalledWith('sendLocation', { form });
  });

  test('sendLocation should throw error if chatId, latitude or longitude is not provided', () => {
    expect(() => {
      telegram.sendLocation();
    }).toThrow();
  });
});