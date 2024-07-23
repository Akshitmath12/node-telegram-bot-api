// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=cae1656ae8
ROOST_METHOD_SIG_HASH=0d59192efe


*/

// ********RoostGPT********
const Telegram = require('./telegram');
const stream = require('stream');

describe('Telegram', () => {
  let telegram;

  beforeEach(() => {
    telegram = new Telegram();
  });

  describe('setWebHook', () => {
    test('should set webhook with url and options', async () => {
      const url = 'https://example.com';
      const options = {};
      const fileOptions = {};

      const _request = jest.spyOn(telegram, '_request');
      const _formatSendData = jest.spyOn(telegram, '_formatSendData');

      await telegram.setWebHook(url, options, fileOptions);

      expect(_request).toHaveBeenCalledWith('setWebHook', {
        qs: { url },
      });
      expect(_formatSendData).not.toHaveBeenCalled();
    });

    test('should set webhook with url, options and certificate', async () => {
      const url = 'https://example.com';
      const options = { certificate: 'cert' };
      const fileOptions = {};

      const _request = jest.spyOn(telegram, '_request');
      const _formatSendData = jest.spyOn(telegram, '_formatSendData');

      _formatSendData.mockReturnValueOnce(['sendData', 'cert']);

      await telegram.setWebHook(url, options, fileOptions);

      expect(_request).toHaveBeenCalledWith('setWebHook', {
        qs: { url, certificate: 'cert' },
        formData: 'sendData',
      });
      expect(_formatSendData).toHaveBeenCalledWith('certificate', 'cert', fileOptions);
    });

    test('should throw error when certificate processing fails', async () => {
      const url = 'https://example.com';
      const options = { certificate: 'cert' };
      const fileOptions = {};
      const error = new Error('Processing error');

      const _formatSendData = jest.spyOn(telegram, '_formatSendData');

      _formatSendData.mockImplementationOnce(() => {
        throw error;
      });

      await expect(telegram.setWebHook(url, options, fileOptions)).rejects.toThrow(error);
    });

    test('should deprecate when options is a Stream', async () => {
      const url = 'https://example.com';
      const options = new stream.Stream();
      const fileOptions = {};

      const deprecate = jest.spyOn(global.console, 'warn');

      await telegram.setWebHook(url, options, fileOptions);

      expect(deprecate).toHaveBeenCalledWith('The method signature setWebHook(url, cert) has been deprecated since v0.25.0');
    });
  });
});
