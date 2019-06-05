import React from 'react'
import Category from './category'
import User from '../../widgets/components/User'
import SearchContainer from '../../widgets/containers/search'
import './categories.css'

function Categories (props) {
  return(
    <div className={`Categories ${props.screenSize}`}>
      <div className='Categories-head'>
        <SearchContainer/>
        <User
          name={props.user.name}
          img={props.user.img}
        />
      </div>
      {
        props.categories.map( (item) => {
          return (
            <Category
              key={item.id}
              handleOpenModal={props.handleOpenModal}
              {...item}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
