import React from 'react'
import User from '../../widgets/components/User'
import './PlayListFriends.css'

const ListFriends = (props) => {
  const users = props.users.slice(1, props.users.length)
  return (
      <div className='PlayListFriends'>
        <h2>Playlist de Amigos</h2>
        {
          users.map( (item, index) => {
            return <User
              key={item.id}
              name={item.name}
              img={item.img}
            />
          })
        }
      </div>
  )
}

export default ListFriends
