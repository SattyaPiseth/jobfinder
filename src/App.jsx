import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectAllJobCategories,
  getJobCategoriesStatus,
  getJobCategoriesError,
  fetchJobCategories,
} from "./redux/features/category-job/categorySlice";
import HomePage from "./pages/HomePage";
import "./App.css";
import Metadata from "./lib/Metadata";

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllJobCategories);
  const status = useSelector(getJobCategoriesStatus);
  // const error = useSelector(getJobCategoriesError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchJobCategories());
    }
  }, [status, dispatch]);

  return (
    <>
      <Metadata
        title="Home"
        description="Welcome to the Job Finder website"
        author="Your Name"
        keywords="jobs, careers, employment"
        thumbnail="https://example.com/thumbnail.jpg"
        url="https://example.com/"
        type="website"
      />
      <HomePage categories={categories} isLoading={status === "loading"} />
    </>
  );
}

export default App;
