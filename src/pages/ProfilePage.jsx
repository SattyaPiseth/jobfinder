import React, { useEffect } from "react";
import ProfileDetailComponent from "../Components/profile-detail/ProfileDetailComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/features/user/userSlice";
import { use } from "i18next";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user, accessToken, isLoading, error } = useSelector(
    (state) => state.user
  );
  console.log("User Profile : ", user);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchProfile(accessToken));
    }
  }, [accessToken, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-20">
      {user ? (
        <>
          <ProfileDetailComponent
            username={user.username}
            first_name={user.first_name}
            lastname={user.last_name}
            email={user.email}
            address={user.address}
            bio={user.bio}
            phone_num={user.phone_number}
            gender={user.gender}
            facebook={user.facebook}
            twitter={user.twitter}
            linkedin={user.linkedin}
            github={user.github}
            avatar={user.avatar}
          />
        </>
      ) : (
        <div>Please log in to see your profile.</div>
      )}
      {/* <LogoutButton /> */}
    </div>
  );
};

export default ProfilePage;
