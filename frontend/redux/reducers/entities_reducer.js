import { combineReducers } from "redux";
import userReducer from "./user_reducer";
// import articlesReducer from "./articles_reducer";
// import categorieseReducer from "./categories_reducer";


const entitiesReducer = combineReducers({
  users: userReducer,
  // articles: articlesReducer,
  // categories: categoriesReducer,
});

export default entitiesReducer;
