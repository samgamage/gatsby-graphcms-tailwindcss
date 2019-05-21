import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Card from '../components/Card'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          gcms {
            posts {
              status
              updatedAt
              createdAt
              title
              body
            }
          }
        }
      `}
      render={data => {
        if (!data.gcms) {
          return <p>Loading…</p>
        }
        return data.gcms.posts.map(p => (
          <Card title={p.title} elevation={p.body} />
        ))
      }}
    />
  </Layout>
)

export default IndexPage
