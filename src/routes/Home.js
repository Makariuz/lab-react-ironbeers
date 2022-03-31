import beersImg from '../assets/beers.png'
import newBeerImg from '../assets/new-beer.png'
import randomBeerImg from '../assets/random-beer.png'
import './Home.scss'
import { useNavigate } from "react-router-dom";
import { Loading } from '../components/Loading';


export function Home(){
    const navigate = useNavigate()

    return (
        <>
            <div className='container'>
                <div className="Beers-Container">
                    <div className="imgContainer">
                        <img src={beersImg} alt="" onClick={() => navigate(`/beers`)}/>
                    </div>
                    
                    <div className='info'>
                        <h3>All Beers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam quis nostruds. </p>
                    </div>
                </div>
                <div className="New-beer-Container">
                    <div className="imgContainer">
                        <img src={newBeerImg} alt="" onClick={() => navigate(`/new-beer`)} />
                    </div>
                    <div className='info'>
                        <h3>New Beer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam quis nostruds. </p>
                    </div>
                </div>
                <div className="Random-beer-Container">
                    <div className="imgContainer">
                        <img src={randomBeerImg} alt="" onClick={() => navigate(`/random-beer`)}/>
                    </div>
                    <div className='info'>
                        <h3>Random Beer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam quis nostruds. </p>
                    </div>
                </div>
            </div>
        </>
    )
}