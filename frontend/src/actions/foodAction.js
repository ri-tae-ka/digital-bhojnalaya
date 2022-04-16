import axios from "axios";
import {
  ALL_FOODITEM_REQUEST,
  ALL_FOODITEM_SUCCESS,
  ALL_FOODITEM_FAIL,
  FOODITEM_DETAILS_REQUEST,
  FOODITEM_DETAILS_SUCCESS,
  FOODITEM_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/foodConstants";

export const getFooditem =
  (keyword = "", currentPage = 1, food_price = [0, 10000], canteen_name) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_FOODITEM_REQUEST,
      });

      let link = `/api/v1/fooditems?keyword=${keyword}&page=${currentPage}&food_price[gte]=${food_price[0]}&food_price[lte]=${food_price[1]}`;

      if(canteen_name) {
        link = `/api/v1/fooditems?keyword=${keyword}&page=${currentPage}&food_price[gte]=${food_price[0]}&food_price[lte]=${food_price[1]}&canteen_name=${canteen_name}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_FOODITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_FOODITEM_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getFooditemDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: FOODITEM_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/api/v1/Menu/fooditem/${id}`);

    dispatch({
      type: FOODITEM_DETAILS_SUCCESS,
      payload: data.fooditem,
    });
  } catch (error) {
    dispatch({
      type: FOODITEM_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
