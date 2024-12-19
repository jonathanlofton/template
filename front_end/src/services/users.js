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

export const logout = async () => {
  try {
    return await post('/api/logout');
    // setLoggedIn(false); // Update UI state
  } catch (err) {
    console.error('Error logging out:', err);
  }
};

export const getSession = async () => {
  try {
    return await get('/current_user');
  } catch (err) {
    console.error('Error logging out:', err);
  }
};
