// reducer.js
import { FETCH_FAILURE, FETCH_PRODUCT, FETCH_SUCCESS, ADD_TO_CART} from "./action";

let initState = {
  data: [],
  loading: false,
  error: "",
  cart: [], 
};

export let productReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }; 
      
    default:
      return state;
  }
};
