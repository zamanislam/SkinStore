// action.js
export const ADD_TO_CART = "ADD_TO_CART";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";


export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const getProduct = (order) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT });
    try {
      let res = await fetch(
        "https://skinstore-ferc-default-rtdb.asia-southeast1.firebasedatabase.app/Dermstore_Product.json"
      );
      let data = await res.json();

      if (order === "asc") {
        data = data.sort((a, b) => a.price - b.price);
      } else if (order === "desc") {
        data = data.sort((a, b) => b.price - a.price);
      }

      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_FAILURE, payload: error.message });
    }
  };
};


