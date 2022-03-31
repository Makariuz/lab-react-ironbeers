import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { LinkHome } from "../components/LinkHome"
import './BeerDetail.scss'
import { Loading } from "../components/Loading"
export function BeerDetail(){

    const [beer, setBeer] = useState([])

    const { beerId } = useParams()

      useEffect(() => {
          fetch('https://ih-beers-api2.herokuapp.com/beers')
          .then(res => res.json())
          .then(json=> setBeer(json))
      },[])



      const beerDetail = beer.find((b) => b._id === beerId);
      if (beerDetail === undefined) {
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
            <img src={beerDetail.image_url} alt="" />
        </div>
        <div className="title-header">
            <div className="title">
            <h1> {beerDetail.name}</h1>
            <h1> {beerDetail.attenuation_level}</h1>
            </div>
            <div className="tagline">
            <pre> {beerDetail.tagline}</pre>
            <pre> {beerDetail.first_brewed} </pre>
            </div>  
        </div>
        <p> {beerDetail.description}</p>
        <small> {beerDetail.contributed_by}</small>
        </div>
    )
}