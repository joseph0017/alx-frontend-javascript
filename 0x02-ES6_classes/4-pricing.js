import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be an instacne of Currency class');
    }
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    const store = `${this._amount} ${this._currency.name} (${this._currency.code})`;
    return store;
  }

  static convertPrice(amount, conversionRate) {
    const convert = amount * conversionRate;
    return convert;
  }

  get amount() {
    return this._amount;
  }

  set amount(a) {
    this._amount = a;
  }

  get currency() {
    return this._currency;
  }

  set currency(a) {
    this._currency = a;
  }
}
