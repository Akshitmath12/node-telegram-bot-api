// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=37bf293894
ROOST_METHOD_SIG_HASH=4f27881b18


*/

// ********RoostGPT********
const TelegramBot = require('../src/telegram');
const EventEmitter = require('events');

describe('TelegramBot', () => {
  let bot;

  beforeEach(() => {
    bot = new TelegramBot();
  });

  test('should call super.on with the correct parameters', () => {
    const spy = jest.spyOn(EventEmitter.prototype, 'on');
    const event = 'message';
    const listener = () => {};
  
    bot.on(event, listener);

    expect(spy).toHaveBeenCalledWith(event, listener);
    spy.mockRestore();
  });

  test('should call deprecate function when deprecated event is passed', () => {
    const spy = jest.spyOn(global.console, 'warn');
    const event = 'text';
    const listener = () => {};
  
    bot.on(event, listener);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
