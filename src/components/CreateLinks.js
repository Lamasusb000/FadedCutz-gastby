import React from "react"
import Extlink from "../../site/settings/HeaderLinks.json"

class ExternalLinks extends React.Component{
    render(){
        return (
            <ul
            className="navbar-nav mr-auto">
              {Extlink["Link Set"].LinkURL}
            </ul>
        )
    }
}

export default ExternalLinks