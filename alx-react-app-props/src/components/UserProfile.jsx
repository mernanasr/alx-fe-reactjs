import { useContext } from "react";
import UserContext from "../UserContext"; // Import context

function UserProfile() {
  const userData = useContext(UserContext); // Get user data from context

  if (!userData) {
    return <p>Loading user data...</p>; // Handle missing context
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;



  