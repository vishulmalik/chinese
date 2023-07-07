import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const HeaderMenu = () => {
const { data } = useStaticQuery(graphql`
    query {
allWpMenuItem(filter: { locations: { eq: GATSBY_HEADER_MENU } }) {
    nodes {
      id
      label
      title
      path
      parentId
    }
  }
}
`)


const items = data.allWpMenuItem.nodes 
  return (
<nav>

</nav>
 )
}
export default HeaderMenu

