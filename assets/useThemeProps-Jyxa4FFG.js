import { W as createStyled, X as useTheme, Y as getThemeProps } from "./index-CvRd15Ij.js";
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
//# sourceMappingURL=useThemeProps-Jyxa4FFG.js.map
