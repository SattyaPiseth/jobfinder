import * as React from "react";

export function CardComponent() {
  return (
    <div className="flex flex-col p-6 text-base leading-6 bg-white border border-solid border-zinc-200 max-w-[274px] rounded-lg">
      <div className="flex gap-5 justify-between text-center text-indigo-600">
        <img
          loading="lazy"
          srcSet="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
          className="shrink-0 w-12 aspect-square"
        />
        <div className="justify-center self-start px-3 py-1 border border-primary-600 border-solid rounded-lg">
          Full Time
        </div>
      </div>
      <div className="mt-4 text-lg font-semibold text-slate-800 text-start">
        Email Marketing
      </div>
      <div className="flex gap-2 justify-between text-slate-600 ">
        <div className="text-start">Revolut</div>
        <div className="">Madrid, Spain</div>
      </div>
      <div className="mt-4 leading-7 text-slate-500 text-start">
        Revolut is looking for Email Marketing to help team ma ...
      </div>
      <div className="flex gap-2 mt-4 text-sm font-semibold whitespace-nowrap">
        <div className="justify-center px-4 py-1 font-semibold bg-primary-800 rounded-lg text-white">
          Marketing
        </div>
        <div className="justify-center px-4 py-1 font-semibold bg-primary-800 rounded-lg text-white">
          Design
        </div>
      </div>
    </div>
  );
}
