import * as React from "react"
import Layout from "../components/layout"
import {Helmet} from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Helmet>
      <Layout></Layout>
    </>
  )
}

export default IndexPage
