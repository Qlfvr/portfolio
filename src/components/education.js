import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Education() {
  const eduData = useStaticQuery(graphql`
    query {
      allStrapiEducation (sort: { fields: [order], order: DESC }){
        nodes {
          id
          Title
          type
          icon {
            id
            childImageSharp {
              fixed(width: 32, height: 32) {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
  `)

  const edu = eduData.allStrapiEducation.nodes

  const component = edu.map(element => {
    return (
      <div key={element.id} css={{ display: "flex" }}>
        <img
          src={element.icon.childImageSharp.fixed.srcWebp}
          width="32px"
          height="32px"
        />
        <p css={{ paddingLeft: "1rem" }}>{element.Title}</p>
      </div>
    )
  })

  return component
}

export default Education
