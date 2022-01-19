import styled from "styled-components";

export const SContainer = styled.div`
  padding: 2rem 1rem;
  width: 80%;
  max-width: 1600px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4,1fr);
  gap: 1rem;
  outline: 1px solid red;

  div {
    width: 250px;
    height: 250px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

`

export const SFavCatsGrid = styled.div`
  
`