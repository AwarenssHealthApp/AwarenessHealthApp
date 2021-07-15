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

export { retrievePageData, addContribution }
