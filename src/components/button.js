import React from "react"

const style = {
  width: "max-content",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  border: "solid 2px",
  borderRadius: "9999px",
  '&:hover' : {backgroundColor : "#DDEDF4"}
}

export default function Button({children }) {
  return <button css={style}>{children}</button>
}
