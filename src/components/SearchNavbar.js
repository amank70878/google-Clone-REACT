import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const SearchNavbar = () => {
  const { searchterm } = useParams();
  const [search, setSearch] = useState(searchterm);
  const navigate = useNavigate();

  const submitfunc = (e) => {
    e.preventDefault();
    navigate(`/search/${search}/1`);
  };
  return (
    <NavWrap>
      <LeftNav>
        <img
          className="tb-s-Glogo"
          src="https://png2.cleanpng.com/sh/f16b3bddf49c9b0c4a6a4cd51d2a5a6f/L0KzQYi4UsE3N5VoT5GAYUO4RYW3Usc4bGpqTpCDNES4RYK7VME2OWQ5TKY8NUS3SYGCTwBvbz==/5a35540277d9e6.8445514415134443544909.png"
          alt=""
        />
        <form className="tb-s-search">
          <input
            type="text"
            className="tb-h-inputText"
            placeholder="Search Google or type a URL"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            style={{ display: "none" }}
            type="submit"
            onClick={submitfunc}
          ></button>
          <div className="svgLogosDiv">
            <div
              className="tb-s-NLogo close"
              onClick={() => {
                setSearch("");
              }}
            >
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            <div className="tb-s-NLogo voice">
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285f4"
                  d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                ></path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path
                  fill="#fbbc05"
                  d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                ></path>
                <path
                  fill="#ea4335"
                  d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                ></path>
              </svg>
            </div>
            <div className="tb-s-Nlogo Glens">
              <svg
                version="1.1"
                id="Standard_product_icon"
                x="0px"
                y="0px"
                viewBox="0 0 192 192"
              >
                <rect
                  id="bounding_box_1_"
                  fill="none"
                  width="192"
                  height="192"
                />
                <g id="art_layer">
                  <circle id="Dot" fill="#4285F4" cx="96" cy="104.15" r="28" />
                  <path
                    id="Red"
                    fill="#EA4335"
                    d="M160,72v40.15V136c0,1.69-0.34,3.29-0.82,4.82v0v0c-1.57,4.92-5.43,8.78-10.35,10.35h0v0
		c-1.53,0.49-3.13,0.82-4.82,0.82H66l16,16h50h12c4.42,0,8.63-0.9,12.46-2.51c3.83-1.62,7.28-3.96,10.17-6.86
		c1.45-1.45,2.76-3.03,3.91-4.74c2.3-3.4,3.96-7.28,4.81-11.44c0.43-2.08,0.65-4.24,0.65-6.45v-12V96.15V84l-6-19l-10.82,2.18
		C159.66,68.71,160,70.31,160,72z"
                  />
                  <path
                    id="Blue"
                    fill="#4285F4"
                    d="M32,72c0-1.69,0.34-3.29,0.82-4.82c1.57-4.92,5.43-8.78,10.35-10.35C44.71,56.34,46.31,56,48,56
		h96c1.69,0,3.29,0.34,4.82,0.82c0,0,0,0,0,0L149,45l-17-5l-16-16h-13.44H96h-6.56H76L60,40H48c-17.67,0-32,14.33-32,32v12v20l16,16
		V72z"
                  />
                  <path
                    id="Green"
                    fill="#34A853"
                    d="M144,40h-12l16.83,16.83c1.23,0.39,2.39,0.93,3.47,1.59c2.16,1.32,3.97,3.13,5.29,5.29
		c0.66,1.08,1.2,2.24,1.59,3.47v0L176,84V72C176,54.33,161.67,40,144,40z"
                  />
                  <path
                    id="Yellow"
                    fill="#FBBC04"
                    d="M48,168h39.89l-16-16H48c-8.82,0-16-7.18-16-16v-23.89l-16-16V136C16,153.67,30.33,168,48,168z
		"
                  />
                </g>
              </svg>
            </div>
            <div
              className="tb-s-NLogo searchLogo"
              onClick={() => {
                navigate(`/search/${search}`);
              }}
            >
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>
          </div>
        </form>
      </LeftNav>
      <RightNav>
        <div className="tb-s-menu">
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
            <circle cx="12" cy="12" r="3.5"></circle>
          </svg>
        </div>
        <div className="tb-s-menu">
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
        </div>
      </RightNav>
    </NavWrap>
  );
};

export default SearchNavbar;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  padding-left: 70px;

  @media screen and (max-width: 1150px) {
    padding: 10px 20px;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;
const LeftNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px 0;

  .tb-s-Glogo {
    height: 50px;
    margin-right: 100px;

    @media screen and (max-width: 1150px) {
      margin-right: 10px;
    }
    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  .tb-s-search {
    box-shadow: 0 3px 4px 1px #bcbcbc66;
    width: 700px;
    padding: 6px 20px;
    background-color: var(--bg);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 950px) {
      width: 70vw;
    }
    @media screen and (max-width: 700px) {
      width: 95vw;
    }
    @media screen and (max-width: 500px) {
      border-radius: 10px;
    }
  }

  .tb-h-inputText {
    padding: 8px 0px;
    width: 100%;
    background-color: var(--bg);
    letter-spacing: 0.6px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    font-size: 0.9em;
    border: none;
    outline: 0;
    &::placeholder {
      letter-spacing: 0.4px;
      color: rgba(0, 0, 0, 0.6);
      font-weight: 600;
      font-size: 1em;
    }
    @media screen and (max-width: 500px) {
    }
  }

  .svgLogosDiv {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 500px) {
    .searchLogo {
      display: block;
    }
  }
  .Glens {
    width: 22px;
    height: 22px;
    margin: 0 8px;
    cursor: pointer;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  .tb-s-NLogo {
    width: 22px;
    height: 22px;
    color: #4285f4;
    fill: currentColor;
    margin: 0 8px;
    cursor: pointer;
    @media screen and (max-width: 500px) {
      margin-right: 5px;
    }
  }
  .close {
    color: #5f6368;
    border-right: 0.5px solid #d0d0d0;
    box-sizing: content-box;
    padding-right: 10px;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  .voice {
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;
const RightNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tb-s-menu {
    margin: 0px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 25px;
      height: 25px;
      fill: currentColor;
      color: #5f6368;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
