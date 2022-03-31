import {GoHome} from 'react-icons/go'
import { Link } from "react-router-dom"
import './LinkHome.scss'

export function LinkHome(){
    return (
        <>
        <Link to="/">
        <nav>
       
          <GoHome className="home-icon"/>
        
        </nav>
        </Link>
        </>
    )
}