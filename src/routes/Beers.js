import { Link, useParams } from "react-router-dom"

import {GoHome} from 'react-icons/go'
import { LinkHome } from "../components/LinkHome"
import './Beers.scss'
import { useState, useEffect } from "react"
import { axios } from "axios"
import { Loading } from "../components/Loading"
import { Search } from "../components/Search"

/* https://ih-beers-api2.herokuapp.com/beers */
export function Beers(){

    const [beer, setBeer] = useState([])
    const [filteredBeer, setFilteredBeer] = useState(beer)


    const { beerId } = useParams()

  /*   const getBeer = async () => {
        
        const url = "https://ih-beers-api2.herokuapp.com/beers"
        const result = await axios.get(url)
        setBeer(result)
    }
 */
  /*   useEffect(() => {
        getBeer();
      }, []); */

      useEffect(() => {
          fetch('https://ih-beers-api2.herokuapp.com/beers')
          .then(res => res.json())
          .then(json=> setBeer(json))
      },[])

      if (beer.length === 0) {
        return (
            <div className="loading">
               <Loading />
            </div>
        )
      }
      

      const handleFilterBeer= (input) => {
        const filtered = beer.filter((element) => {
         
          return element.name.toLowerCase().includes(input.toLowerCase())
        })
    
        setFilteredBeer(filtered)
       
      }

    return (
        <>
            <div className="container">
            <LinkHome />
            <Search beers={beer} />
              {beer.map((b) => {
                  return (
                      
              <div key={b._id} className="beer-info">
                   
                    <Link to={b._id}>
                  <div className="image-left" >
                      <img src={b.image_url} alt="" />
                  </div>
                  </Link>
                  <div className="info-right">
                      <h3>{b.name}</h3>
                      <h4>{b.tagline}</h4>
                      <small>{b.contributed_by}</small>
                  </div>
              </div>
                        
              )
            })}
           
            </div>
        </>
    
    )
}