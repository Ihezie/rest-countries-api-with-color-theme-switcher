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
    default:
      throw new Error("Unrecognized action type");
  }
}
