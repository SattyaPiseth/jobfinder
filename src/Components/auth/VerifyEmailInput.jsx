import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Alert, Button } from "flowbite-react";
import { verifyOtp } from "../../redux/features/user/userSlice";
import useFontClass from "../../common/useFontClass";
import { useTranslation } from "react-i18next";

const EmailVerificationInput = () => {
  const { fontClass } = useFontClass();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Define navigate function
  const { isLoading, error, user } = useSelector((state) => state.user);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const initialValues = {
    otp_code: ["", "", "", "", "", ""],
  };

  const validationSchema = Yup.object({
    otp_code: Yup.array()
      .of(Yup.string().required("").length(1, "Must be 1 digit"))
      .length(6, "OTP must be 6 digits"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const otp = values.otp_code.join("");
      await dispatch(
        verifyOtp({ email: localStorage.getItem("email"), otp_code: otp })
      ).unwrap();
      navigate('/'); // Navigate to home page after successful verification
    } catch (error) {
      setFieldError("otp_code", t("verification.otp_code.failed"));
    } finally {
      setSubmitting(false);
    }
  };

  const handleResendCode = () => {
    setTimer(30);
  };

  const handlePaste = (e, setFieldValue) => {
    const pasteData = e.clipboardData.getData("text").replace(/\s+/g, ""); // Remove all spaces
    if (/^\d{6}$/.test(pasteData)) {
      pasteData.split("").forEach((char, index) => {
        setFieldValue(`otp_code[${index}]`, char);
      });
    }
  };

  return (
    <div
      className={`max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg ${fontClass}`}
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-primary-700">
        {t("verification.title")}
      </h2>
      <p className="text-center text-gray-600 mb-4">{t("verification.desc")}</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue, errors, touched }) => (
          <Form onPaste={(e) => handlePaste(e, setFieldValue)}>
            <div className="mb-4">
              <div className="flex gap-2 mt-1 justify-center">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Field
                    key={index}
                    name={`otp_code[${index}]`}
                    type="text"
                    maxLength="1"
                    className={`text-center rounded-lg border ${
                      values.otp_code[index]
                        ? "border-blue-500"
                        : errors.otp_code && touched.otp_code
                        ? "border-red-500"
                        : "border-gray-300"
                    } h-12 w-12 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    aria-label={`Verification code digit ${index + 1}`}
                    onChange={(e) => {
                      const { value } = e.target;
                      setFieldValue(`otp_code[${index}]`, value);
                      if (value && index < 5) {
                        document
                          .getElementsByName(`otp_code[${index + 1}]`)[0]
                          .focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Backspace" &&
                        !values.otp_code[index] &&
                        index > 0
                      ) {
                        document
                          .getElementsByName(`otp_code[${index - 1}]`)[0]
                          .focus();
                      }
                    }}
                  />
                ))}
              </div>
              <ErrorMessage
                name="otp_code"
                component="div"
                className="text-red-500 text-sm mt-1 text-center"
              />
            </div>
            {error && (
              <Alert color="failure" className="mb-4">
                {error}
              </Alert>
            )}
            {user && (
              <Alert color="success" className="mb-4">
                {t("verification.otp_code.success")}
              </Alert>
            )}
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className={`w-full h-12 text-base bg-primary-700 hover:bg-primary-750 rounded-lg text-white  ${fontClass}`}
            >
              {isLoading
                ? t("verification.verifying")
                : t("verification.verify")}
            </button>
          </Form>
        )}
      </Formik>
      <p className="text-center mt-4 text-base leading-6 text-gray-500">
        {t("verification.time")} {Math.floor(timer / 60)}:
        {timer % 60 < 10 ? "0" : ""}
        {timer % 60}
      </p>
      <div className="flex justify-center gap-2 mt-3.5 text-base leading-6">
        <p className="text-gray-500">{t("verification.unreceived")}</p>
        <button
          className={`text-blue-600 hover:text-blue-800 ${
            timer > 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleResendCode}
          disabled={timer > 0}
        >
          {t("verification.resend")}
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationInput;
