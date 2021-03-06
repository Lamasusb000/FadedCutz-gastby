import React from "react"
import Barbers from "../components/Barbers"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BodyFilled from "../components/Body-Filler"
import StorePic from "../../site/settings/FrontPage.json"
import "../CSS/StorePic.css"


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
    </BodyFilled>
    <Barbers/>
  </Layout>
)

export default IndexPage
