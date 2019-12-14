import { createStarter, destroyStarter } from "./api";

export const GET_STARTER_BY_ID_REQUEST = "GET_STARTER_BY_ID_REQUEST";
export const GET_STARTER_BY_ID_SUCCESS = "GET_STARTER_BY_ID_SUCCESS";
export const GET_STARTER_BY_ID_ERROR = "GET_STARTER_BY_ID_ERROR";
export const ADD_STARTER_REQUEST = "ADD_STARTER_REQUEST";
export const ADD_STARTER_SUCCESS = "ADD_STARTER_SUCCESS";
export const ADD_STARTER_ERROR = "ADD_STARTER_ERROR";
export const DELETE_STARTER_REQUEST = "DELETE_STARTER_REQUEST";
export const DELETE_STARTER_SUCCESS = "DELETE_STARTER_SUCCESS";
export const DELETE_STARTER_ERROR = "DELETE_STARTER_ERROR";
export const GET_STARTERS_REQUEST = "GET_STARTERS_REQUEST";
export const GET_STARTERS_SUCCESS = "GET_STARTERS_SUCCESS";
export const GET_STARTERS_ERROR = "GET_STARTERS_ERROR";

export function getStarters() {
  return dispatch => {
    dispatch({ type: GET_STARTERS_REQUEST });
    fetch(`/v1/starters`)
      .then(res => res.json())
      .then(json => dispatch({ type: GET_STARTERS_SUCCESS, json }))
      .catch(error => dispatch({ type: GET_STARTERS_ERROR, error }));
  };
}

export const getStarterById = id => {
  return dispatch => {
    dispatch({ type: GET_STARTER_BY_ID_REQUEST, id });
    const json = fetch(`/v1/starters/${id}`)
      .then(res => res.json())
      .then(json => dispatch({ type: GET_STARTER_BY_ID_SUCCESS, json }))
      .catch(error => dispatch({ type: GET_STARTER_BY_ID_ERROR, error }));
  };
};

export const deleteStarter = id => {
  return dispatch => {
    dispatch({
      type: DELETE_STARTER_REQUEST
    })
      .then(id => destroyStarter(id))
      .then(
        dispatch({
          type: DELETE_STARTER_SUCCESS
        }).catch(error => {
          dispatch({ type: DELETE_STARTER_ERROR, error });
        })
      );
  };
};

export const addStarter = starter => {
  return dispatch => {
    dispatch({
      type: ADD_STARTER_REQUEST
    })
      .then(starter => createStarter(starter))
      .then(
        dispatch({
          type: ADD_STARTER_SUCCESS
        })
      )
      .catch(error => {
        dispatch({ type: ADD_STARTER_ERROR, error });
      });
  };
};
