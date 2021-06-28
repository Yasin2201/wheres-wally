import { useState } from "react"
import { Link } from "react-router-dom"
import '../styles/Navbar.css'

const Navbar = () => {
    const [currPath, setCurrPath] = useState(window.location.pathname)

    const setPath = () => {
        setCurrPath(window.location.pathname)
    }

    return (
        <div id='navbar'>
            <h1 id="title">Where's Wally & Friends</h1>
            <h2 onClick={setPath}>{currPath === '/' ? <Link id="links" to="/Leaderboard">Leaderboard</Link> : <Link id="links" to="/">Play</Link>}</h2>
        </div>
    )
}

export default Navbar