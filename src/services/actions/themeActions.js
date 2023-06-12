export const TOGGLE_THEME = 'TOGGLE_THEME';

const toggleTheme = (theme) => {
  return {
    type: TOGGLE_THEME,
    theme
  };
};
