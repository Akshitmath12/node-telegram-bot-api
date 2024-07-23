// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=onPhotoText_5740b032df
ROOST_METHOD_SIG_HASH=onPhotoText_33b37a803e


*/

// ********RoostGPT********
const { bot } = require('../examples/game/game');
jest.mock('../examples/game/game');

describe('Bot onText function', () => {
  let msg;

  beforeAll(() => {
    msg = {
      chat: {
        id: 12345,
      },
    };
  });

  afterEach(() => {
    bot.sendGame.mockClear();
  });

  test('Should call sendGame on /start command', () => {
    bot.onText(/\/start/, msg);
    expect(bot.sendGame).toHaveBeenCalledWith(msg.chat.id, expect.anything());
  });

  test('Should not call sendGame on other command', () => {
    bot.onText(/\/other/, msg);
    expect(bot.sendGame).not.toHaveBeenCalled();
  });
});
