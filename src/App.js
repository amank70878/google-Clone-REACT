import "./App.css";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./page/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search/:searchterm/:startingat" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}
//google api key ->   https://developers.google.com/custom-search/v1/using_rest/

export default App;
