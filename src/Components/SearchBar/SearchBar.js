import React, { useState } from 'react'

const SearchBar = ({  }) => {
  const [searchInput, setSearchInput] = useState('')

  return(
    <form>
      <input
        type='text'
        placeholder='Search'
        name='search'
        value={searchInput}
        onChange={event => setSearchInput(event.target.value)}
      />

    </form>
  )
}

export default SearchBar
