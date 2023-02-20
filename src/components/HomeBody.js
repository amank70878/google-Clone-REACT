import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeBody = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  const submitfunc = (e) => {
    e.preventDefault();
    navigate(`/search/${inputSearch}/1`);
  };

  return (
    <>
      <Wrap>
        <img
          className="tb-h-logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYoAAACACAMAAAAiTN7wAAAA9lBMVEX///9ChfTqQzX7vAU0qFPz+fQwp1AVoUE+g/QzfvRNsGU6gfS+0fr7ugBlmPX7twCNsPcoevPqPS7pOyvpNiXpLBf5+//pMh/h8OTqPzHoKRHh6v2Eq/ft8v7n7v1snPZWkPXX4/zA0/umwflNi/T86+rwiIH++PeXt/h3o/ayyfr2vbrsXVJbk/X+8NTZ5PztaWD80XHM2/v62Nagvfnzn5rxkYv936LrT0P4yMXsV0z1sa3+7Mj+9eHvfneuxvn8zF/925b814b0qqb/+ez7xkP957r509H7wi/ucGfrSj395K/xi4UAnC4YdPP8ylX7xD3oFQCJlxiKAAARv0lEQVR4nO1daVvqShIWzszcZMKWDSYIEhcEBK7KpuIR9/U495z5/39mCARIVa8JhONz4f0I0nbn7epauqqysyON3c5tvdTItN12u9LI9U46ZfnfbrEqlFM5V1dVTVOUhAdFUTRV1dVMr/O7p7ZR2O0d6aqWoGFMiF5J5X/3DDcD+dsjnU7DDGM2Gvu/e5rrx38A4v9/eyVd5fLgC4d6lIp/Ml8L//gjgP/+M+b/ttsQCEQAauIg5tl8Mfz7X/9Y4I94qSg3dEWWiAkZ7mms8/liWCMVPXmJmB1TeinOCX0xrI2K0yMZHYGhKZujv9dFRU+PQIQHvR7bnL4Y1kNFvh1FJKZQMxviZayFilM1lLpGUBJ78Uzri2EdVKQ4h5MX8JiAR5a6EQpjDVQcsphQVFVXMqVcvder5xquygqGJJS/NoGL+KlgKOwxD43bfaAGyp26q9POMrURw7y+HGKngs6EqpfoEdjyrUv4gZvBROxUUE8nNXHC+ckpcso3hIm4qaBpbDUhivSBCMmmMBEzFackE4p+KPPDuW++MUzES0WedOzUjOSlqa9jNoeJeKloYwWs6D3pH++OfbtNYiJWKnpYKBQ1zMV1PqNuEhNxUrGLFUXoCEZjk5iIk4ojBTOxIXG9iIiPikN1y0QoxEZFGR1PirrNN+MjNipKKLSnb0JEbynERcUeEgr1dmVD/10RFxUNqLOVyspG/tsiJiqwplC3KluImKioQ02h8iKxW0wRExXQkFXcVY37d0Y8VKQgFfo2UV8C8VCRAUpbaa9o2L83YqEiD5V2qCDg5iIWKtD5dLSaUSVRfb3uf45Go+PBY7NbizrKzfeLh/Pzu7vzh4uXm6iD7E0K3Bql+sm+hAUZhopatzlZ5GjweFXl/SF0KjSZa7vVoNYcJe2CZZqGYZimZRXs4eA19Cg3Fz/T2Wx6jmz2+f7PsIPkUw1NnxS4KZpX2tY+FIWlpano9lvjRVreIg1zvEZr1GRuOaS01xV8unovWqaTBHDMQuGzG2aUi7cxC98gxnR8u38KMch+Q1cVqDA1PeMf1I3MAu3F4S1HRe3xw7bQIg2rOKKv8RRQsS5L9tEoGEkqTLt1JTnI0wPJw4yO7J3sSdVpUwtJFD0zkQzXExUf6iLlQoaK2oDgwWfDfqcdVCeACk3+DnUJXJv0KfqyYbekJGNMBJ2HGRkyklHOMCt6pjkWwXvmcFRcF0zmGo3igPwBDMquI+G1OixwiJiQUTwWjvLCEogAGRfCUQ65FT3eFXFUKsar5K7R+iAEwwWbQhdOfmlcFwVEeDAdgWCcZwVEeMg+8wUjnxGUL2jtqFQ0bdEqnWIT/Qaqivj9uxF/sywmes0Z5OmbSCR8wUjzjKldbkb8lIvKUSQq+kWJNRYfwW9gVFaLu5yuNrSkmBjDppymPm6Eh9NCMF6Yo3RkaquAZSVNxbHcfrP7wR9BAypur6J2ybCbaCiwFMafXH2NufjBGKUTrgI3DBWfckyMuQjKRQdQoUpUX+fdjDxc6CqFYWLMBV0ubmTUhFAuKGmpq6Kib0svsRgw3A8gFRIBqLyuyAMOeEa37hzDoes4+5Hy/58Yp5PnatO5oOmLMkNhKwpHVuSouKLpCcc0LRO7tN4SF3YUjECpuzJUhNlHwVvyAaknxv61bbXOzoa2bVEkpkgJhLyRD9wLd3x7fn7+lqX5fOk0JdKA8748FlRddTOVtkqt4JGmokrKhGMVh8f9x/5nq4g9W+dy/kPo4akSGYGhqNAC1cPkbnEKxuDVf07V5sgmqHIs4ik+EM86nX2bR51uLp5JRZJ+JhaBU1zGM9UbKT/oUz5gtNSQouIMb6mxy7oIO129IyvXmp/CJ9DDWzUVyiJ7s0Y86MIlDHHUHgn/1HxH//1PrCjS2Z/wALo5J8ggfD3CeNL0Ogi+5es0pS5DRROr7AKKHXRb8EEUZ1/HLBWB5JFj9Jgdm/QcaiMs3TYKSGGHIv3tOzHKDXGGZZGrR1StkdULZUr1ugwVFl4lduTGBzVYpNPyP45ZVyx8xi46nsxLauj+Csmv8wG+vkAPOfuTOscHJDvpc/A1zpqnF/TkCC4kqOhDKowkbZV9IDmz3RbFggpDhTv72Ts8Qs0WY/guClAVwK7CTJwzRvmBuMgG47S4qEdn1LgRdQ4SVMDjybik302AhzHT3BH8ilAGuev/CgmFMWSOjywQIBZIKNIsJgguwF+iZCMWE6RciKm4BkLhOIxbohpgrDAVi93Q3nY0qYCawjE4l6fI0ioEtAXUFBTLaAFkaQW1BXzAKqdFTAZliAmpuAQiXWRdn159gKdxNvkwfAwqmq6Aj5fmLywA/Q9jYUR9R1udO0+ou9MLIyolHwFFeZNCKrpAoi2ahzoW+76JrCyfstCXeJEsqCZ4uqbgOiIJ99Zcgs7B0+VE+jzA+Ej6bf4FTDbSuUYjrDsRUtEPyj6yOHy8vheJmIM5DQu2w95X5P/S+ABU+H4FVNq2ILcD2ubWXHGnGQ+XDkTc7IRC50COP4gWKjI7DO6hAmnG1q4/qBfJ1uTbXNhbvHwpx4dCWSl4tiY7/O0DiIUx8j+F7p1AKHZ2nqBYzCK08HwSpVX0go9HREWtSD7fALrHjLvu5PQWaeV32+AA8+2ALjSkuclAHh7heeZ/eg+lQjiTn8G/T9/5n5bAVhHVLwAZElFxFVwm3nDNls2IhhbM/uSJQBMq4QoXKMK+Sk4e2HgO25CdARq0M+ruwKN9EI7yAxpR/qdguWLrPcyFKthBQctvrKotxoW+abfmBxkyspducgbETJ12PP0M7gezLxhhBxmFs0WBB5slAx4Y8ITylQW0OnRhImDwhBJRMQrqgYBCvKKo6umutAqDwBGBsgOXPqHAAeAvtQWerEQK4CA49ZlRCJ+sxFSAG+JfWwChTbjCMYI+sIgKsMzZsVp7TDJyvgz7EobhUM5sQmKJXATHUpTpZ0ANi1UFOtH8UxdYp+lvghE8ABsqPVXzINIj4UcFlYWIChDOmEZ2uiOGqnYoSYI4k3zJjtagxHJmy4KjvyAxymtQAfomFDCg0vQ4IATwuH0T6hZQIRFdCEEFmLTnmTYvGaraKCQfKRZ9BXoCrsQaOaAttRakwklKjFIlVoV8bU74aQEQskrfTz5jWadMBG5YBVSAZRqj6qDAsF3N4js9GfUAxWSWK7AALqPvpkAqLgUjeAAmlB+jeQFUiA0oZEL5VIBYoMwRcCQtFTUYyGTkaToFq888olFm1lIVFrAEXN0h5/ilqJDYdpGpoAtEwHalAFeoLlNAD5z3maqAVFBDMwiAisgHFI2KXlipoJ9nkahwLFtQs0DUbUevsYA2wHzqMGApMc5q1PY9RW0fAiokdl1EtU3CsD+uhYVVKP9By0gskw4Y0Zo7UEB7yRizzdiMWWC7a+J29vkQVPAyli17JFNSRYhFVD8PaopFusdvcvHeKC4euLZUxJvuNKqLBwRiFmYSI4c730S0omDEfaEUwR2eJRH4GMYW+CjT7AoOTkJQgZNaZlJtn8kWUlG6acpk4ZCos4pdQZzMYWUYLFAF0ebZifYzZDjwhRrJhZdBwkuBRohw4DUlTR6FmcS4xVxoEVQ3ahkc6BUSNkgO1zTT8/fUSCsb9CA58GhFN0dwk4qo6BJ627SHPNuVChdlaSlKaC6IlLvAd8CEEodmP2SujkQnFLo6ml1uH8K7MsEgqTBUoBv8sao+DlVvOwXuzpVQNIn0tCAOsO4PBhXghWpBYNNdwQvVefgSPttfggnBnI95JhTsHaoKolBHjCXRqYDLtGhhJgngRo5hdTduLa8Apx2lGQhuVD9WkWbwxEozAE9X0PzqIFyaATpYBWcTU2IyRL5umJdIlTCTsP0gvPVN2ly5hcmOxtn8i1DJN89Qad/Pv4AnFD9OzhR0OhU4CsWVisf/sQ7qPJk6rbqShtTeEU6CxysEF1z86GyXnZKGkgPvOKPcQ9oCKWnIi9I5wY9S2JQ0eEIRefBomdYlY0sSDZi9KnIpwehRMuDxP4b7xTyjDuShCs0Qxwl8h2yoLNugfUECdBf4DrVK1JlK8YSt/hhUvCKxoCelzZfpFBmCQSvZ1DRhmCaVINPfyeWhChCLtWGqBioFAXeOOCv5njHKCy99Ge85Vv488Twk0peHcPZFlm9X9a8yWIKBd8FEMFTtkKfZTihE0DKCkVgkzRb1IH1FiRFAKAixYKWS3+Ok/jvwdQMdp/RYOfk0JKhAYpEk6uTxMlmCQX3DjqLpjQM6G52SSisvpMawRigqYFiUHUOUngtLXd7ItipPP3FpEip1wTG3hE7x9Erks5ApdcH1X/Yn5VkMgstkCAbjXWyKqmd6HeD0lTuHFZVeP6hSXdga4YraZ2gOzSSOHBhYp3wnC8DO4XOukW1YiHOMDC4oqI1oSqFU48lQUcWbyXSwYDQduEyH1nuFfkZN2dC8As5KKVfP5RqVI++9eKw6ToZ52CRuVgx7+DgPgnQHJpm1RZqD5/g5e9V4P2Zs1F7ISjxadi3x3pSEqtXn5vdpT6HWEkuVRT7iLecUjP5iz71Sllmgn1H8dgva5HWRvNpmhkx4GFGKhS3bao2Oj0dDm3YVTNN6lPYeXjOu5/Pz859etTDxLVGJt+OVbRNLGO811W2M91lbZb19Ua5um6xO90qih+/Hn8fvl7RlMm3eXZpoyoP3Vp4hNTXLMUzToEb6qbvlCR9RMzpYNfTUYBV9x3n96jj7TI6KGrUhgLdK+jIN9g1zvhL9zcKcaipvkknePRcBa0QdhagX5oPR5IN5EnMg2ViiKup3BTkyeT75bfhOJFNoyilnWG/DhGjywXQ9CNXNZYLlejDfFrs0FWPDXZ4Lx+RfGey5UQRDUSuibODaB7uJG0KBLhMeQrS+4XRKu42vCREus2XDcISXN7cs1cWGJpNrt3Mm2aCHFRKY4Ea2NRf3UgOH9WlrykRrzVVNym05i+7oQuRz3LZ6BBS9JPeuhb5Uw7qC4DaY8OKoTLzxG9btJgRL1NzIvQPfJbacU6T5fxSUS/JkKHpF+qap+yHqlObY78LN8kN4SKU50cIZGlzBUDNLdNS8ZmQuB/abKZ99UK4z/GnEg6Y3+Ooaoc+dpVP4kJniE8WZA0Q8y3Sa7STYK5yEpaM3N62NijwjhdrflIdUm9kdyYc29lPD3oPXBkVWp1mjkJS9mL+5Y5KRzv4SJ+dMcasxwjdHE+8bULG42pDqvtxlVRt5yeSjUHkgE5RvM8wgh6bqiVyk1rS160tKDYhhsdLd6Xh6SFOacaWz2fMwbclPXB2tb+x5H/kSAKgINsIOgN2TvDqwCkRvtLHzLZ2hhpHv1DOqrqqTmMcEXhN1VXdLqSVK96qPZ9Pu8M4YwtbpLHx/eAt2h/f6pZ2LyogJ7PZcb3n+2lRdW+wvN0GlQh6vg4/ieJmTVU6WWfyI0AUfYK9zUi81Mm3XbVcaud5JJ2RGCBXdZn/03hoOz94/BS8U4KD2/eLh7vnX26/nu4eL72EawweQ79zmGhnXzTTqqeDKwJkVSiMGJvh6PRidtYats9Hg+jXyuyE2HUFfd22vMdiCAlhC/7tns9GAtcW/ezYbjWDS1PYtmnFiTxSsqQRsWYnCmC0iolP5S5BaBArali1p34KB/GFi7EkINPHJ1oCKHaclffKUBQUWMLiwprltFFLu/J6S+5b3k5A1lFuERA7EmxW25i6HLBbbIixgnqbC7t6AsqXWOMVNAUpf1lyGXMA+NGt8j+YGAaUvKwlaZDOP+v2KG6ptER5Eq1xKHt0BulAS1rJuEQlE+rKaOAGbPuXiq72tUMQEsvBQ1Ru3++V8vrxLTZEXVbJuERV5Si7L5GJSn1xWEt+t6zW/m4iQ72JbvufrFkxIpAYGmNgGAuNEiFRy+gt4tlgZUrL58mFaCWwRCR2Z1MeEoi/TS3ELOZQlaheUJZu9biEJWh8GeDgJS0a2WBH2Kpx0eUU92orEGrHPIEPRdFemdmeLFWKvl8Dp8oqqKrmIaZlbLIXd28aYDh+6flQ6WUVG8BYRkd/b73QOOp3T35PY8X/qDd7ZJk3RSAAAAABJRU5ErkJggg=="
          alt=""
        />
        <form className="tb-h-search">
          <div className="tb-h-searchLogo"></div>
          <input
            type="text"
            className="tb-h-inputText"
            placeholder="Search Google or type a URL"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button
            style={{ display: "none" }}
            type="submit"
            onClick={submitfunc}
          ></button>
          <div className="tb-h-voiceSearchLogo"></div>
        </form>
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

    @media screen and (max-width: 650px) {
      height: 50px;
    }
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
    @media screen and (max-width: 650px) {
      width: 90vw;
    }
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

    @media screen and (max-width: 400px) {
      font-size: 0.75em;
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
