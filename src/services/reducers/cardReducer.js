import { CHANGE_STAR_VALUE, SET_CURRENT_TAB } from '../actions/cardActions';

const initialState = {
  slides: [
    {  id: 1, type: 'Windows', name: 'Kaspersky Anti-Virus', reviews: 1912, price: 29.99, starValue: 5, about: 'Essential antivirus protection for Windows PCs' },
    {  id: 2, type: 'MacOs', name: 'Kaspersky Anti-Virus', reviews: 1912, price: 29.99, starValue: 4, about: 'Essential antivirus protection for Windows PCs' },
    {  id: 3, type: 'Android', name: 'Kaspersky Anti-Virus', reviews: 1912, price: 29.99, starValue: 3.5, about: 'Essential antivirus protection for Windows PCs' },
    {  id: 4, type: 'iPhone & iPad', name: 'Kaspersky Anti-Virus', reviews: 1912, price: 29.99, starValue: 5, about: 'Essential antivirus protection for Windows PCs' },
    {  id: 5, type: 'Android', name: 'Kaspersky Anti-Virus', reviews: 1912, price: 29.99, starValue: 2, about: 'Essential antivirus protection for Windows PCs' },
    {  id: 6, type: 'Windows', name: 'Kaspersky Anti-Virus', reviews: 1912, price: 29.99, starValue: 1, about: 'Essential antivirus protection for Windows PCs' },
    {  id: 7, type: 'MacOs', name: 'Kaspersky Anti-Virus', reviews: 1912, price: 29.99, starValue: 5, about: 'Essential antivirus protection for Windows PCs' },
    {  id: 8, type: 'iPhone & iPad', name: 'Kaspersky Anti-Virus', reviews: 1912, price: 29.99, starValue: 4, about: 'Essential antivirus protection for Windows PCs' },
  ],
  currentTab: 'All',
};

const cardReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_STAR_VALUE:
      return {
        ...state,
        starValue: action.value
      }
      case SET_CURRENT_TAB:
        return {
          ...state,
          currentTab: action.tabType
        }
    default: 
      return state
  }
};

export default cardReducer;
