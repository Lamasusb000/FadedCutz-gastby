import React from "react"
import Extlink from "../../site/settings/HeaderLinks.json"

class ExternalLinks extends React.Component{
    render(){
        return (
            <ul
            className="navbar-nav mr-auto">
                <li
                className="nav-item">
                    <a
                    href={Extlink["BookingSite"]}
                    className="nav-link">
                        Book Now
                    </a>
                </li>
                {Extlink.LinkSet.map((Link, index) => (
                    <li
                    className="nav-item">
                        <a
                        href={Link.LinkURL}
                        className="nav-link">
                            {Link.LinkName}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }
}

export default ExternalLinks