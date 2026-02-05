import { a as reactExports, h as generateUtilityClass, i as generateUtilityClasses, z as useSlot, j as jsxRuntimeExports, K as capitalize, n as composeClasses, p as styled, x as ButtonBase, y as rootShouldForwardProp, k as useDefaultProps, T as Typography, m as clsx, q as memoTheme, g as createSvgIcon, ac as createChainedFunction, M as createSimplePaletteValueFilter, w as useForkRef, a7 as useId, ad as resolveProps } from "./index-BH1KDpcB.js";
import { d as useControlled, u as useFormControl, f as formControlState } from "./useOnMount-D-IaBeB4.js";
function getValidReactChildren(children) {
  return reactExports.Children.toArray(children).filter((child) => /* @__PURE__ */ reactExports.isValidElement(child));
}
function getSwitchBaseUtilityClass(slot) {
  return generateUtilityClass("PrivateSwitchBase", slot);
}
generateUtilityClasses("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize(edge)}`],
    input: ["input"]
  };
  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = styled(ButtonBase, {
  name: "MuiSwitchBase"
})({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === "start" && ownerState.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === "end" && ownerState.size !== "small",
    style: {
      marginRight: -12
    }
  }]
});
const SwitchBaseInput = styled("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: rootShouldForwardProp
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});
const SwitchBase = /* @__PURE__ */ reactExports.forwardRef(function SwitchBase2(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "SwitchBase",
    state: "checked"
  });
  const muiFormControl = useFormControl();
  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = (event) => {
    if (event.nativeEvent.defaultPrevented || readOnly) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === "checkbox" || type === "radio";
  const ownerState = {
    ...props,
    checked,
    disabled,
    disableFocusRipple,
    edge
  };
  const classes = useUtilityClasses$6(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      input: inputProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    elementType: SwitchBaseRoot,
    className: classes.root,
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      ...externalForwardedProps,
      component: "span",
      ...other
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onFocus: (event) => {
        handlers.onFocus?.(event);
        handleFocus(event);
      },
      onBlur: (event) => {
        handlers.onBlur?.(event);
        handleBlur(event);
      }
    }),
    ownerState,
    additionalProps: {
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled,
      role: void 0,
      tabIndex: null
    }
  });
  const [InputSlot, inputSlotProps] = useSlot("input", {
    ref: inputRef,
    elementType: SwitchBaseInput,
    className: classes.input,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      ...handlers,
      onChange: (event) => {
        handlers.onChange?.(event);
        handleInputChange(event);
      }
    }),
    ownerState,
    additionalProps: {
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      disabled,
      id: hasLabelFor ? id : void 0,
      name,
      readOnly,
      required,
      tabIndex,
      type,
      ...type === "checkbox" && value === void 0 ? {} : {
        value
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(InputSlot, {
      ...inputSlotProps
    }), checked ? checkedIcon : icon]
  });
});
function getFormControlLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControlLabel", slot);
}
const formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
const useUtilityClasses$5 = (ownerState) => {
  const {
    classes,
    disabled,
    labelPlacement,
    error,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", `labelPlacement${capitalize(labelPlacement)}`, error && "error", required && "required"],
    label: ["label", disabled && "disabled"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
};
const FormControlLabelRoot = styled("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formControlLabelClasses.label}`]: styles.label
    }, styles.root, styles[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${formControlLabelClasses.disabled}`]: {
    cursor: "default"
  },
  [`& .${formControlLabelClasses.label}`]: {
    [`&.${formControlLabelClasses.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled
    }
  },
  variants: [{
    props: {
      labelPlacement: "start"
    },
    style: {
      flexDirection: "row-reverse",
      marginRight: -11
    }
  }, {
    props: {
      labelPlacement: "top"
    },
    style: {
      flexDirection: "column-reverse"
    }
  }, {
    props: {
      labelPlacement: "bottom"
    },
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      labelPlacement
    }) => labelPlacement === "start" || labelPlacement === "top" || labelPlacement === "bottom",
    style: {
      marginLeft: 16
      // used for row presentation of radio/checkbox
    }
  }]
})));
const AsteriskComponent = styled("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(memoTheme(({
  theme
}) => ({
  [`&.${formControlLabelClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
const FormControlLabel = /* @__PURE__ */ reactExports.forwardRef(function FormControlLabel2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormControlLabel"
  });
  const {
    checked,
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    inputRef,
    label: labelProp,
    labelPlacement = "end",
    name,
    onChange,
    required: requiredProp,
    slots = {},
    slotProps = {},
    value,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const disabled = disabledProp ?? control.props.disabled ?? muiFormControl?.disabled;
  const required = requiredProp ?? control.props.required;
  const controlProps = {
    disabled,
    required
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = {
    ...props,
    disabled,
    labelPlacement,
    required,
    error: fcs.error
  };
  const classes = useUtilityClasses$5(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [TypographySlot, typographySlotProps] = useSlot("typography", {
    elementType: Typography,
    externalForwardedProps,
    ownerState
  });
  let label = labelProp;
  if (label != null && label.type !== Typography && !disableTypography) {
    label = /* @__PURE__ */ jsxRuntimeExports.jsx(TypographySlot, {
      component: "span",
      ...typographySlotProps,
      className: clsx(classes.label, typographySlotProps?.className),
      children: label
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControlLabelRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other,
    children: [/* @__PURE__ */ reactExports.cloneElement(control, controlProps), required ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      children: [label, /* @__PURE__ */ jsxRuntimeExports.jsxs(AsteriskComponent, {
        ownerState,
        "aria-hidden": true,
        className: classes.asterisk,
        children: [" ", "*"]
      })]
    }) : label]
  });
});
function getFormGroupUtilityClass(slot) {
  return generateUtilityClass("MuiFormGroup", slot);
}
generateUtilityClasses("MuiFormGroup", ["root", "row", "error"]);
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes,
    row,
    error
  } = ownerState;
  const slots = {
    root: ["root", row && "row", error && "error"]
  };
  return composeClasses(slots, getFormGroupUtilityClass, classes);
};
const FormGroupRoot = styled("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.row && styles.row];
  }
})({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  variants: [{
    props: {
      row: true
    },
    style: {
      flexDirection: "row"
    }
  }]
});
const FormGroup = /* @__PURE__ */ reactExports.forwardRef(function FormGroup2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormGroup"
  });
  const {
    className,
    row = false,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = {
    ...props,
    row,
    error: fcs.error
  };
  const classes = useUtilityClasses$4(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroupRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
const RadioButtonUncheckedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}));
const RadioButtonCheckedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}));
const RadioButtonIconRoot = styled("span", {
  name: "MuiRadioButtonIcon",
  shouldForwardProp: rootShouldForwardProp
})({
  position: "relative",
  display: "flex"
});
const RadioButtonIconBackground = styled(RadioButtonUncheckedIcon, {
  name: "MuiRadioButtonIcon"
})({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
});
const RadioButtonIconDot = styled(RadioButtonCheckedIcon, {
  name: "MuiRadioButtonIcon"
})(memoTheme(({
  theme
}) => ({
  left: 0,
  position: "absolute",
  transform: "scale(0)",
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: {
      checked: true
    },
    style: {
      transform: "scale(1)",
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest
      })
    }
  }]
})));
function RadioButtonIcon(props) {
  const {
    checked = false,
    classes = {},
    fontSize
  } = props;
  const ownerState = {
    ...props,
    checked
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioButtonIconRoot, {
    className: classes.root,
    ownerState,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIconBackground, {
      fontSize,
      className: classes.background,
      ownerState
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIconDot, {
      fontSize,
      className: classes.dot,
      ownerState
    })]
  });
}
const RadioGroupContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useRadioGroup() {
  return reactExports.useContext(RadioGroupContext);
}
function getRadioUtilityClass(slot) {
  return generateUtilityClass("MuiRadio", slot);
}
const radioClasses = generateUtilityClasses("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]);
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color)}`, size !== "medium" && `size${capitalize(size)}`]
  };
  return {
    ...classes,
    ...composeClasses(slots, getRadioUtilityClass, classes)
  };
};
const RadioRoot = styled(SwitchBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.size !== "medium" && styles[`size${capitalize(ownerState.size)}`], styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${radioClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  },
  variants: [{
    props: {
      color: "default",
      disabled: false,
      disableRipple: false
    },
    style: {
      "&:hover": {
        backgroundColor: theme.alpha((theme.vars || theme).palette.action.active, (theme.vars || theme).palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disabled: false,
      disableRipple: false
    },
    style: {
      "&:hover": {
        backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disabled: false
    },
    style: {
      [`&.${radioClasses.checked}`]: {
        color: (theme.vars || theme).palette[color].main
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: false
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
})));
function areEqualValues(a, b) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
const defaultCheckedIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIcon, {
  checked: true
});
const defaultIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIcon, {});
const Radio = /* @__PURE__ */ reactExports.forwardRef(function Radio2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiRadio"
  });
  const {
    checked: checkedProp,
    checkedIcon = defaultCheckedIcon,
    color = "primary",
    icon = defaultIcon,
    name: nameProp,
    onChange: onChangeProp,
    size = "medium",
    className,
    disabled: disabledProp,
    disableRipple = false,
    slots = {},
    slotProps = {},
    inputProps,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  disabled ??= false;
  const ownerState = {
    ...props,
    disabled,
    disableRipple,
    color,
    size
  };
  const classes = useUtilityClasses$3(ownerState);
  const radioGroup = useRadioGroup();
  let checked = checkedProp;
  const onChange = createChainedFunction(onChangeProp, radioGroup && radioGroup.onChange);
  let name = nameProp;
  if (radioGroup) {
    if (typeof checked === "undefined") {
      checked = areEqualValues(radioGroup.value, props.value);
    }
    if (typeof name === "undefined") {
      name = radioGroup.name;
    }
  }
  const externalInputProps = slotProps.input ?? inputProps;
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    elementType: RadioRoot,
    className: clsx(classes.root, className),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots,
      slotProps,
      ...other
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onChange: (event, ...args) => {
        handlers.onChange?.(event, ...args);
        onChange(event, ...args);
      }
    }),
    ownerState,
    additionalProps: {
      type: "radio",
      icon: /* @__PURE__ */ reactExports.cloneElement(icon, {
        fontSize: icon.props.fontSize ?? size
      }),
      checkedIcon: /* @__PURE__ */ reactExports.cloneElement(checkedIcon, {
        fontSize: checkedIcon.props.fontSize ?? size
      }),
      disabled,
      name,
      checked,
      slots,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof externalInputProps === "function" ? externalInputProps(ownerState) : externalInputProps
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
    ...rootSlotProps,
    classes
  });
});
function getRadioGroupUtilityClass(slot) {
  return generateUtilityClass("MuiRadioGroup", slot);
}
generateUtilityClasses("MuiRadioGroup", ["root", "row", "error"]);
const useUtilityClasses$2 = (props) => {
  const {
    classes,
    row,
    error
  } = props;
  const slots = {
    root: ["root", row && "row", error && "error"]
  };
  return composeClasses(slots, getRadioGroupUtilityClass, classes);
};
const RadioGroup = /* @__PURE__ */ reactExports.forwardRef(function RadioGroup2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    children,
    className,
    defaultValue,
    name: nameProp,
    onChange,
    value: valueProp,
    ...other
  } = props;
  const rootRef = reactExports.useRef(null);
  const classes = useUtilityClasses$2(props);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "RadioGroup"
  });
  reactExports.useImperativeHandle(actions, () => ({
    focus: () => {
      let input = rootRef.current.querySelector("input:not(:disabled):checked");
      if (!input) {
        input = rootRef.current.querySelector("input:not(:disabled)");
      }
      if (input) {
        input.focus();
      }
    }
  }), []);
  const handleRef = useForkRef(ref, rootRef);
  const name = useId(nameProp);
  const contextValue = reactExports.useMemo(() => ({
    name,
    onChange(event) {
      setValueState(event.target.value);
      if (onChange) {
        onChange(event, event.target.value);
      }
    },
    value
  }), [name, onChange, setValueState, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup, {
      role: "radiogroup",
      ref: handleRef,
      className: clsx(classes.root, className),
      ...other,
      children
    })
  });
});
function getToggleButtonUtilityClass(slot) {
  return generateUtilityClass("MuiToggleButton", slot);
}
const toggleButtonClasses = generateUtilityClasses("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]);
const ToggleButtonGroupContext = /* @__PURE__ */ reactExports.createContext({});
const ToggleButtonGroupButtonContext = /* @__PURE__ */ reactExports.createContext(void 0);
function isValueSelected(value, candidate) {
  if (candidate === void 0 || value === void 0) {
    return false;
  }
  if (Array.isArray(candidate)) {
    return candidate.includes(value);
  }
  return value === candidate;
}
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    fullWidth,
    selected,
    disabled,
    size,
    color
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled", fullWidth && "fullWidth", `size${capitalize(size)}`, color]
  };
  return composeClasses(slots, getToggleButtonUtilityClass, classes);
};
const ToggleButtonRoot = styled(ButtonBase, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`size${capitalize(ownerState.size)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.button,
  borderRadius: (theme.vars || theme).shape.borderRadius,
  padding: 11,
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
  color: (theme.vars || theme).palette.action.active,
  [`&.${toggleButtonClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
  },
  "&:hover": {
    textDecoration: "none",
    // Reset on mouse devices
    backgroundColor: theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [{
    props: {
      color: "standard"
    },
    style: {
      [`&.${toggleButtonClasses.selected}`]: {
        color: (theme.vars || theme).palette.text.primary,
        backgroundColor: theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: theme.alpha((theme.vars || theme).palette.text.primary, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.selectedOpacity)
          }
        }
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${toggleButtonClasses.selected}`]: {
        color: (theme.vars || theme).palette[color].main,
        backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.selectedOpacity)
          }
        }
      }
    }
  })), {
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: 7,
      fontSize: theme.typography.pxToRem(13)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 15,
      fontSize: theme.typography.pxToRem(15)
    }
  }]
})));
const ToggleButton = /* @__PURE__ */ reactExports.forwardRef(function ToggleButton2(inProps, ref) {
  const {
    value: contextValue,
    ...contextProps
  } = reactExports.useContext(ToggleButtonGroupContext);
  const toggleButtonGroupButtonContextPositionClassName = reactExports.useContext(ToggleButtonGroupButtonContext);
  const resolvedProps = resolveProps({
    ...contextProps,
    selected: isValueSelected(inProps.value, contextValue)
  }, inProps);
  const props = useDefaultProps({
    props: resolvedProps,
    name: "MuiToggleButton"
  });
  const {
    children,
    className,
    color = "standard",
    disabled = false,
    disableFocusRipple = false,
    fullWidth = false,
    onChange,
    onClick,
    selected,
    size = "medium",
    value,
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disabled,
    disableFocusRipple,
    fullWidth,
    size
  };
  const classes = useUtilityClasses$1(ownerState);
  const handleChange = (event) => {
    if (onClick) {
      onClick(event, value);
      if (event.defaultPrevented) {
        return;
      }
    }
    if (onChange) {
      onChange(event, value);
    }
  };
  const positionClassName = toggleButtonGroupButtonContextPositionClassName || "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButtonRoot, {
    className: clsx(contextProps.className, classes.root, className, positionClassName),
    disabled,
    focusRipple: !disableFocusRipple,
    ref,
    onClick: handleChange,
    onChange,
    value,
    ownerState,
    "aria-pressed": selected,
    ...other,
    children
  });
});
function getToggleButtonGroupUtilityClass(slot) {
  return generateUtilityClass("MuiToggleButtonGroup", slot);
}
const toggleButtonGroupClasses = generateUtilityClasses("MuiToggleButtonGroup", ["root", "selected", "horizontal", "vertical", "disabled", "grouped", "groupedHorizontal", "groupedVertical", "fullWidth", "firstButton", "lastButton", "middleButton"]);
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    orientation,
    fullWidth,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation, fullWidth && "fullWidth"],
    grouped: ["grouped", `grouped${capitalize(orientation)}`, disabled && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return composeClasses(slots, getToggleButtonGroupUtilityClass, classes);
};
const ToggleButtonGroupRoot = styled("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${toggleButtonGroupClasses.grouped}`]: styles.grouped
    }, {
      [`& .${toggleButtonGroupClasses.grouped}`]: styles[`grouped${capitalize(ownerState.orientation)}`]
    }, {
      [`& .${toggleButtonGroupClasses.firstButton}`]: styles.firstButton
    }, {
      [`& .${toggleButtonGroupClasses.lastButton}`]: styles.lastButton
    }, {
      [`& .${toggleButtonGroupClasses.middleButton}`]: styles.middleButton
    }, styles.root, ownerState.orientation === "vertical" && styles.vertical, ownerState.fullWidth && styles.fullWidth];
  }
})(memoTheme(({
  theme
}) => ({
  display: "inline-flex",
  borderRadius: (theme.vars || theme).shape.borderRadius,
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      flexDirection: "column",
      [`& .${toggleButtonGroupClasses.grouped}`]: {
        [`&.${toggleButtonGroupClasses.selected} + .${toggleButtonGroupClasses.grouped}.${toggleButtonGroupClasses.selected}`]: {
          borderTop: 0,
          marginTop: 0
        }
      },
      [`& .${toggleButtonGroupClasses.firstButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        marginTop: -1,
        borderTop: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled},& .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]: {
        borderTop: "1px solid transparent"
      }
    }
  }, {
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      [`& .${toggleButtonGroupClasses.grouped}`]: {
        [`&.${toggleButtonGroupClasses.selected} + .${toggleButtonGroupClasses.grouped}.${toggleButtonGroupClasses.selected}`]: {
          borderLeft: 0,
          marginLeft: 0
        }
      },
      [`& .${toggleButtonGroupClasses.firstButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        marginLeft: -1,
        borderLeft: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled},& .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]: {
        borderLeft: "1px solid transparent"
      }
    }
  }]
})));
const ToggleButtonGroup = /* @__PURE__ */ reactExports.forwardRef(function ToggleButtonGroup2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiToggleButtonGroup"
  });
  const {
    children,
    className,
    color = "standard",
    disabled = false,
    exclusive = false,
    fullWidth = false,
    onChange,
    orientation = "horizontal",
    size = "medium",
    value,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disabled,
    fullWidth,
    orientation,
    size
  };
  const classes = useUtilityClasses(ownerState);
  const handleChange = reactExports.useCallback((event, buttonValue) => {
    if (!onChange) {
      return;
    }
    const index = value && value.indexOf(buttonValue);
    let newValue;
    if (value && index >= 0) {
      newValue = value.slice();
      newValue.splice(index, 1);
    } else {
      newValue = value ? value.concat(buttonValue) : [buttonValue];
    }
    onChange(event, newValue);
  }, [onChange, value]);
  const handleExclusiveChange = reactExports.useCallback((event, buttonValue) => {
    if (!onChange) {
      return;
    }
    onChange(event, value === buttonValue ? null : buttonValue);
  }, [onChange, value]);
  const context = reactExports.useMemo(() => ({
    className: classes.grouped,
    onChange: exclusive ? handleExclusiveChange : handleChange,
    value,
    size,
    fullWidth,
    color,
    disabled
  }), [classes.grouped, exclusive, handleExclusiveChange, handleChange, value, size, fullWidth, color, disabled]);
  const validChildren = getValidReactChildren(children);
  const childrenCount = validChildren.length;
  const getButtonPositionClassName = (index) => {
    const isFirstButton = index === 0;
    const isLastButton = index === childrenCount - 1;
    if (isFirstButton && isLastButton) {
      return "";
    }
    if (isFirstButton) {
      return classes.firstButton;
    }
    if (isLastButton) {
      return classes.lastButton;
    }
    return classes.middleButton;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButtonGroupRoot, {
    role: "group",
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButtonGroupContext.Provider, {
      value: context,
      children: validChildren.map((child, index) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButtonGroupButtonContext.Provider, {
          value: getButtonPositionClassName(index),
          children: child
        }, index);
      })
    })
  });
});
export {
  FormControlLabel as F,
  RadioGroup as R,
  SwitchBase as S,
  ToggleButtonGroup as T,
  Radio as a,
  ToggleButton as b
};
//# sourceMappingURL=ToggleButtonGroup-zfJ_XPzw.js.map
