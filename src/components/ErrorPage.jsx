import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  const Div = styled.div`
    grid-column: 1/2;
    font-family: "Ubuntu", sans-serif;
    /* max-width: 700px;
    width: 700px;
    margin: 0 auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    grid-row: 2/3;
    & > .error-code {
      font-size: 5rem;
      font-weight: 700;
      color: fuchsia;
      filter: blur(2px);
    }

    & > .error-text {
      font-size: 1.5rem;
      color: green;
    }

    & > .error-img {
      border-radius: 8px;
    }
  `;

  return (
    <Div>
      <p className="error-code">404</p>
      <p className="error-text">
        The page you are looking is not found. But here's the bear...
      </p>
      <img
        src="https://placebear.com/200/300"
        alt="a bear"
        className="error-img"
      />
    </Div>
  );
};

export default ErrorPage;
