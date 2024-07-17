import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateProfile } from "../../redux/api/userApi";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  address: Yup.string().required("address is required"),
  gender: Yup.string().required("Gender is required"),
});

function PersonalInformationForm({
  user_name,
  gender,
  email,
  phone_num,
  address,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    user_name: user_name || "",
    gender: gender || "",
    email: email || "",
    phone_num: phone_num || "",
    address: address || "",
  });

  const handleSubmit = async (profile, { setSubmitting }) => {
    try {
      // Get the token from somewhere (e.g., localStorage, state, etc.)
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxODM5OTQ3LCJpYXQiOjE3MjEyMzUxNDcsImp0aSI6Ijg2MzMwOTI2Yzg4NDQ4YWRiMjU5ODVkYjI3NTljMzM5IiwidXNlcl9pZCI6Ijc5ODk0ODZmLWFlNDctNGJjOC1hYjI3LTc1MWUyZDEwZTAyNSJ9.rDvSsPGbjXl0VxdfVvYg8e1EhAIl7DLOBeNo45X83Lo";

      updateProfile(token, profile);

      alert("Profile updated successfully!");
      setProfile(profile); // Update the profile state with the new values
      setIsEditing(false); // Exit edit mode after submission
    } catch (error) {
      console.error("Error updating profile:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
      alert(
        "An error occurred while updating the profile. Check the console for more details."
      );
    } finally {
      setSubmitting(false);
    }
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
                <label htmlFor="user_name" className="block mb-2">
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
                <label htmlFor="phone_num" className="block mb-2">
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
              {profile.user_name}
            </div>
          </div>

          <div className="mt-6 max-md:max-w-full text-left">
            <label className="block mb-2">Gender</label>
            <div className="w-full px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full">
              {profile.gender || "Other"}
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
              {profile.phone_num || "+855 "}
            </div>
          </div>

          <div className="mt-6 max-md:max-w-full text-left">
            <label className="block mb-2">Address</label>
            <div className="w-full px-3 py-4 mt-3 rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400 max-md:pr-5 max-md:max-w-full">
              {profile.address || "No location"}
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
