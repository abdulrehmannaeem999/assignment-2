import React from 'react'
import style  from './contact.module.css'
import Link from 'next/link'

const Contactpage = () => {
  return (
    <div className={style.heading} ><br />
      <b>
      <h1 >this is Contact page</h1><br />
      <center>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYiheGe4CijqifQNvtTnSVFYgtPtT03Y7DA&s" alt="" />
      </center>
      <br /><br />
      <Link href="/">Go Home Page</Link>
      </b>
    </div>
  )
}

export default Contactpage
