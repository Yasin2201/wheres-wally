const SubmitScore = ({ submitToLeaderboard, getPlayerName, time }) => {
    return (
        <div id="modal">
            <div id="submitBox">
                <h3>Your Time: {time} secs</h3>
                <input type='text' onChange={getPlayerName} placeholder="Player Name" required />
                <button onClick={submitToLeaderboard}>Submit</button>
            </div>
        </div>
    )
}

export default SubmitScore