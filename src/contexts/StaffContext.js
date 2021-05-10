import { createContext, useReducer } from "react";
import staffReducer from "../reducers/staffReducer";
import axios from "axios";

const initialState = {
  loading: true,
  staffInfo: {},
  error: null,
};

export const StaffContext = createContext();

const StaffContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(staffReducer, initialState);

  //login staff
  async function loginStaff(staffInfo) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "https://halik-patients-api.herokuapp.com/api/staff/login",
      staffInfo,
      config
    );

    localStorage.setItem("staffInfo", JSON.stringify(res.data));
    const staffLogin = (await localStorage.getItem("staffInfo"))
      ? JSON.parse(localStorage.getItem("staffInfo"))
      : {};

    dispatch({
      type: "LOGIN",
      payload: staffLogin,
    });
    console.log(res.data);
  }

  //register staff
  async function registerStaff(newstaff) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://halik-patients-api.herokuapp.com/api/staff/register",
        newstaff,
        config
      );

      dispatch({
        type: "REGISTER_STAFF",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
    //logout
    async function logout() {
      await localStorage.removeItem("staffInfo");
      dispatch({
        type: "LOGOUT",
      });
    }

  return (
    <StaffContext.Provider
      value={{
        staffInfo: state.staffInfo,
        loading: state.loading,
        loginStaff,
        registerStaff,
        logout,
      }}
    >
      {children}
    </StaffContext.Provider>
  );
};

export default StaffContextProvider;
