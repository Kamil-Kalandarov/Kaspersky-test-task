import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import themeReducer from './themeReducer';

export const rootReducer = combineReducers({
  cardReducer: cardReducer,
  themeReducer: themeReducer,
});
