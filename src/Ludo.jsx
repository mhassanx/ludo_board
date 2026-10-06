import { useState } from "react"

export default function Ludo() {

    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 })

    let updateBlue = () => {


        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 };

        });

    }


    let updateYellow = () => {

        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 };
        })
    }
    return (
        <div>
            <p >blue= {moves.blue}</p>
            <button style={{ backgroundColor: "blue" }} onClick={updateBlue} > +1</button>
            <p>yellow = {moves.yellow}</p>
            <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>+1</button>
            <p>green = 0</p>
            <button style={{ backgroundColor: "green" }}>+1</button>
            <p>red = 0</p>
            <button style={{ backgroundColor: "red" }}>+1</button>


        </div >
    )
}


