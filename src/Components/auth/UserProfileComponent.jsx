// src/components/auth/UserProfileComponent.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../redux/features/user/userSlice";
import ProfileDetailComponent from "../profile-detail/ProfileDetailComponent";
const UserProfileComponent = () => {
  const dispatch = useDispatch();
  const { user, accessToken, isLoading, error } = useSelector(
    (state) => state.user
  );
  console.log('User Profile : ',user)

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
         <ProfileDetailComponent username={user.n}/> 
        </>
      ) : (
        <div>Please log in to see your profile.</div>
      )}
      {/* <LogoutButton /> */}
    </div>
  );
};

export default UserProfileComponent;
