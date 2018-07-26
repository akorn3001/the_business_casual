// FETCH ALL USERS

export const fetchAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

// FETCH SINGLE USER

export const fetchSingleUser = (user) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${user}`
  });
};

// UPDATE SINGLE USER

export const updateSingleUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: user
  });
};
