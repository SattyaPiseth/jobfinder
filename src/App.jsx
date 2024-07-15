import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectAllJobCategories, getJobCategoriesStatus, getJobCategoriesError, fetchJobCategories } from "./redux/features/category-job/categorySlice";
import HomePage from "./pages/HomePage";


function App() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllJobCategories);
  const status = useSelector(getJobCategoriesStatus);
  const error = useSelector(getJobCategoriesError);

  console.log('category',categories)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchJobCategories());
    }
  }, [status, dispatch]);


  return (
    <>
    <HomePage categories={categories}/>
    </>
  );
}

export default App;
