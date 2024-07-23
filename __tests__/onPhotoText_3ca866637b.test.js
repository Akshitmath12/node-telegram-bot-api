// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=onPhotoText_862f020116
ROOST_METHOD_SIG_HASH=onPhotoText_3ca866637b


*/

// ********RoostGPT********
const TelegramBot = require('node-telegram-bot-api');
const path = require('path');
const bot = new TelegramBot('YOUR_TELEGRAM_BOT_TOKEN', {polling: true});

// Mock the bot.sendPhoto method
bot.sendPhoto = jest.fn();

const onPhotoText = require('../examples/polling');

describe('onPhotoText function', () => {
  beforeEach(() => {
    bot.sendPhoto.mockClear();
  });

  test('should send photo correctly', () => {
    const msg = {
      chat: {
        id: 1
      }
    };

    onPhotoText(msg);
    
    const photo = path.join(__dirname, '../test/data/photo.gif');
    expect(bot.sendPhoto).toHaveBeenCalledWith(msg.chat.id, photo, {
      caption: "I'm a bot!"
    });
  });

  test('should handle error correctly when send photo fails', () => {
    bot.sendPhoto.mockImplementation(() => {
      throw new Error('Failed to send photo');
    });

    const msg = {
      chat: {
        id: 1
      }
    };

    expect(() => onPhotoText(msg)).toThrow('Failed to send photo');
  });
});