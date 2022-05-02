import { observable } from "mobx";

class CounterStore {
  @observable counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }
}

export default new CounterStore();
