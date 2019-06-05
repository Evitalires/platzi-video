import React from 'react'
import './search.css'

const Search = (props) => (
  <form
    className='Search'
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      placeholder='Buscar a un artista, un tema o amigo'
      className='Search-input'
      name='search'
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search
