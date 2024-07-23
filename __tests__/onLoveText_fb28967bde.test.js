// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=onLoveText_1c32f744a2
ROOST_METHOD_SIG_HASH=onLoveText_fb28967bde


*/

// ********RoostGPT********
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('TOKEN', {polling: true});

jest.mock('node-telegram-bot-api');

describe('Telegram Bot onText /love command', () => {
  let msg;
  let opts;

  beforeEach(() => {
    msg = {
      message_id: 123,
      chat: { id: 1 }
    };

    opts = {
      reply_to_message_id: msg.message_id,
      reply_markup: JSON.stringify({
        keyboard: [['Yes, you are the bot of my life ❤'], ['No, sorry there is another one...']]
      })
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should trigger on /love command', () => {
    bot.onText(/\/love/, jest.fn());
    expect(bot.onText).toHaveBeenCalledWith(/\/love/, expect.any(Function));
  });

  test('should send correct message and options on /love command', () => {
    bot.onText(/\/love/, function onLoveText(msg) {
      bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
    });

    bot.onText.mock.calls[0][1](msg);
    expect(bot.sendMessage).toHaveBeenCalledWith(msg.chat.id, 'Do you love me?', opts);
  });
});
