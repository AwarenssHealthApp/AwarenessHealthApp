import React, { useState } from 'react'

const SearchBar = ({ doctorList, setFilteredDoctorList }) => {
  const [searchInput, setSearchInput] = useState('')

  const filterDoctors = (doctorList) => {
    const filteredDoctors = doctorList.filter(doctor => {
      return doctor.insurances.filter(insurance => {
        return insurance.company.toUpperCase().includes(searchInput.toUpperCase)
      })
    })
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

    </form>
  )
}

export default SearchBar
