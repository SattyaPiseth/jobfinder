import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Alert, Button } from 'flowbite-react';
import { verifyOtp } from '../../redux/features/user/userSlice';

const EmailVerificationInput = () => {
  const dispatch = useDispatch();
  const { isLoading, error, user } = useSelector((state) => state.user);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const initialValues = {
    otp_code: ['', '', '', '', '', ''],
  };

  const validationSchema = Yup.object({
    otp_code: Yup.array()
      .of(Yup.string().required('Required').length(1, 'Must be 1 digit'))
      .length(6, 'OTP must be 6 digits'),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const otp = values.otp_code.join('');
      await dispatch(verifyOtp({ email: localStorage.getItem('email'), otp_code: otp })).unwrap();
    } catch (error) {
      setFieldError('otp_code', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleResendCode = () => {
    setTimer(30);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Email Verification</h2>
      <p className="text-center text-gray-600 mb-4">
        Please enter the 6-digit code sent to your email.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <div className="flex gap-3 mt-1 justify-center">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Field
                    key={index}
                    name={`otp_code[${index}]`}
                    type="text"
                    maxLength="1"
                    className="text-center rounded-lg border border-gray-300 h-14 w-14 text-lg"
                    aria-label={`Verification code digit ${index + 1}`}
                    onChange={(e) => {
                      const { value } = e.target;
                      setFieldValue(`otp_code[${index}]`, value);
                      if (value && index < 5) {
                        document.getElementsByName(`otp_code[${index + 1}]`)[0].focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Backspace' && !values.otp_code[index] && index > 0) {
                        document.getElementsByName(`otp_code[${index - 1}]`)[0].focus();
                      }
                    }}
                  />
                ))}
              </div>
              <ErrorMessage name="otp_code" component="div" className="text-red-500 text-sm mt-1 text-center" />
            </div>
            {error && (
              <Alert color="failure" className="mb-4">
                {error}
              </Alert>
            )}
            {user && (
              <Alert color="success" className="mb-4">
                OTP verified successfully!
              </Alert>
            )}
            <Button
              type="submit"
              color="primary"
              disabled={isSubmitting || isLoading}
              className="w-full h-12 text-lg bg-blue-600"
            >
              {isLoading ? 'Verifying...' : 'Verify'}
            </Button>
          </Form>
        )}
      </Formik>
      <p className="text-center mt-4 text-base leading-6 text-gray-500">
        Request a new code in {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}
        {timer % 60}
      </p>
      <div className="flex justify-center gap-2 mt-3.5 text-base leading-6">
        <p className="text-gray-500">Didn't receive the code?</p>
        <button
          className={`text-blue-600 ${timer > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleResendCode}
          disabled={timer > 0}
        >
          Resend Code
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationInput;
