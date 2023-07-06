import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const HeaderMenu = () => {
const { data } = useStaticQuery(graphql`
    query MenuQuery {
  wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
    menuItems {
      nodes {
        id
        url
        label
      }
    }
  }
}
`)


const items = data.wpMenu.menuItems.nodes

  return (
<nav>
{items}
</nav>
 )
}
export default HeaderMenu
