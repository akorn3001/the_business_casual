import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import modalReducer from './modal_reducer';
import searchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
  modal: modalReducer,
  search: searchReducer
});

export default RootReducer;
