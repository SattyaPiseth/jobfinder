import React from "react";
import { CardComponent } from "../Components/feat-jobs/CardComponent";

const JobsPage = () => {
  return (
    <div>
      <h1 className="mt-20 text-center text-blue-600 font-semibold">Jobs</h1>
      <div className="flex flex-wrap gap-10">
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
    </div>
  );
};

export default JobsPage;
