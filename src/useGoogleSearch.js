import { useState, useEffect } from "react";
// https://developers.google.com/custom-search/v1/introduction/
// https://programmablesearchengine.google.com/controlpanel/overview?cx=615d49ac5835d4eab

const useGoogleSearch = (term, startAt, setloading) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_GOOGLE_CONTEXT_KEY}&q=tesla&start=${startAt}`
      )
        .then((response) => response.json())
        .then((result) => {
          setloading(false);
          setData(result);
          console.log(result);
        });
    };

    fetchData();
  }, [term, startAt, setloading]);
  return { data };
};

export default useGoogleSearch;

// https://www.googleapis.com/customsearch/v1?key=   &cx=   &q=google&start=1
