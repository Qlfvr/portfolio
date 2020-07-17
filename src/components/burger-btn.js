import React from "react"

export default function BurgerBtn(props) {
  const style = {
    width: "4rem",
    boxShadow: " 0px 0px 20px 0px rgba(0,0,0,0.10)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "white",
    zIndex: 1,
  }

  return (
    <button
      css={style}
      id="burger"
      className={`hamburger hamburger--elastic ${props.isActive ? "is-active" : null}`}
      type="button"
      onClick={props.onClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}
