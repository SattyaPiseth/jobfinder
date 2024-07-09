import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { verifyOtp } from '../../redux/features/user/userSlice';
import { Alert, Button } from 'flowbite-react';

const OtpForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error, user } = useSelector((state) => state.user);

  const initialValues = {
    email: '',
    otp_code: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    otp_code: Yup.string().required('OTP is required').length(6, 'OTP must be 6 digits'),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      await dispatch(verifyOtp(values)).unwrap();
    } catch (error) {
      setFieldError('otp_code', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">Verify OTP</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="otp_code" className="block text-sm font-medium text-gray-700">
                OTP Code
              </label>
              <Field
                type="text"
                name="otp_code"
                id="otp_code"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="otp_code" component="div" className="text-red-500 text-sm mt-1" />
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
            <Button type="submit" color="primary" disabled={isSubmitting || isLoading}>
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OtpForm;
