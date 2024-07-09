import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../../redux/features/user/userSlice';
import { Button, TextInput, Label, Alert } from 'flowbite-react';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.user);

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

     // Extended Yup schema to include password confirmation
    const validationSchema = Yup.object({
        username: Yup.string()
        .required('Required')
        .min(3, 'Must be at least 3 characters long'),
        password: Yup.string()
        .required('Required')
        .min(6, 'Password must be at least 6 characters long'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match') // Validation to check if passwords match
        .required('Confirm password is required'),
        email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    });

    const handleSubmit = (values) => {
        dispatch(registerUser({
          username: values.username,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword
        }));
    };

  return (
    <div>
      <h1 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form>
            <div className="mb-4">
              <Label htmlFor="username">Username</Label>
              <TextInput
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                {...formik.getFieldProps('username')}
                color={formik.touched.username && formik.errors.username ? 'failure' : 'gray'}
              />
              <ErrorMessage name="username" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <Label htmlFor="password">Password</Label>
              <TextInput
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                {...formik.getFieldProps('password')}
                color={formik.touched.password && formik.errors.password ? 'failure' : 'gray'}
              />
              <ErrorMessage name="password" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <TextInput
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                {...formik.getFieldProps('confirmPassword')}
                color={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'failure' : 'gray'}
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <TextInput
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                {...formik.getFieldProps('email')}
                color={formik.touched.email && formik.errors.email ? 'failure' : 'gray'}
              />
              <ErrorMessage name="email" component="div" className="text-red-600" />
            </div>
            {error && (
              <Alert color="failure">
                <span>{error}</span>
              </Alert>
            )}
            <Button type="submit" disabled={isLoading || !formik.isValid}>
              {isLoading ? 'Registering...' : 'Register'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;

