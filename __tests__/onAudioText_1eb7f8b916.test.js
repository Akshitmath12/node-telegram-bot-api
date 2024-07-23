// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=onAudioText_4b179486f6
ROOST_METHOD_SIG_HASH=onAudioText_1eb7f8b916


*/

// ********RoostGPT********
const request = require('request');
const bot = require('./polling');

jest.mock('request');
jest.mock('./polling');

describe("Test audio function", () => {
  let msg;

  beforeEach(() => {
    msg = {
      chat: {
        id: 1
      }
    };
    request.mockClear();
    bot.sendAudio.mockClear();
  });

  test("should send audio", () => {
    request.mockReturnValue('audio');
    bot.onText(/\/audio/, function onAudioText(msg) {
      const url = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg';
      const audio = request(url);
      bot.sendAudio(msg.chat.id, audio);
    });
    bot.emit('text', '/audio', msg);
    expect(request).toHaveBeenCalledWith('https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg');
    expect(bot.sendAudio).toHaveBeenCalledWith(msg.chat.id, 'audio');
  });

  test("should not send audio if message is not /audio", () => {
    bot.onText(/\/audio/, function onAudioText(msg) {
      const url = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg';
      const audio = request(url);
      bot.sendAudio(msg.chat.id, audio);
    });
    bot.emit('text', '/video', msg);
    expect(request).not.toHaveBeenCalled();
    expect(bot.sendAudio).not.toHaveBeenCalled();
  });
});
