import styled from "styled-components";

const HomeNavbar = () => {
  return (
    <>
      <Wrap>
        <div className="tb-g-gmail">Gmail</div>
        <div className="tb-g-images">Images</div>
        <div className="tb-g-menu">
          <svg className="gb_0e" focusable="false" viewBox="0 0 24 24">
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
        </div>
        <div className="tb-g-profile"></div>
      </Wrap>
    </>
  );
};

export default HomeNavbar;

const Wrap = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px;
  color: var(--text);
  font-size: 0.85em;
  font-weight: 600;
  letter-spacing: 0.5px;
  .tb-g-gmail {
    padding: 0px 10px;
  }
  .tb-g-images {
    padding: 0px 10px;
  }
  .tb-g-menu {
    padding: 0px 15px;
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
  .tb-g-profile {
    padding: 0px 15px;
    width: 33px;
    height: 33px;
    background-image: url(./images/profile.jpg);
    background-position: top;
    background-repeat: no-repeat;
    background-size: 120%;
    border-radius: 50%;
  }
`;
