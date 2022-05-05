import { action, makeObservable, observable } from "mobx";
import axios from "axios";
import { createContext } from "react";

class Data {
  data = {};

  constructor() {
    makeObservable(this, {
      data: observable,
      getData: action,
    });
  }

  async getData() {
    const res = await axios("https://jsonplaceholder.typicode.com/todos");
    const obj = res.json();
    for (let i = 0; i < obj.length; i++) {
      let num = Math.floor(Math.random() * 200);
      data = Object.assign({}, obj[num]);
    }
  }
}

export const DataContext = createContext(new Data());

// axios.get('https://jsonplaceholder.typicode.com/todos')
//   .then(function (json) {
//     for (let i = 0; i < json.length; i++) {
//       let num = Math.floor(Math.random() * 200);
//       data = Object.assign({}, json[num]);
//     }
//   });