export function getStarters() {
  return dispatch => {
    dispatch({ type: "GET_STARTERS_REQUEST" });
    fetch(`/v1/starters`)
      .then(res => res.json())
      .then(json => dispatch({ type: "GET_STARTERS_SUCCESS", json }))
      .catch(error => dispatch({ type: "GET_STARTERS_ERROR", error }));
  };
}

export const getStarterById = id => {
  return dispatch => {
    dispatch({ type: "GET_STARTER_BY_ID_REQUEST", id });
    const json = fetch(`/v1/starters/${id}`)
      .then(res => res.json())
      .then(json => dispatch({ type: "GET_STARTER_BY_ID_SUCCESS", json }))
      .catch(error => dispatch({ type: "GET_STARTER_BY_ID_ERROR", error }));
  };
};
