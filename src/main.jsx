import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx'
import './i18n.js'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import RegisterForm from './Components/auth/RegisterForm.jsx'
import LoginForm from './Components/auth/LoginForm.jsx'
import OtpForm from './Components/auth/OtpForm.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <App/>
      }
    ]
  },
  {
    path: "/register",
    element: <RegisterForm/>
  },
  {
    path: "/verifyCode",
    element: <OtpForm/>
  },
  {
    path: "/login",
    element: <LoginForm/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={route}/>
    </Provider>
  </React.StrictMode>,
)
