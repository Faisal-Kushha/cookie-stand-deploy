import Head1 from "./Head";
import Main from "./main";
import React from "react";
export default function CookieStandAdmin(props) {
  const [numberoflocaton, setnumberoflocaton] = React.useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head1 />
      <Main
        setnumberoflocaton={setnumberoflocaton}
        numberoflocaton={numberoflocaton}
      />
    </div>
  );
}
