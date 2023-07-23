import ContactAnim from "../assets/contact_anim.json";
import React from "react";
import Lottie from "lottie-react";
import styled from "styled-components";

const Div = styled.div`
  font-family: "Ubuntu", sans-serif;
  height: 100vh;
  display: grid;
  grid-template-rows: 20% repeat(2, 40%);

  & > p {
    text-align: left;
    padding: 8px 0px 8px 16px;
    font-size: 2rem;
    color: fuchsia;
    font-weight: 700;
    filter: blur(2px);
  }

  & > .lottie {
    max-width: 450px;
  }

  & > div > a {
    font-size: 1.5rem;
    font-weight: 700;
    color: fuchsia;
    filter: blur(2px);
    text-decoration: none;

    animation-name: blur-shadow;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes blur-shadow {
    from {
      filter: blur(2px);
    }
    to {
      filter: blur(0.5px);
      text-shadow: 1px 1px 4px 2px fuchsia;
    }
  }
`;

const SwipableContact = () => {
  return (
    <Div>
      <p>Contact</p>
      <Lottie className="lottie" animationData={ContactAnim} loop={true} />
      <div>
        <a
          href="mailto:pkarthicbz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          pkarthicbz@gmail.com
        </a>
      </div>
    </Div>
  );
};

export default SwipableContact;
