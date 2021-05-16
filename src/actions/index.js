import axios from "axios";

export const getItemList = () => (dispatch) => {
  axios
    .get(
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
    )
    .then((response) => {
      dispatch({ type: "GET_ITEM", payload: response.data });
    })
    .catch(() => {
      dispatch({
        type: "GET_ITEM_ERROR",
        payload: "ERROR 404 BRO",
      });
    });
};

export const getPieceList = (item) => (dispatch) => {
  dispatch({ type: "GET_PIECE_LIST", payload: [item] });
};
