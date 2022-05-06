import { action, makeObservable, observable } from "mobx";
import { toJS } from "mobx";
import axios from "axios";

class DataStore {
    data = { id: 1 };

    constructor() {
        makeObservable(this, {
            data: observable,
            fetchDataFromServer: action,
        });
    }
    async fetchDataFromServer() {
        // get data from server
        // use setData action to set the data
        this.setData({ id: 5 })
    }

    async setData(_data) {
        this.data = _data
    }

}

export default DataStore;