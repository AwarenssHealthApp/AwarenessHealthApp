import React, { useContext } from 'react';
import { ProviderContext } from '../../contexts/ProviderContext';
import { useLocation } from 'react-router-dom';
import SearchByInsurance from '../../Components/SearchByInsurance/SearchByInsurance'


const Search = () => {
  const { doctorList,
    setDoctorList,
    filteredDoctorList,
    setFilterDoctorList,

 } = useContext(ProviderContext)

  const location = useLocation()
  let providerList;
  let setFilteredProviderList;

  if(location === '/doctors' ) {
    providerList = doctorList;
    setFilteredProviderList = setFilterDoctorList
  }

  return (
  <div>
  {(location === '/doctors' || location === '/mental_health_professionals') &&
    <article> <SearchByInsurance providerList={providerList} setFilteredProviderList={setFilteredProviderList}/>
    </article>
  }
  </div>
)


}

export default Search;
