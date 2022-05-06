import React from 'react';
import { MobXProviderContext } from "mobx-react";
import DataStore from './DataStore'
import CounterStore from './CounterStore'
let store = null;
export const initializeStore = (initialData = {}) => {
    if (store === null) {
        let dataStore = new DataStore(initialData);
        let counterStore = new CounterStore(initialData);
        store = {
            dataStore: dataStore,
            counterStore: counterStore
        };
    }
    return store;
};
export const useStore = () => {
    return React.useContext(MobXProviderContext);
};