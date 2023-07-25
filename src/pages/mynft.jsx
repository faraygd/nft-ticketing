import Head from "next/head";
import React from "react";
import { HeaderApps } from "../components/apps/HeaderApps";
import Gallery from "../components/mynft/Gallery";

const MyNFT = () => {
  return (
    <>
      <Head>
        <title>My Ticket</title>
        <meta name="description" content="NFTicketing Experiment Using ThirdWeb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderApps/>
        <Gallery/>
      </main>
    </>
  );
};

export default MyNFT;
