import React from "react"

export default function BgImage() {


  return (
    <div
      css={{
        position: "absolute",
        zIndex : "-5",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
        
      <svg viewBox="0 0 100 100"  preserveAspectRatio="none" width ="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <polygon points="90 0, 100 0, 100 100, 50 100" fill="#c4e7df" />
      </svg>
    </div>
  )
}
