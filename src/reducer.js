// const initialState = {
//   data: [],
//   region: "",
//   searchParam: "",
//   loading: true,
// };
export default function reducer(state, { type, payload }) {
  switch (type) {
    case "SET DATA":
      return {
        ...state,
        loading: false,
        data: payload,
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
    default:
      throw new Error("Unrecognized action type");
  }
}
