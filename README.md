# Norway Number Formatter

  ## Description
  Small helper library for formatting norwegian phone numbers, bank account numbers and social security numbers.
  
  ## Installation
  `npm install norway-number-formatter`
  
  `import norFormatter from 'norway-number-formatter';`
  or
  `const norFormatter = require('norway-number-formatter');`
  
  ## Usage
  
  ### Format phone numbers
  Mobile:
  <br>
  `const mobileNumber = norFormatter('9999999', 'phone_number');`
  <br>
  `console.log(mobileNumber);` // 999 99 999;
  Landline
  <br>
  `const landline = norFormatter('33333333', 'phone_number');`
  <br>
  `console.log(landline);` // 33 33 33 33;
  
  ### Format bank account numbers
  `const bankAccount = norFormatter('11112233334', 'phone_number');`
  <br>
  `console.log(bankAccount);` // 1111 22 33334;

  ### Format social security numbers
  `const socialSecNum = norFormatter('11111122222', 'social_sec_number');`
  <br>
  `console.log(socialSecNum);` // 111111 22222;