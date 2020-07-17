import React, { useState } from "react"
import styled from "@emotion/styled"
import BurgerBtn from "./burger-btn"

function Sidebar() {
  const Container = styled.div({
      width: "40rem",
    position: "relative",
    zIndex: 2,
    backgroundColor: "white",
  })
  const [isActive, setIsActive] = useState(false)

  function handleClick() {
    setIsActive(!isActive)
  }

  let marginLeft = "-16rem"

  isActive ? (marginLeft = "2rem") : (marginLeft = "-16rem")

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
      }}
    >
    
      <Container> 
</Container> 
      <BurgerBtn onClick={handleClick} isActive={isActive} />
    </div>
  )
}

export default Sidebar
