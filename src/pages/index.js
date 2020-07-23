import React from "react"
import { Global } from "@emotion/core"
import Layout from "../components/layout"
import burger from "../assets/burger.css"
import style from "../assets/style.css"
import Sidebar from "../components/sidebar"

export default function IndexPage() {
  return (
    <>
      <Global styles={burger + style} />

      <Layout>
        <Sidebar/>
      </Layout>
    </>
  )
}
