import React, { useState } from 'react'

const SearchBar = ({ doctorList, setFilteredDoctorList }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    const searchResults = filterDoctors()
    setFilteredDoctorList(searchResults)
    setSearchInput('')
  }

  const filterDoctors = () => {
    const filteredDoctors = doctorList.filter(doctor => {
      return doctor.insurances.find(insurance => {
        return insurance.company.toUpperCase().includes(searchInput.toUpperCase())
      })
    })
    return filteredDoctors
  }

  return(
    <form>
      <input
        type='text'
        placeholder='Search by Insurance'
        name='search'
        value={searchInput}
        onChange={event => setSearchInput(event.target.value)}
      />
      <button onClick={(event) => handleSearch(event)}>Search</button>
    </form>
  )
}

export default SearchBar
