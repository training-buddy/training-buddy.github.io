import { r as reactExports, h as useDefaultProps, i as ListContext, j as jsxRuntimeExports, k as clsx, l as composeClasses, m as getListItemIconUtilityClass, n as styled, o as memoTheme } from "./index-BdFiX0VU.js";
const useUtilityClasses = (ownerState) => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ["root", alignItems === "flex-start" && "alignItemsFlexStart"]
  };
  return composeClasses(slots, getListItemIconUtilityClass, classes);
};
const ListItemIconRoot = styled("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart];
  }
})(memoTheme(({
  theme
}) => ({
  minWidth: 56,
  color: (theme.vars || theme).palette.action.active,
  flexShrink: 0,
  display: "inline-flex",
  variants: [{
    props: {
      alignItems: "flex-start"
    },
    style: {
      marginTop: 8
    }
  }]
})));
const ListItemIcon = /* @__PURE__ */ reactExports.forwardRef(function ListItemIcon2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListItemIcon"
  });
  const {
    className,
    ...other
  } = props;
  const context = reactExports.useContext(ListContext);
  const ownerState = {
    ...props,
    alignItems: context.alignItems
  };
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemIconRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
export {
  ListItemIcon as L
};
//# sourceMappingURL=ListItemIcon-D-dTNtFj.js.map
