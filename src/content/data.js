import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export function Skills() {
  const data = useStaticQuery(graphql`
    query {
      allStrapiTechnologies {
        nodes {
          content {
            description
            title
          }
        }
      }
    }
  `)

  const techno = data.allStrapiTechnologies.nodes[0].content
  const component = techno.map(element => {
    return (
      <>
        <h4>{element.title}</h4>
        <p>{element.description}</p>
      </>
    )
  })

  return component
}
export function Test() {
return <div>Anim officia adipisicing ex occaecat. Exercitation duis magna elit commodo nulla commodo consequat eu sit magna magna Lorem id veniam. Velit laboris irure sit Lorem tempor nulla nulla eu nostrud non do ex dolor reprehenderit. Dolor quis deserunt nostrud nisi amet do aliqua nulla id proident in et tempor.</div>
}
