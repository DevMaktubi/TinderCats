import { SContainer, SHeader, SLink } from "./styles";

export function Sidebar() {
  return (
    <SContainer>
      <SHeader>
        <h1>Cats!</h1>
      </SHeader>
      <SLink to="/">Homepage</SLink>
      <SLink to="mycats">My cats</SLink>
    </SContainer>
  )
}