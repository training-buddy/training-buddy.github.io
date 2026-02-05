import { $ as createStyled, a0 as useTheme, a1 as getThemeProps } from "./index-BH1KDpcB.js";
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
//# sourceMappingURL=useThemeProps-CHZwBfrq.js.map
