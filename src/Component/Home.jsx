import React, { useState } from "react";

const Home =({animeList, setSearchWord, searchWord,setPageNumber})=>
{

    const checkTitle=()=>
    {

      const filteredTitle = animeList.filter((item)=> {
        return(item.anime==searchWord)
            });
        const listLength=filteredTitle.length;
       return(listLength);
    }
    const[error, setError]=useState("");
    const handleFind=()=>
    {
        if(!searchWord)
        {
            setError("Enter the Search Item")

        }
        else if(!checkTitle())
        {
            setError("Anime not Found")
        }
        else
        {
            setPageNumber(2);
            setError(null);
        }
    }
    
    return(
        <div>
            <div className="navBar">
                riyuzaki
            </div>
            <div className="home-body">
                <input className="search-box" placeholder="FIND YOUR ANIME" onChange={(event)=>{setSearchWord(event.target.value)}}/>
                <button className="search-button" onClick={handleFind}> FIND</button>
                <div className="error">{error}</div>
            </div>
        </div>
    )
}

export default Home;