import "./App.scss";
import Quotes from "./component/Quotes";
import React, { useReducer, useEffect, useRef } from "react";
import useFetch from "./component/customHooks/CustomFetch";
import reducer from "./reducer";

function App() {
  const initialstate = {
    quoteText: "When you get tired,learn to rest not quit",
    author: "Banksy",
    count: 0,
    isloading: true,
  };
  const [state, dispatch] = useReducer(reducer, initialstate);
  const animRef = useRef(null);
  const quote = useFetch("https://api.quotable.io/random", state.count);
  console.log(quote);
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "LOAD_CHANGE" });
      animRef.current.slideDown();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [state.count]);
  function handleClick() {
    dispatch({ type: "INCREAMENT" });
    dispatch({ type: "SET_QUOTES", payload: quote });
    // dispatch({ type: "LOAD_CHANGE" });
    // animRef.current.hide();
  }
  return (
    <div className="App-container">
      {state.isloading && (
        <h3>
          Quotes for you is
          <div className="loading loading08">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
        </h3>
      )}
      {!state.isloading && (
        <Quotes
          ref={animRef}
          quoteText={state.quoteText}
          author={state.author}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default App;
