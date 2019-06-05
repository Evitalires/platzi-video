import React from 'react'
import Categories from '../../categories/components/categories'
import MultiContent from '../../MultiContent/components/MultiContent'

const ContentPrincipal = (props) => {
  if (props.state.nuevoVideo || props.state.seguirViendo) {
    return (
      <MultiContent
        user={props.data.user[0]}
        state={props.state}
        handlePlay={props.handlePlay}
        handleBack={props.handleBack}
        handleSetMedia={props.handleSetMedia}
        handleAddMylist={props.handleAddMylist}
      />
    )
  } else {
    return (
      <Categories
        screenSize={props.state.screenSize}
        categories={props.data.user[0].categories}
        handleOpenModal={props.handleOpenModal}
        user={props.data.user[0]}
      />
    )
  }
}

export default ContentPrincipal
