    import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { Formik, Form } from 'formik';
    import * as Yup from 'yup';
    import { logout, registerUser } from '../../redux/features/user/userSlice.js';
    import InputField from '../../common/InputField.jsx';
    import useFontClass from '../../common/useFontClass.js';
    import { useTranslation } from 'react-i18next';
    import { NavLink, useNavigate } from 'react-router-dom';

    const RegistrationForm = () => {
    const { fontClass } = useFontClass();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error, isAuthenticated } = useSelector(state => state.user);
    console.log('Authenticated : ',isAuthenticated)

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    useEffect(() => {
        if(isAuthenticated){
            navigate('/verifyCode');
            dispatch(logout());
        }
        
    },[isAuthenticated, navigate])

    const validationSchema = Yup.object({
        username: Yup.string()
        .required(t('registrationForm.validation.username'))
        .min(3, t('registrationForm.validation.min')),
        email: Yup.string()
        .email(t('registrationForm.email'))
        .required(t('registrationForm.validation.email')),
        password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
          t('registrationForm.validation.password')
        )
        .required(t('registrationForm.validation.password')),
        
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], t('registrationForm.validation.not-match'))
        .required(t('registrationForm.validation.confirmPassword')),
    });

    const handleSubmit = values => {
        dispatch(registerUser(values));
    };

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
        {formik => (
            <Form className={`${fontClass} flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-md`}>
            <h2 className="text-3xl font-semibold text-primary-700 text-left">{t('registrationForm.title')}</h2>
            <InputField label={t('registrationForm.labels.username')} name="username" placeholder={t('registrationForm.placeholders.username')} />
            <InputField label={t('registrationForm.labels.email')} name="email" type="email" placeholder={t('registrationForm.placeholders.email')} />
            <InputField label={t('registrationForm.labels.password')} name="password" type="password" placeholder={t('registrationForm.placeholders.password')} />
            <InputField label={t('registrationForm.labels.confirmPassword')} name="confirmPassword" type="password" placeholder={t('registrationForm.placeholders.confirmPassword')} />
            {/* <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="terms" className="text-sm text-gray-600">{t('acceptTerms')} <a href="#" className="text-blue-600">{t('termsConditions')}</a></label>
            </div> */}
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button type="submit" disabled={isLoading || !formik.isValid} className="w-full bg-primary-700 text-white font-medium rounded-lg py-2 hover:bg-primary-750 disabled:opacity-50">
                {isLoading ? t('registrationForm.registering') : t('registrationForm.submit')}
            </button>
            <p className={`${fontClass} mt-8 sm:mt-10 text-base sm:text-lg text-center text-gray-600 `}>
            {t('registrationForm.labels.haveAccount')}{" "}
            <NavLink  to={'/login'} className="text-blue-600 hover:underline font-medium px-1">
            {t('registrationForm.labels.login')}
            </NavLink>
      </p>
            </Form>
        )}
        </Formik>
    );
    };

    export default RegistrationForm;
