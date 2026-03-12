import { $ as createStyled, a0 as useTheme, a1 as getThemeProps } from "./index-BdFiX0VU.js";
const styled = createStyled();
function useThemeProps({
  props,
  name,
  defaultTheme,
  themeId
}) {
  let theme = useTheme(defaultTheme);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  return getThemeProps({
    theme,
    name,
    props
  });
}
export {
  styled as s,
  useThemeProps as u
};
//# sourceMappingURL=useThemeProps-B_Reo5-8.js.map
