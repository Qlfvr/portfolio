import React, { useState } from "react"
import styled from "@emotion/styled"
import BurgerBtn from "./burger-btn"
import SidebarMenu from "./sidebar-menu"
import { withAssetPrefix } from "gatsby"

function Sidebar() {
  const Container = styled.div({
    width: "40rem",
    position: "relative",
    zIndex: 2,
    backgroundColor: "white",
    padding: "1rem",
  })
  const [isActive, setIsActive] = useState(false)

  function handleClick() {
    setIsActive(!isActive)
  }

  let marginLeft = "-16rem"

  isActive ? (marginLeft = "0rem") : (marginLeft = "-16rem")

  return (
    <div
      css={{
        position: "absolute",
        width: "20rem",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        marginLeft: marginLeft,
        transitionDuration: "1s",
        alignItems: "stretch",
        backgroundColor: "white",
      }}
    >
      <Container>
        <SidebarMenu />
        <h5>JavaScript</h5>

        <p>
          ES2015+ / React / Gatsby / node.js / CSS-in-JS (Emotion) / express
        </p>

        <h5>Front-End</h5>
        <p>HTML 5 / CSS 3 / Sass / Bootstrap / Tailwind / Wordpress / Gatsby</p>

        <h5>Back-End</h5>
        <p>Node.js / express / MongoDB / Mongoose</p>
      </Container>
      <BurgerBtn onClick={handleClick} isActive={isActive} />
    </div>
  )
}

export default Sidebar
