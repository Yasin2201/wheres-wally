const SubmitScore = ({ submitToLeaderboard, getPlayerName, time }) => {
    const check = () => {
        console.log(`${window.location.href}leaderboard`)
    }
    return (
        <div id="modal">
            <div id="submitBox">
                <button onClick={check}>Check</button>
                <h3>Your Time: {time} secs</h3>
                <input type='text' onChange={getPlayerName} placeholder="Player Name" required />
                <button onClick={submitToLeaderboard}>Submit</button>
            </div>
        </div>
    )
}

export default SubmitScore