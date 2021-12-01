import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const useFetch = (url, count) => {
  const [data, setData] = useState("");
  useEffect(() => {
    console.log("running useEffect from custom hook");
    fetch(url)
      .then((data) => data.json())
      .then((quote) => {
        setData(quote);
      });
  }, [count]);
  console.log(data, "from custom hook");
  return data;
};

export default useFetch;
