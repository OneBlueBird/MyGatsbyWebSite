import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I am using Gatsby tutorial to develop this page :)</p>
      <StaticImage alt="hanging wood" src="../images/wooden-hanging.jpg"></StaticImage>
    </Layout>

  )
}

// Step 3: Export your component
export default IndexPage