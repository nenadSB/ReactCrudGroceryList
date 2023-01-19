import React from 'react'

const Footer = ({ length }) => {
   
  return (
    <footer>
        <p style={{color: 'red'}}>{length} List {length === 1 ? "item" : "items"}</p>
    </footer>
  )
}

export default Footer
