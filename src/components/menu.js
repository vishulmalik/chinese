import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Menu = () => {
const { data } = useStaticQuery(graphql`
    query MenuQuery {
wpMenu(id: "dGVybToxOA==") {
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




  return (
<nav>
{data.wpMenu.menuItems.nodes}
</nav>
 )
}
export default HeaderMenu
