import {
  ALL_FOODITEM_REQUEST,
  ALL_FOODITEM_SUCCESS,
  ALL_FOODITEM_FAIL,
  FOODITEM_DETAILS_REQUEST,
  FOODITEM_DETAILS_SUCCESS,
  FOODITEM_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/foodConstants";

export const foodReducer = (state = { fooditems: [] }, action) => {
  switch (action.type) {
    case ALL_FOODITEM_REQUEST:
      return {
        loading: true,
        fooditems: [],
      };
    case ALL_FOODITEM_SUCCESS:
      return {
        loading: false,
        fooditems: action.payload.fooditems,
        fooditemCount: action.payload.fooditemCount,
        resultsPerPage: action.payload.resultsPerPage,
      };

    case ALL_FOODITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const foodDetailsReducer = (state = { fooditem: {} }, action) => {
  switch (action.type) {
    case FOODITEM_DETAILS_REQUEST:
      return {
        loading: true,
        ...state
      };
    case FOODITEM_DETAILS_SUCCESS:
      return {
        loading: false,
        fooditem: action.payload,
      };

    case FOODITEM_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};