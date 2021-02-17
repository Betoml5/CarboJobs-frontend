import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const UserDetail = () => {
  let history = useHistory();
  const [user, setUser] = useState({});

  return (
    <div className="userDetail">
      {user ? (
        <>
          <h1>Hey Welcome Back! {user.name}</h1>
          <p>Hey your email is {user.email}</p>
          <button>Logout</button>
        </>
      ) : (
        <p>There is no user anymore...</p>
      )}
    </div>
  );
};

export default UserDetail;
