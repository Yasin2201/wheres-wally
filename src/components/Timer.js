import { useEffect } from 'react'
const Timer = ({ gameOver, runTimer, time }) => {

    useEffect(() => {
        if (!gameOver) {
            const interval = setInterval(() => {
                runTimer()
            }, 1000)
            return () => {
                clearInterval(interval);
            };
        }
    })

    return (
        <h1 id="timer">{time} secs</h1>
    )
}

export default Timer