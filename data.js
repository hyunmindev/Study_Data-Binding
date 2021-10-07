class Data {
  #value;
  #listeners = [];

  constructor(value) {
    this.#value = value;
  }

  subscribe(listener) {
    this.#listeners.push(listener);
  }

  #notify() {
    this.#listeners.forEach(listener => listener(this.value));
  }

  get value() {
    return this.#value;
  }

  set value(newValue) {
    this.#value = newValue;
    this.#notify();
  }
}
