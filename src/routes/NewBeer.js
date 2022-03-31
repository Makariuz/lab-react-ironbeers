import { LinkHome } from "../components/LinkHome";
import './NewBeer.scss'
import {IoIosAddCircleOutline} from 'react-icons/io'
import { useState, useEffect } from "react"
import { axios } from "axios"

export function NewBeer(){

    const [newBeer, setNewBeer] = useState('')
    const [newTagline, setNewTagline] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newFirstBrewed, setNewFirstBrewed] = useState('')
    const [newBrewerTips, setNewBrewerTips] = useState('')
    const [newAttenuationLevel, setNewAttenuationLevel] = useState('')
    const [newContributedBy, setNewContributedBy] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            newBeer,
            newTagline,
            newDescription,
            newFirstBrewed,
            newBrewerTips,
            newAttenuationLevel,
            newContributedBy
        }
        const url = "https://ih-beers-api2.herokuapp.com/beers/new"
   
        const newBeerInFO = await axios.post(url, data);
        console.log(newBeerInFO)
    }
    return (
        <div onSubmit={handleSubmit} className="container">
        <LinkHome />
        <h2>Add a new beer</h2>
        <form className="form-input">
        <input type="text" placeholder="name" value={newBeer} onChange={(event) => setNewBeer(event.target.value)}/>
        <input type="text" placeholder="tagline" value={newTagline} onChange={(event) => setNewTagline(event.target.value)}/>
        <input type="text" placeholder="description" value={newDescription} onChange={(event) => setNewDescription(event.target.value)} />
        <input type="text" placeholder="first_brewed" value={newFirstBrewed} onChange={(event) => setNewFirstBrewed(event.target.value)}/>
        <input type="text" placeholder="brewers_tips" value={newBrewerTips} onChange={(event) => setNewBrewerTips(event.target.value)} />
        <input type="number" placeholder="attenuation_level" value={newAttenuationLevel} onChange={(event) => setNewAttenuationLevel(event.target.value)} />
        <input type="text" placeholder="contributed_by" value={newContributedBy} onChange={(event) => setNewContributedBy(event.target.value)}/>
        
        <button type="submit"> Add Beer <IoIosAddCircleOutline /> </button>
        </form>
        </div>
    )
}