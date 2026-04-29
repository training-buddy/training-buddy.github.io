import { n as generateUtilityClass, o as generateUtilityClasses, r as reactExports, p as useDefaultProps, q as clsx, j as jsxRuntimeExports, y as capitalize, t as composeClasses, v as styled, aa as ButtonBase, z as memoTheme, k as createSvgIcon, aJ as useEnhancedEffect, bE as debounce, bF as ownerWindow, x as useRtl, aK as useSlotProps, ak as useTheme, aQ as useEventCallback, a9 as useSlot, bG as activeElement, aG as ownerDocument, aC as _extends, aI as useForkRef, aB as _objectWithoutPropertiesLoose, bu as MenuItem, a_ as alpha, bH as MenuList, T as Typography, g as Button, b9 as shouldForwardProp, D as Divider, aD as resolveComponentProps, aE as useMediaQuery, u as useAuth, B as Box, C as CircularProgress, A as Alert, ah as FormControl, bf as InputLabel, bt as Select, ag as TextField, bB as useParams, _ as useNavigate, b as routes } from "./index-BnUnq6VV.js";
import { h as getTrainingExecution, u as updateTrainingExecution } from "./trainingExecutions-G_KzpqQW.js";
import { r as requireDayjs_min, d as dayjs } from "./dayjs.min-C4R-6fGg.js";
import { g as getTrainingPlans } from "./trainingPlans-DsaZpT-m.js";
import { N as NumberSpinner } from "./NumberSpinner-eb9vCwOE.js";
import { S as Stack } from "./Stack-DNG_CLkZ.js";
import { q as createIsAfterIgnoreDatePart, s as singleItemValueManager, v as validateDate, u as usePickerAdapter, t as useDefaultDates, w as applyDefaultDate, x as singleItemFieldValueManager, b as usePickerTranslations, S as SECTION_TYPE_GRANULARITY, y as getTodayDate, z as useControlledValue, B as useNow, E as usePickerPrivateContext, F as useViews, G as PickerViewRoot, H as DIGITAL_CLOCK_VIEW_HEIGHT, I as getFocusedListItemIndex, M as MULTI_SECTION_CLOCK_SECTION_WIDTH, J as useMeridiemMode, K as formatMeridiem, N as convertValueToMeridiem, g as useField, h as useFieldTextFieldProps, i as PickerFieldUIContextProvider, j as PickerFieldUI, C as CalendarIcon, O as getPickersToolbarUtilityClass, Q as isTimeView, R as isInternalTimeView, T as isDatePickerView, r as resolveDateFormat, U as resolveTimeFormat, V as DateRangeIcon, W as TimeIcon, a as usePickerContext, c as useToolbarOwnerState, P as PickersToolbar, X as pickersToolbarClasses, e as applyDefaultViewProps, Y as usePickerLayout, Z as PickersLayoutRoot, _ as PickersLayoutContentWrapper, $ as pickersLayoutClasses, k as renderDateViewCalendar, l as extractValidationProps, m as useDesktopPicker, a0 as VIEW_HEIGHT, n as PropTypes, o as refType, a1 as mergeSx, a2 as DIALOG_WIDTH, p as useMobilePicker, a3 as DATE_VIEWS, a4 as EXPORTED_TIME_VIEWS, D as DEFAULT_DESKTOP_MODE_MEDIA_QUERY, L as LocalizationProvider, A as AdapterDayjs } from "./useMobilePicker-Co6D9cCg.js";
import { u as useThemeProps } from "./InputAdornment-C-BifSfv.js";
import "./useOnMount-BR-Gp7XJ.js";
import "./useThemeProps-Dmh0j4Hs.js";
import "./Popper-DRi7zrAe.js";
function getTabUtilityClass(slot) {
  return generateUtilityClass("MuiTab", slot);
}
const tabClasses = generateUtilityClasses("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]);
const useUtilityClasses$9 = (ownerState) => {
  const {
    classes,
    textColor,
    fullWidth,
    wrapped,
    icon,
    label,
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", icon && label && "labelIcon", `textColor${capitalize(textColor)}`, fullWidth && "fullWidth", wrapped && "wrapped", selected && "selected", disabled && "disabled"],
    icon: ["iconWrapper", "icon"]
  };
  return composeClasses(slots, getTabUtilityClass, classes);
};
const TabRoot = styled(ButtonBase, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.label && ownerState.icon && styles2.labelIcon, styles2[`textColor${capitalize(ownerState.textColor)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.wrapped && styles2.wrapped, {
      [`& .${tabClasses.iconWrapper}`]: styles2.iconWrapper
    }, {
      [`& .${tabClasses.icon}`]: styles2.icon
    }];
  }
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.button,
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center",
  lineHeight: 1.25,
  variants: [{
    props: ({
      ownerState
    }) => ownerState.label && (ownerState.iconPosition === "top" || ownerState.iconPosition === "bottom"),
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.label && ownerState.iconPosition !== "top" && ownerState.iconPosition !== "bottom",
    style: {
      flexDirection: "row"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.icon && ownerState.label,
    style: {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "top",
    style: {
      [`& > .${tabClasses.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "bottom",
    style: {
      [`& > .${tabClasses.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "start",
    style: {
      [`& > .${tabClasses.icon}`]: {
        marginRight: theme.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "end",
    style: {
      [`& > .${tabClasses.icon}`]: {
        marginLeft: theme.spacing(1)
      }
    }
  }, {
    props: {
      textColor: "inherit"
    },
    style: {
      color: "inherit",
      opacity: 0.6,
      // same opacity as theme.palette.text.secondary
      [`&.${tabClasses.selected}`]: {
        opacity: 1
      },
      [`&.${tabClasses.disabled}`]: {
        opacity: (theme.vars || theme).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      [`&.${tabClasses.selected}`]: {
        color: (theme.vars || theme).palette.primary.main
      },
      [`&.${tabClasses.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      [`&.${tabClasses.selected}`]: {
        color: (theme.vars || theme).palette.secondary.main
      },
      [`&.${tabClasses.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.fullWidth,
    style: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.wrapped,
    style: {
      fontSize: theme.typography.pxToRem(12)
    }
  }]
})));
const Tab = /* @__PURE__ */ reactExports.forwardRef(function Tab2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTab"
  });
  const {
    className,
    disabled = false,
    disableFocusRipple = false,
    // eslint-disable-next-line react/prop-types
    fullWidth,
    icon: iconProp,
    iconPosition = "top",
    // eslint-disable-next-line react/prop-types
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    // eslint-disable-next-line react/prop-types
    selected,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus,
    // eslint-disable-next-line react/prop-types
    textColor = "inherit",
    value,
    wrapped = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disabled,
    disableFocusRipple,
    selected,
    icon: !!iconProp,
    iconPosition,
    label: !!label,
    fullWidth,
    textColor,
    wrapped
  };
  const classes = useUtilityClasses$9(ownerState);
  const icon = iconProp && label && /* @__PURE__ */ reactExports.isValidElement(iconProp) ? /* @__PURE__ */ reactExports.cloneElement(iconProp, {
    className: clsx(classes.icon, iconProp.props.className)
  }) : iconProp;
  const handleClick = (event) => {
    if (!selected && onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const handleFocus = (event) => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TabRoot, {
    focusRipple: !disableFocusRipple,
    className: clsx(classes.root, className),
    ref,
    role: "tab",
    "aria-selected": selected,
    disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    ownerState,
    tabIndex: selected ? 0 : -1,
    ...other,
    children: [iconPosition === "top" || iconPosition === "start" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
      children: [icon, label]
    }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
      children: [label, icon]
    }), indicator]
  });
});
const KeyboardArrowLeft = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}));
const KeyboardArrowRight = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to, options = {}, cb = () => {
}) {
  const {
    ease = easeInOutSin,
    duration = 300
    // standard
  } = options;
  let start = null;
  const from = element[property];
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
  };
  const step = (timestamp) => {
    if (cancelled) {
      cb(new Error("Animation cancelled"));
      return;
    }
    if (start === null) {
      start = timestamp;
    }
    const time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;
    if (time >= 1) {
      requestAnimationFrame(() => {
        cb(null);
      });
      return;
    }
    requestAnimationFrame(step);
  };
  if (from === to) {
    cb(new Error("Element already at target position"));
    return cancel;
  }
  requestAnimationFrame(step);
  return cancel;
}
const styles = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function ScrollbarSize(props) {
  const {
    onChange,
    ...other
  } = props;
  const scrollbarHeight = reactExports.useRef();
  const nodeRef = reactExports.useRef(null);
  const setMeasurements = () => {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };
  useEnhancedEffect(() => {
    const handleResize = debounce(() => {
      const prevHeight = scrollbarHeight.current;
      setMeasurements();
      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    const containerWindow = ownerWindow(nodeRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [onChange]);
  reactExports.useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    style: styles,
    ...other,
    ref: nodeRef
  });
}
function getTabScrollButtonUtilityClass(slot) {
  return generateUtilityClass("MuiTabScrollButton", slot);
}
const tabScrollButtonClasses = generateUtilityClasses("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]);
const useUtilityClasses$8 = (ownerState) => {
  const {
    classes,
    orientation,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation, disabled && "disabled"]
  };
  return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
};
const TabScrollButtonRoot = styled(ButtonBase, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.orientation && styles2[ownerState.orientation]];
  }
})({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${tabScrollButtonClasses.disabled}`]: {
    opacity: 0
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      width: "100%",
      height: 40,
      "& svg": {
        transform: "var(--TabScrollButton-svgRotate)"
      }
    }
  }]
});
const TabScrollButton = /* @__PURE__ */ reactExports.forwardRef(function TabScrollButton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTabScrollButton"
  });
  const {
    className,
    slots = {},
    slotProps = {},
    direction,
    orientation,
    disabled,
    ...other
  } = props;
  const isRtl = useRtl();
  const ownerState = {
    isRtl,
    ...props
  };
  const classes = useUtilityClasses$8(ownerState);
  const StartButtonIcon = slots.StartScrollButtonIcon ?? KeyboardArrowLeft;
  const EndButtonIcon = slots.EndScrollButtonIcon ?? KeyboardArrowRight;
  const startButtonIconProps = useSlotProps({
    elementType: StartButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  const endButtonIconProps = useSlotProps({
    elementType: EndButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabScrollButtonRoot, {
    component: "div",
    className: clsx(classes.root, className),
    ref,
    role: null,
    ownerState,
    tabIndex: null,
    ...other,
    style: {
      ...other.style,
      ...orientation === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${isRtl ? -90 : 90}deg)`
      }
    },
    children: direction === "left" ? /* @__PURE__ */ jsxRuntimeExports.jsx(StartButtonIcon, {
      ...startButtonIconProps
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EndButtonIcon, {
      ...endButtonIconProps
    })
  });
});
function getTabsUtilityClass(slot) {
  return generateUtilityClass("MuiTabs", slot);
}
const tabsClasses = generateUtilityClasses("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
const nextItem = (list, item) => {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return list.firstChild;
};
const previousItem = (list, item) => {
  if (list === item) {
    return list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return list.lastChild;
};
const moveFocus = (list, currentFocus, traversalFunction) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};
const useUtilityClasses$7 = (ownerState) => {
  const {
    vertical,
    fixed,
    hideScrollbar,
    scrollableX,
    scrollableY,
    centered,
    scrollButtonsHideMobile,
    classes
  } = ownerState;
  const slots = {
    root: ["root", vertical && "vertical"],
    scroller: ["scroller", fixed && "fixed", hideScrollbar && "hideScrollbar", scrollableX && "scrollableX", scrollableY && "scrollableY"],
    list: ["list", "flexContainer", vertical && "flexContainerVertical", vertical && "vertical", centered && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", scrollButtonsHideMobile && "scrollButtonsHideMobile"],
    scrollableX: [scrollableX && "scrollableX"],
    hideScrollbar: [hideScrollbar && "hideScrollbar"]
  };
  return composeClasses(slots, getTabsUtilityClass, classes);
};
const TabsRoot = styled("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${tabsClasses.scrollButtons}`]: styles2.scrollButtons
    }, {
      [`& .${tabsClasses.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles2.scrollButtonsHideMobile
    }, styles2.root, ownerState.vertical && styles2.vertical];
  }
})(memoTheme(({
  theme
}) => ({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.scrollButtonsHideMobile,
    style: {
      [`& .${tabsClasses.scrollButtons}`]: {
        [theme.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
})));
const TabsScroller = styled("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.scroller, ownerState.fixed && styles2.fixed, ownerState.hideScrollbar && styles2.hideScrollbar, ownerState.scrollableX && styles2.scrollableX, ownerState.scrollableY && styles2.scrollableY];
  }
})({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.fixed,
    style: {
      overflowX: "hidden",
      width: "100%"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hideScrollbar,
    style: {
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.scrollableX,
    style: {
      overflowX: "auto",
      overflowY: "hidden"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.scrollableY,
    style: {
      overflowY: "auto",
      overflowX: "hidden"
    }
  }]
});
const List = styled("div", {
  name: "MuiTabs",
  slot: "List",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.list, styles2.flexContainer, ownerState.vertical && styles2.flexContainerVertical, ownerState.centered && styles2.centered];
  }
})({
  display: "flex",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.centered,
    style: {
      justifyContent: "center"
    }
  }]
});
const TabsIndicator = styled("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(memoTheme(({
  theme
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: theme.transitions.create(),
  variants: [{
    props: {
      indicatorColor: "primary"
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main
    }
  }, {
    props: {
      indicatorColor: "secondary"
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.secondary.main
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.vertical,
    style: {
      height: "100%",
      width: 2,
      right: 0
    }
  }]
})));
const TabsScrollbarSize = styled(ScrollbarSize)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
});
const defaultIndicatorStyle = {};
const Tabs = /* @__PURE__ */ reactExports.forwardRef(function Tabs2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTabs"
  });
  const theme = useTheme();
  const isRtl = useRtl();
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    action,
    centered = false,
    children: childrenProp,
    className,
    component = "div",
    allowScrollButtonsMobile = false,
    indicatorColor = "primary",
    onChange,
    orientation = "horizontal",
    ScrollButtonComponent,
    // TODO: remove in v7 (deprecated in v6)
    scrollButtons = "auto",
    selectionFollowsFocus,
    slots = {},
    slotProps = {},
    TabIndicatorProps = {},
    // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps = {},
    // TODO: remove in v7 (deprecated in v6)
    textColor = "primary",
    value,
    variant = "standard",
    visibleScrollbar = false,
    ...other
  } = props;
  const scrollable = variant === "scrollable";
  const vertical = orientation === "vertical";
  const scrollStart = vertical ? "scrollTop" : "scrollLeft";
  const start = vertical ? "top" : "left";
  const end = vertical ? "bottom" : "right";
  const clientSize = vertical ? "clientHeight" : "clientWidth";
  const size = vertical ? "height" : "width";
  const ownerState = {
    ...props,
    component,
    allowScrollButtonsMobile,
    indicatorColor,
    orientation,
    vertical,
    scrollButtons,
    textColor,
    variant,
    visibleScrollbar,
    fixed: !scrollable,
    hideScrollbar: scrollable && !visibleScrollbar,
    scrollableX: scrollable && !vertical,
    scrollableY: scrollable && vertical,
    centered: centered && !scrollable,
    scrollButtonsHideMobile: !allowScrollButtonsMobile
  };
  const classes = useUtilityClasses$7(ownerState);
  const startScrollButtonIconProps = useSlotProps({
    elementType: slots.StartScrollButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    ownerState
  });
  const endScrollButtonIconProps = useSlotProps({
    elementType: slots.EndScrollButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    ownerState
  });
  const [mounted, setMounted] = reactExports.useState(false);
  const [indicatorStyle, setIndicatorStyle] = reactExports.useState(defaultIndicatorStyle);
  const [displayStartScroll, setDisplayStartScroll] = reactExports.useState(false);
  const [displayEndScroll, setDisplayEndScroll] = reactExports.useState(false);
  const [updateScrollObserver, setUpdateScrollObserver] = reactExports.useState(false);
  const [scrollerStyle, setScrollerStyle] = reactExports.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  });
  const valueToIndex = /* @__PURE__ */ new Map();
  const tabsRef = reactExports.useRef(null);
  const tabListRef = reactExports.useRef(null);
  const externalForwardedProps = {
    slots,
    slotProps: {
      indicator: TabIndicatorProps,
      scrollButtons: TabScrollButtonProps,
      ...slotProps
    }
  };
  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;
    let tabsMeta;
    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }
    let tabMeta;
    if (tabsNode && value !== false) {
      const children2 = tabListRef.current.children;
      if (children2.length > 0) {
        const tab = children2[valueToIndex.get(value)];
        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta,
      tabMeta
    };
  };
  const updateIndicatorState = useEventCallback(() => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    let startValue = 0;
    let startIndicator;
    if (vertical) {
      startIndicator = "top";
      if (tabMeta && tabsMeta) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      }
    } else {
      startIndicator = isRtl ? "right" : "left";
      if (tabMeta && tabsMeta) {
        startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + tabsMeta.scrollLeft);
      }
    }
    const newIndicatorStyle = {
      [startIndicator]: startValue,
      // May be wrong until the font is loaded.
      [size]: tabMeta ? tabMeta[size] : 0
    };
    if (typeof indicatorStyle[startIndicator] !== "number" || typeof indicatorStyle[size] !== "number") {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
      const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });
  const scroll = (scrollValue, {
    animation = true
  } = {}) => {
    if (animation) {
      animate(scrollStart, tabsRef.current, scrollValue, {
        duration: theme.transitions.duration.standard
      });
    } else {
      tabsRef.current[scrollStart] = scrollValue;
    }
  };
  const moveTabsScroll = (delta) => {
    let scrollValue = tabsRef.current[scrollStart];
    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1);
    }
    scroll(scrollValue);
  };
  const getScrollSize = () => {
    const containerSize = tabsRef.current[clientSize];
    let totalSize = 0;
    const children2 = Array.from(tabListRef.current.children);
    for (let i = 0; i < children2.length; i += 1) {
      const tab = children2[i];
      if (totalSize + tab[clientSize] > containerSize) {
        if (i === 0) {
          totalSize = containerSize;
        }
        break;
      }
      totalSize += tab[clientSize];
    }
    return totalSize;
  };
  const handleStartScrollClick = () => {
    moveTabsScroll(-1 * getScrollSize());
  };
  const handleEndScrollClick = () => {
    moveTabsScroll(getScrollSize());
  };
  const [ScrollbarSlot, {
    onChange: scrollbarOnChange,
    ...scrollbarSlotProps
  }] = useSlot("scrollbar", {
    className: clsx(classes.scrollableX, classes.hideScrollbar),
    elementType: TabsScrollbarSize,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState
  });
  const handleScrollbarSizeChange = reactExports.useCallback((scrollbarWidth) => {
    scrollbarOnChange?.(scrollbarWidth);
    setScrollerStyle({
      overflow: null,
      scrollbarWidth
    });
  }, [scrollbarOnChange]);
  const [ScrollButtonsSlot, scrollButtonSlotProps] = useSlot("scrollButtons", {
    className: clsx(classes.scrollButtons, TabScrollButtonProps.className),
    elementType: TabScrollButton,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      orientation,
      slots: {
        StartScrollButtonIcon: slots.startScrollButtonIcon || slots.StartScrollButtonIcon,
        EndScrollButtonIcon: slots.endScrollButtonIcon || slots.EndScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: startScrollButtonIconProps,
        endScrollButtonIcon: endScrollButtonIconProps
      }
    }
  });
  const getConditionalElements = () => {
    const conditionalElements2 = {};
    conditionalElements2.scrollbarSizeListener = scrollable ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollbarSlot, {
      ...scrollbarSlotProps,
      onChange: handleScrollbarSizeChange
    }) : null;
    const scrollButtonsActive = displayStartScroll || displayEndScroll;
    const showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === true);
    conditionalElements2.scrollButtonStart = showScrollButtons ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollButtonsSlot, {
      direction: isRtl ? "right" : "left",
      onClick: handleStartScrollClick,
      disabled: !displayStartScroll,
      ...scrollButtonSlotProps
    }) : null;
    conditionalElements2.scrollButtonEnd = showScrollButtons ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollButtonsSlot, {
      direction: isRtl ? "left" : "right",
      onClick: handleEndScrollClick,
      disabled: !displayEndScroll,
      ...scrollButtonSlotProps
    }) : null;
    return conditionalElements2;
  };
  const scrollSelectedIntoView = useEventCallback((animation) => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    if (!tabMeta || !tabsMeta) {
      return;
    }
    if (tabMeta[start] < tabsMeta[start]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart, {
        animation
      });
    } else if (tabMeta[end] > tabsMeta[end]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
      scroll(nextScrollStart, {
        animation
      });
    }
  });
  const updateScrollButtonState = useEventCallback(() => {
    if (scrollable && scrollButtons !== false) {
      setUpdateScrollObserver(!updateScrollObserver);
    }
  });
  reactExports.useEffect(() => {
    const handleResize = debounce(() => {
      if (tabsRef.current) {
        updateIndicatorState();
      }
    });
    let resizeObserver;
    const handleMutation = (records) => {
      records.forEach((record) => {
        record.removedNodes.forEach((item) => {
          resizeObserver?.unobserve(item);
        });
        record.addedNodes.forEach((item) => {
          resizeObserver?.observe(item);
        });
      });
      handleResize();
      updateScrollButtonState();
    };
    const win = ownerWindow(tabsRef.current);
    win.addEventListener("resize", handleResize);
    let mutationObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      Array.from(tabListRef.current.children).forEach((child) => {
        resizeObserver.observe(child);
      });
    }
    if (typeof MutationObserver !== "undefined") {
      mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(tabListRef.current, {
        childList: true
      });
    }
    return () => {
      handleResize.clear();
      win.removeEventListener("resize", handleResize);
      mutationObserver?.disconnect();
      resizeObserver?.disconnect();
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  reactExports.useEffect(() => {
    const tabListChildren = Array.from(tabListRef.current.children);
    const length = tabListChildren.length;
    if (typeof IntersectionObserver !== "undefined" && length > 0 && scrollable && scrollButtons !== false) {
      const firstTab = tabListChildren[0];
      const lastTab = tabListChildren[length - 1];
      const observerOptions = {
        root: tabsRef.current,
        threshold: 0.99
      };
      const handleScrollButtonStart = (entries) => {
        setDisplayStartScroll(!entries[0].isIntersecting);
      };
      const firstObserver = new IntersectionObserver(handleScrollButtonStart, observerOptions);
      firstObserver.observe(firstTab);
      const handleScrollButtonEnd = (entries) => {
        setDisplayEndScroll(!entries[0].isIntersecting);
      };
      const lastObserver = new IntersectionObserver(handleScrollButtonEnd, observerOptions);
      lastObserver.observe(lastTab);
      return () => {
        firstObserver.disconnect();
        lastObserver.disconnect();
      };
    }
    return void 0;
  }, [scrollable, scrollButtons, updateScrollObserver, childrenProp?.length]);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  reactExports.useEffect(() => {
    updateIndicatorState();
  });
  reactExports.useEffect(() => {
    scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
  }, [scrollSelectedIntoView, indicatorStyle]);
  reactExports.useImperativeHandle(action, () => ({
    updateIndicator: updateIndicatorState,
    updateScrollButtons: updateScrollButtonState
  }), [updateIndicatorState, updateScrollButtonState]);
  const [IndicatorSlot, indicatorSlotProps] = useSlot("indicator", {
    className: clsx(classes.indicator, TabIndicatorProps.className),
    elementType: TabsIndicator,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      style: indicatorStyle
    }
  });
  const indicator = /* @__PURE__ */ jsxRuntimeExports.jsx(IndicatorSlot, {
    ...indicatorSlotProps
  });
  let childIndex = 0;
  const children = reactExports.Children.map(childrenProp, (child) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      return null;
    }
    const childValue = child.props.value === void 0 ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;
    childIndex += 1;
    return /* @__PURE__ */ reactExports.cloneElement(child, {
      fullWidth: variant === "fullWidth",
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      textColor,
      value: childValue,
      ...childIndex === 1 && value === false && !child.props.tabIndex ? {
        tabIndex: 0
      } : {}
    });
  });
  const handleKeyDown = (event) => {
    if (event.altKey || event.shiftKey || event.ctrlKey || event.metaKey) {
      return;
    }
    const list = tabListRef.current;
    const currentFocus = activeElement(ownerDocument(list));
    const role = currentFocus?.getAttribute("role");
    if (role !== "tab") {
      return;
    }
    let previousItemKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
    let nextItemKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
    if (orientation === "horizontal" && isRtl) {
      previousItemKey = "ArrowRight";
      nextItemKey = "ArrowLeft";
    }
    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;
      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;
      case "Home":
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;
      case "End":
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;
    }
  };
  const conditionalElements = getConditionalElements();
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    className: clsx(classes.root, className),
    elementType: TabsRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      component
    },
    ownerState
  });
  const [ScrollerSlot, scrollerSlotProps] = useSlot("scroller", {
    ref: tabsRef,
    className: classes.scroller,
    elementType: TabsScroller,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      style: {
        overflow: scrollerStyle.overflow,
        [vertical ? `margin${isRtl ? "Left" : "Right"}` : "marginBottom"]: visibleScrollbar ? void 0 : -scrollerStyle.scrollbarWidth
      }
    }
  });
  const [ListSlot, listSlotProps] = useSlot("list", {
    ref: tabListRef,
    className: clsx(classes.list, classes.flexContainer),
    elementType: List,
    externalForwardedProps,
    ownerState,
    getSlotProps: (handlers) => ({
      ...handlers,
      onKeyDown: (event) => {
        handleKeyDown(event);
        handlers.onKeyDown?.(event);
      }
    })
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollerSlot, {
      ...scrollerSlotProps,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ListSlot, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-orientation": orientation === "vertical" ? "vertical" : null,
        role: "tablist",
        ...listSlotProps,
        children
      }), mounted && indicator]
    }), conditionalElements.scrollButtonEnd]
  });
});
const validateTime = ({
  adapter,
  value,
  timezone,
  props
}) => {
  if (value === null) {
    return null;
  }
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation = false,
    disablePast,
    disableFuture
  } = props;
  const now = adapter.date(void 0, timezone);
  const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter);
  switch (true) {
    case !adapter.isValid(value):
      return "invalidDate";
    case Boolean(minTime && isAfter(minTime, value)):
      return "minTime";
    case Boolean(maxTime && isAfter(value, maxTime)):
      return "maxTime";
    case Boolean(disableFuture && adapter.isAfter(value, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.isBefore(value, now)):
      return "disablePast";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "hours")):
      return "shouldDisableTime-hours";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "minutes")):
      return "shouldDisableTime-minutes";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "seconds")):
      return "shouldDisableTime-seconds";
    case Boolean(minutesStep && adapter.getMinutes(value) % minutesStep !== 0):
      return "minutesStep";
    default:
      return null;
  }
};
validateTime.valueManager = singleItemValueManager;
const validateDateTime = ({
  adapter,
  value,
  timezone,
  props
}) => {
  const dateValidationResult = validateDate({
    adapter,
    value,
    timezone,
    props
  });
  if (dateValidationResult !== null) {
    return dateValidationResult;
  }
  return validateTime({
    adapter,
    value,
    timezone,
    props
  });
};
validateDateTime.valueManager = singleItemValueManager;
function useDateTimeManager(parameters = {}) {
  const {
    enableAccessibleFieldDOMStructure = true
  } = parameters;
  return reactExports.useMemo(() => ({
    valueType: "date-time",
    validator: validateDateTime,
    internal_valueManager: singleItemValueManager,
    internal_fieldValueManager: singleItemFieldValueManager,
    internal_enableAccessibleFieldDOMStructure: enableAccessibleFieldDOMStructure,
    internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToDateTimeFieldInternalProps,
    internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel
  }), [enableAccessibleFieldDOMStructure]);
}
function useOpenPickerButtonAriaLabel(value) {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  return reactExports.useMemo(() => {
    const formattedValue = adapter.isValid(value) ? adapter.format(value, "fullDate") : null;
    return translations.openDatePickerDialogue(formattedValue);
  }, [value, translations, adapter]);
}
function useApplyDefaultValuesToDateTimeFieldInternalProps(internalProps) {
  const adapter = usePickerAdapter();
  const validationProps = useApplyDefaultValuesToDateTimeValidationProps(internalProps);
  const ampm = reactExports.useMemo(() => internalProps.ampm ?? adapter.is12HourCycleInCurrentLocale(), [internalProps.ampm, adapter]);
  return reactExports.useMemo(() => _extends({}, internalProps, validationProps, {
    format: internalProps.format ?? (ampm ? adapter.formats.keyboardDateTime12h : adapter.formats.keyboardDateTime24h)
  }), [internalProps, validationProps, ampm, adapter]);
}
function useApplyDefaultValuesToDateTimeValidationProps(props) {
  const adapter = usePickerAdapter();
  const defaultDates = useDefaultDates();
  return reactExports.useMemo(() => ({
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    // TODO: Explore if we can remove it from the public API
    disableIgnoringDatePartForTimeValidation: !!props.minDateTime || !!props.maxDateTime || !!props.disableFuture || !!props.disablePast,
    minDate: applyDefaultDate(adapter, props.minDateTime ?? props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(adapter, props.maxDateTime ?? props.maxDate, defaultDates.maxDate),
    minTime: props.minDateTime ?? props.minTime,
    maxTime: props.maxDateTime ?? props.maxTime
  }), [props.minDateTime, props.maxDateTime, props.minTime, props.maxTime, props.minDate, props.maxDate, props.disableFuture, props.disablePast, adapter, defaultDates]);
}
var ko$1 = { exports: {} };
var ko = ko$1.exports;
var hasRequiredKo;
function requireKo() {
  if (hasRequiredKo) return ko$1.exports;
  hasRequiredKo = 1;
  (function(module, exports$1) {
    !(function(e, _) {
      module.exports = _(requireDayjs_min());
    })(ko, (function(e) {
      function _(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var d = _(e), t = { name: "ko", weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), ordinal: function(e2) {
        return e2 + "일";
      }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, meridiem: function(e2) {
        return e2 < 12 ? "오전" : "오후";
      }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" } };
      return d.default.locale(t, null, true), t;
    }));
  })(ko$1);
  return ko$1.exports;
}
requireKo();
const useClockReferenceDate = ({
  value,
  referenceDate: referenceDateProp,
  adapter,
  props,
  timezone
}) => {
  const referenceDate = reactExports.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      adapter,
      props,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.day,
      timezone,
      getTodayDate: () => getTodayDate(adapter, timezone, "date")
    }),
    // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
    [referenceDateProp, timezone]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  return value ?? referenceDate;
};
function getDigitalClockUtilityClass(slot) {
  return generateUtilityClass("MuiDigitalClock", slot);
}
const digitalClockClasses = generateUtilityClasses("MuiDigitalClock", ["root", "list", "item"]);
const _excluded$9 = ["ampm", "timeStep", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "onChange", "view", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "classes", "disabled", "readOnly", "views", "skipDisabled", "timezone"];
const useUtilityClasses$6 = (classes) => {
  const slots = {
    root: ["root"],
    list: ["list"],
    item: ["item"]
  };
  return composeClasses(slots, getDigitalClockUtilityClass, classes);
};
const DigitalClockRoot = styled(PickerViewRoot, {
  name: "MuiDigitalClock",
  slot: "Root"
})({
  overflowY: "auto",
  width: "100%",
  scrollbarWidth: "thin",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: "auto"
  },
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  variants: [{
    props: {
      hasDigitalClockAlreadyBeenRendered: true
    },
    style: {
      "@media (prefers-reduced-motion: no-preference)": {
        scrollBehavior: "smooth"
      }
    }
  }]
});
const DigitalClockList = styled(MenuList, {
  name: "MuiDigitalClock",
  slot: "List"
})({
  padding: 0
});
const DigitalClockItem = styled(MenuItem, {
  name: "MuiDigitalClock",
  slot: "Item",
  shouldForwardProp: (prop) => prop !== "itemValue" && prop !== "formattedValue"
})(({
  theme
}) => ({
  padding: "8px 16px",
  margin: "2px 4px",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
const DigitalClock = /* @__PURE__ */ reactExports.forwardRef(function DigitalClock2(inProps, ref) {
  const adapter = usePickerAdapter();
  const containerRef = reactExports.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const listRef = reactExports.useRef(null);
  const props = useThemeProps({
    props: inProps,
    name: "MuiDigitalClock"
  });
  const {
    ampm = adapter.is12HourCycleInCurrentLocale(),
    timeStep = 30,
    autoFocus,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableTime,
    onChange,
    view: inView,
    openTo,
    onViewChange,
    focusedView,
    onFocusedViewChange,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    views = ["hours"],
    skipDisabled = false,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$9);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValue({
    name: "DigitalClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const translations = usePickerTranslations();
  const now = useNow(timezone);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    hasDigitalClockAlreadyBeenRendered: !!containerRef.current
  });
  const classes = useUtilityClasses$6(classesProp);
  const ClockItem = slots?.digitalClockItem ?? DigitalClockItem;
  const clockItemProps = useSlotProps({
    elementType: ClockItem,
    externalSlotProps: slotProps?.digitalClockItem,
    ownerState,
    className: classes.item
  });
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    adapter,
    props,
    timezone
  });
  const handleValueChange = useEventCallback((newValue) => handleRawValueChange(newValue, "finish", "hours"));
  const {
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const handleItemSelect = useEventCallback((newValue) => {
    setValueAndGoToNextView(newValue, "finish");
  });
  useEnhancedEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    const activeItem = containerRef.current.querySelector('[role="listbox"] [role="option"][tabindex="0"], [role="listbox"] [role="option"][aria-selected="true"]');
    if (!activeItem) {
      return;
    }
    const offsetTop = activeItem.offsetTop;
    if (autoFocus || !!focusedView) {
      activeItem.focus();
    }
    containerRef.current.scrollTop = offsetTop - 4;
  });
  const isTimeDisabled = reactExports.useCallback((valueToCheck) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter);
    const containsValidTime = () => {
      if (minTime && isAfter(minTime, valueToCheck)) {
        return false;
      }
      if (maxTime && isAfter(valueToCheck, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(valueToCheck, now)) {
        return false;
      }
      if (disablePast && isAfter(now, valueToCheck)) {
        return false;
      }
      return true;
    };
    const isValidValue = () => {
      if (adapter.getMinutes(valueToCheck) % minutesStep !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        return !shouldDisableTime(valueToCheck, "hours");
      }
      return true;
    };
    return !containsValidTime() || !isValidValue();
  }, [disableIgnoringDatePartForTimeValidation, adapter, minTime, maxTime, disableFuture, now, disablePast, minutesStep, shouldDisableTime]);
  const timeOptions = reactExports.useMemo(() => {
    const result = [];
    const startOfDay = adapter.startOfDay(valueOrReferenceDate);
    let nextTimeStepOption = startOfDay;
    while (adapter.isSameDay(valueOrReferenceDate, nextTimeStepOption)) {
      result.push(nextTimeStepOption);
      nextTimeStepOption = adapter.addMinutes(nextTimeStepOption, timeStep);
    }
    return result;
  }, [valueOrReferenceDate, timeStep, adapter]);
  const focusedOptionIndex = timeOptions.findIndex((option) => adapter.isEqual(option, valueOrReferenceDate));
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "PageUp": {
        const newIndex = getFocusedListItemIndex(listRef.current) - 5;
        const children = listRef.current.children;
        const newFocusedIndex = Math.max(0, newIndex);
        const childToFocus = children[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
      case "PageDown": {
        const newIndex = getFocusedListItemIndex(listRef.current) + 5;
        const children = listRef.current.children;
        const newFocusedIndex = Math.min(children.length - 1, newIndex);
        const childToFocus = children[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DigitalClockRoot, _extends({
    ref: handleRef,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(DigitalClockList, {
      ref: listRef,
      role: "listbox",
      "aria-label": translations.timePickerToolbarTitle,
      className: classes.list,
      onKeyDown: handleKeyDown,
      children: timeOptions.map((option, index) => {
        const optionDisabled = isTimeDisabled(option);
        if (skipDisabled && optionDisabled) {
          return null;
        }
        const isSelected = adapter.isEqual(option, value);
        const formattedValue = adapter.format(option, ampm ? "fullTime12h" : "fullTime24h");
        const isFocused = focusedOptionIndex === index || focusedOptionIndex === -1 && index === 0;
        const tabIndex = isFocused ? 0 : -1;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ClockItem, _extends({
          onClick: () => !readOnly && handleItemSelect(option),
          selected: isSelected,
          disabled: disabled || optionDisabled,
          disableRipple: readOnly,
          role: "option",
          "aria-disabled": readOnly,
          "aria-selected": isSelected,
          tabIndex,
          itemValue: option,
          formattedValue
        }, clockItemProps, {
          children: formattedValue
        }), `${option.valueOf()}-${formattedValue}`);
      })
    })
  }));
});
function getMultiSectionDigitalClockUtilityClass(slot) {
  return generateUtilityClass("MuiMultiSectionDigitalClock", slot);
}
const multiSectionDigitalClockClasses = generateUtilityClasses("MuiMultiSectionDigitalClock", ["root"]);
function getMultiSectionDigitalClockSectionUtilityClass(slot) {
  return generateUtilityClass("MuiMultiSectionDigitalClockSection", slot);
}
const multiSectionDigitalClockSectionClasses = generateUtilityClasses("MuiMultiSectionDigitalClockSection", ["root", "item"]);
const _excluded$8 = ["autoFocus", "onChange", "className", "classes", "disabled", "readOnly", "items", "active", "slots", "slotProps", "skipDisabled"];
const useUtilityClasses$5 = (classes) => {
  const slots = {
    root: ["root"],
    item: ["item"]
  };
  return composeClasses(slots, getMultiSectionDigitalClockSectionUtilityClass, classes);
};
const MultiSectionDigitalClockSectionRoot = styled(MenuList, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Root"
})(({
  theme
}) => ({
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  width: 56,
  padding: 0,
  overflow: "hidden",
  scrollbarWidth: "thin",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: "auto"
  },
  "@media (pointer: fine)": {
    "&:hover": {
      overflowY: "auto"
    }
  },
  "@media (pointer: none), (pointer: coarse)": {
    overflowY: "auto"
  },
  "&:not(:first-of-type)": {
    borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
  },
  variants: [{
    props: {
      hasDigitalClockAlreadyBeenRendered: true
    },
    style: {
      "@media (prefers-reduced-motion: no-preference)": {
        scrollBehavior: "smooth"
      }
    }
  }]
}));
const MultiSectionDigitalClockSectionItem = styled(MenuItem, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Item"
})(({
  theme
}) => ({
  padding: 8,
  margin: "2px 4px",
  width: MULTI_SECTION_CLOCK_SECTION_WIDTH,
  justifyContent: "center",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
const MultiSectionDigitalClockSection = /* @__PURE__ */ reactExports.forwardRef(function MultiSectionDigitalClockSection2(inProps, ref) {
  const containerRef = reactExports.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const previousActive = reactExports.useRef(null);
  const props = useThemeProps({
    props: inProps,
    name: "MuiMultiSectionDigitalClockSection"
  });
  const {
    autoFocus,
    onChange,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    items,
    active,
    slots,
    slotProps,
    skipDisabled
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$8);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    hasDigitalClockAlreadyBeenRendered: !!containerRef.current
  });
  const classes = useUtilityClasses$5(classesProp);
  const DigitalClockSectionItem = slots?.digitalClockSectionItem ?? MultiSectionDigitalClockSectionItem;
  useEnhancedEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    const activeItem = containerRef.current.querySelector('[role="option"][tabindex="0"], [role="option"][aria-selected="true"]');
    if (active && autoFocus && activeItem) {
      activeItem.focus();
    }
    if (!activeItem || previousActive.current === activeItem) {
      return;
    }
    previousActive.current = activeItem;
    const offsetTop = activeItem.offsetTop;
    const itemHeight = activeItem.offsetHeight;
    const containerHeight = containerRef.current.clientHeight;
    const scrollableHeight = containerRef.current.scrollHeight;
    const centeredPosition = offsetTop - containerHeight / 2 + itemHeight / 2;
    const maxScrollTop = scrollableHeight - containerHeight;
    const scrollPosition = Math.min(centeredPosition, maxScrollTop);
    containerRef.current.scrollTop = Math.max(0, scrollPosition);
  });
  const focusedOptionIndex = items.findIndex((item) => item.isFocused(item.value));
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "PageUp": {
        const newIndex = getFocusedListItemIndex(containerRef.current) - 5;
        const children = containerRef.current.children;
        const newFocusedIndex = Math.max(0, newIndex);
        const childToFocus = children[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
      case "PageDown": {
        const newIndex = getFocusedListItemIndex(containerRef.current) + 5;
        const children = containerRef.current.children;
        const newFocusedIndex = Math.min(children.length - 1, newIndex);
        const childToFocus = children[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MultiSectionDigitalClockSectionRoot, _extends({
    ref: handleRef,
    className: clsx(classes.root, className),
    ownerState,
    autoFocusItem: autoFocus && active,
    role: "listbox",
    onKeyDown: handleKeyDown
  }, other, {
    children: items.map((option, index) => {
      const isItemDisabled = option.isDisabled?.(option.value);
      const isDisabled = disabled || isItemDisabled;
      if (skipDisabled && isDisabled) {
        return null;
      }
      const isSelected = option.isSelected(option.value);
      const tabIndex = focusedOptionIndex === index || focusedOptionIndex === -1 && index === 0 ? 0 : -1;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DigitalClockSectionItem, _extends({
        onClick: () => !readOnly && onChange(option.value),
        selected: isSelected,
        disabled: isDisabled,
        disableRipple: readOnly,
        role: "option",
        "aria-disabled": readOnly || isDisabled || void 0,
        "aria-label": option.ariaLabel,
        "aria-selected": isSelected,
        tabIndex,
        className: classes.item
      }, slotProps?.digitalClockSectionItem, {
        children: option.label
      }), option.label);
    })
  }));
});
const getHourSectionOptions = ({
  now,
  value,
  adapter,
  ampm,
  isDisabled,
  resolveAriaLabel,
  timeStep,
  valueOrReferenceDate
}) => {
  const currentHours = value ? adapter.getHours(value) : null;
  const result = [];
  const isSelected = (hour, overriddenCurrentHours) => {
    const resolvedCurrentHours = overriddenCurrentHours ?? currentHours;
    if (resolvedCurrentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return resolvedCurrentHours === 12 || resolvedCurrentHours === 0;
      }
      return resolvedCurrentHours === hour || resolvedCurrentHours - 12 === hour;
    }
    return resolvedCurrentHours === hour;
  };
  const isFocused = (hour) => {
    return isSelected(hour, adapter.getHours(valueOrReferenceDate));
  };
  const endHour = ampm ? 11 : 23;
  for (let hour = 0; hour <= endHour; hour += timeStep) {
    let label = adapter.format(adapter.setHours(now, hour), ampm ? "hours12h" : "hours24h");
    const ariaLabel = resolveAriaLabel(parseInt(label, 10).toString());
    label = adapter.formatNumber(label);
    result.push({
      value: hour,
      label,
      isSelected,
      isDisabled,
      isFocused,
      ariaLabel
    });
  }
  return result;
};
const getTimeSectionOptions = ({
  value,
  adapter,
  isDisabled,
  timeStep,
  resolveLabel,
  resolveAriaLabel,
  hasValue = true
}) => {
  const isSelected = (timeValue) => {
    if (value === null) {
      return false;
    }
    return hasValue && value === timeValue;
  };
  const isFocused = (timeValue) => {
    return value === timeValue;
  };
  return [...Array.from({
    length: Math.ceil(60 / timeStep)
  }, (_, index) => {
    const timeValue = timeStep * index;
    return {
      value: timeValue,
      label: adapter.formatNumber(resolveLabel(timeValue)),
      isDisabled,
      isSelected,
      isFocused,
      ariaLabel: resolveAriaLabel(timeValue.toString())
    };
  })];
};
const _excluded$7 = ["ampm", "timeSteps", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "classes", "disabled", "readOnly", "skipDisabled", "timezone"];
const useUtilityClasses$4 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMultiSectionDigitalClockUtilityClass, classes);
};
const MultiSectionDigitalClockRoot = styled(PickerViewRoot, {
  name: "MuiMultiSectionDigitalClock",
  slot: "Root"
})(({
  theme
}) => ({
  flexDirection: "row",
  width: "100%",
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
}));
const MultiSectionDigitalClock = /* @__PURE__ */ reactExports.forwardRef(function MultiSectionDigitalClock2(inProps, ref) {
  const adapter = usePickerAdapter();
  const isRtl = useRtl();
  const props = useThemeProps({
    props: inProps,
    name: "MuiMultiSectionDigitalClock"
  });
  const {
    ampm = adapter.is12HourCycleInCurrentLocale(),
    timeSteps: inTimeSteps,
    autoFocus,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableTime,
    onChange,
    view: inView,
    views: inViews = ["hours", "minutes"],
    openTo,
    onViewChange,
    focusedView: inFocusedView,
    onFocusedViewChange,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    skipDisabled = false,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValue({
    name: "MultiSectionDigitalClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const translations = usePickerTranslations();
  const now = useNow(timezone);
  const timeSteps = reactExports.useMemo(() => _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps), [inTimeSteps]);
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    adapter,
    props,
    timezone
  });
  const handleValueChange = useEventCallback((newValue, selectionState, selectedView) => handleRawValueChange(newValue, selectionState, selectedView));
  const views = reactExports.useMemo(() => {
    if (!ampm || !inViews.includes("hours")) {
      return inViews;
    }
    return inViews.includes("meridiem") ? inViews : [...inViews, "meridiem"];
  }, [ampm, inViews]);
  const {
    view,
    setValueAndGoToNextView,
    focusedView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const handleMeridiemValueChange = useEventCallback((newValue) => {
    setValueAndGoToNextView(newValue, "finish", "meridiem");
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(valueOrReferenceDate, ampm, handleMeridiemValueChange, "finish");
  const isTimeDisabled = reactExports.useCallback((rawValue, viewType) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter);
    const shouldCheckPastEnd = viewType === "hours" || viewType === "minutes" && views.includes("seconds");
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case "hours":
            return !shouldDisableTime(adapter.setHours(valueOrReferenceDate, timeValue), "hours");
          case "minutes":
            return !shouldDisableTime(adapter.setMinutes(valueOrReferenceDate, timeValue), "minutes");
          case "seconds":
            return !shouldDisableTime(adapter.setSeconds(valueOrReferenceDate, timeValue), "seconds");
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case "hours": {
        const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
        const dateWithNewHours = adapter.setHours(valueOrReferenceDate, valueWithMeridiem);
        if (adapter.getHours(dateWithNewHours) !== valueWithMeridiem) {
          return true;
        }
        const start = adapter.setSeconds(adapter.setMinutes(dateWithNewHours, 0), 0);
        const end = adapter.setSeconds(adapter.setMinutes(dateWithNewHours, 59), 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(valueWithMeridiem);
      }
      case "minutes": {
        const dateWithNewMinutes = adapter.setMinutes(valueOrReferenceDate, rawValue);
        const start = adapter.setSeconds(dateWithNewMinutes, 0);
        const end = adapter.setSeconds(dateWithNewMinutes, 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue, minutesStep);
      }
      case "seconds": {
        const dateWithNewSeconds = adapter.setSeconds(valueOrReferenceDate, rawValue);
        const start = dateWithNewSeconds;
        const end = dateWithNewSeconds;
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue);
      }
      default:
        throw new Error("not supported");
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableTime, adapter, disableFuture, disablePast, now, views]);
  const buildViewProps = reactExports.useCallback((viewToBuild) => {
    switch (viewToBuild) {
      case "hours": {
        return {
          onChange: (hours) => {
            const valueWithMeridiem = convertValueToMeridiem(hours, meridiemMode, ampm);
            setValueAndGoToNextView(adapter.setHours(valueOrReferenceDate, valueWithMeridiem), "finish", "hours");
          },
          items: getHourSectionOptions({
            now,
            value,
            ampm,
            adapter,
            isDisabled: (hours) => isTimeDisabled(hours, "hours"),
            timeStep: timeSteps.hours,
            resolveAriaLabel: translations.hoursClockNumberText,
            valueOrReferenceDate
          })
        };
      }
      case "minutes": {
        return {
          onChange: (minutes) => {
            setValueAndGoToNextView(adapter.setMinutes(valueOrReferenceDate, minutes), "finish", "minutes");
          },
          items: getTimeSectionOptions({
            value: adapter.getMinutes(valueOrReferenceDate),
            adapter,
            isDisabled: (minutes) => isTimeDisabled(minutes, "minutes"),
            resolveLabel: (minutes) => adapter.format(adapter.setMinutes(now, minutes), "minutes"),
            timeStep: timeSteps.minutes,
            hasValue: !!value,
            resolveAriaLabel: translations.minutesClockNumberText
          })
        };
      }
      case "seconds": {
        return {
          onChange: (seconds) => {
            setValueAndGoToNextView(adapter.setSeconds(valueOrReferenceDate, seconds), "finish", "seconds");
          },
          items: getTimeSectionOptions({
            value: adapter.getSeconds(valueOrReferenceDate),
            adapter,
            isDisabled: (seconds) => isTimeDisabled(seconds, "seconds"),
            resolveLabel: (seconds) => adapter.format(adapter.setSeconds(now, seconds), "seconds"),
            timeStep: timeSteps.seconds,
            hasValue: !!value,
            resolveAriaLabel: translations.secondsClockNumberText
          })
        };
      }
      case "meridiem": {
        const amLabel = formatMeridiem(adapter, "am");
        const pmLabel = formatMeridiem(adapter, "pm");
        return {
          onChange: handleMeridiemChange,
          items: [{
            value: "am",
            label: amLabel,
            isSelected: () => !!value && meridiemMode === "am",
            isFocused: () => !!valueOrReferenceDate && meridiemMode === "am",
            ariaLabel: amLabel
          }, {
            value: "pm",
            label: pmLabel,
            isSelected: () => !!value && meridiemMode === "pm",
            isFocused: () => !!valueOrReferenceDate && meridiemMode === "pm",
            ariaLabel: pmLabel
          }]
        };
      }
      default:
        throw new Error(`Unknown view: ${viewToBuild} found.`);
    }
  }, [now, value, ampm, adapter, timeSteps.hours, timeSteps.minutes, timeSteps.seconds, translations.hoursClockNumberText, translations.minutesClockNumberText, translations.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, isTimeDisabled, handleMeridiemChange]);
  const viewsToRender = reactExports.useMemo(() => {
    if (!isRtl) {
      return views;
    }
    const digitViews = views.filter((v) => v !== "meridiem");
    digitViews.reverse();
    if (views.includes("meridiem")) {
      digitViews.push("meridiem");
    }
    return digitViews;
  }, [isRtl, views]);
  const viewTimeOptions = reactExports.useMemo(() => {
    return views.reduce((result, currentView) => {
      return _extends({}, result, {
        [currentView]: buildViewProps(currentView)
      });
    }, {});
  }, [views, buildViewProps]);
  const {
    ownerState
  } = usePickerPrivateContext();
  const classes = useUtilityClasses$4(classesProp);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MultiSectionDigitalClockRoot, _extends({
    ref,
    className: clsx(classes.root, className),
    ownerState,
    role: "group"
  }, other, {
    children: viewsToRender.map((timeView) => /* @__PURE__ */ jsxRuntimeExports.jsx(MultiSectionDigitalClockSection, {
      items: viewTimeOptions[timeView].items,
      onChange: viewTimeOptions[timeView].onChange,
      active: view === timeView,
      autoFocus: autoFocus || focusedView === timeView,
      disabled,
      readOnly,
      slots,
      slotProps,
      skipDisabled,
      "aria-label": translations.selectViewText(timeView)
    }, timeView))
  }));
});
const useDateTimeField = (props) => {
  const manager = useDateTimeManager(props);
  return useField({
    manager,
    props
  });
};
const _excluded$6 = ["slots", "slotProps"];
const DateTimeField = /* @__PURE__ */ reactExports.forwardRef(function DateTimeField2(inProps, inRef) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiDateTimeField"
  });
  const {
    slots,
    slotProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded$6);
  const textFieldProps = useFieldTextFieldProps({
    slotProps,
    ref: inRef,
    externalForwardedProps: other
  });
  const fieldResponse = useDateTimeField(textFieldProps);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickerFieldUIContextProvider, {
    slots,
    slotProps,
    inputRef: other.inputRef,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickerFieldUI, {
      fieldResponse,
      defaultOpenPickerIcon: CalendarIcon
    })
  });
});
function getPickersToolbarTextUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbarText", slot);
}
const pickersToolbarTextClasses = generateUtilityClasses("MuiPickersToolbarText", ["root"]);
const _excluded$5 = ["className", "classes", "selected", "value"];
const useUtilityClasses$3 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};
const PickersToolbarTextRoot = styled(Typography, {
  name: "MuiPickersToolbarText",
  slot: "Root"
})(({
  theme
}) => ({
  transition: theme.transitions.create("color"),
  color: (theme.vars || theme).palette.text.secondary,
  [`&[data-selected]`]: {
    color: (theme.vars || theme).palette.text.primary
  }
}));
const PickersToolbarText = /* @__PURE__ */ reactExports.forwardRef(function PickersToolbarText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarText"
  });
  const {
    className,
    classes: classesProp,
    selected,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const classes = useUtilityClasses$3(classesProp);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarTextRoot, _extends({
    ref,
    className: clsx(classes.root, className),
    component: "span",
    ownerState: props
  }, selected && {
    "data-selected": true
  }, other, {
    children: value
  }));
});
const _excluded$4 = ["align", "className", "classes", "selected", "typographyClassName", "value", "variant", "width"];
const useUtilityClasses$2 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
const PickersToolbarButtonRoot = styled(Button, {
  name: "MuiPickersToolbarButton",
  slot: "Root"
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
});
const PickersToolbarButton = /* @__PURE__ */ reactExports.forwardRef(function PickersToolbarButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarButton"
  });
  const {
    align,
    className,
    classes: classesProp,
    selected,
    typographyClassName,
    value,
    variant,
    width
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const classes = useUtilityClasses$2(classesProp);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButtonRoot, _extends({
    variant: "text",
    ref,
    className: clsx(classes.root, className),
    ownerState: props
  }, width ? {
    sx: {
      width
    }
  } : {}, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarText, {
      align,
      className: typographyClassName,
      variant,
      value,
      selected
    })
  }));
});
const renderDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(DigitalClock, {
  view,
  onViewChange,
  focusedView: focusedView && isTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  views: views.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeStep: timeSteps?.minutes,
  skipDisabled,
  timezone
});
const renderMultiSectionDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(MultiSectionDigitalClock, {
  view,
  onViewChange,
  focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  views: views.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
});
const _excluded$3 = ["views", "format"];
const resolveDateTimeFormat = (adapter, _ref, ignoreDateResolving) => {
  let {
    views,
    format
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  if (format) {
    return format;
  }
  const dateViews = [];
  const timeViews = [];
  views.forEach((view) => {
    if (isTimeView(view)) {
      timeViews.push(view);
    } else if (isDatePickerView(view)) {
      dateViews.push(view);
    }
  });
  if (timeViews.length === 0) {
    return resolveDateFormat(adapter, _extends({
      views: dateViews
    }, other), false);
  }
  if (dateViews.length === 0) {
    return resolveTimeFormat(adapter, _extends({
      views: timeViews
    }, other));
  }
  const timeFormat = resolveTimeFormat(adapter, _extends({
    views: timeViews
  }, other));
  const dateFormat = resolveDateFormat(adapter, _extends({
    views: dateViews
  }, other), false);
  return `${dateFormat} ${timeFormat}`;
};
const resolveViews = (ampm, views, shouldUseSingleColumn) => {
  if (shouldUseSingleColumn) {
    return views.filter((view) => !isInternalTimeView(view) || view === "hours");
  }
  return ampm ? [...views, "meridiem"] : views;
};
const resolveShouldRenderTimeInASingleColumn = (timeSteps, threshold) => 24 * 60 / ((timeSteps.hours ?? 1) * (timeSteps.minutes ?? 5)) <= threshold;
function resolveTimeViewsResponse({
  thresholdToRenderTimeInASingleColumn: inThreshold,
  ampm,
  timeSteps: inTimeSteps,
  views
}) {
  const thresholdToRenderTimeInASingleColumn = inThreshold ?? 24;
  const timeSteps = _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps);
  const shouldRenderTimeInASingleColumn = resolveShouldRenderTimeInASingleColumn(timeSteps, thresholdToRenderTimeInASingleColumn);
  return {
    thresholdToRenderTimeInASingleColumn,
    timeSteps,
    shouldRenderTimeInASingleColumn,
    views: resolveViews(ampm, views, shouldRenderTimeInASingleColumn)
  };
}
function getDateTimePickerTabsUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerTabs", slot);
}
generateUtilityClasses("MuiDateTimePickerTabs", ["root"]);
const viewToTab = (view) => {
  if (isDatePickerView(view)) {
    return "date";
  }
  return "time";
};
const tabToView = (tab) => {
  if (tab === "date") {
    return "day";
  }
  return "hours";
};
const useUtilityClasses$1 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDateTimePickerTabsUtilityClass, classes);
};
const DateTimePickerTabsRoot = styled(Tabs, {
  name: "MuiDateTimePickerTabs",
  slot: "Root"
})(({
  theme
}) => ({
  boxShadow: `0 -1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
  "&:last-child": {
    boxShadow: `0 1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
    [`& .${tabsClasses.indicator}`]: {
      bottom: "auto",
      top: 0
    }
  }
}));
const DateTimePickerTabs = function DateTimePickerTabs2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerTabs"
  });
  const {
    dateIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeIcon, {}),
    timeIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(TimeIcon, {}),
    hidden = typeof window === "undefined" || window.innerHeight < 667,
    className,
    classes: classesProp,
    sx
  } = props;
  const translations = usePickerTranslations();
  const {
    ownerState
  } = usePickerPrivateContext();
  const {
    view,
    setView
  } = usePickerContext();
  const classes = useUtilityClasses$1(classesProp);
  const handleChange = (event, value) => {
    setView(tabToView(value));
  };
  if (hidden) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerTabsRoot, {
    ownerState,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    className: clsx(className, classes.root),
    sx,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Tab, {
      value: "date",
      "aria-label": translations.dateTableLabel,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
        children: dateIcon
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, {
      value: "time",
      "aria-label": translations.timeTableLabel,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
        children: timeIcon
      })
    })]
  });
};
function getDateTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerToolbar", slot);
}
const dateTimePickerToolbarClasses = generateUtilityClasses("MuiDateTimePickerToolbar", ["root", "dateContainer", "timeContainer", "timeDigitsContainer", "separator", "timeLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);
const _excluded$2 = ["ampm", "ampmInClock", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "className", "classes"];
const useUtilityClasses = (classes, ownerState) => {
  const {
    pickerOrientation,
    toolbarDirection
  } = ownerState;
  const slots = {
    root: ["root"],
    dateContainer: ["dateContainer"],
    timeContainer: ["timeContainer", toolbarDirection === "rtl" && "timeLabelReverse"],
    timeDigitsContainer: ["timeDigitsContainer", toolbarDirection === "rtl" && "timeLabelReverse"],
    separator: ["separator"],
    ampmSelection: ["ampmSelection", pickerOrientation === "landscape" && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getDateTimePickerToolbarUtilityClass, classes);
};
const DateTimePickerToolbarRoot = styled(PickersToolbar, {
  name: "MuiDateTimePickerToolbar",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "toolbarVariant"
})(({
  theme
}) => ({
  paddingLeft: 16,
  paddingRight: 16,
  justifyContent: "space-around",
  position: "relative",
  variants: [{
    props: {
      toolbarVariant: "desktop"
    },
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      [`& .${pickersToolbarClasses.content} .${pickersToolbarTextClasses.root}[data-selected]`]: {
        color: (theme.vars || theme).palette.primary.main,
        fontWeight: theme.typography.fontWeightBold
      }
    }
  }, {
    props: {
      toolbarVariant: "desktop",
      pickerOrientation: "landscape"
    },
    style: {
      borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      toolbarVariant: "desktop",
      pickerOrientation: "portrait"
    },
    style: {
      paddingLeft: 24,
      paddingRight: 0
    }
  }]
}));
const DateTimePickerToolbarDateContainer = styled("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "DateContainer"
})({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
});
const DateTimePickerToolbarTimeContainer = styled("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeContainer",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "toolbarVariant"
})({
  display: "flex",
  flexDirection: "row",
  variants: [{
    props: {
      toolbarDirection: "rtl"
    },
    style: {
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      toolbarVariant: "desktop",
      pickerOrientation: "portrait"
    },
    style: {
      gap: 9,
      marginRight: 4,
      alignSelf: "flex-end"
    }
  }, {
    props: ({
      pickerOrientation,
      toolbarVariant
    }) => pickerOrientation === "landscape" && toolbarVariant !== "desktop",
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      pickerOrientation,
      toolbarVariant,
      toolbarDirection
    }) => pickerOrientation === "landscape" && toolbarVariant !== "desktop" && toolbarDirection === "rtl",
    style: {
      flexDirection: "column-reverse"
    }
  }]
});
const DateTimePickerToolbarTimeDigitsContainer = styled("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeDigitsContainer",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "toolbarVariant"
})({
  display: "flex",
  variants: [{
    props: {
      toolbarDirection: "rtl"
    },
    style: {
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      toolbarVariant: "desktop"
    },
    style: {
      gap: 1.5
    }
  }]
});
const DateTimePickerToolbarSeparator = styled(PickersToolbarText, {
  name: "MuiDateTimePickerToolbar",
  slot: "Separator",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "toolbarVariant"
})({
  margin: "0 4px 0 2px",
  cursor: "default",
  variants: [{
    props: {
      toolbarVariant: "desktop"
    },
    style: {
      margin: 0
    }
  }]
});
const DateTimePickerToolbarAmPmSelection = styled("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props, styles2) => [{
    [`.${dateTimePickerToolbarClasses.ampmLabel}`]: styles2.ampmLabel
  }, {
    [`&.${dateTimePickerToolbarClasses.ampmLandscape}`]: styles2.ampmLandscape
  }, styles2.ampmSelection]
})({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12,
  [`& .${dateTimePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  },
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      margin: "4px 0 auto",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%"
    }
  }]
});
const DateTimePickerToolbarOverrideContext = /* @__PURE__ */ reactExports.createContext(null);
function DateTimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    toolbarFormat,
    toolbarPlaceholder = "––",
    toolbarTitle: inToolbarTitle,
    className,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const {
    value: valueContext,
    setValue: setValueContext,
    disabled,
    readOnly,
    variant,
    orientation,
    view: viewContext,
    setView: setViewContext,
    views
  } = usePickerContext();
  const translations = usePickerTranslations();
  const ownerState = useToolbarOwnerState();
  const classes = useUtilityClasses(classesProp, ownerState);
  const adapter = usePickerAdapter();
  const overrides = reactExports.useContext(DateTimePickerToolbarOverrideContext);
  const value = overrides ? overrides.value : valueContext;
  const setValue = overrides ? overrides.setValue : setValueContext;
  const view = overrides ? overrides.view : viewContext;
  const setView = overrides ? overrides.setView : setViewContext;
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(value, ampm, (newValue) => setValue(newValue, {
    changeImportance: "set",
    source: "view"
  }));
  const toolbarVariant = overrides?.forceDesktopVariant ? "desktop" : variant;
  const isDesktop = toolbarVariant === "desktop";
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const toolbarTitle = inToolbarTitle ?? translations.dateTimePickerToolbarTitle;
  const dateText = reactExports.useMemo(() => {
    if (!adapter.isValid(value)) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return adapter.formatByString(value, toolbarFormat);
    }
    return adapter.format(value, "shortDate");
  }, [value, toolbarFormat, toolbarPlaceholder, adapter]);
  const formatSection = (format, fallback) => {
    if (!adapter.isValid(value)) {
      return fallback;
    }
    return adapter.format(value, format);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerToolbarRoot, _extends({
    className: clsx(classes.root, className),
    toolbarTitle,
    toolbarVariant
  }, other, {
    ownerState,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerToolbarDateContainer, {
      className: classes.dateContainer,
      ownerState,
      children: [views.includes("year") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "subtitle1",
        onClick: () => setView("year"),
        selected: view === "year",
        value: formatSection("year", "–")
      }), views.includes("day") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: isDesktop ? "h5" : "h4",
        onClick: () => setView("day"),
        selected: view === "day",
        value: dateText
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerToolbarTimeContainer, {
      className: classes.timeContainer,
      ownerState,
      toolbarVariant,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerToolbarTimeDigitsContainer, {
        className: classes.timeDigitsContainer,
        ownerState,
        toolbarVariant,
        children: [views.includes("hours") && /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
            variant: isDesktop ? "h5" : "h3",
            width: isDesktop && orientation === "portrait" ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
            onClick: () => setView("hours"),
            selected: view === "hours",
            value: formatSection(ampm ? "hours12h" : "hours24h", "--")
          }), /* @__PURE__ */ jsxRuntimeExports.jsx(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? "h5" : "h3",
            value: ":",
            className: classes.separator,
            ownerState,
            toolbarVariant
          }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
            variant: isDesktop ? "h5" : "h3",
            width: isDesktop && orientation === "portrait" ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
            onClick: () => setView("minutes"),
            selected: view === "minutes" || !views.includes("minutes") && view === "hours",
            value: formatSection("minutes", "--"),
            disabled: !views.includes("minutes")
          })]
        }), views.includes("seconds") && /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? "h5" : "h3",
            value: ":",
            className: classes.separator,
            ownerState,
            toolbarVariant
          }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
            variant: isDesktop ? "h5" : "h3",
            width: isDesktop && orientation === "portrait" ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
            onClick: () => setView("seconds"),
            selected: view === "seconds",
            value: formatSection("seconds", "--")
          })]
        })]
      }), showAmPmControl && !isDesktop && /* @__PURE__ */ jsxRuntimeExports.jsxs(DateTimePickerToolbarAmPmSelection, {
        className: classes.ampmSelection,
        ownerState,
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === "am",
          typographyClassName: classes.ampmLabel,
          value: formatMeridiem(adapter, "am"),
          onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
          disabled
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === "pm",
          typographyClassName: classes.ampmLabel,
          value: formatMeridiem(adapter, "pm"),
          onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
          disabled
        })]
      }), ampm && isDesktop && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        variant: "h5",
        onClick: () => setView("meridiem"),
        selected: view === "meridiem",
        value: value && meridiemMode ? formatMeridiem(adapter, meridiemMode) : "--",
        width: MULTI_SECTION_CLOCK_SECTION_WIDTH
      })]
    })]
  }));
}
function useDateTimePickerDefaultizedProps(props, name) {
  const adapter = usePickerAdapter();
  const themeProps = useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToDateTimeValidationProps(themeProps);
  const ampm = themeProps.ampm ?? adapter.is12HourCycleInCurrentLocale();
  const localeText = reactExports.useMemo(() => {
    if (themeProps.localeText?.toolbarTitle == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      dateTimePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const {
    openTo,
    views: defaultViews
  } = applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["year", "day", "hours", "minutes"],
    defaultOpenTo: "day"
  });
  const {
    shouldRenderTimeInASingleColumn,
    thresholdToRenderTimeInASingleColumn,
    views,
    timeSteps
  } = resolveTimeViewsResponse({
    thresholdToRenderTimeInASingleColumn: themeProps.thresholdToRenderTimeInASingleColumn,
    ampm,
    timeSteps: themeProps.timeSteps,
    views: defaultViews
  });
  const viewsForFormatting = ampm ? [...defaultViews, "meridiem"] : defaultViews;
  return _extends({}, themeProps, validationProps, {
    timeSteps,
    openTo,
    shouldRenderTimeInASingleColumn,
    thresholdToRenderTimeInASingleColumn,
    views,
    viewsForFormatting,
    ampm,
    localeText,
    orientation: themeProps.orientation ?? "portrait",
    slots: _extends({
      toolbar: DateTimePickerToolbar,
      tabs: DateTimePickerTabs
    }, themeProps.slots),
    slotProps: _extends({}, themeProps.slotProps, {
      toolbar: _extends({
        ampm
      }, themeProps.slotProps?.toolbar)
    })
  });
}
const DesktopDateTimePickerLayout = /* @__PURE__ */ reactExports.forwardRef(function DesktopDateTimePickerLayout2(props, ref) {
  const {
    toolbar,
    tabs,
    content,
    actionBar,
    shortcuts,
    ownerState
  } = usePickerLayout(props);
  const {
    orientation
  } = usePickerContext();
  const {
    sx,
    className,
    classes
  } = props;
  const isActionBarVisible = actionBar && (actionBar.props.actions?.length ?? 0) > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersLayoutRoot, {
    ref,
    className: clsx(pickersLayoutClasses.root, classes?.root, className),
    sx: [{
      [`& .${pickersLayoutClasses.tabs}`]: {
        gridRow: 4,
        gridColumn: "1 / 4"
      },
      [`& .${pickersLayoutClasses.actionBar}`]: {
        gridRow: 5
      }
    }, ...Array.isArray(sx) ? sx : [sx]],
    ownerState,
    children: [orientation === "landscape" ? shortcuts : toolbar, orientation === "landscape" ? toolbar : shortcuts, /* @__PURE__ */ jsxRuntimeExports.jsxs(PickersLayoutContentWrapper, {
      className: clsx(pickersLayoutClasses.contentWrapper, classes?.contentWrapper),
      ownerState,
      sx: {
        display: "grid"
      },
      children: [content, tabs, isActionBarVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {
        sx: {
          gridRow: 3,
          gridColumn: "1 / 4"
        }
      })]
    }), actionBar]
  });
});
const _excluded$1 = ["openTo", "focusedView", "timeViewsCount"];
const rendererInterceptor = function RendererInterceptor(props) {
  const {
    viewRenderers,
    popperView,
    rendererProps
  } = props;
  const {
    openTo,
    focusedView,
    timeViewsCount
  } = rendererProps, otherProps = _objectWithoutPropertiesLoose(rendererProps, _excluded$1);
  const finalProps = _extends({}, otherProps, {
    // we control the focused view manually
    autoFocus: false,
    focusedView: null,
    sx: [{
      [`&.${multiSectionDigitalClockClasses.root}`]: {
        borderBottom: 0
      },
      [`&.${multiSectionDigitalClockClasses.root}, .${multiSectionDigitalClockSectionClasses.root}, &.${digitalClockClasses.root}`]: {
        maxHeight: VIEW_HEIGHT
      }
    }]
  });
  const isTimeViewActive = isInternalTimeView(popperView);
  const dateView = isTimeViewActive ? "day" : popperView;
  const timeView = isTimeViewActive ? popperView : "hours";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [viewRenderers[dateView]?.(_extends({}, rendererProps, {
      view: !isTimeViewActive ? popperView : "day",
      focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
      views: rendererProps.views.filter(isDatePickerView),
      sx: [{
        gridColumn: 1
      }, ...finalProps.sx]
    })), timeViewsCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {
        orientation: "vertical",
        sx: {
          gridColumn: 2
        }
      }), viewRenderers[timeView]?.(_extends({}, finalProps, {
        view: isTimeViewActive ? popperView : "hours",
        focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
        openTo: isInternalTimeView(openTo) ? openTo : "hours",
        views: rendererProps.views.filter(isInternalTimeView),
        sx: [{
          gridColumn: 3
        }, ...finalProps.sx]
      }))]
    })]
  });
};
const DesktopDateTimePicker = /* @__PURE__ */ reactExports.forwardRef(function DesktopDateTimePicker2(inProps, ref) {
  const adapter = usePickerAdapter();
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, "MuiDesktopDateTimePicker");
  const renderTimeView = defaultizedProps.shouldRenderTimeInASingleColumn ? renderDigitalClockTimeView : renderMultiSectionDigitalClockTimeView;
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar,
    hours: renderTimeView,
    minutes: renderTimeView,
    seconds: renderTimeView,
    meridiem: renderTimeView
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? true;
  const shouldHoursRendererContainMeridiemView = viewRenderers.hours?.name === renderMultiSectionDigitalClockTimeView.name;
  const views = !shouldHoursRendererContainMeridiemView ? defaultizedProps.views.filter((view) => view !== "meridiem") : defaultizedProps.views;
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateTimeFormat(adapter, _extends({}, defaultizedProps, {
      views: defaultizedProps.viewsForFormatting
    })),
    views,
    yearsPerRow: defaultizedProps.yearsPerRow ?? 4,
    ampmInClock,
    slots: _extends({
      field: DateTimeField,
      layout: DesktopDateTimePickerLayout
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => _extends({}, resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: true,
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar),
      tabs: _extends({
        hidden: true
      }, defaultizedProps.slotProps?.tabs)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: "date-time",
    validator: validateDateTime,
    rendererInterceptor,
    steps: null
  });
  return renderPicker();
});
DesktopDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: PropTypes.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: PropTypes.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context Context about this acceptance:
   * - `validationError`: validation result of the current value
   * - `source`: source of the acceptance. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the value was accepted via a shortcut selection
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context Context about this change:
   * - `validationError`: validation result of the current value
   * - `source`: source of the change. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the change was triggered by a shortcut selection
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: PropTypes.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), PropTypes.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: PropTypes.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeSteps.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: PropTypes.shape({
    day: PropTypes.func,
    hours: PropTypes.func,
    meridiem: PropTypes.func,
    minutes: PropTypes.func,
    month: PropTypes.func,
    seconds: PropTypes.func,
    year: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
};
const STEPS = [{
  views: DATE_VIEWS
}, {
  views: EXPORTED_TIME_VIEWS
}];
const MobileDateTimePicker = /* @__PURE__ */ reactExports.forwardRef(function MobileDateTimePicker2(inProps, ref) {
  const adapter = usePickerAdapter();
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, "MuiMobileDateTimePicker");
  const renderTimeView = defaultizedProps.shouldRenderTimeInASingleColumn ? renderDigitalClockTimeView : renderMultiSectionDigitalClockTimeView;
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar,
    hours: renderTimeView,
    minutes: renderTimeView,
    seconds: renderTimeView,
    meridiem: renderTimeView
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? false;
  const shouldHoursRendererContainMeridiemView = viewRenderers.hours?.name === renderMultiSectionDigitalClockTimeView.name;
  const views = !shouldHoursRendererContainMeridiemView ? defaultizedProps.views.filter((view) => view !== "meridiem") : defaultizedProps.views;
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateTimeFormat(adapter, _extends({}, defaultizedProps, {
      views: defaultizedProps.viewsForFormatting
    })),
    views,
    ampmInClock,
    slots: _extends({
      field: DateTimeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => _extends({}, resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: false,
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar),
      tabs: _extends({
        hidden: false
      }, defaultizedProps.slotProps?.tabs),
      layout: _extends({}, defaultizedProps.slotProps?.layout, {
        sx: mergeSx([{
          [`& .${multiSectionDigitalClockClasses.root}`]: {
            width: DIALOG_WIDTH
          },
          [`& .${multiSectionDigitalClockSectionClasses.root}`]: {
            flex: 1,
            // account for the border on `MultiSectionDigitalClock`
            maxHeight: VIEW_HEIGHT - 1,
            [`.${multiSectionDigitalClockSectionClasses.item}`]: {
              width: "auto"
            }
          },
          [`& .${digitalClockClasses.root}`]: {
            width: DIALOG_WIDTH,
            maxHeight: VIEW_HEIGHT,
            flex: 1,
            [`.${digitalClockClasses.item}`]: {
              justifyContent: "center"
            }
          }
        }], defaultizedProps.slotProps?.layout?.sx)
      })
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: "date-time",
    validator: validateDateTime,
    steps: STEPS
  });
  return renderPicker();
});
MobileDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: PropTypes.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: PropTypes.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: PropTypes.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: PropTypes.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: PropTypes.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: PropTypes.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: PropTypes.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: PropTypes.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: PropTypes.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: PropTypes.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context Context about this acceptance:
   * - `validationError`: validation result of the current value
   * - `source`: source of the acceptance. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the value was accepted via a shortcut selection
   */
  onAccept: PropTypes.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context Context about this change:
   * - `validationError`: validation result of the current value
   * - `source`: source of the change. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the change was triggered by a shortcut selection
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: PropTypes.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: PropTypes.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: PropTypes.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: PropTypes.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: PropTypes.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: PropTypes.oneOfType([PropTypes.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), PropTypes.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: PropTypes.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: PropTypes.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeSteps.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: PropTypes.shape({
    day: PropTypes.func,
    hours: PropTypes.func,
    meridiem: PropTypes.func,
    minutes: PropTypes.func,
    month: PropTypes.func,
    seconds: PropTypes.func,
    year: PropTypes.func
  }),
  /**
   * Available views.
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
};
const _excluded = ["desktopModeMediaQuery"];
const DateTimePicker = /* @__PURE__ */ reactExports.forwardRef(function DateTimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopDateTimePicker, _extends({
      ref
    }, other));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileDateTimePicker, _extends({
    ref
  }, other));
});
function ExecutionForm({
  initialData,
  onSubmit,
  onCancel,
  loading,
  error,
  submitLabel,
  loadingLabel,
  title
}) {
  const { user } = useAuth();
  const [plans, setPlans] = reactExports.useState([]);
  const [plansLoading, setPlansLoading] = reactExports.useState(true);
  const [formData, setFormData] = reactExports.useState(initialData);
  const selectedPlan = plans.find((p) => p.id === formData.planId);
  const loadPlans = reactExports.useCallback(async () => {
    try {
      setPlansLoading(true);
      const data = await getTrainingPlans(user?.id);
      setPlans(data);
    } catch (err) {
      console.error(err);
    } finally {
      setPlansLoading(false);
    }
  }, [user?.id]);
  reactExports.useEffect(() => {
    if (user) {
      loadPlans();
    }
  }, [user, loadPlans]);
  function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
  function parseDuration(value) {
    const parts = value.split(":").map(Number);
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    }
    return parts[0] || 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(formData);
  }
  if (plansLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "form", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", gutterBottom: true, children: title }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", sx: { mb: 2 }, children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "훈련 계획" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            value: formData.planId,
            label: "훈련 계획",
            onChange: (e) => setFormData((prev) => ({ ...prev, planId: e.target.value })),
            children: plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: plan.id, children: [
              plan.name,
              " (",
              plan.unit_amount,
              " ",
              plan.unit_name,
              "/회)"
            ] }, plan.id))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NumberSpinner,
        {
          label: `훈련량 (${selectedPlan?.unit_name ?? "단위"})`,
          min: 1,
          value: formData.unitCount,
          onValueChange: (value) => {
            if (value) {
              setFormData((prev) => ({ ...prev, unitCount: value }));
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          label: "소요 시간 (HH:MM:SS)",
          value: formatDuration(formData.durationSeconds),
          onChange: (e) => setFormData((prev) => ({ ...prev, durationSeconds: parseDuration(e.target.value) })),
          placeholder: "00:00:00",
          fullWidth: true,
          helperText: "시:분:초 형식으로 입력"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(LocalizationProvider, { dateAdapter: AdapterDayjs, adapterLocale: "ko", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DateTimePicker,
          {
            label: "시작 시간",
            value: dayjs(formData.startedAt),
            format: "YYYY-MM-DD HH:mm",
            onChange: (value) => setFormData((prev) => ({
              ...prev,
              startedAt: value?.toISOString() ?? prev.startedAt
            })),
            slotProps: { textField: { fullWidth: true } }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DateTimePicker,
          {
            label: "완료 시간",
            value: dayjs(formData.completedAt),
            format: "YYYY-MM-DD HH:mm",
            onChange: (value) => setFormData((prev) => ({
              ...prev,
              completedAt: value?.toISOString() ?? prev.completedAt
            })),
            slotProps: { textField: { fullWidth: true } }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: onCancel, disabled: loading, children: "취소" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: loading, children: loading ? loadingLabel : submitLabel })
      ] })
    ] })
  ] });
}
function executionToFormData(execution) {
  return {
    planId: execution.plan_id,
    unitCount: execution.unit_count,
    durationSeconds: execution.duration_seconds,
    startedAt: execution.started_at,
    completedAt: execution.completed_at
  };
}
function formDataToExecutionUpdate(data) {
  return {
    plan_id: data.planId,
    unit_count: data.unitCount,
    duration_seconds: data.durationSeconds,
    started_at: data.startedAt,
    completed_at: data.completedAt
  };
}
function ExecutionsEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [execution, setExecution] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (id) {
      loadExecution(Number(id));
    }
  }, [id]);
  async function loadExecution(executionId) {
    try {
      setLoading(true);
      const data = await getTrainingExecution(executionId);
      setExecution(data);
    } catch (err) {
      setError("훈련 기록을 불러오는데 실패했습니다.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  async function handleSubmit(data) {
    if (!execution) return;
    if (!data.planId) {
      setError("훈련 계획을 선택해주세요.");
      return;
    }
    try {
      setSubmitting(true);
      setError(null);
      await updateTrainingExecution(execution.id, formDataToExecutionUpdate(data));
      navigate(routes.executions.detail.$path({ id: execution.id }, {}));
    } catch (err) {
      setError("훈련 기록 수정에 실패했습니다.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }
  function handleCancel() {
    if (execution) {
      navigate(routes.executions.detail.$path({ id: execution.id }, {}));
    } else {
      navigate(routes.executions.$());
    }
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) });
  }
  if (!execution) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "warning", children: "훈련 기록을 찾을 수 없습니다." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ExecutionForm,
    {
      initialData: executionToFormData(execution),
      onSubmit: handleSubmit,
      onCancel: handleCancel,
      loading: submitting,
      error,
      title: "훈련 기록 수정",
      submitLabel: "저장",
      loadingLabel: "저장 중..."
    }
  );
}
export {
  ExecutionsEditPage
};
//# sourceMappingURL=index-iZQfSACN.js.map
