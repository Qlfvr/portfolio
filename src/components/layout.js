import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
// import background from "../assets/bg.png"
import BgImage from "../components/bg-image"
import {mq} from "../utils/utils"
import SideMenu from "./side-menu"



const Container = styled.div(
    mq({
      display: "flex",
      flexDirection: "row",
    
      position : "absolute"
    })
  )

export default function Layout({ children }) {
  return (
    <>
      {/* <Global
        styles={css`
        height : 1vh
        `}
      /> */}
      <BgImage />
      
      <Container>
      <SideMenu />
      {children}

      </Container>
    </>
  )
}
