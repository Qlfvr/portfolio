import React from "react"
import styled from "@emotion/styled"

export default function SidebarMenu() {
  const Li = styled.li({
    fontSize: "0.9rem",
    listStyleType: "none",
    display: "inline-block",
    padding: "0 0.5rem",
    fontWeight: "bold",
    "&:after": {
      content: "''",
      height: "3px",
      width: "0px",
      display: "block",
      background: "#333333",
     
    },
    "&.active:after": { width: "100%", transitionDuration: "500ms" },
  })

  const Ul = styled.ul({
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 0 1.5rem 0",
    direction: "ltr",
  })

  return (
    <Ul>
      <Li className="active">Technologies</Li>
      <Li>Studies</Li>
    </Ul>
  )
}
