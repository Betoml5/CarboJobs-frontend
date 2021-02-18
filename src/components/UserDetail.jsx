import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import User from "../services/User";
const UserDetail = () => {
  let history = useHistory();
  const [user, setUser] = useState({});

  const userService = new User();

  // const getUser = async () => {

  //   const fetched = await userService.getUser();
  //   console.log(...fetched.data);
  //   setUser(...fetched.data)

  //   // userService.getUser().then((res) => {
  //   //   console.log(res);
  //   //   setUser(...res.data);
  //   // });
  // };

  const logout = () => {
    userService.logoutUser();
    history.push("/");
  };
  useEffect(() => {
    userService.getUser().then((res) => {
      setUser(res.data[0]);
      console.log(res.data[0]);

    });
  }, []);

  return (
    <div className="userDetail">
      {user ? (
        <>
          <h1>Hey Welcome Back! {user.name}</h1>
          <p>Hey your email is {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>There is no user anymore...</p>
      )}
    </div>
  );
};

export default UserDetail;
