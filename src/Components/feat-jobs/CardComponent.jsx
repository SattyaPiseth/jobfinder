import React from "react";

export function CardComponent({ job }) {
  return (
    <div className="flex flex-col p-6 text-base leading-6 bg-white border border-solid border-zinc-200 max-w-[274px]">
      <div className="flex gap-5 justify-between text-center text-indigo-600">
        <img
          loading="lazy"
          srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrmfUD5w9JWPnvQRkS5zAzu4ZaRhic78kGA&s"
          className="shrink-0 w-12 aspect-square"
        />
        <div className="justify-center self-start px-3 py-1 border border-indigo-600 border-solid">
          Full Time
        </div>
      </div>
      <div className="mt-4 text-lg font-semibold text-slate-800">
        Email Marketing
      </div>
      <div className="flex gap-2 justify-between text-slate-600">
        <div>Revolut</div>
        <div>Madrid, Spain</div>
      </div>
      <div className="mt-4 leading-7 text-slate-500">
        Revolut is looking for Email Marketing to help team ma ...
      </div>
      <div className="flex gap-2 mt-4 text-sm font-semibold whitespace-nowrap">
        <div className="justify-center px-4 py-1 bg- bg-orange-400 bg-opacity-10 rounded-[80px]">
          Marketing
        </div>
        <div className="justify-center px-4 py-1 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
          Design
        </div>
      </div>
    </div>
  );
}

// import * as React from "react";

// export function CardComponent() {
//   return (
//     <div className="flex flex-col p-6 text-base leading-6 bg-white border border-solid border-zinc-200 max-w-[274px]">
//       <div className="flex gap-5 justify-between text-center text-indigo-600">
//         <img
//           loading="lazy"
//           srcSet="..."
//           className="shrink-0 w-12 aspect-square"
//         />
//         <div className="justify-center self-start px-3 py-1 border border-indigo-600 border-solid">
//           Full Time
//         </div>
//       </div>
//       <div className="mt-4 text-lg font-semibold text-slate-800">
//         Email Marketing
//       </div>
//       <div className="flex gap-2 justify-between text-slate-600">
//         <div>Revolut</div>
//         <div>Madrid, Spain</div>
//       </div>
//       <div className="mt-4 leading-7 text-slate-500">
//         Revolut is looking for Email Marketing to help team ma ...
//       </div>
//       <div className="flex gap-2 mt-4 text-sm font-semibold whitespace-nowrap">
//         <div className="justify-center px-4 py-1 bg- bg-orange-400 bg-opacity-10 rounded-[80px]">
//           Marketing
//         </div>
//         <div className="justify-center px-4 py-1 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
//           Design
//         </div>
//       </div>
//     </div>
//   );
// }
