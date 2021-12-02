export default function reducer(state, action) {
  switch (action.type) {
    case "INCREAMENT":
      return { ...state, count: state.count + 1 };
    case "SET_QUOTES":
      const { content, author } = action.payload;
      return { ...state, quoteText: content, author };
    case "LOAD_CHANGE":
      return { ...state, isloading: !state.isloading };
    default:
      return state;
  }
}
