import values from 'lodash/values';

export const selectAllArticles = state => values(state.entities.articles);
export const selectAllCategories = state => values(state.entities.categories);
export const selectAllUsers = state => values(state.entities.users);
