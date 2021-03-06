import "./App.scss";
import Quotes from "./component/Quotes";
import React, { useReducer, useEffect, useRef } from "react";
import useFetch from "./component/customHooks/CustomFetch";
import reducer from "./reducer";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();
  console.log(location);
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
      // animRef.current.slideDown(); //HACK:using conditional classname to quotes component so i turn it off
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [state.count]);
  function handleClick() {
    dispatch({ type: "INCREAMENT" });
    dispatch({ type: "SET_QUOTES", payload: quote });
    dispatch({ type: "LOAD_CHANGE" });
  }
  return (
    <div>
      <Navbar />
      <div className="App-container">
        <TransitionGroup>
          <CSSTransition
            exit={false}
            key={location.pathname}
            timeout={500}
            mountOnEnter={true}
            unmountOnExit={true}
            classNames="test"
          >
            <Routes>
              <Route
                path="/"
                element={
                  <div>
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
                        isloading={state.isloading}
                      />
                    )}
                  </div>
                }
              />
              <Route path="/about" element={<About />}>
                <Route
                  path="bd"
                  element={<div>bangladesh is my motherland</div>}
                />
              </Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
