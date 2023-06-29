export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    const store = `${this._name} (${this._code})`;
    return store;
  }

  get code() {
    return this._code;
  }

  set code(a) {
    this._code = a;
  }

  get name() {
    return this._name;
  }

  set name(a) {
    this._name = a;
  }
}
