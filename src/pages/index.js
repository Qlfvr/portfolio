import React from "react"
import { Global } from "@emotion/core"
import Layout from "../components/layout"
import { mq } from "../utils/utils"
import burger from "../assets/burger.css"
import { Button } from "../components/button"

export default function IndexPage() {
  return (
    <>
      <Global styles={burger} />

      <Layout>
        <div
          css={mq({
            gridColumn: "1/2",
            gridRow: "1/2",
            paddingTop: "3rem",
            marginRight: ["0rem", "4rem", null, "8rem"],
            marginLeft: ["5rem", "6rem", null, "8rem"],
            overflow:"auto"
          })}
        >
          <p css={{ fontSize: "2em" }}>Hi, I am Quentin Lefèvre</p>
          <h1
            css={mq({
              fontSize: ["1.5rem", "2rem", "2.5rem", "3rem"],
            })}
          >
            Junior <br />
            <span css={mq({ fontSize: ["2.5rem", "3rem", "5rem", "6rem"] })}>
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

          <Button label="Me contacter" />

        </div>
      </Layout>
    </>
  )
}
