import { Modal } from "flowbite-react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; 
import { useDispatch } from "react-redux";
import { fetchUploadSocialMedia } from "../../redux/features/social/socialSlice";

function SocialMediaComponent() {
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState({});
  const dispatch = useDispatch();

  const handleEdit = (platform) => {
    setEditing((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }));
  };

  const platforms = ["facebook", "twitter", "instagram", "linkedin"];

  const getInitialValues = () => {
    return platforms.reduce((acc, platform) => {
      acc[platform] = editing[platform] ? editing[platform] : "";
      return acc;
    }, {});
  };

  const getValidationSchema = () => {
    return Yup.object(
      platforms.reduce((acc, platform) => {
        if (editing[platform]) {
          acc[platform] = Yup.string().url("Invalid URL format").required("Required");
        }
        return acc;
      }, {})
    );
  };

  const handleSubmit = async (values) => {
    try {
      console.log("Form values:", values);
      const response = await dispatch(fetchUploadSocialMedia(values));
      console.log("response ui: ", response);
      setOpenModal(false);
    } catch (error) {
      console.error("Failed to submit social media data:", error);
    }
  };

  return (
    <section className="px-4 text-base font-semibold text-black bg-gray-50 rounded-lg max-md:gap-1 max-md:max-w-full">
      <div className="flex items-start px-px text-xl max-md:flex-wrap max-md:max-w-full"></div>
      <h3 className="flex-auto text-xl text-left mb-4 mt-2 max-md:pb-2 max-md:text-sm">
        SOCIAL MEDIA ACCOUNT
      </h3>
      <button
        onClick={() => setOpenModal(true)}
        className="w-1/4 justify-center items-center py-2 mb-4 rounded-lg border border-solid bg-slate-400 bg-opacity-0 hover:bg-gray-200 border-neutral-400 max-md:py-2 max-md:max-w-1/4"
      >
        + Add
      </button>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Social Media</Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={getInitialValues()}
            validationSchema={getValidationSchema()}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form>
                {platforms.map((platform) => (
                  <div key={platform} className="mb-4">
                    <h4 className="mb-2 text-xl">{platform}</h4>
                    {editing[platform] ? (
                      <>
                        <div className="flex flex-col mb-2">
                          <label className="text-md text-gray-700">
                            {platform} URL
                          </label>
                          <Field
                            className="text-sm rounded-lg"
                            type="text"
                            name={platform}
                          />
                          <ErrorMessage
                            name={platform}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => handleEdit(platform)}
                          className="flex flex-row p-1 items-center rounded-lg text-gray-700 hover:bg-gray-200"
                        >
                          <FaTrashAlt />
                          &nbsp;Remove
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleEdit(platform)}
                        className="flex flex-row p-1 items-center rounded-lg text-blue-700 hover:bg-blue-200"
                      >
                        <IoMdAdd />
                        &nbsp;Add {platform}
                      </button>
                    )}
                  </div>
                ))}
                <Modal.Footer className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-1 px-5 hover:bg-blue-700 rounded-md"
                  >
                    Save
                  </button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default SocialMediaComponent;
