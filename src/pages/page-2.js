import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Second Page</h1>
    <p>Welcome to page 2, sir</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
