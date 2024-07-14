import { Pagination as FlowbitePagination } from "flowbite-react";
import { useState } from "react";

export function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <FlowbitePagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}
