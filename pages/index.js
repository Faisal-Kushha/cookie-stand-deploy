import Head from "next/head";
import { useState } from "react";
import React from "react";

export default function Home() {
  const [data, setData] = React.useState();
  function dataHandler(event) {
    event.preventDefault();
    const newData = {
      location: event.target.location.value,
      minCustomers: event.target.min.value,
      maxCustomers: event.target.max.value,
      Average: event.target.average.value,
    };
    setData(newData);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-green-50 ">
        <Header />
        <Form onSubmit={dataHandler} />
        <Display data={data} />
        <Footer copyright="2021" />
      </main>
    </div>
  );
  function Header() {
    return (
      <header className="p-6 bg-green-500 ">
        <h1 className="text-5xl">Cookie Stand Admin </h1>
      </header>
    );
  }
  function Form(props) {
    return (
      <form
        onSubmit={props.onSubmit}
        className="flex-col w-4/6 p-2 mx-auto my-8 bg-green-300 rounded-md"
      >
        <fieldset>
          <h1 className="my-3 text-2xl text-center font-sans" type="text">
            Create Cookie Stand
          </h1>
          <div className="flex w-100 font-weight: 500">
            <label className="ml-7 font-sans font-weight: 500">Location</label>
            <input name="location" className="flex w-10/12 ml-2 gray-200" />
          </div>
          <div className="flex w-10/12 gap-8 p-4 pb-5 ml-1">
            <div className="flex-col w-1/2 ">
              <label className="pl-3">Minimum Customers per Hour</label>
              <input type="integer" className="w-60  " name="min" />
            </div>
            <div className="flex-col w-1/2 ">
              <label className="pl-3 font-sans">
                Maximum Customers per Hour
              </label>
              <input type="integer" className="w-60" name="max" />
            </div>
            <div className="flex-col w-1/2">
              <label className="pl-8">Average Cookies per Sale</label>
              <input type="float" className="w-60" name="average" />
            </div>
            <button className="px-20 py-5 mr-5 right-5 bg-green-500 top-2 text-black-50 font-sans:sans-serif">
              Create
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
  function Display({ data }) {
    return (
      <div>
        <p className="my-3 text-center text-gray-600 text-1xl">
          Report Table Coming Soon...
        </p>

        <p className="my-3 text-center text-gray-600 text-1xl">
          {JSON.stringify(data)}
        </p>
      </div>
    );
  }
  function Footer({ copyright }) {
    return (
      <footer className="p-6 text-3xl bg-green-500">&copy;{copyright}</footer>
    );
  }
}
