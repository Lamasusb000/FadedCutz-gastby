import React from "react"
import "../CSS/Barbers.css"
import Barbers from "../../site/settings/Barbers.json"

const BarbersDisplay = () => (
    <div
        className="Barber-List">
        <div
        className="Barbers-Container"
        >
            <img src={Barbers[0].picture} alt="Barber Profile"></img>
            <div 
                className="Barber-About">
                <h1>{Barbers[0].name}</h1>
                <p
                    className="Barber-Phone"
                    >{Barbers[0].phone}</p>
                <p>{Barbers[0].description}</p>
            </div>
        </div>
        <div
        className="Barbers-Container"
        >
            <img src={Barbers[0].picture} alt="Barber Profile"></img>
            <div 
                className="Barber-About">
                <h1>{Barbers[0].name}</h1>
                <p
                    className="Barber-Phone"
                    >{Barbers[0].phone}</p>
                <p>{Barbers[0].description}</p>
            </div>
        </div>
        <div
        className="Barbers-Container"
        >
            <img src={Barbers[0].picture} alt="Barber Profile"></img>
            <div 
                className="Barber-About">
                <h1>{Barbers[0].name}</h1>
                <p
                    className="Barber-Phone"
                    >{Barbers[0].phone}</p>
                <p>{Barbers[0].description}</p>
            </div>
        </div>
    </div>
)

export default BarbersDisplay