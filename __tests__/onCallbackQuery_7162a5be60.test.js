// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=onCallbackQuery_fb422e7f52
ROOST_METHOD_SIG_HASH=onCallbackQuery_7162a5be60


*/

// ********RoostGPT********
const bot = require('./polling');

describe('callback_query', () => {
  let callbackQuery;
  let opts;

  beforeEach(() => {
    callbackQuery = {
      data: 'edit',
      message: {
        chat: { id: 1 },
        message_id: 1
      }
    };
    opts = {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id
    };
    bot.editMessageText = jest.fn();
  });

  test('should edit message text when action is edit', () => {
    bot.emit('callback_query', callbackQuery);
    expect(bot.editMessageText).toHaveBeenCalledWith('Edited Text', opts);
  });

  test('should not edit message text when action is not edit', () => {
    callbackQuery.data = 'not_edit';
    bot.emit('callback_query', callbackQuery);
    expect(bot.editMessageText).not.toHaveBeenCalled();
  });
});
