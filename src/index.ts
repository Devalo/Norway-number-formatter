import { TInputTypes } from './types';

const cleanup = (number: string) => {
  return ('' + number).replace(/\D/g, '');
}

const phoneNumber = (phoneNumber: string): string => {
  const cleanedNumber = cleanup(phoneNumber);

  if (cleanedNumber.length !== 8) throw new Error('Phone number must be 8 digits');

  if (cleanedNumber[0] === '9' || cleanedNumber[0] === '4') {
    const match = cleanedNumber.match(/^(\d{3})(\d{2})(\d{3})$/);
    if (match) {
      const formatMobileNumber = `${match[1]} ${match[2]} ${match[3]}`;
      return formatMobileNumber;
    }
  } else {
    const match = cleanedNumber.match(/^(\d{2})(\d{2})(\d{2})(\d{2})$/);

    if (match) {
      const formatLandlineNumber = `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
      return formatLandlineNumber;
    }

  }
  throw new Error('No matches for phone number');
};

const bankAccount = (accountNumber: string): string => {
  const cleanedNumber = cleanup(accountNumber);

  if (cleanedNumber.length !== 11) throw new Error('Length of account number must be 11 digits');
  
  const match = cleanedNumber.match(/^(\d{4})(\d{2})(\d{5})$/);
  
  if (match) {
    const formatAccountNumber = `${match[1]} ${match[2]} ${match[3]}`;
    return formatAccountNumber;
  }
  throw new Error('No matches for account number');
};

const socialSecNumber = (socialSecurityNumber: string): string => {
  const cleanedNumber = cleanup(socialSecurityNumber);
  if (cleanedNumber.length !== 11) throw new Error('Length of social security number must be 11 digits'); 
  
  const match = cleanedNumber.match(/^(\d{6})(\d{5})$/);
  
  if (match) {
    const formatSocialSecNumber = `${match[1]} ${match[2]}`;
    return formatSocialSecNumber;
  }
  
  throw new Error('No matches for social security number');
}

const norFormatter = (number: number | string, type: TInputTypes) => {
  switch (type) {
    case 'phone_number':
      return phoneNumber(String(number));
    case 'bank_account':
      return bankAccount(String(number));
    case 'social_sec_number':
      return socialSecNumber(String(number));
    default:
      throw new Error('must be phone_number, bank_account or social_sec_number');
  }
}

export default norFormatter;
