const INITIAL_STATE = {
  item: [],
  itemError: "",
  pieceItemList: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ITEM":
      return { ...state, item: action.payload };
    case "GET_ITEM_ERROR":
      return { ...state, itemError: action.payload };
    case "GET_PIECE_LIST":
      return { ...state, pieceItemList: action.payload };
    default:
      return state;
  }
};
