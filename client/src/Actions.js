/* eslint-disable no-undef */
function getBoards(cb) {
  return fetch(`boards`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`)
    error.status = response.statusText
    error.response = response
    console.log(error)// eslint-disable-line no-console
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

const Actions = { getBoards }
export default Actions