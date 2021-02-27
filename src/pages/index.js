import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Barbers from "../components/Barbers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Barbers/>
  </Layout>
)

export default IndexPage
