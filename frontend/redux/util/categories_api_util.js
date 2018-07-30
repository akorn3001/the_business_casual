// FETCH ALL CATEGORIES

export const fetchAllCategories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/categories'
  });
};

export const fetchArticleizedCategories = (article_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/articles/${article_id}/categories`
  });
};

// FETCH SINGLE CATEGORY

export const fetchSingleCategory = (category_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/categories/${category_id}`
  });
};

// CREATE CATEGORY

export const createCategory = (category) => {
  return $.ajax({
    method: 'POST',
    url: 'api/categories',
    data: { category }
  });
};

// EDIT CATEGORY

export const updateSingleCategory = (category) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/categories/${category.id}`,
    data: { category }
  });
};

// DELETE CATEGORY
export const destroyCategory = (category_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/categories/${category_id}`
  });
};
