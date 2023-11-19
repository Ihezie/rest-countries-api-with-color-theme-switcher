// const initialState = {
//   data: [],
//   region: "none",
//   loading: true,
//   searchParam: "",
//   error: false,
// };
export default function reducer(state, { type, payload }) {
  switch (type) {
    case "SET DATA":
      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
      };
    case "FILTER BY REGION":
      return {
        ...state,
        region: payload,
      };
    case "SEARCH BY NAME":
      return {
        ...state,
        searchParam: payload,
      };
    case "ERROR":
      return {
        ...state,
        error: true
      }
    default:
      throw new Error("Unrecognized action type");
  }
}
