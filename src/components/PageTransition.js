import styled from "styled-components";

const PageTransitionDiv = styled.div`
  animation-name: test;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-direction: normal;

  @keyframes blurTransition {
    from {
      filter: blur(8px);
    }

    to {
      filter: blur(0);
    }
  }
`;

export default PageTransitionDiv;
