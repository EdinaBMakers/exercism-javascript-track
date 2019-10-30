export class PhoneNumber {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  number() {
    const digits = this.phoneNumber.match(/\d/g).join('');
    
    return digits.match(/^1?[2-9][0-9]{2}[2-9][0-9]{6}$/g) === null
            ? null
            : digits.substring(digits.length - 10);
  }
}
