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
      url: `${API}/pass`,
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.payload));

    return response;
  } catch (error) {
    console.log(error);
  }
};

const LogoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const getUser = async (id) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${API}/${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { LoginUser, getUser, LogoutUser };
