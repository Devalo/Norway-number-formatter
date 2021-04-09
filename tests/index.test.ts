import norFormatter from '../src/index';

describe('phone numbers', () => {
  test('may pass phone number as an argument', () => {
    norFormatter(95414221, 'phone_number');
  });
  
  test('formats number to string', () => {
    const formatToString = norFormatter(99999999, 'phone_number');
    expect(typeof formatToString).toBe(typeof 'string');
  });
  test('errors out if number is not the length of 8', () => {
    expect(() => norFormatter('99999', 'phone_number')).toThrowError();
    
  });
  
  test('formats mobile numbers as: 000 00 000', () => {
    const formattedNumberWith9 = norFormatter(99999999, 'phone_number');
    const formattednumberWith4 = norFormatter(44444444, 'phone_number');
    const formattedWeirdEntry = norFormatter('99 999 999x', 'phone_number');
    const formattedWithSplits = norFormatter('9 9 9 9 9 9 9 9', 'phone_number');
    
    expect(formattedNumberWith9).toEqual('999 99 999');
    expect(formattednumberWith4).toEqual('444 44 444');
    expect(formattedWeirdEntry).toEqual('999 99 999');
    expect(formattedWithSplits).toEqual('999 99 999');
  });
  
  test('formats landline numbers as: 00 00 00 00', () => {
    const formatted = norFormatter(22222222, 'phone_number');
    const formattedWithString = norFormatter('22222222', 'phone_number');
    const formattedWeirdEntry = norFormatter('  222   22 2 2 2 xXx', 'phone_number');
    
    expect(formatted).toEqual('22 22 22 22');
    expect(formattedWeirdEntry).toEqual('22 22 22 22');
    expect(formattedWithString).toEqual('22 22 22 22');
  });
});

describe('bank account numbers', () => {
  test('formats number to string', () => {
    const result = norFormatter(11112233334, 'bank_account');
    expect (typeof result).toBe(typeof 'string');
  });
  
  test('Errors out if length is not 11', () => {
    expect(() => norFormatter('1111', 'bank_account')).toThrowError();
    expect(() => norFormatter('111122333344', 'bank_account')).toThrowError();
  });
  
  test('formats account number as: 1111 22 33334', () => {
    const formatAsWholeNum = norFormatter('11112233334', 'bank_account');
    const formatWeirdEntry = norFormatter('1 1xx 1 1 2     2 3 3 3 3 4', 'bank_account');
    
    expect(formatAsWholeNum).toEqual('1111 22 33334');
    expect(formatWeirdEntry).toEqual('1111 22 33334');
    
  });
});

describe('Social security number', () => {
  test('formats number to string', () => {
    const result = norFormatter(11111122222, 'social_sec_number');
    expect(typeof result).toBe(typeof 'string');
  });
  
  test('Erors out if length is not 11', () => {
    expect(() => norFormatter('1111', 'social_sec_number')).toThrowError();
    expect(() => norFormatter('111122333344', 'social_sec_number')).toThrowError();
  });
  
  test('Formats social security number as: 111111 22222', () => {
    const formatAsWholeNum = norFormatter('11111122222', 'social_sec_number');
    const formatWeirdEntry = norFormatter('1 1xx 1 1 1     1 2 2 2 2 2', 'social_sec_number');
    
    expect(formatAsWholeNum).toEqual('111111 22222');
    expect(formatWeirdEntry).toEqual('111111 22222');
  });
});