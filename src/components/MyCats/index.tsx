import { useEffect } from "react";
import { HomepageProps } from "../Homepage";
import { SContainer } from "./styles";

export function MyCats({favCats, setFavCats}: HomepageProps) {
  useEffect(() => {
    let isSub = true
    console.log(favCats)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return () => {isSub = false}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <SContainer>
      {favCats.length >= 1 ? favCats.map(cat => (
        <div key={cat.id}>
          <img src={`${cat.url}`} alt="Cat" ></img>
        </div>
    ))
    :
    <h1>No fav cats yet...</h1>
    }
    </SContainer>
  )
}