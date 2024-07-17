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
  // const error = useSelector(getJobCategoriesError);

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
        <meta property="og:title" content="Home - Job Quick" />
        <meta property="og:description" content="Welcome to the Job Quick website" />
        <meta property="og:image" content="https://ecommerce.techinsights.guru/file/3d3e78e2-5f53-4d18-8818-7b01f9cef98c.png" />
        <meta property="og:url" content="https://jobquick.techinsights.guru/" />
        <meta name="twitter:card" content="https://istad.co/resources/img/CSTAD_120.png" />
      </Helmet>
      <HomePage categories={categories} isLoading={status === "loading"} />
    </>
  );
}

export default App;
