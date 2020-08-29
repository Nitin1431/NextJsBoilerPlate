import { SET_LATEST_PRODUCTS } from '../actions/types';
const DEFAULT_STATUS = {
  products: {
    latestProducts: [],
  },
};
export default (state = DEFAULT_STATUS, action) => {
  switch (action.type) {
    case SET_LATEST_PRODUCTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
