import { W as createStyled, X as useTheme, Y as getThemeProps } from "./index-BnUnq6VV.js";
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
//# sourceMappingURL=useThemeProps-Dmh0j4Hs.js.map
