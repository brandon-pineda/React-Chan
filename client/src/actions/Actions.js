/* eslint-disable no-undef */
export function getBoards(cb) {
  return fetch(`api/boards`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

export function getThreads(query, cb) {
  return fetch(`api?q=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
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
