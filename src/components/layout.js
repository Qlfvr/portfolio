import React from "react"
import styled from "@emotion/styled"
import BgImage from "../components/bg-image"
import { mq } from "../utils/utils"
import Sidebar from "./sidebar"

const Container = styled.div(
  mq({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  })
)

export default function Layout({ children }) {
  return (
    <>
      <BgImage css={{display : "none"}} />
      <Container>
        <Sidebar/>
        {children}
      </Container>
    </>
  )
}
