import TYPES from "../reducers/types";

export function getSearch(searchKey) {
  return {
    payload: searchKey,
    type: TYPES.SEARCH_KEY,
  };
}
