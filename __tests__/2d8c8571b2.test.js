// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTest using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=8a7d81b3e6
ROOST_METHOD_SIG_HASH=2d8c8571b2


*/

// ********RoostGPT********
// Import the necessary modules
const Telegram = require('./telegram');

// Initialize the Telegram class
const telegram = new Telegram();

// Test suite for getMyShortDescription method
describe('getMyShortDescription', () => {

  // Set up necessary preconditions
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test case for a successful request
  test('should return a short description successfully', async () => {
    const form = { description: 'Short description' };
    telegram._request = jest.fn().mockResolvedValue(form);

    const result = await telegram.getMyShortDescription(form);
    expect(result).toBe(form);
    expect(telegram._request).toHaveBeenCalledWith('getMyShortDescription', { form });
  });

  // Test case for a failed request
  test('should throw an error if request fails', async () => {
    const error = new Error('Request failed');
    telegram._request = jest.fn().mockRejectedValue(error);

    await expect(telegram.getMyShortDescription()).rejects.toThrow('Request failed');
    expect(telegram._request).toHaveBeenCalledWith('getMyShortDescription', { form: {} });
  });

  // Test case for an empty form
  test('should return an empty object if form is empty', async () => {
    const form = {};
    telegram._request = jest.fn().mockResolvedValue(form);

    const result = await telegram.getMyShortDescription();
    expect(result).toEqual(form);
    expect(telegram._request).toHaveBeenCalledWith('getMyShortDescription', { form });
  });
});