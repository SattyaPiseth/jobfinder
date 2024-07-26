import { FaEdit, FaClock } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { fetchUploadUserAvatar } from "../../redux/features/avatar/avatarSlice";
import { updateProfile } from "../../redux/api/userApi";

const token = localStorage.getItem('access');

function UserProfileComponent({
  avatar,
  username,
  address,
  created_at,
  cover,
}) {
  const validationSchema = yup.object({
    file: yup.mixed().required("A file is required"),
  });
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState(
    avatar ||
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const [file, setFile] = useState(); // State to store the selected file

  console.log("avatar: ", avatar);
  const handleOnChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await dispatch(fetchUploadUserAvatar(formData)); // Dispatch the action to upload the file
        console.log("response: ", response.payload.data.url);
        const avatarUrl = response.payload.data.url;
        await updateProfile(token, {avatar : avatarUrl})
        
      alert("Profile updated successfully!");
      } catch (error) {
        console.error(error);
      }
      setOpenModal(false); // Close the modal
    } else {
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [])

  return (
    <>
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <article className="flex flex-col grow pb-3.5 w-full bg-gray-50 rounded-lg max-md:max-w-full">
          <div className="flex relative flex-col pt-2.5 pr-3 pl-5 w-full min-h-[127px] max-md:pl-5 max-md:max-w-full">
            <div className="">
              <img
                loading="lazy"
                src={
                  cover ||
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/3f12d4226ada8a92d9f6e286bcd915f8d95f574ecbe753098a13433ce6079566?apiKey=ff00f11844934b2d9618929d5184b9ad&"
                }
                alt="cover"
                className="object-cover rounded-t-lg absolute inset-0 size-full"
              />
            </div>

            <div className="absolute top-14">
              <img
                loading="lazy"
                src={avatar}
                alt="User profile picture"
                className="rounded-lg max-w-full aspect-[1.03] w-[100px] max-md:mt-8 max-md:mb-2.5"
              />
              <FaEdit
                onClick={() => setOpenModal(true)}
                className="max-md:w-[16px] absolute left-20 bottom-2"
              />
            </div>
          </div>
          <div className="flex flex-col ml-36 max-md:ml-0">
            <div className="flex flex-row gap-2 w-full">
              <h2 className="self-start -mb-2 text-2xl mt-1 font-sowanphum font-semibold leading-7 text-black max-md:ml-5">
                {username}
              </h2>
            </div>
            <span className="self-start text-sm text-gray-500 font-semibold leading-7 max-md:ml-5">
              <span className="text-[14px]">@</span>
              {username}
            </span>
          </div>
          <div className="flex gap-5 justify-between items-end mr-5 ml-5 text-base max-md:flex-wrap max-md:mr-2.5 max-md:mt-3 max-md:max-w-full">
            <div className="flex flex-col mt-3">
              <div className="flex gap-2 text-black leading-[175%]">
                <IoHome className="self-center w-4 rounded-full aspect-square fill-gray-700 fill-opacity-50 max-md:w-5" />

                <p className="flex-auto text-left my-auto max-md:text-sm">
                  {address || "No location"}
                </p>
              </div>
              <div className="flex mt-1 gap-2 text-black leading-[175%]">
                <FaClock className="self-center w-4 rounded-full aspect-square fill-gray-700 fill-opacity-50 max-md:w-5" />
                <p className="flex-auto text-left my-auto max-md:text-sm">
                  {created_at || "No date joined"}
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-white whitespace-nowrap max-md:-mt-2">
              <button className="justify-center px-2.5 py-1.5 bg-blue-800 rounded-lg border-2 border-blue-800 border-solid max-md:py-[5px] max-md:text-sm">
                Edit profile
              </button>
            </div>
          </div>
        </article>
      </div>

      <Formik
        initialValues={{
          file: file,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Modal
            dismissible
            show={openModal}
            onClick={() => handleSubmit()}
            onClose={() => setOpenModal(false)}
          >
            <Modal.Header>Choose picture profile</Modal.Header>
            <Modal.Body>
              <div className="h-auto w-60">
                <img
                  loading="lazy"
                  src={avatarSrc}
                  alt="User profile picture"
                  className="rounded-lg max-w-full max-md:mt-8 max-md:mb-2.5"
                />
              </div>
              <Form>
                <div className="mt-5">
                  <Field
                    name="file"
                    type="file"
                    onChange={handleOnChange}
                    required
                  />
                  {/* <ErrorMessage
                    component="div"
                    name="file"
                    className="text-red-600"
                  /> */}
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" onClick={() => handleSubmit()}>Save</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Formik>
    </>
  );
}

export default UserProfileComponent;
