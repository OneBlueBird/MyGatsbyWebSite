import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ( { data } ) => {
    return (
        <Layout pageTitle = "My Notes">
            <p>All my cool notes, observations about this project will go here..</p>
            <ul>
            {
                data.allFile.nodes.map(node => (
                <li key={ node.name }>
                    { node.name }
                </li>
                ))
            }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
  allFile(filter: {extension: {eq: "mdx"}}) {
    nodes {
      name
    }
  }
}
`
export default BlogPage