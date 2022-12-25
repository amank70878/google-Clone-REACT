import styled from "styled-components";

const HomeBody = () => {
  return (
    <>
      <Wrap>
        <div className="tb-h-logo"></div>
        <div className="tb-h-search">
          <div className="tb-h-searchLogo"></div>
          <input
            type="text"
            className="tb-h-inputText"
            placeholder="Search Google or type a URL"
          />
          <div className="tb-h-voiceSearchLogo"></div>
        </div>
      </Wrap>
    </>
  );
};

export default HomeBody;

const Wrap = styled.main`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 110px;
  padding-bottom: 50px;
  .tb-h-logo {
    height: 92px;
    width: 272px;
    background-image: url(./images/googleLogo.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .tb-h-search {
    margin-top: 30px;
    box-shadow: 0 0 2px 1px #bcbcbc66;
    width: 590px;
    padding: 5px 20px;
    background-color: var(--bg);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tb-h-searchLogo {
    height: 22px;
    width: 22px;
    background-image: url(./images/searchLogo.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .tb-h-inputText {
    padding: 10px 0px;
    margin: 0 15px;
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
  }
  .tb-h-voiceSearchLogo {
    height: 22px;
    width: 22px;
    background-image: url(./images/voiceSearchLogo.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
