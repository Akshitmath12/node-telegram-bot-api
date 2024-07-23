// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=49ebbf906f
ROOST_METHOD_SIG_HASH=d90b350d47


*/

// ********RoostGPT********
// Importing the required dependencies
const Telegram = require('./telegram');
const { stringify } = require('querystring');

describe('Telegram setMyCommands method', () => {
  let telegram;
  let commands;
  let form;
  
  beforeEach(() => {
    telegram = new Telegram();
    commands = [{ command: '/start', description: 'Start command' }];
    form = {};
  });

  test('should set commands successfully', async () => {
    const _request = jest.fn().mockResolvedValue(true);
    telegram._request = _request;

    const response = await telegram.setMyCommands(commands, form);

    expect(_request).toHaveBeenCalledWith('setMyCommands', {
      form: {
        commands: stringify(commands)
      }
    });
    expect(response).toBe(true);
  });

  test('should set commands with scope successfully', async () => {
    const _request = jest.fn().mockResolvedValue(true);
    telegram._request = _request;
    form.scope = { type: 'all_chat_administrators' };

    const response = await telegram.setMyCommands(commands, form);

    expect(_request).toHaveBeenCalledWith('setMyCommands', {
      form: {
        commands: stringify(commands),
        scope: stringify(form.scope)
      }
    });
    expect(response).toBe(true);
  });

  test('should handle error', async () => {
    const _request = jest.fn().mockRejectedValue(new Error('Request failed'));
    telegram._request = _request;

    try {
      await telegram.setMyCommands(commands, form);
    } catch (error) {
      expect(error).toEqual(new Error('Request failed'));
    }
    expect(_request).toHaveBeenCalledWith('setMyCommands', {
      form: {
        commands: stringify(commands)
      }
    });
  });
});
