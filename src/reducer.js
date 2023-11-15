// const initialState = {
//   data: [],
//   region: "",
//   searchParam: "",
//   loading: true,
//   countryDetails: null,
// };

export default function reducer(state, { type, payload }) {
  switch (type) {
    case "SET DATA":
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case "GET COUNTRY DETAILS":
      console.log(state.data);
      const country = state.data.find((country) => (
        country.name.common.toLowerCase() === payload.toLowerCase()
      ))
      console.log(country);
      return {
        ...state,
        countryDetails: country || "not found",
      };
    default:
      throw new Error("Unrecognized action type");
  }
}
