import React from 'react'

function Error({ message }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontSize: "50px", color: "red" }} >Error: { message }</div>
  )
}

export default Error