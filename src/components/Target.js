const Target = ({ clientPos, getChoice, characters }) => {
    const positionTargetX = clientPos[0] + clientPos[2].left - 20
    const positionTargetY = clientPos[1] + clientPos[2].top - 20
    return (
        <div style={{ border: '2px  solid red', width: '40px', height: '40px', position: "fixed", top: `${positionTargetY}px`, left: `${positionTargetX}px` }}>
            <div style={{ display: 'grid', position: "fixed", top: `${positionTargetY + 43}px`, left: `${positionTargetX - 10}px` }}>
                {characters.map((char) => {
                    return (
                        <div key={char.name}>
                            <button onClick={getChoice}>{char.name}</button>
                        </div>
                    )
                })}
            </div >
        </div >
    )
}

export default Target