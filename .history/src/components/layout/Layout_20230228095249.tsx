import React from 'react'
import Navbar from '../Navbar/Navbar'



const Layout: = ({children}) => {
  return (
    <div>
     <Navbar/>
<main className="">{children}</main>
    </div>
  )
}

export default Layout