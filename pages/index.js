//import { useState } from 'react';
import React, { useContext } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import { observer } from "mobx-react";
import store1 from "./stores/store1";
import { DataContext } from "./stores/store1";

const Data = observer(() => {
  const dataStore = useContext(DataContext);

  return (
    <div className={styles.counter}>
      {console.log(dataStore.getData())}
      {/* <div className={styles.button} onClick={() => counterStore.decrement()}>
        -
      </div> */}

      {/* <div className={styles.count}>{dataStore.data}</div> */}
      {/* <div className={styles.button} onClick={() => counterStore.increment()}>
        +
      </div> */}
      {/* <div
        className={`${styles.button} ${styles.resetButton}`}
        onClick={() => counterStore.reset()}
      >
        Reset
      </div> */}
    </div>
  );
});

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Data />
    </div>
  );
};

export default Home;
