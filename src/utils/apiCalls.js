const retrievePageData = (path) => {
  return fetch(`https://head-to-toe-be.herokuapp.com/${path}`)
    .then(response => {
      if(!response.ok) {
        throw new Error('Unable to retrieve server data')
      } else {
        return response.json()
      }
    })
}

const addContribution = (newData) => {
  return fetch('https://head-to-toe-be.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
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
