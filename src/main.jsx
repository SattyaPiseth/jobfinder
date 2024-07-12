// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.jsx";
import "./i18n.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js"; 
import JobsPage from "./pages/JobsPage.jsx";
import UserProfileComponent from "./Components/auth/UserProfileComponent.jsx";
import useAppInitializer from "./common/useAppInitializer.js";
import ProtectedRoute from "./common/ProtectedRoute.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import EmailVerification from "./pages/EmailVerification.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/jobs",
        element: <JobsPage />,
      },
      
      {
        path: "/profile",
        element: <ProtectedRoute element={<UserProfileComponent />} />,
      },
      {
        path: "/register",
        element: <RegistrationPage/>
      },
      {
        path: "/verifyCode",
        element: <EmailVerification/>
      },
    ],
  },
  
  {
    path: "/login",
    element: <LoginPage/>
  }
]);

const AppWrapper = () => {
  useAppInitializer();
  return <RouterProvider router={route} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>
);
