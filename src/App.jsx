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
import { Helmet } from "react-helmet";

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
      <Helmet>
      <title>Home - Job Quick</title>
      <meta name="description" content="Welcome to the Job Quick website" />
      </Helmet>
      <HomePage categories={categories} isLoading={status === "loading"} />
    </>
  );
}

export default App;
