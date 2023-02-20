import useGoogleSearch from "../useGoogleSearch";
import styled from "styled-components";
import Spinner from "./Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";

const SearchBody = () => {
  const navigate = useNavigate();
  const { searchterm, startingat } = useParams();
  const [loading, setloading] = useState(true);
  const { data } = useGoogleSearch(searchterm, startingat, setloading);
  const scrollTo = useRef();

  return (
    <>
      <SearchOptions ref={scrollTo}>
        <div className="options activeOption">
          <svg focusable="false" viewBox="0 0 24 24">
            <path
              fill="#34a853"
              d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
            ></path>
            <path
              fill="#ea4335"
              d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
            ></path>
            <path
              fill="#fbbc04"
              d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
            ></path>
            <path
              fill="#4285f4"
              d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
            ></path>
          </svg>
          <span>All</span>
        </div>

        <div className="options">
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path>
          </svg>
          <span>News</span>
        </div>

        <div className="options">
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path>
          </svg>
          <span>Images</span>
        </div>

        <div className="options">
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M21.11 2.89A3.02 3.02 0 0 0 18.95 2h-5.8c-.81 0-1.58.31-2.16.89L7.25 6.63 2.9 10.98a3.06 3.06 0 0 0 0 4.32l5.79 5.8a3.05 3.05 0 0 0 4.32.01l8.09-8.1c.58-.58.9-1.34.9-2.16v-5.8c0-.81-.32-1.59-.89-2.16zM20 10.85c0 .28-.12.54-.32.74l-3.73 3.74-4.36 4.36c-.41.41-1.08.41-1.49 0l-2.89-2.9-2.9-2.9a1.06 1.06 0 0 1 0-1.49l8.1-8.1c.2-.2.46-.3.74-.3l5.8-.01A1.05 1.05 0 0 1 20 5.05v5.8zM16 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2"></path>
          </svg>
          <span>Shopping</span>
        </div>

        <div className="options">
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path>
          </svg>
          <span>Videos</span>
        </div>

        <div className="options">
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
          <span>More</span>
        </div>

        <div className="tools">Tools</div>
      </SearchOptions>
      {loading ? (
        <SpinnerWrap>
          <Spinner />
          Loading
        </SpinnerWrap>
      ) : data.items ? (
        <>
          <SearchBodyList>
            <SearchTotal>
              About {data.searchInformation.formattedTotalResults} results (
              {data.searchInformation.formattedSearchTime} seconds) in loading
              page {Math.floor(startingat / 10)}
            </SearchTotal>
            {data?.items.map((item, i) => (
              <SearchCards key={i++}>
                <a className="link" href={item.link}>
                  {item.displayLink}
                </a>
                <a className="title" href={item.link}>
                  {item.title}
                </a>
                <div className="desc">{item.snippet}</div>
              </SearchCards>
            ))}
          </SearchBodyList>

          <Pagination>
            {startingat > 10 && (
              <>
                <div
                  className="paginationBtns"
                  onClick={() => {
                    navigate(`/search/${searchterm}/${~~startingat - 10}`);
                    scrollTo.current.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "start",
                    });
                  }}
                >
                  Previous
                </div>
              </>
            )}
            <div
              className="paginationBtns"
              onClick={() => {
                navigate(`/search/${searchterm}/${~~startingat + 10}`);
                scrollTo.current.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "start",
                });
              }}
            >
              Next
            </div>
          </Pagination>
        </>
      ) : (
        data && data.error && <Error>Daily Quota Limited Exhausted</Error>
      )}
    </>
  );
};

export default SearchBody;

const SearchOptions = styled.div`
  display: flex;
  padding-left: 220px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .activeOption {
    position: relative;
    &::after {
      content: "";
      position: relative;
      width: 120%;
      height: 3px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #1a73e8;
    }
  }
  .options {
    display: inherit;
    align-items: center;
    justify-content: center;
    margin: 0 12px;
    padding-bottom: 10px;
    cursor: pointer;
    svg {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      color: #5f6368;
      fill: currentColor;
    }
    span {
      font-size: 0.8em;
      letter-spacing: 0.3px;
    }
  }
  .tools {
    font-size: 0.8em;
    margin-left: 130px;
    letter-spacing: 0.3px;
    cursor: pointer;
    @media screen and (max-width: 1150px) {
      margin-left: 30px;
    }
  }
  @media screen and (max-width: 1150px) {
    padding-left: 90px;
  }
  @media screen and (max-width: 700px) {
    padding-left: 2vw;
    overflow-x: auto;
  }
  @media screen and (max-width: 500px) {
    margin-top: 10px;
  }
`;
const SpinnerWrap = styled.div`
  width: inherit;
  margin: auto;
  margin-top: 200px;
  flex-direction: column;
  font-size: 1.2em;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchBodyList = styled.div`
  width: 76vw;
  margin: auto;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding-left: 20px;
  }
`;
const SearchTotal = styled.div`
  font-size: 0.85em;
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: 0.45px;
`;
const SearchCards = styled.div`
  max-width: 670px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .link {
    color: rgba(0, 0, 0, 0.9);
    font-size: 0.89em;
    letter-spacing: 0.2px;
    margin: 2px 0;
    font-weight: 500;
    text-decoration: none;
  }
  .title {
    color: #1a0dab;
    font-size: 1.2em;
    letter-spacing: 0.2px;
    margin: 2px 0;
    text-decoration: none;
    font-weight: 500;
  }
  .desc {
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    font-size: 0.87em;
    letter-spacing: 0.25px;
  }
`;
const Pagination = styled.div`
  width: 700px;
  margin-left: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  @media screen and (max-width: 1150px) {
    margin-left: 90px;
    width: 70vw;
  }
  @media screen and (max-width: 700px) {
    margin-left: 2vw;
    width: 90vw;
  }
  @media screen and (max-width: 500px) {
    margin-top: 10px;
  }

  .paginationBtns {
    font-size: 1.12em;
    font-weight: 400;
    letter-spacing: 0.2px;
    text-transform: capitalize;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const Error = styled.div`
  width: 100%;
  min-height: 300px;
  text-align: center;
  display: grid;
  place-items: center;
`;
