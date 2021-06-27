import { useEffect, useState } from 'react'
import firebase from './components/firebase'

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
        <div>
            {currentLeaderboard.length > 0
                ? currentLeaderboard.map((player) => {
                    return (
                        <div key={player.player + player.time}>
                            Player: {player.player} : Time: {player.time}
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