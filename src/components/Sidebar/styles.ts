import { Link } from "react-router-dom";
import styled from "styled-components";

export const SContainer = styled.div`
  width: max(20%, 15rem);
  background-color: var(--bg);
  height: 100vh;

  display: flex;
  flex-direction: column;
  padding: 5rem 0;

  @media (max-width: 1024px) {
    width: 12rem;
  }

  align-items: center;
`

export const SHeader = styled.nav`
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: 2rem;

  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`;

export const SLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: 500;
  color: var(--primary);

  transition: all .2s;

  &:hover {
    filter: brightness(.8);
  }

  @media (max-width: 375px) {
    font-size: 1rem;
  }
`

