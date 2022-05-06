//import { useState } from 'react';
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import { observer } from "mobx-react";
import { useStore } from "../stores/";

const Data = observer(() => {
  const { store } = useStore();
  const dataStore = store.dataStore
  useEffect(() => {
    dataStore.fetchDataFromServer();
  })
  return (
    <div className={styles.counter}>
      {dataStore.data.id}
    </div>
  );
});

const Home = () => {
  return (
    <div>
      <Data />
    </div >
  );
};

export default Home;
