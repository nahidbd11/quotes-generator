import "./App.scss";
import Quotes from "./component/Quotes";
import React, { useEffect, useReducer } from "react";
import useFetch from "./component/customHooks/CustomFetch";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { ...state, count: state.count + 1 };
    case "SET_QUOTES":
      const { content, author } = action.payload;
      return { ...state, quoteText: content, author };
    default:
      return state;
  }
};
function App() {
  const initialstate = {
    quoteText: "default quotes",
    author: "nahid",
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialstate);
  const quote = useFetch("https://api.quotable.io/random", state.count);

  function handleClick() {
    dispatch({ type: "INCREAMENT" });
    dispatch({ type: "SET_QUOTES", payload: quote });
  }
  return (
    <div className="App-container">
      {/* TODO:glassmorphism on app-container */}
      <Quotes
        quoteText={state.quoteText}
        author={state.author}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
