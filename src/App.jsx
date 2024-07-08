import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { BASE_URL } from "./redux/api";
import { useEffect } from "react";
import { fetchJobCategories, selectAllJobCategories, getJobCategoriesStatus, getJobCategoriesError } from "./redux/features/category-job/categorySlice";

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
    <>
      <h1 className="mt-20 text-3xl text-blue-800 font-bold text-center">
        Environment: {import.meta.env.VITE_APP_MODE}
      </h1>
      <p className="mt-20 text-3xl text-blue-800 font-bold text-center">
        API URL: {BASE_URL}
      </p>
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold">Job Categories</h2>
        {status === 'loading' && <p>Loading categories...</p>}
        {status === 'succeeded' && (
          <ul>
            {categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        )}
        {status === 'failed' && <p>Error: {error}</p>}
      </div>
    </>
  );
}

export default App;
