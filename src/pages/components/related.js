import React from 'react'
import logo from '../../../images/logo.png'
import MyPlaylist from '../../myPlaylist/components/MyPlaylist'
import ListFriends from '../../ListFriends/components/ListFriends'
import './related.css'

function Related(props) {
  return (
    <div className="Related">
      <img
        src={logo}
        alt="Imagen Related"
        width={250}/>
      <MyPlaylist
        songs={props.myPlaylist}
        title='MyPlaylist'
      />
      <ListFriends users={props.user}/>
    </div>
  )
}

export default Related
