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
  // const [data, setData] = React.useState();
  const [allData, setAllData] = React.useState([]);
  const [totaloftotal, settotaloftotal] = React.useState(0);
  const [totalperday, settotalperday] = React.useState(0);
  const [totalperhour, setTotalperhour] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  function dataHandler(event) {
    event.preventDefault();
    props.setnumberoflocaton(props.numberoflocaton + 1);

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
    // const resources = {
    //   location: newData.location,
    //   hourly_sales: sales_per_hour(
    //     newData.minimum_customers_per_hour,
    //     newData.maximum_customers_per_hour,
    //     newData.average_cookies_per_sale
    //   ),
    // };

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
      // return arr;
      var sum = 0;
      for (let i = 0; i < newData.hourly_sales.length; i++) {
        sum = sum + newData.hourly_sales[i];
      }

      let newTotalHour = totalperhour.map((item, i) => {
        if (i == totalperhour.length - 1) {
          return item + sum;
        }
      });
      setTotalperhour(newTotalHour);
      return arr;
    }

    function total_per_day(arr) {
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        total += i;
      }
      return total;
    }
    let totalperday = total_per_day(newData.hourly_sales);
    // let TotalofTotals = totaloftotal + totalperday;
    let TotalofTotals = totaloftotal + totalperhour;
    settotaloftotal(TotalofTotals);
    setAllData([...allData, newData.hourly_sales]);
    settotalperday(totalperday);
    // setData(newData);
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
      <Footer numberoflocaton={props.numberoflocaton} />
    </main>
  );
}
