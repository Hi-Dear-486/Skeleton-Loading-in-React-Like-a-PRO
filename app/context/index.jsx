"use client";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const Appprovider = createContext();
const skeleton = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const Contextapi = ({ children }) => {
  const [data, setData] = useState([]);
  const [skeletonapi, setSkeleton] = useState(skeleton);
  const productdata = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setData(res.data);
  };

  console.log(data);
  useEffect(() => {
    productdata();
  }, []);

  const alldata = {
    data,
    skeletonapi,
  };
  return (
    <div>
      <Appprovider.Provider value={alldata}>{children}</Appprovider.Provider>
    </div>
  );
};

export { Contextapi, Appprovider };
