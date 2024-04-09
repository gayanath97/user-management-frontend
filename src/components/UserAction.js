

export const addUser = (id,firstName, lastName) => ({
  type: 'ADD_USER',
  payload: {
    id: id,
    firstName,
    lastName,
  },
});

export const updateUser = (id, changes) => ({
  type: 'UPDATE_USER',
  payload: {
    id,
    changes,
  },
});

export const deleteUser = id => ({
  type: 'DELETE_USER',
  payload: id,
});
