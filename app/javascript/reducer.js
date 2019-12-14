import produce from "immer";
import {
  GET_STARTERS_REQUEST,
  GET_STARTERS_SUCCESS,
  GET_STARTERS_ERROR,
  GET_STARTER_BY_ID_REQUEST,
  GET_STARTER_BY_ID_SUCCESS,
  GET_STARTER_BY_ID_ERROR,
  ADD_STARTER_REQUEST,
  ADD_STARTER_SUCCESS,
  ADD_STARTER_ERROR,
  DELETE_STARTER_REQUEST,
  DELETE_STARTER_SUCCESS,
  DELETE_STARTER_ERROR
} from "./actions";

const initialState = {
  starters: [],
  loading: false,
  error: null
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case GET_STARTERS_REQUEST:
      draft.loading = true;
      draft.error = action.error;
      return;
    case GET_STARTERS_SUCCESS:
      draft.loading = false;
      draft.starters = action.json.starters;
      return;
    case GET_STARTERS_ERROR:
      draft.loading = false;
      draft.error = action.error;
      return;
    case GET_STARTER_BY_ID_REQUEST:
      draft.loading = true;
      draft.error = action.error;
      return;
    case GET_STARTER_BY_ID_SUCCESS:
      draft.loading = false;
      draft.starters = action.json.starters;
      return;
    case GET_STARTER_BY_ID_ERROR:
      draft.loading = false;
      draft.error = action.error;
      return;
    case ADD_STARTER_REQUEST:
      draft.loading = true;
      draft.error = action.error;
      return;
    case ADD_STARTER_SUCCESS:
      console.log("ADD_STARTER_SUCCESS");
      draft.loading = false;
      return;
    case ADD_STARTER_ERROR:
      draft.error = action.error;
      return;
    case DELETE_STARTER_REQUEST:
      console.log("DELETE_STARTER_REQUEST");
      draft.loading = true;
      draft.error = action.error;
      return;
    case DELETE_STARTER_SUCCESS:
      console.log("DELETE_STARTER_SUCCESS");
      draft.loading = false;
      return;
    case DELETE_STARTER_ERROR:
      draft.error = action.error;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;
