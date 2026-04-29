import { a4 as defaultTheme, a5 as THEME_ID, n as generateUtilityClass, o as generateUtilityClasses, r as reactExports, p as useDefaultProps, a6 as useFormControl, j as jsxRuntimeExports, a7 as FormControlContext, T as Typography, q as clsx, y as capitalize, t as composeClasses, v as styled, z as memoTheme } from "./index-BnUnq6VV.js";
import { u as useThemeProps$1 } from "./useThemeProps-Dmh0j4Hs.js";
function useThemeProps({
  props,
  name
}) {
  return useThemeProps$1({
    props,
    name,
    defaultTheme,
    themeId: THEME_ID
  });
}
function getInputAdornmentUtilityClass(slot) {
  return generateUtilityClass("MuiInputAdornment", slot);
}
const inputAdornmentClasses = generateUtilityClasses("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var _span;
const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[`position${capitalize(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
};
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  const slots = {
    root: ["root", disablePointerEvents && "disablePointerEvents", position && `position${capitalize(position)}`, variant, hiddenLabel && "hiddenLabel", size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getInputAdornmentUtilityClass, classes);
};
const InputAdornmentRoot = styled("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (theme.vars || theme).palette.action.active,
  variants: [{
    props: {
      variant: "filled"
    },
    style: {
      [`&.${inputAdornmentClasses.positionStart}&:not(.${inputAdornmentClasses.hiddenLabel})`]: {
        marginTop: 16
      }
    }
  }, {
    props: {
      position: "start"
    },
    style: {
      marginRight: 8
    }
  }, {
    props: {
      position: "end"
    },
    style: {
      marginLeft: 8
    }
  }, {
    props: {
      disablePointerEvents: true
    },
    style: {
      pointerEvents: "none"
    }
  }]
})));
const InputAdornment = /* @__PURE__ */ reactExports.forwardRef(function InputAdornment2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiInputAdornment"
  });
  const {
    children,
    className,
    component = "div",
    disablePointerEvents = false,
    disableTypography = false,
    position,
    variant: variantProp,
    ...other
  } = props;
  const muiFormControl = useFormControl() || {};
  let variant = variantProp;
  if (variantProp && muiFormControl.variant) ;
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  const ownerState = {
    ...props,
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext.Provider, {
    value: null,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornmentRoot, {
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref,
      ...other,
      children: typeof children === "string" && !disableTypography ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, {
        color: "textSecondary",
        children
      }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [position === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          _span || (_span = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "​"
          }))
        ) : null, children]
      })
    })
  });
});
export {
  InputAdornment as I,
  useThemeProps as u
};
//# sourceMappingURL=InputAdornment-C-BifSfv.js.map
