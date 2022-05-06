import '../styles/globals.css'
import { Provider } from "mobx-react";
import App from "next/app";
import React from "react";
import {
  initializeStore,
} from "../stores/";
import Head from "next/head";

export function reportWebVitals(metric) {
  console.log(metric);
}
export default class MyApp extends App {

  constructor(props) {
    super(props);
    const isServer = typeof window === "undefined";
    this.mobxStore = initializeStore(props.initialMobxState);
  }

  componentDidMount() {
    if (process.env.NODE_ENV == "production")
      TagManager.initialize(tagManagerArgs);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={this.mobxStore}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
