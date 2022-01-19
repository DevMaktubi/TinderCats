import TinderCard from "react-tinder-card";
import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1600px;
  overflow-x: hidden;
`

export const SCardContainer = styled.div`
  width: 90vw;
  max-width: 260px;
  height: 300px;
`;

export const STinderCard = styled(TinderCard)`
  position: absolute;
  margin-bottom: 2rem;

  &:hover {
    cursor: default;
  }

  div {
    position: relative;
    background-color: #fff;
    width: 80vw;
    max-width: 260px;
    height: 300px;
    background-size: cover;
    background-position: center;

    h3 {
      position: absolute;
      bottom: 0;
      margin: 10px;
      color: #fff;
    }
  }

`

export const SCardInfo = styled.h1`
  margin-top: 2rem;
`;