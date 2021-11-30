import { useState } from "react";
import React from "react";
import Header from "./Header";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import Footer from "./Footer";
import { working_time } from "../data";

export default function Main(props) {
  const [data, setData] = React.useState();
  const [allData, setAllData] = React.useState([]);
  const [totaloftotal, settotaloftotal] = React.useState(0);
  const [totalperhour, setTotalperhour] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  function dataHandler(event) {
    event.preventDefault();
    props.senumberoflocaton(props.numberoflocaton + 1);
    const newData = {
      location: event.target.location.value,
      minCustomers: event.target.min.value,
      maxCustomers: event.target.max.value,
      Average: event.target.average.value,
    };
    const data = {
      location: newData.location,
      hourly_sales: sales_per_hour(
        newData.minCustomers,
        newData.maxCustomers,
        newData.Average
      ),
    };

    function sales_per_hour(min, max, average) {
      let arr = [];
      working_time.forEach((d, i) => {
        const random = Math.floor(
          (Math.random() * (parseInt(max) - parseInt(min)) + parseInt(min)) *
            parseInt(average)
        );
        arr.push(random);
      });
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

    let TotalofTotals = totaloftotal + total_per_day(data.hourly_sales);

    settotaloftotal(TotalofTotals);

    setAllData([...allData, data]);

    setData(newData);
  }
  return (
    <main className="min-h-screen bg-green-50 ">
      <Header />
      <CreateForm onSubmit={dataHandler} />
      <ReportTable
        // data={data}
        allData={allData}
        working_time={working_time}
        totalperhour={totalperhour}
        totaloftotal={totaloftotal}
      />
      <Footer numberoflocaton={props.numberoflocaton} />
    </main>
  );
}
