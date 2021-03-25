import React from "react"
import Barbers from "../components/Barbers"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BodyFilled from "../components/Body-Filler"
import StorePic from "../../site/settings/FrontPage.json"
import "../CSS/StorePic.css"
import HeaderLinks from "../../site/settings/HeaderLinks.json"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BodyFilled>
      <img 
        className="Landscape"
        src={StorePic["landscape"]}
        alt="Faded Cutz Display Landscape"
      />
      <img
      className="Portrait"
      src={StorePic["portrait"]}
      alt="Faded Cutz Display Portrait"
      />
      <h1
      style={{
        color: "white",
        textAlign: "center"
      }}>
        <a 
        href= {HeaderLinks["BookingSite"]}
        style={{
          color: "inherit"
        }}>
          Book Now
        </a>
      </h1>
    </BodyFilled>
    <Barbers/>
  </Layout>
)

export default IndexPage
