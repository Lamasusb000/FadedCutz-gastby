import React from "react"
import Barbers from "../components/Barbers"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BodyFilled from "../components/Body-Filler"
import "../CSS/StorePic.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BodyFilled>
      


    </BodyFilled>
    <Barbers/>
  </Layout>
)

export default IndexPage
