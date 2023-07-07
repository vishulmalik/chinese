import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const HeaderMenu = () => {
const { data } = useStaticQuery(graphql`
    query MenuQuery {
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
{items}
</nav>
 )
}
export default HeaderMenu
