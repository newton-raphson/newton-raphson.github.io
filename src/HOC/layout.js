import React from 'react'
import Navbar from '../component/navBar'

const layout = (props) => {
  return (
    <div>
        <Navbar />
        {props.children}
    </div>
  )
}

export default layout