import produce from "immer";

const initialState = {
  starters: [],
  loading: false,
  error: null
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case "GET_STARTERS_REQUEST":
      draft.loading = true;
      draft.error = action.error;
      return;
    case "GET_STARTERS_SUCCESS":
      draft.loading = false;
      draft.starters = action.json.starters;
      return;
    case "GET_STARTERS_ERROR":
      draft.loading = false;
      draft.error = action.error;
      return;
    case "GET_STARTER_BY_ID_REQUEST":
      draft.loading = true;
      draft.error = action.error;
      return;
    case "GET_STARTER_BY_ID_SUCCESS":
      draft.loading = false;
      draft.starters = action.json.starters;
      return;
    case "GET_STARTER_BY_ID_ERROR":
      draft.loading = false;
      draft.error = action.error;
      return;
  }
}, initialState);

export default reducer;
