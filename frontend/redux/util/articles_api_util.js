// FETCH ALL ARTICLES

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

// FETCH SINGLE ARTICLE

export const fetchSingleArticle = (article_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/articles/${article_id}`
  })
);

// CREATE ARTICLE

export const createArticle = (article) => {
  return $.ajax({
    method: 'POST',
    url: 'api/articles',
    data: { article }
  });
};

// EDIT ARTICLE

export const updateSingleArticle = (article) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/articles/${article.id}`,
    data: { article }
  });
};

// DELETE ARTICLE
export const destroyArticle = (article_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/articles/${article_id}`
  });
};
