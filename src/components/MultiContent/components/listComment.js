import React from 'react'
import Comment from './Comment'
import './ListComment.css'

const ListComment = (props) => {
  return (
    <div className='ListComment'>
      {
        props.item.map( (item, index) => {
          return (index === 0)
          ?
            <Comment
              item={item}
              key={item.toString()+index}
              setList={props.setList}
            />
          :
            <Comment
              item={item}
              key={item.toString()+index}
            />
        })
      }
    </div>
  )
}

export default ListComment
