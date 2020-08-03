import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import {
  faGithub,
  faLinkedinIn,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export function Skills() {
  const data = useStaticQuery(graphql`
    query {
      allStrapiTechnologies {
        nodes {
          content {
              id
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
      <div key={element.id}>
        <h4>{element.title}</h4>
        <p>{element.description}</p>
      </div>
    )
  })

  return component
}
export function FindMe() {
  const Item = styled.div({ padding: "0.2rem 0" })

  return (
    <div id="swup" className="transition-fade">
      <Item>
        <a href="https://www.linkedin.com/in/qlfvr/">
          <FontAwesomeIcon icon={faLinkedinIn} />
          <span css={{ paddingLeft: "0.5rem" }}> ./qlfvr</span>
        </a>
      </Item>
      <Item>
        <a href="#">
          <FontAwesomeIcon icon={faEnvelope} />
          <span css={{ paddingLeft: "0.5rem" }}>lefevre.quentin@gmail.com</span>
        </a>
      </Item>
      <Item>
        <a href="#">
          <FontAwesomeIcon icon={faDiscord} />
          <span css={{ fontWeight: "bold", paddingLeft: "0.5rem" }}>Qlfvr</span>
          #2854
        </a>
      </Item>

      <Item>
        <FontAwesomeIcon icon={faGithub} />
        <a href="https://github.com/Qlfvr">
          <span css={{ paddingLeft: "0.5rem" }}> ./Qlfvr</span>
        </a>
      </Item>
    </div>
  )
}


