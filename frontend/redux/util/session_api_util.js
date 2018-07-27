export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/users/sign_in',
    data: { user }
  })
);

export const signUp = (user) => (
  $.ajax({
    method: 'POST',
    url: '/users',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/users/sign_out'
  })
);

// export const signUp = (user) => {
//   return $.ajax({
//     method: 'POST',
//     url: '/users',
//     data: {
//       user
//     }
//   });
// };
//
// export const login = (user) => {
//   return $.ajax({
//     method: 'POST',
//     url: '/users/sign_in',
//     data: {
//       user
//     }
//   });
// };
//
// export const logout = () => {
//   return $.ajax({
//     method: 'DELETE',
//     url: '/users/sign_out'
//   });
// };
