const {get, post, destroy} = require('./fetch');

export const getAllUsers = async () => {
  try {
    return await get(`/api/users`);
  } catch (err) {
    throw new Error("Something went wrong fetching users...");
  }
}

export const createUser = async (data) => {
  try {
    let res = await post(`/api/users`, data);
    return res.user;
  } catch (err) {
    throw new Error("Something went wrong creating user...");
  }
}

export const removeUser = async (id) => {
  try {
    let res = await destroy(`/api/user/${id}`);
    return res.user;
  } catch (err) {
    throw new Error("Something went wrong destroying user...");
  }
}
