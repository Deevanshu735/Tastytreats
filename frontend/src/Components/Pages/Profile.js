import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  console.log(user);
  return <div>Profile</div>;
};

export default Profile;
