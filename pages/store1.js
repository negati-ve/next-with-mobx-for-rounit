import { action, makeObservable, observable } from "mobx";
import { createContext } from "react";

class Data {
  data = {};

  constructor() {
    makeObservable(this, {
      data: observable,
      getData: action,
    });
  }

  getData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then(function (json) {
        for (let i = 0; i < json.length; i++) {
          let num = Math.floor(Math.random() * 200);
          data = Object.assign(json[num]);
        }
      });
  }
}
