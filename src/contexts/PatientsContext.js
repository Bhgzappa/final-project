import { createContext, useReducer } from "react";
import patientsReducer from "../reducers/patientsReducer";
import axios from "axios";

const initialState = {
  loading: true,
  patients: [],
  error: null,
};

export const PatientsContext = createContext();

const PatientsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(patientsReducer, initialState);
  //get all patients
  async function getPatients() {
    const res = await axios.get(
      "https://halik-patients-api.herokuapp.com/api/patients"
    );
    try {
      dispatch({
        type: "GET_ALL_PATIENTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
    //add a patient
    async function createPatient(patient) {
      const token = localStorage.getItem("staffInfo");
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `${token}`,
        },
      };
      const res = await axios.post(
        "https://halik-patients-api.herokuapp.com/api/patients",
        patient,
        config
      );
      dispatch({
        type: "POST_A_PATIENT",
        payload: res.data,
      });
      console.log(token);
    }

  return (
    <PatientsContext.Provider
      value={{ getPatients, createPatient, patients: state.patients, loading: state.loading }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export default PatientsContextProvider;