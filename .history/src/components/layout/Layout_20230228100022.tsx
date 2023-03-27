import React from 'react'
import Navbar from '../Navbar/Navbar'



const Layout:React.FC = () => {
  return (
    <div>
     <Navbar/>
<main >{children}</main>
    </div>
  )
}

export default Layout