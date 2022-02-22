import TYPES from "../reducers/types";

export default function getSearch(searchKey) {
  return {
    payload: searchKey,
    type: TYPES.SEARCH_KEY,
  };
}
