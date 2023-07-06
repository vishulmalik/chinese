import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Menu = () => {
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




  return (
<nav>
{items.map(item =>(

<link to={item.url} key={itme.id}>
{item.label}
</link>
))

</nav>
 )
}
export default HeaderMenu
