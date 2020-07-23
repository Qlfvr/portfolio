import React from "react"

const style = {
  width: "max-content",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  border: "solid 2px",
  borderRadius: "9999px",
  '&:hover' : {backgroundColor : "#c4e7df"}
}

export default function Button({ label }) {
  return <button css={style}>{label}</button>
}
