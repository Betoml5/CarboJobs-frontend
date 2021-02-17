import axios from "axios";
const API = "http://localhost:3001/api/users";

const LoginUser = async (email, password) => {
  try {
    const response = await axios({
      method: "POST",
      data: {
        email,
        password,
      },
      withCredentials: true,
      url: `${API}/login`,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/pass`,
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

const LogoutUser = () => {
  const response = axios({
    method: "GET",
    url: `${API}/logout`,
    withCredentials: true,
  });
  return response;
};

export { LoginUser, getUser, LogoutUser };
