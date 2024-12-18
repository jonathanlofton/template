const {HOST} = require('../constants/constants').APP;

export const get = async (endpoint) => {
  let res = await fetch(`${HOST}${endpoint}`, {credentials: 'include'})
  res = await res.json()
  return res;
}
export const post = async (endpoint, data) => {
  let res = await fetch(`${HOST}${endpoint}`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'include'
  });
  res = await res.json()
  return res;
}
export const destroy = async (endpoint) => {
  let res = await fetch(`${HOST}${endpoint}`, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  res = await res.json()
  return res;
}

