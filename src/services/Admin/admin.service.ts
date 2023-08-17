import axios from "axios";

const API_URL:string | undefined = import.meta.env.VITE_API_URL;

const login = async (login: string, password: string) => {
  return axios.post(`${API_URL}/api/admin/login`, {login, password})
  .then((res) => {
    if (res.data.token) {
      localStorage.setItem("admin", JSON.stringify(res.data));
    }
    return res.data;
  })
  .catch((err) => {
    console.log(err);
  })
};

const logout = () => {
  localStorage.removeItem("admin");
};

const isAuth = (status: number) => {
  if (status === 401 && localStorage.getItem('admin') !== null) {
    logout();
    alert("Время аутентификации истекло!");
    return true;
  }
  return false;
};

const adminService = {
  login,
  logout,
  isAuth
};

export default adminService;
