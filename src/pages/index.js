import React from "react"
import styled from "@emotion/styled"
import { Global, css, jsx } from "@emotion/core"
import Layout from "../components/layout"
import { mq } from "../utils/utils"
import burger from "../assets/burger.css"



export default function Index() {
  return (
<>
    <Global css={css`${burger}`}/>

    <Layout>
      <div
        css={mq({
          display: "flex",
          flexDirection: "column",
          marginTop : "3rem",
          marginRight: ["1rem", "4rem", null, "8rem"],
          marginLeft: ["5rem", "6rem", null ,"8rem"]
        })}
      >
        <p>Hi, I am Quentin Lefèvre</p>
        <h1
          css={mq({
            fontSize: ["1.5rem", "2rem", "2.5rem", "3rem"],
            whiteSpace: "nowrap",
          })}
        >
          Junior <br />
          <span css={mq({ fontSize: ["2.5rem", "3rem", "5rem", "7rem"] })}>
            Web Developer
          </span>{" "}
        </h1>
        <p
          css={mq({
            width: ["100%", "", "35rem"],
            marginTop: ["2rem"],
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vulputate dolor non ligula tempor condimentum. Quisque tortor neque,
          mollis sed turpis eu, finibus gravida libero.
        </p>
      </div>
    </Layout>
    </>
  )
}
