// Components/card/Pagination.jsx
import { Pagination as FlowbitePagination } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/jobs/jobsSlice";

export function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.jobs.currentPage);
  const totalJobs = useSelector((state) => state.jobs.totalJobs);
  const pageSize = useSelector((state) => state.jobs.pageSize);
  const totalPages = Math.ceil(totalJobs / pageSize);

  const onPageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <FlowbitePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}
