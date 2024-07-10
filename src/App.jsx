import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchJobCategories, selectAllJobCategories, getJobCategoriesStatus, getJobCategoriesError } from "./redux/features/category-job/categorySlice";
import { BASE_URL } from "./redux/api/api";

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllJobCategories);
  const status = useSelector(getJobCategoriesStatus);
  const error = useSelector(getJobCategoriesError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchJobCategories());
    }
  }, [status, dispatch]);


  return (
    <div className="mt-20">
      <h1 className="mt-20 text-3xl text-blue-800 font-bold text-center">
        Environment: {import.meta.env.VITE_APP_MODE}
      </h1>
      <p className="mt-20 text-3xl text-blue-800 font-bold text-center">
        API URL: {BASE_URL}
      </p>
    </div>
  );
}

export default App;
