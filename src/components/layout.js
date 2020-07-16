import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
// import background from "../assets/bg.png"
import BgImage from "../components/bg-image"
import {mq} from "../utils/utils"



const Container = styled.div(
    mq({
      margin: ["3rem 2rem", "3rem 4rem", "3rem 4rem", "3rem 8rem"],
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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

      {children}

      </Container>
    </>
  )
}
