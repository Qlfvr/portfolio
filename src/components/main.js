import React from "react"
import { mq } from "../utils/utils"
import styled from "@emotion/styled"

export default function Main() {
  const A = styled.a({
    width: "max-content",
    padding: "0.5rem 1rem",
    backgroundColor: "white",
    border: "solid 2px",
    borderRadius: "9999px",
    "&:hover": { backgroundColor: "#DDEDF4" },
  })

  return (
    <div
      css={mq({
        gridColumn: "1/2",
        gridRow: "1/2",
        paddingTop: "3rem",
        marginRight: ["0rem", "4rem", null, "8rem"],
        marginLeft: ["5rem", "6rem", null, "8rem"],
        overflow: "auto",
      })}
    >
      <p css={mq({ fontSize: ["1.2rem", "2rem"] })}>Hi, I am Quentin Lefèvre</p>
      <h1
        css={mq({
          fontSize: ["1.5rem", "2rem", "2.5rem", "3rem"],
        })}
      >
        Junior <br />
        <span css={mq({ fontSize: ["2.5rem", "3rem", "5rem", "7rem"] })}>
          Web Developer
        </span>{" "}
      </h1>
      <p
        css={mq({
          width: ["100%", "", "40rem"],
          marginTop: ["2rem"],
        })}
      >
        Currently looking for an internship as a frontend or fullstack Developer
        in Liège, Brussels or in the surrounding areas. I am in the last stage
        of my training @Becode Liège. Solution-oriented, I have learned by doing
        for the last 7 months and I wish to find a company to keep growing as a
        web developer.
      </p>

      <A href="https://www.linkedin.com/in/qlfvr/">Contact me on LinkedIn</A>
    </div>
  )
}
