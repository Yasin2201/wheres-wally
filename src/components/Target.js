import '../styles/Target.css'

const Target = ({ clientPos, getChoice, characters }) => {
    const positionTargetX = clientPos[0] + clientPos[2].left - 20
    const positionTargetY = clientPos[1] + clientPos[2].top - 20
    return (
        <div id="targetBox" style={{ top: `${positionTargetY}px`, left: `${positionTargetX}px` }}>
            <div style={{ display: 'grid', position: "fixed", top: `${positionTargetY + 47}px`, left: `${positionTargetX - 10}px` }}>
                {characters.map((char) => {
                    return (
                        <div key={char.name}>
                            <button style={{ width: '100%' }} onClick={getChoice}>{char.name}</button>
                        </div>
                    )
                })}
            </div >
        </div >
    )
}

export default Target