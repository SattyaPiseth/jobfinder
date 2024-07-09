// src/components/LoginForm.js
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { TextInput, Button, Alert, Label } from 'flowbite-react';
import { loginUser } from './../../redux/features/user/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error, user } = useSelector(state => state.user);
  const [message, setMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (user) {
      setMessage(`Login successful! Welcome ${formik.values.email}!`);
    } else if (error) {
      setMessage(error);
    }
  }, [user, error]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="email" value="Email" />
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="your-email@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            color={formik.touched.email && formik.errors.email ? 'failure' : 'gray'}
            helperText={formik.touched.email && formik.errors.email && formik.errors.email}
          />
        </div>
        <div>
          <Label htmlFor="password" value="Password" />
          <TextInput
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            color={formik.touched.password && formik.errors.password ? 'failure' : 'gray'}
            helperText={formik.touched.password && formik.errors.password && formik.errors.password}
          />
        </div>
        {message && (
          <Alert color={error ? 'failure' : 'success'}>
            {message}
          </Alert>
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
