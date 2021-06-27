import { useEffect, useState } from 'react'

const Timer = ({ gameOver }) => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        if (!gameOver) {
            const interval = setInterval(() => {
                setTime(time + 1)
            }, 1000)
            return () => {
                clearInterval(interval);
            };
        }
    })

    return (
        <div>
            <h1>Timer: {time}</h1>
        </div>
    )
}

export default Timer