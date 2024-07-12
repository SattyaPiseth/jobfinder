import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { selectAllJobCategories, getJobCategoriesStatus, getJobCategoriesError, fetchJobCategories } from "./redux/features/category-job/categorySlice";
import HomePage from "./pages/HomePage";
import JobDetailcomponent from "./Components/card/JobDetailcomponent";

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
    <HomePage/>
    </>
  );
}

export default App;
