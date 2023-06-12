export const CHANGE_STAR_VALUE = 'CHANGE_STAR_VALUE';
export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';

export const changeStarValueActionCreator = (value) => {
  return {
    type: CHANGE_STAR_VALUE,
    value
  };
};

export const setCurrentTab = (tabType) => {
  return {
    type: SET_CURRENT_TAB,
    tabType
  };
};
