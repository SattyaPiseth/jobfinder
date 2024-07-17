import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  address: Yup.string().required("address is required"),
  gender: Yup.string().required("Gender is required"),
});

function PersonalInformationForm(
  {user_name,
  gender, 
  email,
  phone_num,
  address,}
) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    userName: user_name || "",
    gender: gender || "",
    email: email || "",
    phoneNumber: phone_num || "",
    address: address || "",
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setProfile(values); // Update the profile state with the new values
      setSubmitting(false);
      setIsEditing(false); // Exit edit mode after submission
    }, 400);
  };

  return (
    <div className="flex flex-col px-6 py-6 text-base font-medium text-black bg-gray-50 rounded-lg max-w-[654px] max-md:px-5">
      <div className="text-xl font-semibold max-md:max-w-full text-left">
        PERSONAL INFORMATION
      </div>

      {isEditing ? (
        <Formik
          initialValues={profile}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mt-6 max-md:max-w-full text-left">
                <label htmlFor="username" className="block mb-2">
                  Username
                </label>
                <Field
                  name="username"
                  type="text"
                  className="w-full px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="mt-6 max-md:max-w-full text-left">
                <label htmlFor="gender" className="block mb-2">
                  Gender
                </label>
                <div role="group" aria-labelledby="gender">
                  <label>
                    <Field type="radio" name="gender" value="male" />
                    Male
                  </label>
                  <label className="ml-4">
                    <Field type="radio" name="gender" value="female" />
                    Female
                  </label>
                  <label className="ml-4">
                    <Field type="radio" name="gender" value="other" />
                    Other
                  </label>
                </div>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="mt-6 max-md:max-w-full text-left">
                <label htmlFor="email" className="block mb-2">
                  Email address
                </label>
                <Field
                  name="email"
                  type="email"
                  className="w-full px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="mt-6 max-md:max-w-full text-left">
                <label htmlFor="phoneNumber" className="block mb-2">
                  Phone Number
                </label>
                <Field
                  name="phoneNumber"
                  type="tel"
                  className="w-full px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="mt-6 max-md:max-w-full text-left">
                <label htmlFor="address" className="block mb-2">
                  Address
                </label>
                <Field
                  name="address"
                  type="text"
                  className="w-full px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="flex justify-start mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="mt-6 max-md:max-w-full text-left">
          <div className="mt-6 max-md:max-w-full text-left">
            <label className="block mb-2">Username</label>
            <div className="w-full px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full">
              {profile.userName}
            </div>
          </div>

          <div className="mt-6 max-md:max-w-full text-left">
            <label className="block mb-2">Gender</label>
            <div className="w-full px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full">
              {profile.gender}
            </div>
          </div>

          <div className="mt-6 max-md:max-w-full text-left">
            <label className="block mb-2">Email address</label>
            <div className="w-full px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full">
              {profile.email}
            </div>
          </div>

          <div className="mt-6 max-md:max-w-full text-left">
            <label className="block mb-2">Phone Number</label>
            <div className="w-full px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full">
              {profile.phoneNumber}
            </div>
          </div>

          <div className="mt-6 max-md:max-w-full text-left">
            <label className="block mb-2">Address</label>
            <div className="w-full px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full">
              {profile.address}
            </div>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="mt-6 px-4 py-2 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default PersonalInformationForm;
