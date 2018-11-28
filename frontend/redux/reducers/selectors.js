import values from 'lodash/values';
import keys from 'lodash/keys';

export const selectAllArticles = state => values(state.entities.articles);
export const selectAllArticleIDs = state => keys(state.entities.articles);
export const selectAllCategories = state => values(state.entities.categories);
export const selectAllUsers = state => values(state.entities.users);
export const selectModal = state => values(state.modal);
export const selectSearchResults = state => values(state.search);
