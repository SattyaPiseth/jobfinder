import React from "react";
import { Link } from "react-router-dom";

export function CardComponent({ job }) {
  return (
    <div data-aos="fade-up">
      <Link to={`/jobs/${job.id}`}>
        <div className="flex flex-col p-6 text-base leading-6 bg-white border border-solid border-gray-200 rounded-lg shadow-md max-w-xs mx-auto">
          <div className="flex gap-5 justify-between items-center text-indigo-600">
            <img
              loading="lazy"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s"
              className="shrink-0 w-12 h-12 rounded-full"
              alt="company logo"
            />
            <div className="px-3 py-1 border border-indigo-600 text-indigo-600 rounded-full">
              Full Time
            </div>
          </div>
          <div className="mt-4 text-lg font-semibold text-gray-800 text-start">
            {job.title}
          </div>
          <div className="flex gap-2 justify-between text-gray-600 mt-1">
            <div>{job.company_name}</div>
            <div>{job.location}</div>
          </div>
          <div className="mt-4 text-gray-500 text-start leading-relaxed">
            {job.description}
          </div>
          <div className="flex flex-wrap gap-2 mt-4 text-sm font-semibold justify-center">
            <span className="w-full justify-center p-2 px-8 text-white bg-blue-800 rounded-3xl border-2 border-blue-800 border-solid max-md:px-5">
              Detail
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
