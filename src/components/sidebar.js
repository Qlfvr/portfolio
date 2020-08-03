import React, { useState } from "react"
import styled from "@emotion/styled"
import BurgerBtn from "./burger-btn"
import { Skills, FindMe } from "../content/data"
import Education from "./education"

function Sidebar() {
  const NavLink = styled.button({
    fontSize: "0.9rem",
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

  const Menu = styled.nav({
    display: "flex",
    justifyContent: "space-between",
    margin: "0 0 1.5rem 0",
    direction: "ltr",
  })

  const Content = styled.div({
    width: "40rem",
    position: "relative",
    zIndex: 2,
    backgroundColor: "white",
    padding: "1rem",
    overflow: "auto",
    direction: "rtl",
  })
  const [isActive, setIsActive] = useState(false)

  function handleClick() {
    setIsActive(!isActive)
  }

  let marginLeft = "-16rem"

  isActive ? (marginLeft = "0rem") : (marginLeft = "-20rem")

  function show(event, target) {
    const tabs = document.getElementsByClassName("tab")

    //hide every section to start clean
    for (let index = 0; index < tabs.length; index++) {
      const element = tabs[index]
      element.style.display = "none"
    }

    // reveal targeted section

    const targetedTab = document.getElementById(target)
    targetedTab.style.display = "block"

    //delete active

    const navLinks = document.getElementsByClassName("nav-link")

    for (let index = 0; index < navLinks.length; index++) {
      const element = navLinks[index]
      element.classList.remove("active")
    }

    // make link active

    event.target.className += " active"
  }

  return (
    <div
      css={{
        gridColumn: "1/2",
        gridRow: "1/2",
        width: "25rem",
        maxWidth: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        marginLeft: marginLeft,
        transitionDuration: "0.5s",
      }}
    >
      <Content>
        <Menu>
          <NavLink
            className="nav-link active"
            onClick={event => {
              show(event, "skills")
            }}
          >
            Skills
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={event => {
              show(event, "edu")
            }}
          >
            Education
          </NavLink>
          <NavLink
            className="nav-link"
            onClick={event => {
              show(event, "findMe")
            }}
          >
            Find me
          </NavLink>

          {/* <NavLink  >Details</NavLink> */}
        </Menu>
        <div css={{ direction: "ltr", marginTop: "3rem" }}>
          <div id="skills" className="tab">
            <Skills />
          </div>
          <div css={{ display: "none" }} id="findMe" className="tab">
            <FindMe />
          </div>
          <div css={{ display: "none" }} id="edu" className="tab">
            <Education />
          </div>
        </div>
      </Content>
      <BurgerBtn onClick={handleClick} isActive={isActive} />
    </div>
  )
}

export default Sidebar
