import axios from "axios";
import Swal from "sweetalert2";

export const getAllDokter = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}api/auth/dokter/getAll`
      );
      dispatch({ type: "SET_ALL_DOKTER", payload: res.data.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getDokter = (token, isLogin = false, nav) => {
  return async (dispatch) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}api/auth/dokter/me`
      );
      dispatch({ type: "SET_DOKTER", payload: res.data });
      dispatch({ type: "SET_IS_LOGIN", payload: true });
      localStorage.setItem("role", res.data.role);
      if (isLogin) {
        nav("/" + res.data.id);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerDokter = (data) => {
  return async (dispatch) => {
    dispatch({ type: "SET_IS_LOADING", payload: true });
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}api/auth/dokter/`, data);
      dispatch(getAllDokter());
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginDokter = (data, nav) => {
  return async (dispatch) => {
    dispatch({ type: "SET_IS_LOADING", payload: true });
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}api/auth/dokter/login`,
        data
      );
      localStorage.setItem("token", res.data.access_token);
      dispatch(getDokter(res.data.access_token, true, nav));
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutDokter = (token, nav) => {
  return async (dispatch) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await axios.post(`${import.meta.env.VITE_API_URL}api/auth/dokter/logout`);
      localStorage.removeItem("token");
      dispatch({ type: "SET_IS_LOGIN", payload: false });
      dispatch({ type: "SET_DOKTER", payload: {} });
      nav("/");
      localStorage.removeItem("role");
    } catch (err) {
      console.log(err);
    }
  };
};

export const getDokterById = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}api/auth/dokter/get/${id}`
      );
      dispatch({ type: "SET_DOKTER_BY_ID", payload: res.data.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateDokter = (id, data) => {
  return async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}api/auth/dokter/update/${id}`,
        data
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteDokter = (id) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: "Apakah anda yakin?",
        text: "Anda akan menghapus dokter ini",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(
            `${import.meta.env.VITE_API_URL}api/auth/dokter/delete/${id}`
          );
          dispatch(getAllDokter());
          Swal.fire("Terhapus!", "Dokter berhasil dihapus.", "success");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
};
