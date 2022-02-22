import TYPES from "./types";

const initialState = {
  searchKey: "",
};

export default function (prevState = initialState, { type, payload }) {
  switch (type) {
    case TYPES.SEARCH_KEY:
      return {
        ...prevState,
        searchKey: payload,
      };

    default:
      return prevState;
  }
}
