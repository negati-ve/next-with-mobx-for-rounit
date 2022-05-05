//import { useState } from 'react';
import React, { useContext } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import { observer } from "mobx-react";
import store from "./store";
import { CounterStoreContext } from "./store";

const Counter = observer(() => {
  const counterStore = useContext(CounterStoreContext);

  return (
    <div className={styles.counter}>
      <div className={styles.button} onClick={() => counterStore.decrement()}>
        -
      </div>
      <div className={styles.count}>{counterStore.counter}</div>
      <div className={styles.button} onClick={() => counterStore.increment()}>
        +
      </div>
      <div
        className={`${styles.button} ${styles.resetButton}`}
        onClick={() => counterStore.reset()}
      >
        Reset
      </div>
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

      <Counter />
    </div>
  );
};

export default Home;