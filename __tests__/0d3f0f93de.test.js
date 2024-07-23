// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=7d7c42d3ba
ROOST_METHOD_SIG_HASH=0d3f0f93de


*/

// ********RoostGPT********
const Telegram = require('./telegram');

describe('Telegram', () => {
  let telegram;

  beforeEach(() => {
    telegram = new Telegram();
  });

  afterEach(() => {
    telegram = null;
  });

  test('should clear reply listeners', () => {
    telegram._replyListeners = ['listener1', 'listener2', 'listener3'];
    telegram.clearReplyListeners();
    expect(telegram._replyListeners).toEqual([]);
  });

  test('should not throw error when reply listeners is already empty', () => {
    telegram._replyListeners = [];
    expect(() => telegram.clearReplyListeners()).not.toThrow();
  });
});