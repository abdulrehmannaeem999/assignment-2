import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div>
      <h1 className = {style.heading}> <b><abbr title="FOOTER"><button>FOOT</button></abbr></b> </h1>
      
      <center>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXxFu_R9jfqKfpMMegFseHw-ma8f2ipNFHQ&s" alt="" />
      </center>
      <br />
      <p className={style.paragraph}>The footer tag defines a footer for a document or section. A footer element typically contains: You can have several footer elements in one document.
      </p>
    </div>
  )
}

export default Footer
