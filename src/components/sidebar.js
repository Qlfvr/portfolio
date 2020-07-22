import React, { useState } from "react"
import styled from "@emotion/styled"
import BurgerBtn from "./burger-btn"
import SidebarMenu from "./sidebar-menu"

function Sidebar() {
  const Content = styled.div({
    width: "40rem",
    position: "relative",
    zIndex: 2,
    backgroundColor: "white",
    padding: "1rem",
    overflow :"auto",
    direction: "rtl"
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
        gridColumn: "1/2",
        gridRow: "1/2",

        width: "20rem",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        marginLeft: marginLeft,
        transitionDuration: "1s",
      }}
    >
      <Content>
        <SidebarMenu />
        <div css={{direction: "ltr"}}>
        <h5>JavaScript</h5>

        <p>
          ES2015+ / React / Gatsby / node.js / CSS-in-JS (Emotion) / express
        </p>

        <h5>Front-End</h5>
        <p>HTML 5 / CSS 3 / Sass / Bootstrap / Tailwind / Wordpress / Gatsby</p>

        <h5>Back-End</h5>
        <p>Node.js / express / MongoDB / Mongoose</p>
        </div>
      </Content>
      <BurgerBtn onClick={handleClick} isActive={isActive} />
    </div>
  )
}

export default Sidebar
