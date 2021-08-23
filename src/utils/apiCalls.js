const retrievePageData = (type, state) => {
  return fetch(`https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?type=${type}&state=${state}`)
    .then(response => {
      if(!response.ok) {
        throw new Error('Unable to retrieve server data')
      } else {
        return response.json()
      }
    })
}

const addContribution = (newData) => {
  return fetch('https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'aidanisthebest',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newData),
  })
    .then(response => {
      if(!response.ok) {
        throw new Error('Unable to reach server data')
      } else {
        return response.json()
      }
    })
}

const retrieveUnvetted = () => {
  return fetch('https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?vetted=false')
    .then(response => {
      if(!response.ok) {
        throw new Error('Unable to retrieve server data')
      } else {
        return response.json()
      }
    })
}

<<<<<<< HEAD
const approveContribution = (id, profession) => {
  return fetch(`https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals/${id}`, {
    method: 'PATCH',
    headers: {
      'api-key': 'aidanisthebest',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      profession: profession,
      id: id,
      vetted: true
    })
  })
  .then(response => {
    if(!response.ok) {
      throw new Error('Unable to update server data')
    } else {
      return response
    }
  })
}

export { retrievePageData, addContribution, retrieveUnvetted, approveContribution }
=======
export { retrievePageData, addContribution, retrieveUnvetted }
>>>>>>> 6e69aec... Write GET request for unvetted providers
