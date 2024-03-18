import React, { useState } from "react";

const FindAnime=({ searchWord, animeList})=>
{

    const [result, setResult]=useState();
    const randomIndex =(max, min)=>
    {
        return Math.floor(Math.random() * (max - min) + min);
    }
   const handleGen=()=>
   {
      const selectedAnime = animeList.filter(item=>item.anime==searchWord);
      let min= 0;
      let max = selectedAnime[0].quotes.length;
      console.log(selectedAnime[0].quotes[randomIndex(max, min)]);
      setResult(selectedAnime[0].quotes[randomIndex(max, min)]);
   }
   
    return(<div>
         <div className="navBar">
                riyuzaki
            </div>
            <div className="home-body">
                <div className="anime-title">{searchWord}</div>
                <button className="quote-generate" onClick={handleGen} >QUOTE GENERATOR</button>
                <div className="random-quote">{result}</div>
            </div>
    </div>)
}

export default FindAnime;