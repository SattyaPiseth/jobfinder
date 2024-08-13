import { IoMdAdd } from "react-icons/io";

function SkillAndInterestComponent() {
  return (
    <section className="flex flex-col bg-gray-50 rounded-lg px-4 max-md:max-w-full">
      <div className="flex flex-row w-full justify-between">
        <h3 className="text-xl text-left font-semibold text-black max-md:text-sm max-md:max-w-full">
          SKILLS & INTERESTS
        </h3>
        <div className="flex flex-row">
          <div className="p-1 border-2 max-md:mt-0 hover:bg-gray-200">
            <IoMdAdd className="fill-gray-900 text-bold w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 self-start mt-5 text-sm leading-4 whitespace-nowrap text-neutral-500">
        <div className="flex gap-1 px-3 py-2 bg-white rounded-md border border-solid border-slate-300 max-md:py-1">
          <span>UX/UI</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0f624544f9bacc2b69734a5f9b5a702a18d753ae2b62f3ae04b56a1603c054?apiKey=ff00f11844934b2d9618929d5184b9ad&"
            alt="Remove skill"
            className="shrink-0 my-auto w-2.5 aspect-square"
          />
        </div>
        <div className="flex gap-1 px-3 py-2 bg-white rounded border border-solid border-slate-300 max-md:py-1">
          <span>Front-End</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0f624544f9bacc2b69734a5f9b5a702a18d753ae2b62f3ae04b56a1603c054?apiKey=ff00f11844934b2d9618929d5184b9ad&"
            alt="Remove skill"
            className="shrink-0 my-auto w-2.5 aspect-square"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillAndInterestComponent;
