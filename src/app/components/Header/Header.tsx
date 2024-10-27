import React from 'react'
import Link from 'next/link'
import style from './Header.module.css'

const Header = () => {
  return (
    <div>
      <div className={style.heading}>


<b><abbr title="HEADER"><button>HEAD</button></abbr>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
</b>
<b>links  &nbsp; &nbsp; &nbsp;  &nbsp; </b>
<b><Link href="/about">about&nbsp; &nbsp; &nbsp; &nbsp; </Link></b>
<b><Link href="/contact">contact&nbsp; &nbsp; &nbsp;  &nbsp; </Link></b>
<b><Link href="/service">service&nbsp; &nbsp; &nbsp;  &nbsp; </Link></b>

</div>

    </div>
  )
}

export default Header
