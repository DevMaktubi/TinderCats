import { SCardContainer, SCardInfo, SContainer, STinderCard } from "./styles";
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading'
import axios from "axios";

interface catProps {
  id: string;
  url: string;
}

export interface HomepageProps {
  favCats: catProps[];
  setFavCats: any;
}

export function Homepage({favCats, setFavCats}: HomepageProps) {

  const loadCats = async () => {
    axios.defaults.headers.common['x-api-key'] = `${process.env.REACT_APP_CATAPI_KEY}`;

    const response = await axios.get("https://api.thecatapi.com/v1/images/search", { params: {limit: 20, size: "full"}})

    setCats([...response.data, ...cats, ])
  }

  const [newFavCats, setNewFavCats] = useState<catProps[]>([])
  const [loading, setLoading] = useState(true)
  const [cats, setCats] = useState<catProps[]>([]);
  const [lastDirection, setLastDirection] = useState("")
  const onSwipe = (direction: string, cat: catProps) => {
    if(direction === 'up' || direction === 'down' ) {
      return
    }
    if(direction === 'right') {
      setNewFavCats([cat, ...newFavCats ])
      setFavCats([...newFavCats, cat ])
      console.log(newFavCats)
    }
    if(cats.length <= 3) {
      return
    }
    setLastDirection(direction)
  }

  const needReload = cats.length <= 5

  useEffect(() => {
    let isSub = true;
    setNewFavCats(favCats)
    loadCats()
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return () => {isSub = false}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needReload])

  return (
    <SContainer>
      <SCardContainer>
        {loading ? 
        <ReactLoading  color="#7159c1"/>
        : cats.map((cat) => (
          <STinderCard key={cat.id} onSwipe={(d) => onSwipe(d,cat)} onCardLeftScreen={() => {}} preventSwipe={['down','up']}>
            <div style={{backgroundImage: `url(${cat.url})`}}>
            </div>
          </STinderCard>
        )) 
        }
      </SCardContainer>
      <SCardInfo>{lastDirection ? <p>You swiped {lastDirection}</p> : <p>Go ahead and swipe!</p>}</SCardInfo>
    </SContainer>
  )
}
