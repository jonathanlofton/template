const {HOST} = require('../constants/constants').APP;

// TODO: abstract out the formatting needed to use fetch... so you can just do .post().get etc...
const get = async () => {
  try {
    let res = await fetch(`${HOST}/api/users`)
    res = await res.json()
    return res.users;
  } catch(err) {
    throw new Error("Something went wrong fetching users...")
  }
}
module.exports.get = get;


const create = async (data) => {
  try {
    let res = await fetch(`${HOST}/api/users`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    res = await res.json()
    return res.user;
  } catch(err) {
    throw new Error("Something went wrong creating user...")
  }
}
module.exports.create = create;

const destroy = async (id) => {
  try {
    let res = await fetch(`${HOST}/api/user/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res = await res.json()
    return res.user;
  } catch(err) {
    throw new Error("Something went wrong creating user...")
  }
}
module.exports.destroy = destroy;
