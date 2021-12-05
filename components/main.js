import { useState } from "react";
import React from "react";
import Header from "./Header";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import Footer from "./Footer";
import { working_time } from "../data";
import useResource from "../hooks/useResource";

export default function Main(props) {
  const { createResource, resources } = useResource();
  const [allData, setAllData] = React.useState([]);
  const [totaloftotal, settotaloftotal] = React.useState(0);
  const [totalperday, settotalperday] = React.useState(0);
  const [totalperhour, setTotalperhour] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  function dataHandler(event) {
    event.preventDefault();

    const newData = {
      location: event.target.location.value,
      minimum_customers_per_hour: event.target.min.value,
      maximum_customers_per_hour: event.target.max.value,
      average_cookies_per_sale: event.target.average.value,
      hourly_sales: sales_per_hour(
        event.target.min.value,
        event.target.max.value,
        event.target.average.value
      ),
      description: "Branch sales report",
    };
    createResource(newData);
    event.target.reset();

    console.log(newData.hourly_sales);
    function sales_per_hour(min, max, average) {
      var arr = [];
      for (let i = 0; i < 14; i++) {
        let random = Math.floor(
          (Math.random() *
            (parseInt(event.target.max.value) -
              parseInt(event.target.min.value) +
              1) +
            parseInt(event.target.min.value)) *
            parseInt(event.target.average.value)
        );

        arr.push(random);
      }
      let newTotalHour = arr.map((d, i) => {
        return d + totalperhour[i];
      });
      setTotalperhour(newTotalHour);
      return arr;
    }
    function total_per_day(arr) {
      let total = 0;
      arr.forEach((item) => {
        total += item;
      });
      return total;
    }
    totalperday = total_per_day(newData.hourly_sales);
    let TotalofTotals = totaloftotal + totalperday;

    settotaloftotal(TotalofTotals);
    setAllData([...allData, newData]);
    settotalperday(totalperday);
  }

  return (
    <main className="min-h-screen bg-green-50 ">
      <Header />
      <CreateForm onSubmit={dataHandler} />
      <div className="container flex flex-col w-3/4 mx-auto mb-20 text-center">
        <ReportTable
          allData={allData}
          working_time={working_time}
          totalperday={totalperday}
          totalperhour={totalperhour}
          totaloftotal={totaloftotal}
        />
      </div>
      <Footer />
    </main>
  );
}
