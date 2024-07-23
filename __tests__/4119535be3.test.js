// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=904e5cc39f
ROOST_METHOD_SIG_HASH=4119535be3


*/

// ********RoostGPT********
// Importing required modules
const Telegram = require('./telegram');

// Creating instance of Telegram class
const telegram = new Telegram();

describe('setChatTitle method', () => {
  
  // Setting up necessary preconditions
  let chatId, title, form;
  beforeEach(() => {
    chatId = 12345;
    title = "Test Title";
    form = {};
  });

  // Test case 1: Check if setChatTitle method is defined
  test('setChatTitle method is defined', () => {
    expect(telegram.setChatTitle).toBeDefined();
  });

  // Test case 2: Check if setChatTitle method is called with correct parameters
  test('setChatTitle method is called with correct parameters', () => {
    const spy = jest.spyOn(telegram, 'setChatTitle');
    telegram.setChatTitle(chatId, title, form);
    expect(spy).toHaveBeenCalledWith(chatId, title, form);
  });

  // Test case 3: Check if setChatTitle method modifies the form object correctly
  test('setChatTitle method modifies the form object correctly', () => {
    telegram.setChatTitle(chatId, title, form);
    expect(form.chat_id).toBe(chatId);
    expect(form.title).toBe(title);
  });

  // Test case 4: Check if setChatTitle method calls _request method with correct parameters
  test('_request method is called with correct parameters', () => {
    const spy = jest.spyOn(telegram, '_request');
    telegram.setChatTitle(chatId, title, form);
    expect(spy).toHaveBeenCalledWith('setChatTitle', { form });
  });

});
