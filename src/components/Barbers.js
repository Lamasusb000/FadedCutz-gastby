import React from "react"
import "../CSS/Barbers.css"
import Barbers from "../../site/settings/Barbers.json"



class BarbersDisplay extends React.Component{
    render(){
        return (
            <div
            className="Barber-List">
                {Barbers.barber.map((barber, index) => (
                    <div className="Barber-Container">
                        <div
                        className="Barber-Image"
                        style={{
                            backgroundImage: `url(${barber.photo})`
                        }}></div>
                        <div className="Barber-About">
                            <h1>{barber.name}</h1>
                            <p className="Barber-Phone">
                                <a href={GetTellLink(barber.phone)}>
                                    {FormatTellLink(barber.phone)}
                                </a>
                            </p>
                            <p>{barber.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

function GetTellLink(PhoneNumber){
    return `tel:${PhoneNumber}`
}

function FormatTellLink(phone) {
    phone = phone.replace(/[^\d]/g, "");

    if (phone.length === 10) {
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }

    return null;
}

export default BarbersDisplay