import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { TextInput, Alert, Label } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/features/user/userSlice";
import useFontClass from "../../common/useFontClass";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fontClass } = useFontClass();
  const { t } = useTranslation();
  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t('loginForm.validation.invalid'))
        .required(t('loginForm.validation.email')),
      password: Yup.string().required(t('loginForm.validation.password')),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      setMessage(`ការចូលប្រើបានជោគជ័យ! សូមស្វាគមន៍ ${formik.values.email}!`);
      navigate("/profile");
    } else if (error) {
      setMessage(error);
    }
  }, [isAuthenticated, error, navigate, formik.values.email]);

  return (
    <div className={`${fontClass} bg-white rounded-lg shadow-lg p-8 sm:p-10 max-w-xl w-full mx-auto`}>
      <h2 className={`${fontClass} text-3xl font-semibold mb-8 sm:mb-10 text-left text-primary-700`}>
        {t('loginForm.title')}
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-6 sm:gap-8"
      >
        <div className="text-left">
          <Label
            htmlFor="email"
            value={t('loginForm.labels.email')}
            className={`${fontClass} text-base mb-2`}
          />
          <TextInput 
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            color={
              formik.touched.email && formik.errors.email ? "failure" : "gray"
            }
            helperText={
              formik.touched.email && formik.errors.email && formik.errors.email
            }
            className={`${fontClass} text-base sm:text-lg`}
          />
        </div>
        <div className="text-left">
          <Label
            htmlFor="password"
            value={t('loginForm.labels.password')}
            className={`${fontClass} text-base mb-2`}
          />
          <TextInput
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            color={
              formik.touched.password && formik.errors.password
                ? "failure"
                : "gray"
            }
            helperText={
              formik.touched.password &&
              formik.errors.password &&
              formik.errors.password
            }
            className={`${fontClass} text-base sm:text-lg`}
          />
        </div>
        <div className="flex justify-end">
          <a
            href="#"
            className={`${fontClass} text-base sm:text-lg text-blue-600 hover:underline`}
          >
            {t('loginForm.labels.forgotPassword')}
          </a>
        </div>
        {message && (
          <Alert
            color={error ? "failure" : "success"}
            className={`${fontClass} text-base sm:text-lg`}
          >
            {message}
          </Alert>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className={`${fontClass} w-full bg-primary-700 text-white font-medium rounded-lg py-3 hover:bg-primary-750 disabled:opacity-50`}
        >
          {isLoading ? t('loginForm.labels.logining') : t('loginForm.labels.login')}
        </button>
      </form>
      <p className={`${fontClass} mt-8 sm:mt-10 text-base sm:text-lg text-center text-gray-600`}>
        {t('loginForm.labels.unauthorized')}{" "}
        <NavLink to={'/register'} className="text-blue-600 hover:underline font-medium">
          {t('loginForm.labels.signUp')}
        </NavLink>
      </p>
    </div>
  );
};

export default LoginForm;