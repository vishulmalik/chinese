import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const HeaderMenu = () => {
  const { data } = useStaticQuery(graphql`
    query {
menu(id: "dGVybToxOA==") {
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

const items = data.menu.menuItems.nodes
  return (
    <h1>Hi, welcome to my site!</h1>
{items.map(item =>(

<link to={item.url} key={itme.id}>
{item.label}
</link>
))
<nav>
        <ul>
          <li><Link to="/">Home</Link></li>

        </ul>
   </nav> 
 )
}
export default HeaderMenu
