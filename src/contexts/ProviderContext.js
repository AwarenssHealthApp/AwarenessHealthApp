import React, { createContext, useState } from 'react';
export const ProviderContext = createContext({
  doctorList: () => {},
  setDoctorList: () => {},
  filteredDoctorList: () => {},
  setFilteredDoctorList: () => {},
  mentalHealthProsList:  () => {},
  setMentalHealthProsList: () => {},
  filteredMentalHealthProsList: () => {},
  setFilteredMentalHealthProsList: () => {}
});

export const ProviderContextProvider = (props) => {

  const [doctorList, setDoctorList] = useState([])
  const [filteredDoctorList, setFilteredDoctorList] = useState([])

  const [mentalHealthProsList, setMentalHealthProsList] = useState([])
  const [filteredMentalHealthProsList, setFilteredMentalHealthProsList] = useState([])

  return (
    <ProviderContext.Provider
      value={{
        doctorList,
        setDoctorList,
        filteredDoctorList,
        setFilteredDoctorList,
        mentalHealthProsList,
        setMentalHealthProsList,
        filteredMentalHealthProsList,
        setFilteredMentalHealthProsList
      }}
    >
      {props.children}
    </ProviderContext.Provider>
  )
}
