import { useState, useEffect } from "react";
let APIKEY_ = "AIzaSyBOjjKjgxiL_NOQMHS9lf1_FiCaAJyJSTQ";

const CONTEXT_KEY = "615d49ac5835d4eab";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${APIKEY_}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
