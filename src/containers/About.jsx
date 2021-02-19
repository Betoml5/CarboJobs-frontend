import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

import axios from "axios";

const About = () => {
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("")
  const showUser = () => {
    axios({
      method: "GET",
      url: "http://localhost:3001/api/users/about",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      setStatus(res);
      console.log(res)
    });
  };

  useEffect(() => {
    showUser();
  });

  return (
    <div>
      Hey About
      <div><p>Status: </p>{status && status}</div>
    </div>
  );
};

export default About;
