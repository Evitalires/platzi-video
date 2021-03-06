import React from 'react'
import './home-layout.css'

function HomeLayout (props) {
  return (
    <section ref={props.setRef} className={`HomeLayout ${props.screenSize}`}>
      {props.children}
    </section>
  )
}

export default HomeLayout
