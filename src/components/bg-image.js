import React from "react"

export default function BgImage() {
  return (
    <svg
      css={{
        gridColumn: "1/2",
        gridRow: "1/2",
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="90 0, 100 0, 100 100, 50 100" fill="#c4e7df" />
    </svg>
  )
}
