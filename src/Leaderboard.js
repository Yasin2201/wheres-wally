import { useEffect, useState } from 'react'
import firebase from './components/firebase'
import uniqid from 'uniqid'

const Leaderboard = () => {
    const [currentLeaderboard, setCurrLeaderboard] = useState([])

    useEffect(() => {
        const getLeaderboard = async () => {
            try {
                const leaderboardData = []
                const db = firebase.firestore()
                const ref = db.collection("leaderboard")
                    .orderBy("time", "asc")
                const data = await ref.get()
                data.docs.map((doc) => {
                    return leaderboardData.push(doc.data())
                })
                setCurrLeaderboard(leaderboardData)
            } catch (err) {
                console.log(err.message)
            }
        }
        getLeaderboard()
    }, [])

    return (
        <div id="leaderboard">
            <h2 style={{ margin: '0' }}>Leaderboard</h2>
            <hr />
            {currentLeaderboard.length > 0
                ? currentLeaderboard.map((player) => {
                    return (
                        <div key={uniqid()}>
                            <h3>{player.player}</h3>
                            <h3>{player.time} secs</h3>
                            <hr />
                        </div>
                    )
                })
                : <div>
                    <h1>Empty</h1>
                </div>
            }
        </div>
    )
}

export default Leaderboard