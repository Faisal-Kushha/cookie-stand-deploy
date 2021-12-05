import Head1 from "./Head";
import Main from "./main";
import React from "react";
import useResource from "../hooks/useResource";
export default function CookieStandAdmin() {
  const { resources, createResource, deleteResource } = useResource();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head1 />
      <Main createResource={createResource} deleteResource={deleteResource} />
    </div>
  );
}
