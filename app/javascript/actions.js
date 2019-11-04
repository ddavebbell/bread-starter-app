export function getStarters() {
  return dispatch => {
    dispatch({ type: "GET_STARTERS_REQUEST" });
    fetch(`/v1/starters`)
      .then(res => res.json())
      .then(json => dispatch({ type: "GET_STARTERS_SUCCESS", json }))
      .catch(error => dispatch({ type: "GET_STARTERS_ERROR", error }));
  };
}
