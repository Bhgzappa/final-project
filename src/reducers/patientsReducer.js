const patientsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PATIENTS":
      return {
        ...state,
        patients: action.payload,
        loading: false,
      };
    case "POST_A_PATIENT":
      return {
        ...state,
        patients: [action.payload, ...state.patients],
      };
    default:
      return state;
  }
};

export default patientsReducer;
