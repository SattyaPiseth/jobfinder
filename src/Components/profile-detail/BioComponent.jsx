import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { updateProfile } from "../../redux/api/userApi";

const token = localStorage.getItem("access");

const BioComponent = ({ bio, isEditing, setIsEditing }) => {
  const [tempBio, setTempBio] = useState(bio || "No description bio..!");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setTempBio(e.target.value);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      console.log("Token:", token);
      console.log("After Submitting bio:", tempBio);

      const response = await updateProfile(token, { bio: tempBio });
      console.log("Response:", response);

      alert("Profile updated successfully!");
      setIsEditing(false); // Exit edit mode after successful submission
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <article className="flex flex-col grow px-4 pt-2.5 pb-20 w-full bg-gray-50 rounded-lg max-md:mt-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start text-xl font-semibold text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <h3 className="mt-2 max-md:mt-2 max-md:text-sm">BIO</h3>
          <div
            className="p-1 max-md:mt-0 rounded-md hover:bg-gray-200 cursor-pointer"
            onClick={handleEdit}
          >
            <FaEdit className="fill-gray-700 max-md:w-[16px]" />
          </div>
        </div>
        {isEditing ? (
          <>
            <textarea
              className="self-start w-full max-h-fit rounded-md mt-4 ml-0.5 text-left text-md font-medium text-neutral-500 max-md:mt-2 max-md:text-sm max-md:max-w-full"
              value={tempBio}
              onChange={handleChange}
            />
            <button
              className="self-end mt-2 p-2 px-4 bg-primary-800 text-white rounded-lg hover:bg-primary-700 max-md:text-sm"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Save
            </button>
          </>
        ) : (
          <p className="self-start w-full rounded-md mt-4 ml-0.5 text-left text-md font-medium text-neutral-500 max-md:mt-2 max-md:text-sm max-md:max-w-full">
            {tempBio}
          </p>
        )}
      </article>
    </div>
  );
};

export default BioComponent;
