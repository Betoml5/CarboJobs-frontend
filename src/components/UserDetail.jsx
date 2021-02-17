import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

const UserDetail = () => {
  let history = useHistory();
  const [user, setUser] = useState({});

  const logout = (e) => {
    // e.preventDefault();
    console.log("Logout");
    axios({
      method: "GET",
      url: "http://localhost:3001/api/users/logout",
      withCredentials: true,
    }).then((res) => console.log(res));
    history.push("/");
  };

  

  useEffect(() => {
    console.log('Entrando a useEffect');
    const getUser = () => {
      axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:3001/api/users/pass",
      }).then((res) => setUser(...res.data));
    };

    getUser();
  }, []);

  return (
    <div className="userDetail">
      {user ? 
        <>
          <h1>Hey Welcome Back! {user.name}</h1>
          <p>Hey your email is {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
        : <p>There is no user anymore...</p>
      }
    </div>
  );
};

export default UserDetail;
