import React from "react"
import styled from "@emotion/styled"
import BgImage from "../components/bg-image"
import { mq } from "../utils/utils"
import Main from "../components/main"


const Container = styled.div(
  mq({
    display: "grid",
    gridTemplateRows: "100vh",
    gridTemplateColumns: "1fr",
    overflow:"hidden"
  
  })
)

export default function Layout({ children }) {

  return (
    <>
      <Container>
        <BgImage />
        <Main />

        
        {children}
      </Container>
    </>
  )
}
