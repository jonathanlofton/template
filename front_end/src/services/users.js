
const get = async () => {
  try {
    let res = await fetch('http://localhost:3000/users')
    res = await res.json()
    return res.users;
  } catch(err) {
    debugger;
    throw new Error("Something went wrong fetching users...")
  }
}
module.exports.get = get;
