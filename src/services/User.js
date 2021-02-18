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
        withCredentials: true,
        url: `${this.API}/login`,
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async logoutUser() {
    try {
      const response = await this.Axios({
        method: "GET",
        url: `${this.API}/logout`,
        withCredentials: true,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getUser() {
    try {
      const response = await this.Axios({
        method: "GET",
        url: `${this.API}/pass`,
        withCredentials: true,
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default User;
