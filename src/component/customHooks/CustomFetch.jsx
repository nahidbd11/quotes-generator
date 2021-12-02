import { useEffect,useState } from "react";


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
