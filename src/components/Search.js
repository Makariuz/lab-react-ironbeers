import { useState } from "react"
import { useEffect } from "react/cjs/react.production.min"
import './Search.scss'

export function Search({beers}){

    const [input, setInput] = useState("")


  /*   useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q={query}}`)
        .then(res => res.json())
        .then(json=> setInput(json))
    },[]) */

    const handleSearch = (e) => {
        setInput(e.target.value)

        beers.filter((beer) => {
            if (input.includes(beer.name)) {console.log(beer)}
            return beer.name.toLowerCase().includes(e.target.value)
        })
     
    }


    return(
        <div className="search-bar">
            <input 
                value={input} 
                onChange={handleSearch} 
                className="beer-search" 
                type='text' 
                placeholder="Search" />

        </div>
    )
}