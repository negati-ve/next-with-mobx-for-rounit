import { action, makeObservable, observable } from "mobx";
import { createContext } from "react";

class CounterStore {
    counter = 0;

    constructor() {
        makeObservable(this, {
            counter: observable,
            increment: action,
            decrement: action,
            reset: action,
        });
    }

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

export default CounterStore;