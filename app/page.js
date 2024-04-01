"use client";

import React, { useEffect, useState } from "react";
import Productcard from "@/components/Productcard";
import { SkeletonCard } from "@/components/Skeletonloading";
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 50000);
  });
  return (
    <div>
      <h1 className="text-center font-bold text-2xl m-4">
        Skeleton Loading in React Like a PRO
      </h1>
      <div>{loading ? <SkeletonCard /> : <Productcard />}</div>;
    </div>
  );
};

export default Home;
