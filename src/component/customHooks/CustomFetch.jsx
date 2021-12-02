import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const useFetch = (url, count) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((quote) => {
        setData(quote);
      });
  }, [count, url]);
  return data;
};

export default useFetch;
