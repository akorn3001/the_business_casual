// // FETCH ALL
export const fetchAllArticles = () => (
  $.ajax({
    method: 'GET',
    url: '/api/articles'
  })
);

export const fetchCategorizedArticles = (category_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/categories/${category_id}/articles`
  })
);

export const fetchAllCategories = () => (
  $.ajax({
    method: 'GET',
    url: 'api/categories'
  })
);

export const fetchArticleizedCategories = (article_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/articles/${article_id}/categories`
  })
);


//
// export const fetchCurrentUserMeetups = () => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/meetups',
//     // data: { meetup: {user_id} }
//   })
// );

// // FETCH SINGLE

export const fetchSingleArticle = (article_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/articles/${article_id}`
  })
);

// // CREATE

export const createArticle = (article) => {
  return $.ajax({
    method: 'POST',
    url: 'api/articles',
    data: { article }
  });
};

export const createCategory = (category) => {
  return $.ajax({
    method: 'POST',
    url: 'api/categories',
    data: { category }
  });
};
// // ATTEND / UNATTEND MEETUPS
// export const attendMeetup = (meetupId) => {
//   return $.ajax({
//     method: 'POST',
//     url: `/api/meetups/${meetupId}/attend`,
//   });
// };
//
// export const unattendMeetup = (meetupId) => {
//   return $.ajax({
//     method: 'DELETE',
//     url: `/api/meetups/${meetupId}/unattend`
//   });
// };
//
// // EDIT MEETUP / USER
//
// export const updateSingleUser = (user) => (
//   $.ajax({
//     method: 'PATCH',
//     url: `/api/users/${user.id}`,
//     data: user
//   })
// );
//
// export const updateSingleMeetup = (meetup) => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/meetups/${meetup.id}`,
//     data: { meetup }
//   });
// };
//
// export const addHostParams = (user, formData, callback) => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/users/${user.id}`,
//     dataType: 'json',
//     contentType: false,
//     processData: false,
//     data: formData,
//     success: callback
//   });
// };
