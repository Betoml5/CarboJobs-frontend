import React, { Suspense, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUser, LogoutUser } from "../services/UserService";
const UserDetail = () => {
  let history = useHistory();
  const [user, setUser] = useState({});

  let userID;

  const handleLogout = () => {
    LogoutUser();
    history.push("/");
  };

  if (localStorage.getItem("user") !== null) {
    console.log(true);
    userID = JSON.parse(localStorage.getItem("user")).id;
    console.log(`USER ID: ${userID}`);
  } else {
    console.log(false);
  }

  useEffect(() => {
    getUser(userID).then((res) => {
      console.log(res?.data);
      setUser(res?.data);
    });
    // console.log(userID.id);
  }, []);

  return (
    <div className="userDetail">
      {user ? (
        <>
          <Suspense>
            <h1>Hey Welcome Back! {user.name}</h1>
            <p>Hey your email is {user.email}</p>
          </Suspense>
        </>
      ) : (
        <p>There is no user anymore...</p>
      )}
      {user && <button onClick={handleLogout}>Logout</button>}
      {/* <button onClick={getUser}>Obtener Usuario</button> */}
    </div>
  );
};

export default UserDetail;
