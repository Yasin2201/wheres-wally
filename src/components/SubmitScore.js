const SubmitScore = ({ submitToLeaderboard, getPlayerName }) => {
    return (
        <div id="modal">
            <input type='text' onChange={getPlayerName} />
            <button onClick={submitToLeaderboard}>Submit</button>
        </div>
    )
}

export default SubmitScore