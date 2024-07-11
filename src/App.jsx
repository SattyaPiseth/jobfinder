import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { selectAllJobCategories, getJobCategoriesStatus, getJobCategoriesError, fetchJobCategories } from "./redux/features/category-job/categorySlice";
import HeroSecton from "./Components/HeroSection";

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
    <HeroSecton/>
    </>
  );
}

export default App;
