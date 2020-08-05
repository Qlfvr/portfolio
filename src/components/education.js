import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

function Education() {
  const eduData = useStaticQuery(graphql`
    query {
      allStrapiEducation(sort: { fields: [order], order: DESC }) {
        nodes {
          id
          Title
          type
          icon {
            id
            childImageSharp {
              fixed(width: 32, height: 32, quality: 90, webpQuality: 90) {
                ...GatsbyImageSharpFixed
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
        <div css={{ width: "32px", height: "32px" }}>
          <Img
            fixed={element.icon.childImageSharp.fixed}
            objectFit="contain"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <p css={{ paddingLeft: "1rem" }}>{element.Title}</p>
      </div>
    )
  })

  return component
}

export default Education
