import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import {
  fetchJobCategories,
  selectAllJobCategories,
  getJobCategoriesStatus,
  getJobCategoriesError,
} from "./redux/features/category-job/categorySlice";
import { BASE_URL } from "./redux/api/api";
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
        <meta charSet="utf-8" />
        <title>Job Finder</title>
        <link rel="canonical" href="https://job.techinsights.guru/" />
        <meta name="title" content="Job Finder" />
        <meta
          name="description"
          content=" is a web application designed to streamline the job search process for users. It provides a user-friendly platform where job seekers can create profiles, upload resumes, and search for job openings that match their skills and preferences. The application offers advanced search filters, personalized job recommendations, and real-time notifications for new job listings. Additionally, Job Finder includes features such as company reviews, salary insights, and application tracking to help users make informed career decisions and manage their job applications efficiently."
        />
        <meta
          name="thumbnail"
          content="https://surveybox.istad.co/surveybox-logo.png"
        />
        <meta property="og:title" content="Available Courses" />
        <meta
          property="og:description"
          content="There are many courses of ISTAD that you can see"
        />
        <meta
          property="og:image"
          content="https://surveybox.istad.co/surveybox-logo.png"
        />
      </Helmet>

      <div className="mt-20">
        <h1 className="mt-20 text-3xl text-blue-800 font-bold text-center">
          Environment: {import.meta.env.VITE_APP_MODE}
        </h1>
        <p className="mt-20 text-3xl text-blue-800 font-bold text-center">
          API URL: {BASE_URL}
        </p>
      </div>
    </>
  );
}

export default App;
