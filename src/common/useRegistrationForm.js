import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, setIsAuthenticatedFalse } from '../redux/features/user/userSlice';


/**
 * Custom hook to handle registration form submission and navigation.
 * 
 * @param {object} formik - The Formik instance.
 * @returns {object} - An object containing form state and handlers.
 */
const useRegistrationForm = (formik) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuthenticated } = useSelector((state) => state.user);

  const handleSubmit = useCallback(
    (values) => {
      dispatch(registerUser(values));
    },
    [dispatch]
  );

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setIsAuthenticatedFalse());
      navigate('/verifyCode');
    }
  }, [isAuthenticated, navigate, dispatch]);

  return {
    isLoading,
    error,
    handleSubmit,
  };
};

export default useRegistrationForm;
