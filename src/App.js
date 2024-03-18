import React, { Component, useState } from 'react';
import './App.css';
import Home from './Component/Home';
import FindAnime from './Component/FindAnime';

const App =()=> {

  const[pageNumber, setPageNumber]=useState(1)
  const[searchWord, setSearchWord]=useState();

  const[animeList, setAnimeList]= useState(
    [
      {
        anime: "Death Note",
        quotes: ["This World Is Rotten And Those Who Are Making It Rot Deserve To Die. Someone Has To Do It, So Why Not Me? — Light",
                  "When You Die, I'll Be The One Writing Your Name In My Death Note.— Ryuk",
                "I'll Take A Potato Chip... And Eat It! — Light"]
      },
      {
        anime: "Attack On Titan",
        quotes: ["We're Born Free.", 
                  "I Do It Out Of My Own Free Will.",
                "I Want To See And Understand The World Outside"]
      }
    ]
  )

  
  

    return (
      <div>
        {
          pageNumber===1? <Home animeList={animeList} searchWord={searchWord} setPageNumber={setPageNumber} setSearchWord={setSearchWord}/> : null
        }
        {
          pageNumber===2? <FindAnime searchWord={searchWord} setPageNumber={setPageNumber} animeList={animeList}/> : null
        }
      </div>
    )
  
}

export default App;
