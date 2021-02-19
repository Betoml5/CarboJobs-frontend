import Axios from "axios";

class User {
  constructor() {
    this.Axios = Axios;
    this.API = "http://localhost:3001/api/users";
  }

  async loginUser(email, password) {
    try {
      const response = await this.Axios({
        method: "POST",
        data: {
          email,
          password,
        },
        url: `${this.API}/pass`,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.payload));

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  async getUserById(id) {
    try {
      const response = await this.Axios({
        method: "GET",
        url: `${this.API}/${id}`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default User;
