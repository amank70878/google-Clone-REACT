import useGoogleSearch from "../useGoogleSearch";
import { useSelector } from "react-redux";

const SearchBody = () => {
  const { term } = useSelector((state) => state.inputRedur);
  const { data } = useGoogleSearch(term);
  console.log(data);

  return (
    <>
      <h1>body:{term}</h1>
    </>
  );
};

export default SearchBody;
