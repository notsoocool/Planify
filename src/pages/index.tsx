import React from "react";
import Head from "next/head";
import Header from "./Header";
import Landing from "./landing/Landing";


export default function Home() {
  
  return (
    <div className="bg-white dark:bg-gray-900 w-full h-full transition-colors duration-500">
      <Head>
        <title>Planify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Landing/>
    </div>
  );
}
