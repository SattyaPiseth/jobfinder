import React from "react";
import { CardComponent } from "../Components/feat-jobs/CardComponent";
import { Pagination } from "../Components/card/Pagination";

const JobsPage = () => {
  return (
    <div>
      <h1 className="mt-20 text-blue-600 font-kantumruy text-4xl text-start font-bold">
        Job Listing
      </h1>
      <div className="flex flex-wrap gap-10 mt-10 justify-center">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <div className="mt-10 text-center">
        <Pagination />
      </div>
    </div>
  );
};

export default JobsPage;
