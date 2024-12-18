const {get, post, destroy} = require('./fetch');

export const getAllUsers = async () => {
  try {
    return await get(`/api/users`);
  } catch (err) {
    console.log("Something went wrong fetching users...");
  }
}

export const createUser = async (data) => {
  try {
    return await post(`/api/users`, data);
  } catch (err) {
    console.log("Something went wrong creating user...");
  }
}

export const removeUser = async (id) => {
  try {
    return await destroy(`/api/user/${id}`);
  } catch (err) {
    console.log("Something went wrong destroying user...");
  }
}
