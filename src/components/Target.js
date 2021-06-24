const Target = ({ clientPos }) => {
    return (
        <div style={{ border: '2px  solid red', width: '50px', height: '50px', position: "fixed", top: `${clientPos[1] - 25}px`, left: `${clientPos[0] - 25}px` }}>
            <div style={{ display: 'grid', position: "fixed", top: `${clientPos[1] + 32}px`, left: `${clientPos[0] - 25}px` }}>
                <button>Wally</button>
                <button>Wizard</button>
                <button>Odlaw</button>
            </div>
        </div>
    )
}

export default Target