import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const MainMenu = () => {
  const { menu } = useStaticQuery(graphql`
    query menus {
    nodes {
      id
      databaseId
      name
      menuItems {
        edges {
          node {
            id
            label
            parentId
            url
          }
        }
      }
    }
  }
  
 return (
   <nav>
   <ul>
   <li>Main Menu</li>
   </ul>
   </nav>
  )
}

export default MainMenu

