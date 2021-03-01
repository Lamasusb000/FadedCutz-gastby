import React from "react"
import "../CSS/Barbers.css"
import Barbers from "../../site/settings/Barbers.json"

var List = Barbers

class BarbersDisplay extends React.Component{
    render(){
        return (
            <div
            className="Barber-List">
                {Barbers.barber.map((barber, index) => (
                    <div className="Barber-Container">
                        <img src={barber.photo} alt={barber.name}></img>
                        <div className="Barber-About">
                            <h1>{barber.name}</h1>
                            <p className="Barber-Phone">{barber.phone}</p>
                            <p>{barber.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default BarbersDisplay