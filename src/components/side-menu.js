import React from "react"

export default function SideMenu() {

function handleClick(){

    document.getElementById("burger").classList.toggle("is-active")

}

  return (
    <div
      css={{
        height: "100vh",
        width:"4rem",
        boxShadow: " 0px 0px 20px 0px rgba(0,0,0,0.10)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "absolute",
        backgroundColor : "white",
      }}
    >
      <button  id="burger" class="hamburger hamburger--elastic" type="button" onClick = {handleClick}>
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  )
}
