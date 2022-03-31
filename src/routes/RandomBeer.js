import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { LinkHome } from "../components/LinkHome"
import './BeerDetail.scss'
import { Loading } from "../components/Loading"

export function RandomBeer(){

    const [beer, setBeer] = useState([])

  

      useEffect(() => {
          fetch('https://ih-beers-api2.herokuapp.com/beers/random')
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
      /* console.log(beerDetail) */


    return (
        <div className="container">
        <LinkHome />
        <div className="image-container">
            <img src={beer.image_url} alt="" />
        </div>
        <div className="title-header">
            <div className="title">
            <h1> {beer.name}</h1>
            <h1> {beer.attenuation_level}</h1>
            </div>
            <div className="tagline">
            <pre> {beer.tagline}</pre>
            <pre> {beer.first_brewed} </pre>
            </div>  
        </div>
        <p> {beer.description}</p>
        <small> {beer.contributed_by}</small>
        </div>
    )
}