import React, { useEffect, useState } from 'react'
import './styles.css'
import MarvelAPI from './components/MarvelAPI/MarvelAPI'
import axios from 'axios'
import md5 from 'md5'

function App() {
  const [characters, setCharacters] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')
  
  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY
  const ts = Date.now()  // timestamp
  const hash = md5(ts + privateKey + publicKey)

  const [url, setUrl] = useState<string>(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)

  useEffect(()=>{
    const fetch=async()=>{
        const res=await axios.get(url)
        setCharacters(res.data.data.results);
      }
      fetch();
    },[url])
    
    const searchMarvel=()=>{
      setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
    }

    return (
      <>
          <div className="header">
              <div className="bg">
                  <img src="./Images/bg.png" alt="" />
              </div>
              <div className="search-bar">
                <img src="./Images/logo.jpg" alt="logo" />
                <input value={search} placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyUp={searchMarvel}/>
            </div>
        </div>
       <div className="content">
       </div>
    </>
  );
}

export default App
