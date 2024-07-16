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
import Aos from "aos";

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllJobCategories);
  const status = useSelector(getJobCategoriesStatus);
  const error = useSelector(getJobCategoriesError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchJobCategories());
    }
  }, [status, dispatch]);

  return (
    <>
      <HomePage categories={categories} isLoading={status === "loading"} />
    </>
  );
}

export default App;
