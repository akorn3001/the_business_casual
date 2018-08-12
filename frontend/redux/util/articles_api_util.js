// FETCH ALL ARTICLES
export const fetchAllArticles = () => (
  $.ajax({
    method: 'GET',
    url: '/api/articles'
  })
);

export const fetchCategorizedArticles = (category_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/categories/${category_id}/articles`
  });
};

// FETCH SINGLE ARTICLE
export const fetchSingleArticle = (article_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/articles/${article_id}`
  })
);

// CREATE ARTICLE
export const createArticle = (articleFormDataObject) => {
  return $.ajax({
    method: 'POST',
    url: 'api/articles',
    data: articleFormDataObject,
    contentType: false,
    processData: false
  });
};

// EDIT ARTICLE
export const updateArticle = (articleFormDataObject, article_id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/articles/${article_id}`,
    data: articleFormDataObject,
    contentType: false,
    processData: false
  });
};

// DELETE ARTICLE
export const destroyArticle = (article_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/articles/${article_id}`
  });
};
