import axios from "axios";

export const getAdmin = (token, isLogin = false, nav) => {
  return async (dispatch) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}api/auth/admin/me`
      );
      dispatch({ type: "SET_ADMIN", payload: res.data.data });
      dispatch({ type: "SET_IS_LOGIN", payload: true });
      if (isLogin) {
        nav("/" + res.data.data.id);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginAdmin = (data) => {
  return async (dispatch) => {
    dispatch({ type: "SET_IS_LOADING", payload: true });
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}api/auth/admin/login`,
        data
      );
      localStorage.setItem("token", res.data.data.token);
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutAdmin = (token, nav) => {
  return async (dispatch) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await axios.post(`${import.meta.env.VITE_API_URL}api/auth/admin/logout`);
      localStorage.removeItem("token");
      dispatch({ type: "SET_IS_LOGIN", payload: false });
      dispatch({ type: "SET_ADMIN", payload: {} });
      nav("/");
    } catch (err) {
      console.log(err);
    }
  };
};
