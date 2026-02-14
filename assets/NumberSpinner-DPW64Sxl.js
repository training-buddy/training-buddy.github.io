import { p as createSvgIcon, j as jsxRuntimeExports, r as reactExports, ao as React, ap as reactDomExports, B as Box, n as Button } from "./index-C1uuhD5W.js";
import { c as useRefWithInit, d as useOnMount, e as useIsoLayoutEffect, N as NOOP, E as EMPTY_OBJECT, f as useMergedRefs, g as useMergedRefsN, b as FormLabel, O as OutlinedInput, a as FormControl } from "./useOnMount-BxoUUqFc.js";
const AddIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}));
const OpenInFullIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"
}));
const RemoveIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 13H5v-2h14z"
}));
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = reactExports.useRef(controlled !== void 0);
  const [valueState, setValue] = reactExports.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  const setValueIfUncontrolled = reactExports.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
const useInsertionEffect = React[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)];
const useSafeInsertionEffect = (
  // React 17 doesn't have useInsertionEffect.
  useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
  useInsertionEffect !== reactExports.useLayoutEffect ? useInsertionEffect : (fn) => fn()
);
function useStableCallback(callback) {
  const stable = useRefWithInit(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: void 0,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
}
const EMPTY$1 = 0;
class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = EMPTY$1;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = EMPTY$1;
      fn();
    }, delay);
  }
  isStarted() {
    return this.currentId !== EMPTY$1;
  }
  clear = () => {
    if (this.currentId !== EMPTY$1) {
      clearTimeout(this.currentId);
      this.currentId = EMPTY$1;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}
function useTimeout() {
  const timeout = useRefWithInit(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
const EMPTY = 0;
class Interval extends Timeout {
  static create() {
    return new Interval();
  }
  /**
   * Executes `fn` at `delay` interval, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setInterval(() => {
      fn();
    }, delay);
  }
  clear = () => {
    if (this.currentId !== EMPTY) {
      clearInterval(this.currentId);
      this.currentId = EMPTY;
    }
  };
}
function useInterval() {
  const timeout = useRefWithInit(Interval.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
function useValueAsRef(value) {
  const latest = useRefWithInit(createLatestRef, value).current;
  latest.next = value;
  useIsoLayoutEffect(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}
function useForcedRerendering() {
  const [, setState] = reactExports.useState({});
  return reactExports.useCallback(() => {
    setState({});
  }, []);
}
const visuallyHiddenBase = {
  clipPath: "inset(50%)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1
};
const visuallyHidden = {
  ...visuallyHiddenBase,
  position: "fixed",
  top: 0,
  left: 0
};
const visuallyHiddenInput = {
  ...visuallyHiddenBase,
  position: "absolute"
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function ownerDocument(node) {
  return node?.ownerDocument || document;
}
const hasNavigator = typeof navigator !== "undefined";
const nav = getNavigatorData();
const platform = getPlatform();
const userAgent = getUserAgent();
const isWebKit = typeof CSS === "undefined" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter:none");
const isIOS = (
  // iPads can claim to be MacIntel
  nav.platform === "MacIntel" && nav.maxTouchPoints > 1 ? true : /iP(hone|ad|od)|iOS/.test(nav.platform)
);
const isFirefox = hasNavigator && /firefox/i.test(userAgent);
hasNavigator && platform.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
userAgent.includes("jsdom/");
function getNavigatorData() {
  if (!hasNavigator) {
    return {
      platform: "",
      maxTouchPoints: -1
    };
  }
  const uaData = navigator.userAgentData;
  if (uaData?.platform) {
    return {
      platform: uaData.platform,
      maxTouchPoints: navigator.maxTouchPoints
    };
  }
  return {
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? -1
  };
}
function getUserAgent() {
  if (!hasNavigator) {
    return "";
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map(({
      brand,
      version
    }) => `${brand}/${version}`).join(" ");
  }
  return navigator.userAgent;
}
function getPlatform() {
  if (!hasNavigator) {
    return "";
  }
  const uaData = navigator.userAgentData;
  if (uaData?.platform) {
    return uaData.platform;
  }
  return navigator.platform ?? "";
}
function formatErrorMessage(code, ...args) {
  const url = new URL("https://base-ui.com/production-error");
  url.searchParams.set("code", code.toString());
  args.forEach((arg) => url.searchParams.append("args[]", arg));
  return `Base UI error #${code}; visit ${url} for the full message.`;
}
const NumberFieldRootContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useNumberFieldRootContext() {
  const context = reactExports.useContext(NumberFieldRootContext);
  if (context === void 0) {
    throw new Error(formatErrorMessage(43));
  }
  return context;
}
let FieldControlDataAttributes = /* @__PURE__ */ (function(FieldControlDataAttributes2) {
  FieldControlDataAttributes2["disabled"] = "data-disabled";
  FieldControlDataAttributes2["valid"] = "data-valid";
  FieldControlDataAttributes2["invalid"] = "data-invalid";
  FieldControlDataAttributes2["touched"] = "data-touched";
  FieldControlDataAttributes2["dirty"] = "data-dirty";
  FieldControlDataAttributes2["filled"] = "data-filled";
  FieldControlDataAttributes2["focused"] = "data-focused";
  return FieldControlDataAttributes2;
})({});
const DEFAULT_VALIDITY_STATE = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: null,
  valueMissing: false
};
const fieldValidityMapping = {
  valid(value) {
    if (value === null) {
      return null;
    }
    if (value) {
      return {
        [FieldControlDataAttributes.valid]: ""
      };
    }
    return {
      [FieldControlDataAttributes.invalid]: ""
    };
  }
};
const FieldRootContext = /* @__PURE__ */ reactExports.createContext({
  invalid: void 0,
  name: void 0,
  validityData: {
    state: DEFAULT_VALIDITY_STATE,
    errors: [],
    error: "",
    value: "",
    initialValue: null
  },
  setValidityData: NOOP,
  disabled: void 0,
  touched: false,
  setTouched: NOOP,
  dirty: false,
  setDirty: NOOP,
  filled: false,
  setFilled: NOOP,
  focused: false,
  setFocused: NOOP,
  validate: () => null,
  validationMode: "onSubmit",
  validationDebounceTime: 0,
  shouldValidateOnChange: () => false,
  state: {
    disabled: false,
    valid: null,
    touched: false,
    dirty: false,
    filled: false,
    focused: false
  },
  markedDirtyRef: {
    current: false
  },
  validation: {
    getValidationProps: (props = EMPTY_OBJECT) => props,
    getInputValidationProps: (props = EMPTY_OBJECT) => props,
    inputRef: {
      current: null
    },
    commit: async () => {
    }
  }
});
function useFieldRootContext(optional = true) {
  const context = reactExports.useContext(FieldRootContext);
  if (context.setValidityData === NOOP && !optional) {
    throw new Error(formatErrorMessage(28));
  }
  return context;
}
const SafeReact = {
  ...React
};
let globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
  const [defaultId, setDefaultId] = reactExports.useState(idOverride);
  const id = idOverride || defaultId;
  reactExports.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`${prefix}-${globalId}`);
    }
  }, [defaultId, prefix]);
  return id;
}
const maybeReactUseId = SafeReact.useId;
function useId(idOverride, prefix) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
  }
  return useGlobalId(idOverride, prefix);
}
function useBaseUiId(idOverride) {
  return useId(idOverride, "base-ui");
}
const LabelableContext = /* @__PURE__ */ reactExports.createContext({
  controlId: void 0,
  setControlId: NOOP,
  labelId: void 0,
  setLabelId: NOOP,
  messageIds: [],
  setMessageIds: NOOP,
  getDescriptionProps: (externalProps) => externalProps
});
function useLabelableContext() {
  return reactExports.useContext(LabelableContext);
}
function useLabelableId(params = {}) {
  const {
    id,
    implicit = false,
    controlRef
  } = params;
  const {
    controlId,
    setControlId
  } = useLabelableContext();
  const defaultId = useBaseUiId(id);
  useIsoLayoutEffect(() => {
    if (!implicit && !id || setControlId === NOOP) {
      return void 0;
    }
    if (implicit) {
      const elem = controlRef?.current;
      if (isElement(elem) && elem.closest("label") != null) {
        setControlId(id ?? null);
      } else {
        setControlId(controlId ?? defaultId);
      }
    } else if (id) {
      setControlId(id);
    }
    return () => {
      if (id) {
        setControlId(void 0);
      }
    };
  }, [id, controlRef, controlId, setControlId, implicit, defaultId]);
  return controlId ?? defaultId;
}
const stateAttributesMapping$1 = {
  inputValue: () => null,
  value: () => null
};
const majorVersion = parseInt(reactExports.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}
function getReactElementRef(element) {
  if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}
function mergeObjects(a, b) {
  if (a && !b) {
    return a;
  }
  if (!a && b) {
    return b;
  }
  if (a || b) {
    return {
      ...a,
      ...b
    };
  }
  return void 0;
}
function getStateAttributesProps(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}
const EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
  let merged = {
    ...resolvePropsGetter(a, EMPTY_PROPS)
  };
  if (b) {
    merged = mergeOne(merged, b);
  }
  if (c) {
    merged = mergeOne(merged, c);
  }
  if (d) {
    merged = mergeOne(merged, d);
  }
  return merged;
}
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return resolvePropsGetter(props[0], EMPTY_PROPS);
  }
  let merged = {
    ...resolvePropsGetter(props[0], EMPTY_PROPS)
  };
  for (let i = 1; i < props.length; i += 1) {
    merged = mergeOne(merged, props[i]);
  }
  return merged;
}
function mergeOne(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter(inputProps) {
  return typeof inputProps === "function";
}
function resolvePropsGetter(inputProps, previousProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return theirHandler;
  }
  return (event) => {
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result2 = theirHandler(baseUIEvent);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(baseUIEvent);
      }
      return result2;
    }
    const result = theirHandler(event);
    ourHandler?.(event);
    return result;
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}
function useRenderElement(element, componentProps, params = {}) {
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping: stateAttributesMapping2,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping2) : EMPTY_OBJECT;
  const outProps = enabled ? mergeObjects(stateProps, Array.isArray(props) ? mergePropsN(props) : props) ?? EMPTY_OBJECT : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function evaluateRenderProp(element, render, props, state) {
  if (render) {
    if (typeof render === "function") {
      return render(props, state);
    }
    const mergedProps = mergeProps(props, render.props);
    mergedProps.ref = props.ref;
    return /* @__PURE__ */ reactExports.cloneElement(render, mergedProps);
  }
  if (element) {
    if (typeof element === "string") {
      return renderTag(element, props);
    }
  }
  throw new Error(formatErrorMessage(8));
}
function renderTag(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ reactExports.createElement("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ reactExports.createElement("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ reactExports.createElement(Tag, props);
}
const cache = /* @__PURE__ */ new Map();
function getFormatter(locale, options) {
  const optionsString = JSON.stringify({
    locale,
    options
  });
  const cachedFormatter = cache.get(optionsString);
  if (cachedFormatter) {
    return cachedFormatter;
  }
  const formatter = new Intl.NumberFormat(locale, options);
  cache.set(optionsString, formatter);
  return formatter;
}
function formatNumber(value, locale, options) {
  if (value == null) {
    return "";
  }
  return getFormatter(locale, options).format(value);
}
function formatNumberMaxPrecision(value, locale, options) {
  return formatNumber(value, locale, {
    ...options,
    maximumFractionDigits: 20
  });
}
const HAN_NUMERALS = ["零", "〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const HAN_NUMERAL_TO_DIGIT = {
  零: "0",
  "〇": "0",
  一: "1",
  二: "2",
  三: "3",
  四: "4",
  五: "5",
  六: "6",
  七: "7",
  八: "8",
  九: "9"
};
const ARABIC_NUMERALS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
const PERSIAN_NUMERALS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const FULLWIDTH_NUMERALS = ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"];
const PERCENTAGES = ["%", "٪", "％", "﹪"];
const PERMILLE = ["‰", "؉"];
const UNICODE_MINUS_SIGNS = ["−", "－", "‒", "–", "—", "﹣"];
const UNICODE_PLUS_SIGNS = ["＋", "﹢"];
const FULLWIDTH_DECIMAL = "．";
const FULLWIDTH_GROUP = "，";
const ARABIC_RE = new RegExp(`[${ARABIC_NUMERALS.join("")}]`, "g");
const PERSIAN_RE = new RegExp(`[${PERSIAN_NUMERALS.join("")}]`, "g");
const FULLWIDTH_RE = new RegExp(`[${FULLWIDTH_NUMERALS.join("")}]`, "g");
const HAN_RE = new RegExp(`[${HAN_NUMERALS.join("")}]`, "g");
const PERCENT_RE = new RegExp(`[${PERCENTAGES.join("")}]`);
const PERMILLE_RE = new RegExp(`[${PERMILLE.join("")}]`);
const ARABIC_DETECT_RE = /[٠١٢٣٤٥٦٧٨٩]/;
const PERSIAN_DETECT_RE = /[۰۱۲۳۴۵۶۷۸۹]/;
const HAN_DETECT_RE = /[零〇一二三四五六七八九]/;
const FULLWIDTH_DETECT_RE = new RegExp(`[${FULLWIDTH_NUMERALS.join("")}]`);
const BASE_NON_NUMERIC_SYMBOLS = [".", ",", FULLWIDTH_DECIMAL, FULLWIDTH_GROUP, "٫", "٬"];
const SPACE_SEPARATOR_RE = new RegExp("\\p{Zs}", "u");
const PLUS_SIGNS_WITH_ASCII = ["+", ...UNICODE_PLUS_SIGNS];
const MINUS_SIGNS_WITH_ASCII = ["-", ...UNICODE_MINUS_SIGNS];
const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const escapeClassChar = (s) => s.replace(/[-\\\]^]/g, (m) => `\\${m}`);
const charClassFrom = (chars) => `[${chars.map(escapeClassChar).join("")}]`;
const ANY_MINUS_CLASS = charClassFrom(["-"].concat(UNICODE_MINUS_SIGNS));
const ANY_PLUS_CLASS = charClassFrom(["+"].concat(UNICODE_PLUS_SIGNS));
const ANY_MINUS_RE = new RegExp(ANY_MINUS_CLASS, "gu");
const ANY_PLUS_RE = new RegExp(ANY_PLUS_CLASS, "gu");
const ANY_MINUS_DETECT_RE = new RegExp(ANY_MINUS_CLASS);
const ANY_PLUS_DETECT_RE = new RegExp(ANY_PLUS_CLASS);
function getNumberLocaleDetails(locale, options) {
  const parts = getFormatter(locale, options).formatToParts(11111.1);
  const result = {};
  parts.forEach((part) => {
    result[part.type] = part.value;
  });
  getFormatter(locale).formatToParts(0.1).forEach((part) => {
    if (part.type === "decimal") {
      result[part.type] = part.value;
    }
  });
  return result;
}
function parseNumber(formattedNumber, locale, options) {
  if (formattedNumber == null) {
    return null;
  }
  let input = String(formattedNumber).replace(new RegExp("\\p{Cf}", "gu"), "").trim();
  input = input.replace(ANY_MINUS_RE, "-").replace(ANY_PLUS_RE, "+");
  let isNegative = false;
  const trailing = input.match(/([+-])\s*$/);
  if (trailing) {
    if (trailing[1] === "-") {
      isNegative = true;
    }
    input = input.replace(/([+-])\s*$/, "");
  }
  const leading = input.match(/^\s*([+-])/);
  if (leading) {
    if (leading[1] === "-") {
      isNegative = true;
    }
    input = input.replace(/^\s*[+-]/, "");
  }
  let computedLocale = locale;
  if (computedLocale === void 0) {
    if (ARABIC_DETECT_RE.test(input) || PERSIAN_DETECT_RE.test(input)) {
      computedLocale = "ar";
    } else if (HAN_DETECT_RE.test(input)) {
      computedLocale = "zh";
    }
  }
  const {
    group,
    decimal,
    currency
  } = getNumberLocaleDetails(computedLocale, options);
  const unitParts = getFormatter(computedLocale, options).formatToParts(1).filter((p) => p.type === "unit").map((p) => escapeRegExp(p.value));
  const unitRegex = unitParts.length ? new RegExp(unitParts.join("|"), "g") : null;
  let groupRegex = null;
  if (group) {
    const isSpaceGroup = new RegExp("\\p{Zs}", "u").test(group);
    const isApostropheGroup = group === "'" || group === "’";
    if (isSpaceGroup) {
      groupRegex = new RegExp("\\p{Zs}", "gu");
    } else if (isApostropheGroup) {
      groupRegex = /['’]/g;
    } else {
      groupRegex = new RegExp(escapeRegExp(group), "g");
    }
  }
  const replacements = [
    {
      regex: group ? groupRegex : null,
      replacement: ""
    },
    {
      regex: decimal ? new RegExp(escapeRegExp(decimal), "g") : null,
      replacement: "."
    },
    // Fullwidth punctuation
    {
      regex: /．/g,
      replacement: "."
    },
    // FULLWIDTH_DECIMAL
    {
      regex: /，/g,
      replacement: ""
    },
    // FULLWIDTH_GROUP
    // Arabic punctuation
    {
      regex: /٫/g,
      replacement: "."
    },
    // ARABIC DECIMAL SEPARATOR (U+066B)
    {
      regex: /٬/g,
      replacement: ""
    },
    // ARABIC THOUSANDS SEPARATOR (U+066C)
    // Currency & unit labels
    {
      regex: currency ? new RegExp(escapeRegExp(currency), "g") : null,
      replacement: ""
    },
    {
      regex: unitRegex,
      replacement: ""
    },
    // Numeral systems to ASCII digits
    {
      regex: ARABIC_RE,
      replacement: (ch) => String(ARABIC_NUMERALS.indexOf(ch))
    },
    {
      regex: PERSIAN_RE,
      replacement: (ch) => String(PERSIAN_NUMERALS.indexOf(ch))
    },
    {
      regex: FULLWIDTH_RE,
      replacement: (ch) => String(FULLWIDTH_NUMERALS.indexOf(ch))
    },
    {
      regex: HAN_RE,
      replacement: (ch) => HAN_NUMERAL_TO_DIGIT[ch]
    }
  ];
  let unformatted = replacements.reduce((acc, {
    regex,
    replacement
  }) => {
    return regex ? acc.replace(regex, replacement) : acc;
  }, input);
  const lastDot = unformatted.lastIndexOf(".");
  if (lastDot !== -1) {
    unformatted = `${unformatted.slice(0, lastDot).replace(/\./g, "")}.${unformatted.slice(lastDot + 1).replace(/\./g, "")}`;
  }
  if (/^[-+]?Infinity$/i.test(input) || /[∞]/.test(input)) {
    return null;
  }
  const parseTarget = (isNegative ? "-" : "") + unformatted;
  let num = parseFloat(parseTarget);
  const style = options?.style;
  const isUnitPercent = style === "unit" && options?.unit === "percent";
  const hasPercentSymbol = PERCENT_RE.test(formattedNumber) || style === "percent";
  const hasPermilleSymbol = PERMILLE_RE.test(formattedNumber);
  if (hasPermilleSymbol) {
    num /= 1e3;
  } else if (!isUnitPercent && hasPercentSymbol) {
    num /= 100;
  }
  if (Number.isNaN(num)) {
    return null;
  }
  return num;
}
const CHANGE_VALUE_TICK_DELAY = 60;
const START_AUTO_CHANGE_DELAY = 400;
const TOUCH_TIMEOUT = 50;
const MAX_POINTER_MOVES_AFTER_TOUCH = 3;
const SCROLLING_POINTER_MOVE_DISTANCE = 8;
const DEFAULT_STEP = 1;
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}
const STEP_EPSILON_FACTOR = 1e-10;
function getFractionDigits(format) {
  const defaultOptions = getFormatter("en-US").resolvedOptions();
  const minimumFractionDigits = format?.minimumFractionDigits ?? defaultOptions.minimumFractionDigits ?? 0;
  const maximumFractionDigits = Math.max(format?.maximumFractionDigits ?? defaultOptions.maximumFractionDigits ?? 20, minimumFractionDigits);
  return {
    maximumFractionDigits,
    minimumFractionDigits
  };
}
function roundToFractionDigits(value, maximumFractionDigits) {
  if (!Number.isFinite(value)) {
    return value;
  }
  const digits = Math.min(Math.max(maximumFractionDigits, 0), 20);
  return Number(value.toFixed(digits));
}
function removeFloatingPointErrors(value, format) {
  const {
    maximumFractionDigits
  } = getFractionDigits(format);
  return roundToFractionDigits(value, maximumFractionDigits);
}
function snapToStep(clampedValue, base, step, mode = "directional") {
  if (step === 0) {
    return clampedValue;
  }
  const stepSize = Math.abs(step);
  const direction = Math.sign(step);
  const tolerance = stepSize * STEP_EPSILON_FACTOR * direction;
  const divisor = mode === "nearest" ? step : stepSize;
  const rawSteps = (clampedValue - base + tolerance) / divisor;
  let snappedSteps;
  if (mode === "nearest") {
    snappedSteps = Math.round(rawSteps);
  } else if (direction > 0) {
    snappedSteps = Math.floor(rawSteps);
  } else {
    snappedSteps = Math.ceil(rawSteps);
  }
  const stepForResult = mode === "nearest" ? step : stepSize;
  return base + snappedSteps * stepForResult;
}
function toValidatedNumber(value, {
  step,
  minWithDefault,
  maxWithDefault,
  minWithZeroDefault,
  format,
  snapOnStep,
  small
}) {
  if (value === null) {
    return value;
  }
  const clampedValue = clamp(value, minWithDefault, maxWithDefault);
  if (step != null && snapOnStep) {
    if (step === 0) {
      return removeFloatingPointErrors(clampedValue, format);
    }
    let base = minWithZeroDefault;
    if (!small && minWithDefault !== Number.MIN_SAFE_INTEGER) {
      base = minWithDefault;
    }
    const snappedValue = snapToStep(clampedValue, base, step, small ? "nearest" : "directional");
    return removeFloatingPointErrors(snappedValue, format);
  }
  return removeFloatingPointErrors(clampedValue, format);
}
const none = "none";
const inputChange = "input-change";
const inputClear = "input-clear";
const inputBlur = "input-blur";
const inputPaste = "input-paste";
const keyboard = "keyboard";
const scrub = "scrub";
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = customProperties ?? EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}
function createGenericEventDetails(reason, event, customProperties) {
  const custom = EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    ...custom
  };
  return details;
}
const NumberFieldRoot = /* @__PURE__ */ reactExports.forwardRef(function NumberFieldRoot2(componentProps, forwardedRef) {
  const {
    id: idProp,
    min,
    max,
    smallStep = 0.1,
    step: stepProp = 1,
    largeStep = 10,
    required = false,
    disabled: disabledProp = false,
    readOnly = false,
    name: nameProp,
    defaultValue,
    value: valueProp,
    onValueChange: onValueChangeProp,
    onValueCommitted: onValueCommittedProp,
    allowWheelScrub = false,
    snapOnStep = false,
    format,
    locale,
    render,
    className,
    inputRef: inputRefProp,
    ...elementProps
  } = componentProps;
  const {
    setDirty,
    validityData,
    disabled: fieldDisabled,
    setFilled,
    invalid,
    name: fieldName,
    state: fieldState,
    validation,
    shouldValidateOnChange
  } = useFieldRootContext();
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const step = stepProp === "any" ? 1 : stepProp;
  const [isScrubbing, setIsScrubbing] = reactExports.useState(false);
  const minWithDefault = min ?? Number.MIN_SAFE_INTEGER;
  const maxWithDefault = max ?? Number.MAX_SAFE_INTEGER;
  const minWithZeroDefault = min ?? 0;
  const formatStyle = format?.style;
  const inputRef = reactExports.useRef(null);
  const hiddenInputRef = useMergedRefs(inputRefProp, validation.inputRef);
  const id = useLabelableId({
    id: idProp
  });
  const [valueUnwrapped, setValueUnwrapped] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "NumberField",
    state: "value"
  });
  const value = valueUnwrapped ?? null;
  const valueRef = useValueAsRef(value);
  useIsoLayoutEffect(() => {
    setFilled(value !== null);
  }, [setFilled, value]);
  const forceRender = useForcedRerendering();
  const formatOptionsRef = useValueAsRef(format);
  const hasPendingCommitRef = reactExports.useRef(false);
  const onValueCommitted = useStableCallback((nextValue, eventDetails) => {
    hasPendingCommitRef.current = false;
    onValueCommittedProp?.(nextValue, eventDetails);
  });
  const startTickTimeout = useTimeout();
  const tickInterval = useInterval();
  const intentionalTouchCheckTimeout = useTimeout();
  const isPressedRef = reactExports.useRef(false);
  const movesAfterTouchRef = reactExports.useRef(0);
  const allowInputSyncRef = reactExports.useRef(true);
  const lastChangedValueRef = reactExports.useRef(null);
  const unsubscribeFromGlobalContextMenuRef = reactExports.useRef(() => {
  });
  const [inputValue, setInputValue] = reactExports.useState(() => {
    if (valueProp !== void 0) {
      return getControlledInputValue(value, locale, format);
    }
    return formatNumber(value, locale, format);
  });
  const [inputMode, setInputMode] = reactExports.useState("numeric");
  const getAllowedNonNumericKeys = useStableCallback(() => {
    const {
      decimal,
      group,
      currency,
      literal
    } = getNumberLocaleDetails(locale, format);
    const keys = /* @__PURE__ */ new Set();
    BASE_NON_NUMERIC_SYMBOLS.forEach((symbol) => keys.add(symbol));
    if (decimal) {
      keys.add(decimal);
    }
    if (group) {
      keys.add(group);
      if (SPACE_SEPARATOR_RE.test(group)) {
        keys.add(" ");
      }
    }
    const allowPercentSymbols = formatStyle === "percent" || formatStyle === "unit" && format?.unit === "percent";
    const allowPermilleSymbols = formatStyle === "percent" || formatStyle === "unit" && format?.unit === "permille";
    if (allowPercentSymbols) {
      PERCENTAGES.forEach((key) => keys.add(key));
    }
    if (allowPermilleSymbols) {
      PERMILLE.forEach((key) => keys.add(key));
    }
    if (formatStyle === "currency" && currency) {
      keys.add(currency);
    }
    if (literal) {
      Array.from(literal).forEach((char) => keys.add(char));
      if (SPACE_SEPARATOR_RE.test(literal)) {
        keys.add(" ");
      }
    }
    PLUS_SIGNS_WITH_ASCII.forEach((key) => keys.add(key));
    if (minWithDefault < 0) {
      MINUS_SIGNS_WITH_ASCII.forEach((key) => keys.add(key));
    }
    return keys;
  });
  const getStepAmount = useStableCallback((event) => {
    if (event?.altKey) {
      return smallStep;
    }
    if (event?.shiftKey) {
      return largeStep;
    }
    return step;
  });
  const setValue = useStableCallback((unvalidatedValue, details) => {
    const eventWithOptionalKeyState = details.event;
    const dir = details.direction;
    const validatedValue = toValidatedNumber(unvalidatedValue, {
      step: dir ? getStepAmount(eventWithOptionalKeyState) * dir : void 0,
      format: formatOptionsRef.current,
      minWithDefault,
      maxWithDefault,
      minWithZeroDefault,
      snapOnStep,
      small: eventWithOptionalKeyState?.altKey ?? false
    });
    const shouldFireChange = validatedValue !== value || unvalidatedValue !== value || allowInputSyncRef.current === false;
    if (shouldFireChange) {
      lastChangedValueRef.current = validatedValue;
      onValueChangeProp?.(validatedValue, details);
      if (details.isCanceled) {
        return;
      }
      setValueUnwrapped(validatedValue);
      setDirty(validatedValue !== validityData.initialValue);
      hasPendingCommitRef.current = true;
    }
    if (allowInputSyncRef.current) {
      setInputValue(formatNumber(validatedValue, locale, format));
    }
    forceRender();
  });
  const incrementValue = useStableCallback((amount, {
    direction,
    currentValue,
    event,
    reason
  }) => {
    const prevValue = currentValue == null ? valueRef.current : currentValue;
    const nextValue = typeof prevValue === "number" ? prevValue + amount * direction : Math.max(0, min ?? 0);
    const nativeEvent = event;
    setValue(nextValue, createChangeEventDetails(reason, nativeEvent, void 0, {
      direction
    }));
  });
  const stopAutoChange = useStableCallback(() => {
    intentionalTouchCheckTimeout.clear();
    startTickTimeout.clear();
    tickInterval.clear();
    unsubscribeFromGlobalContextMenuRef.current();
    movesAfterTouchRef.current = 0;
  });
  const startAutoChange = useStableCallback((isIncrement, triggerEvent) => {
    stopAutoChange();
    if (!inputRef.current) {
      return;
    }
    const win = getWindow(inputRef.current);
    function handleContextMenu(event) {
      event.preventDefault();
    }
    win.addEventListener("contextmenu", handleContextMenu);
    unsubscribeFromGlobalContextMenuRef.current = () => {
      win.removeEventListener("contextmenu", handleContextMenu);
    };
    win.addEventListener("pointerup", (event) => {
      isPressedRef.current = false;
      stopAutoChange();
      const committed = lastChangedValueRef.current ?? valueRef.current;
      const commitReason = isIncrement ? "increment" : "decrement";
      onValueCommitted(committed, createGenericEventDetails(commitReason, event));
    }, {
      once: true
    });
    function tick() {
      const amount = getStepAmount(triggerEvent) ?? DEFAULT_STEP;
      incrementValue(amount, {
        direction: isIncrement ? 1 : -1,
        event: triggerEvent,
        reason: isIncrement ? "increment-press" : "decrement-press"
      });
    }
    tick();
    startTickTimeout.start(START_AUTO_CHANGE_DELAY, () => {
      tickInterval.start(CHANGE_VALUE_TICK_DELAY, tick);
    });
  });
  useIsoLayoutEffect(function syncFormattedInputValueOnValueChange() {
    if (!allowInputSyncRef.current) {
      return;
    }
    const nextInputValue = valueProp !== void 0 ? getControlledInputValue(value, locale, format) : formatNumber(value, locale, format);
    if (nextInputValue !== inputValue) {
      setInputValue(nextInputValue);
    }
  });
  useIsoLayoutEffect(function setDynamicInputModeForIOS() {
    if (!isIOS) {
      return;
    }
    let computedInputMode = "text";
    if (minWithDefault >= 0) {
      computedInputMode = "decimal";
    }
    setInputMode(computedInputMode);
  }, [minWithDefault, formatStyle]);
  reactExports.useEffect(() => {
    return () => stopAutoChange();
  }, [stopAutoChange]);
  reactExports.useEffect(function registerElementWheelListener() {
    const element2 = inputRef.current;
    if (disabled || readOnly || !allowWheelScrub || !element2) {
      return void 0;
    }
    function handleWheel(event) {
      if (
        // Allow pinch-zooming.
        event.ctrlKey || ownerDocument(inputRef.current).activeElement !== inputRef.current
      ) {
        return;
      }
      event.preventDefault();
      const amount = getStepAmount(event) ?? DEFAULT_STEP;
      incrementValue(amount, {
        direction: event.deltaY > 0 ? -1 : 1,
        event,
        reason: "wheel"
      });
    }
    element2.addEventListener("wheel", handleWheel);
    return () => {
      element2.removeEventListener("wheel", handleWheel);
    };
  }, [allowWheelScrub, incrementValue, disabled, readOnly, largeStep, step, getStepAmount]);
  const state = reactExports.useMemo(() => ({
    ...fieldState,
    disabled,
    readOnly,
    required,
    value,
    inputValue,
    scrubbing: isScrubbing
  }), [fieldState, disabled, readOnly, required, value, inputValue, isScrubbing]);
  const contextValue = reactExports.useMemo(() => ({
    inputRef,
    inputValue,
    value,
    startAutoChange,
    stopAutoChange,
    minWithDefault,
    maxWithDefault,
    disabled,
    readOnly,
    id,
    setValue,
    incrementValue,
    getStepAmount,
    allowInputSyncRef,
    formatOptionsRef,
    valueRef,
    lastChangedValueRef,
    hasPendingCommitRef,
    isPressedRef,
    intentionalTouchCheckTimeout,
    movesAfterTouchRef,
    name,
    required,
    invalid,
    inputMode,
    getAllowedNonNumericKeys,
    min,
    max,
    setInputValue,
    locale,
    isScrubbing,
    setIsScrubbing,
    state,
    onValueCommitted
  }), [inputRef, inputValue, value, startAutoChange, stopAutoChange, minWithDefault, maxWithDefault, disabled, readOnly, id, setValue, incrementValue, getStepAmount, formatOptionsRef, valueRef, intentionalTouchCheckTimeout, name, required, invalid, inputMode, getAllowedNonNumericKeys, min, max, setInputValue, locale, isScrubbing, state, onValueCommitted]);
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    state,
    props: elementProps,
    stateAttributesMapping: stateAttributesMapping$1
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(NumberFieldRootContext.Provider, {
    value: contextValue,
    children: [element, /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      ...validation.getInputValidationProps({
        onFocus() {
          inputRef.current?.focus();
        },
        onChange(event) {
          if (event.nativeEvent.defaultPrevented) {
            return;
          }
          const nextValue = event.currentTarget.valueAsNumber;
          const parsedValue = Number.isNaN(nextValue) ? null : nextValue;
          const details = createChangeEventDetails(none, event.nativeEvent);
          setDirty(parsedValue !== validityData.initialValue);
          setValue(parsedValue, details);
          if (shouldValidateOnChange()) {
            validation.commit(parsedValue);
          }
        }
      }),
      ref: hiddenInputRef,
      type: "number",
      name,
      value: value ?? "",
      min,
      max,
      step: stepProp,
      disabled,
      required,
      "aria-hidden": true,
      tabIndex: -1,
      style: name ? visuallyHiddenInput : visuallyHidden
    })]
  });
});
function getControlledInputValue(value, locale, format) {
  const explicitPrecision = format?.maximumFractionDigits != null || format?.minimumFractionDigits != null;
  return explicitPrecision ? formatNumber(value, locale, format) : formatNumberMaxPrecision(value, locale, format);
}
const CompositeRootContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useCompositeRootContext(optional = false) {
  const context = reactExports.useContext(CompositeRootContext);
  if (context === void 0 && !optional) {
    throw new Error(formatErrorMessage(16));
  }
  return context;
}
function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = reactExports.useMemo(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
      additionalProps["aria-disabled"] = disabled;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled;
    }
    return additionalProps;
  }, [composite, disabled, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true
  } = parameters;
  const elementRef = reactExports.useRef(null);
  const isCompositeItem = useCompositeRootContext(true) !== void 0;
  const isValidLink = useStableCallback(() => {
    const element = elementRef.current;
    return Boolean(element?.tagName === "A" && element?.href);
  });
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  const updateDisabled = reactExports.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = reactExports.useCallback((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    const type = isNativeButton ? "button" : void 0;
    return mergeProps({
      type,
      onClick(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (!disabled) {
          makeEventPreventable(event);
          externalOnKeyDown?.(event);
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const shouldClick = event.target === event.currentTarget && !isNativeButton && !isValidLink() && !disabled;
        const isEnterKey = event.key === "Enter";
        const isSpaceKey = event.key === " ";
        if (shouldClick) {
          if (isSpaceKey || isEnterKey) {
            event.preventDefault();
          }
          if (isEnterKey) {
            externalOnClick?.(event);
          }
        }
      },
      onKeyUp(event) {
        if (!disabled) {
          makeEventPreventable(event);
          externalOnKeyUp?.(event);
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        if (event.target === event.currentTarget && !isNativeButton && !disabled && event.key === " ") {
          externalOnClick?.(event);
        }
      },
      onPointerDown(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, !isNativeButton ? {
      role: "button"
    } : void 0, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled, focusableWhenDisabledProps, isNativeButton, isValidLink]);
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function useNumberFieldButton(params) {
  const {
    allowInputSyncRef,
    disabled,
    formatOptionsRef,
    getStepAmount,
    id,
    incrementValue,
    inputRef,
    inputValue,
    intentionalTouchCheckTimeout,
    isIncrement,
    isPressedRef,
    locale,
    movesAfterTouchRef,
    readOnly,
    setValue,
    startAutoChange,
    stopAutoChange,
    valueRef,
    lastChangedValueRef,
    onValueCommitted
  } = params;
  const incrementDownCoordsRef = reactExports.useRef({
    x: 0,
    y: 0
  });
  const isTouchingButtonRef = reactExports.useRef(false);
  const ignoreClickRef = reactExports.useRef(false);
  const pointerTypeRef = reactExports.useRef("");
  const pressReason = isIncrement ? "increment-press" : "decrement-press";
  function commitValue(nativeEvent) {
    allowInputSyncRef.current = true;
    const parsedValue = parseNumber(inputValue, locale, formatOptionsRef.current);
    if (parsedValue !== null) {
      valueRef.current = parsedValue;
      setValue(parsedValue, createChangeEventDetails(pressReason, nativeEvent, void 0, {
        direction: isIncrement ? 1 : -1
      }));
    }
  }
  const props = {
    disabled,
    "aria-readonly": readOnly || void 0,
    "aria-label": isIncrement ? "Increase" : "Decrease",
    "aria-controls": id,
    // Keyboard users shouldn't have access to the buttons, since they can use the input element
    // to change the value. On the other hand, `aria-hidden` is not applied because touch screen
    // readers should be able to use the buttons.
    tabIndex: -1,
    style: {
      WebkitUserSelect: "none",
      userSelect: "none"
    },
    onTouchStart() {
      isTouchingButtonRef.current = true;
    },
    onTouchEnd() {
      isTouchingButtonRef.current = false;
    },
    onClick(event) {
      const isDisabled = disabled || readOnly;
      if (event.defaultPrevented || isDisabled || // If it's not a keyboard/virtual click, ignore.
      (pointerTypeRef.current === "touch" ? ignoreClickRef.current : event.detail !== 0)) {
        return;
      }
      commitValue(event.nativeEvent);
      const amount = getStepAmount(event) ?? DEFAULT_STEP;
      const prev = valueRef.current;
      incrementValue(amount, {
        direction: isIncrement ? 1 : -1,
        event: event.nativeEvent,
        reason: pressReason
      });
      const committed = lastChangedValueRef.current ?? valueRef.current;
      if (committed !== prev) {
        onValueCommitted(committed, createGenericEventDetails(pressReason, event.nativeEvent));
      }
    },
    onPointerDown(event) {
      const isMainButton = !event.button || event.button === 0;
      if (event.defaultPrevented || readOnly || !isMainButton || disabled) {
        return;
      }
      pointerTypeRef.current = event.pointerType;
      ignoreClickRef.current = false;
      isPressedRef.current = true;
      incrementDownCoordsRef.current = {
        x: event.clientX,
        y: event.clientY
      };
      commitValue(event.nativeEvent);
      if (event.pointerType !== "touch") {
        event.preventDefault();
        inputRef.current?.focus();
        startAutoChange(isIncrement, event);
      } else {
        intentionalTouchCheckTimeout.start(TOUCH_TIMEOUT, () => {
          const moves = movesAfterTouchRef.current;
          movesAfterTouchRef.current = 0;
          const stillPressed = isPressedRef.current;
          if (stillPressed && moves != null && moves < MAX_POINTER_MOVES_AFTER_TOUCH) {
            startAutoChange(isIncrement, event);
            ignoreClickRef.current = true;
          } else {
            ignoreClickRef.current = false;
            stopAutoChange();
          }
        });
      }
    },
    onPointerUp(event) {
      if (event.pointerType === "touch") {
        isPressedRef.current = false;
      }
    },
    onPointerMove(event) {
      const isDisabled = disabled || readOnly;
      if (isDisabled || event.pointerType !== "touch" || !isPressedRef.current) {
        return;
      }
      if (movesAfterTouchRef.current != null) {
        movesAfterTouchRef.current += 1;
      }
      const {
        x,
        y
      } = incrementDownCoordsRef.current;
      const dx = x - event.clientX;
      const dy = y - event.clientY;
      if (dx ** 2 + dy ** 2 > SCROLLING_POINTER_MOVE_DISTANCE ** 2) {
        stopAutoChange();
      }
    },
    onMouseEnter(event) {
      const isDisabled = disabled || readOnly;
      if (event.defaultPrevented || isDisabled || !isPressedRef.current || isTouchingButtonRef.current || pointerTypeRef.current === "touch") {
        return;
      }
      startAutoChange(isIncrement, event);
    },
    onMouseLeave() {
      if (isTouchingButtonRef.current) {
        return;
      }
      stopAutoChange();
    },
    onMouseUp() {
      if (isTouchingButtonRef.current) {
        return;
      }
      stopAutoChange();
    }
  };
  return props;
}
const NumberFieldIncrement = /* @__PURE__ */ reactExports.forwardRef(function NumberFieldIncrement2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    allowInputSyncRef,
    disabled: contextDisabled,
    formatOptionsRef,
    getStepAmount,
    id,
    incrementValue,
    inputRef,
    inputValue,
    intentionalTouchCheckTimeout,
    isPressedRef,
    locale,
    maxWithDefault,
    movesAfterTouchRef,
    readOnly,
    setValue,
    startAutoChange,
    state,
    stopAutoChange,
    value,
    valueRef,
    lastChangedValueRef,
    onValueCommitted
  } = useNumberFieldRootContext();
  const isMax = value != null && value >= maxWithDefault;
  const disabled = disabledProp || contextDisabled || isMax;
  const props = useNumberFieldButton({
    isIncrement: true,
    inputRef,
    startAutoChange,
    stopAutoChange,
    inputValue,
    disabled,
    readOnly,
    id,
    setValue,
    getStepAmount,
    incrementValue,
    allowInputSyncRef,
    formatOptionsRef,
    valueRef,
    isPressedRef,
    intentionalTouchCheckTimeout,
    movesAfterTouchRef,
    locale,
    lastChangedValueRef,
    onValueCommitted
  });
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton,
    focusableWhenDisabled: true
  });
  const buttonState = reactExports.useMemo(() => ({
    ...state,
    disabled
  }), [state, disabled]);
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    state: buttonState,
    props: [props, elementProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping$1
  });
  return element;
});
const NumberFieldDecrement = /* @__PURE__ */ reactExports.forwardRef(function NumberFieldDecrement2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    allowInputSyncRef,
    disabled: contextDisabled,
    formatOptionsRef,
    getStepAmount,
    id,
    incrementValue,
    inputRef,
    inputValue,
    intentionalTouchCheckTimeout,
    isPressedRef,
    minWithDefault,
    movesAfterTouchRef,
    readOnly,
    setValue,
    startAutoChange,
    state,
    stopAutoChange,
    value,
    valueRef,
    locale,
    lastChangedValueRef,
    onValueCommitted
  } = useNumberFieldRootContext();
  const isMin = value != null && value <= minWithDefault;
  const disabled = disabledProp || contextDisabled || isMin;
  const props = useNumberFieldButton({
    isIncrement: false,
    inputRef,
    startAutoChange,
    stopAutoChange,
    inputValue,
    disabled,
    readOnly,
    id,
    setValue,
    getStepAmount,
    incrementValue,
    allowInputSyncRef,
    formatOptionsRef,
    valueRef,
    isPressedRef,
    intentionalTouchCheckTimeout,
    movesAfterTouchRef,
    locale,
    lastChangedValueRef,
    onValueCommitted
  });
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton,
    focusableWhenDisabled: true
  });
  const buttonState = reactExports.useMemo(() => ({
    ...state,
    disabled
  }), [state, disabled]);
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    state: buttonState,
    props: [props, elementProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping$1
  });
  return element;
});
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function getCombinedFieldValidityData(validityData, invalid) {
  return {
    ...validityData,
    state: {
      ...validityData.state,
      valid: !invalid && validityData.state.valid
    }
  };
}
const FormContext = /* @__PURE__ */ reactExports.createContext({
  formRef: {
    current: {
      fields: /* @__PURE__ */ new Map()
    }
  },
  errors: {},
  clearErrors: NOOP,
  validationMode: "onSubmit",
  submitAttemptedRef: {
    current: false
  }
});
function useFormContext() {
  return reactExports.useContext(FormContext);
}
function useField(params) {
  const {
    enabled = true,
    value,
    id,
    name,
    controlRef,
    commit
  } = params;
  const {
    formRef
  } = useFormContext();
  const {
    invalid,
    markedDirtyRef,
    validityData,
    setValidityData
  } = useFieldRootContext();
  const getValue = useStableCallback(params.getValue);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    let initialValue = value;
    if (initialValue === void 0) {
      initialValue = getValue();
    }
    if (validityData.initialValue === null && initialValue !== null) {
      setValidityData((prev) => ({
        ...prev,
        initialValue
      }));
    }
  }, [enabled, setValidityData, value, validityData.initialValue, getValue]);
  useIsoLayoutEffect(() => {
    if (!enabled || !id) {
      return;
    }
    formRef.current.fields.set(id, {
      getValue,
      name,
      controlRef,
      validityData: getCombinedFieldValidityData(validityData, invalid),
      validate(flushSync = true) {
        let nextValue = value;
        if (nextValue === void 0) {
          nextValue = getValue();
        }
        markedDirtyRef.current = true;
        if (!flushSync) {
          commit(nextValue);
        } else {
          reactDomExports.flushSync(() => commit(nextValue));
        }
      }
    });
  }, [commit, controlRef, enabled, formRef, getValue, id, invalid, markedDirtyRef, name, validityData, value]);
  useIsoLayoutEffect(() => {
    const fields = formRef.current.fields;
    return () => {
      if (id) {
        fields.delete(id);
      }
    };
  }, [formRef, id]);
}
function useValueChanged(value, onChange) {
  const valueRef = reactExports.useRef(value);
  const onChangeCallback = useStableCallback(onChange);
  useIsoLayoutEffect(() => {
    if (valueRef.current === value) {
      return;
    }
    onChangeCallback(valueRef.current);
  }, [value, onChangeCallback]);
  useIsoLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);
}
const stateAttributesMapping = {
  ...fieldValidityMapping,
  ...stateAttributesMapping$1
};
const NAVIGATE_KEYS = /* @__PURE__ */ new Set(["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter", "Escape"]);
const NumberFieldInput = /* @__PURE__ */ reactExports.forwardRef(function NumberFieldInput2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    allowInputSyncRef,
    disabled,
    formatOptionsRef,
    getAllowedNonNumericKeys,
    getStepAmount,
    id,
    incrementValue,
    inputMode,
    inputValue,
    max,
    min,
    name,
    readOnly,
    required,
    setValue,
    state,
    setInputValue,
    locale,
    inputRef,
    value,
    onValueCommitted,
    lastChangedValueRef,
    hasPendingCommitRef,
    valueRef
  } = useNumberFieldRootContext();
  const {
    clearErrors
  } = useFormContext();
  const {
    validationMode,
    setTouched,
    setFocused,
    invalid,
    shouldValidateOnChange,
    validation
  } = useFieldRootContext();
  const {
    labelId
  } = useLabelableContext();
  const hasTouchedInputRef = reactExports.useRef(false);
  const blockRevalidationRef = reactExports.useRef(false);
  useField({
    id,
    commit: validation.commit,
    value,
    controlRef: inputRef,
    name,
    getValue: () => value ?? null
  });
  useValueChanged(value, (previousValue) => {
    const validateOnChange = shouldValidateOnChange();
    clearErrors(name);
    if (validateOnChange) {
      validation.commit(value);
    }
    if (previousValue === value || validateOnChange) {
      return;
    }
    if (blockRevalidationRef.current) {
      blockRevalidationRef.current = false;
      return;
    }
    validation.commit(value, true);
  });
  const inputProps = {
    id,
    required,
    disabled,
    readOnly,
    inputMode,
    value: inputValue,
    type: "text",
    autoComplete: "off",
    autoCorrect: "off",
    spellCheck: "false",
    "aria-roledescription": "Number field",
    "aria-invalid": invalid || void 0,
    "aria-labelledby": labelId,
    // If the server's locale does not match the client's locale, the formatting may not match,
    // causing a hydration mismatch.
    suppressHydrationWarning: true,
    onFocus(event) {
      if (event.defaultPrevented || readOnly || disabled) {
        return;
      }
      setFocused(true);
      if (hasTouchedInputRef.current) {
        return;
      }
      hasTouchedInputRef.current = true;
      const target = event.currentTarget;
      const length = target.value.length;
      target.setSelectionRange(length, length);
    },
    onBlur(event) {
      if (event.defaultPrevented || readOnly || disabled) {
        return;
      }
      setTouched(true);
      setFocused(false);
      const hadManualInput = !allowInputSyncRef.current;
      const hadPendingProgrammaticChange = hasPendingCommitRef.current;
      allowInputSyncRef.current = true;
      if (inputValue.trim() === "") {
        setValue(null, createChangeEventDetails(inputClear, event.nativeEvent));
        if (validationMode === "onBlur") {
          validation.commit(null);
        }
        onValueCommitted(null, createGenericEventDetails(inputClear, event.nativeEvent));
        return;
      }
      const formatOptions = formatOptionsRef.current;
      const parsedValue = parseNumber(inputValue, locale, formatOptions);
      if (parsedValue === null) {
        return;
      }
      const hasExplicitPrecision = formatOptions?.maximumFractionDigits != null || formatOptions?.minimumFractionDigits != null;
      const maxFrac = formatOptions?.maximumFractionDigits;
      const committed = hasExplicitPrecision && typeof maxFrac === "number" ? Number(parsedValue.toFixed(maxFrac)) : parsedValue;
      const nextEventDetails = createGenericEventDetails(inputBlur, event.nativeEvent);
      const shouldUpdateValue = value !== committed;
      const shouldCommit = hadManualInput || shouldUpdateValue || hadPendingProgrammaticChange;
      if (validationMode === "onBlur") {
        validation.commit(committed);
      }
      if (shouldUpdateValue) {
        blockRevalidationRef.current = true;
        setValue(committed, createChangeEventDetails(inputBlur, event.nativeEvent));
      }
      if (shouldCommit) {
        onValueCommitted(committed, nextEventDetails);
      }
      const canonicalText = formatNumber(committed, locale, formatOptions);
      const maxPrecisionText = formatNumberMaxPrecision(parsedValue, locale, formatOptions);
      const shouldPreserveFullPrecision = !hasExplicitPrecision && parsedValue === value && inputValue === maxPrecisionText;
      if (!shouldPreserveFullPrecision && inputValue !== canonicalText) {
        setInputValue(canonicalText);
      }
    },
    onChange(event) {
      if (event.nativeEvent.defaultPrevented) {
        return;
      }
      allowInputSyncRef.current = false;
      const targetValue = event.target.value;
      if (targetValue.trim() === "") {
        setInputValue(targetValue);
        setValue(null, createChangeEventDetails(inputClear, event.nativeEvent));
        return;
      }
      const allowedNonNumericKeys = getAllowedNonNumericKeys();
      const isValidCharacterString = Array.from(targetValue).every((ch) => {
        const isAsciiDigit = ch >= "0" && ch <= "9";
        const isArabicNumeral = ARABIC_DETECT_RE.test(ch);
        const isHanNumeral = HAN_DETECT_RE.test(ch);
        const isPersianNumeral = PERSIAN_DETECT_RE.test(ch);
        const isFullwidthNumeral = FULLWIDTH_DETECT_RE.test(ch);
        const isMinus = ANY_MINUS_DETECT_RE.test(ch);
        return isAsciiDigit || isArabicNumeral || isHanNumeral || isPersianNumeral || isFullwidthNumeral || isMinus || allowedNonNumericKeys.has(ch);
      });
      if (!isValidCharacterString) {
        return;
      }
      if (event.isTrusted) {
        setInputValue(targetValue);
        const parsedValue2 = parseNumber(targetValue, locale, formatOptionsRef.current);
        if (parsedValue2 !== null) {
          setValue(parsedValue2, createChangeEventDetails(inputChange, event.nativeEvent));
        }
        return;
      }
      const parsedValue = parseNumber(targetValue, locale, formatOptionsRef.current);
      if (parsedValue !== null) {
        setInputValue(targetValue);
        setValue(parsedValue, createChangeEventDetails(inputChange, event.nativeEvent));
      }
    },
    onKeyDown(event) {
      if (event.defaultPrevented || readOnly || disabled) {
        return;
      }
      const nativeEvent = event.nativeEvent;
      allowInputSyncRef.current = true;
      const allowedNonNumericKeys = getAllowedNonNumericKeys();
      let isAllowedNonNumericKey = allowedNonNumericKeys.has(event.key);
      const {
        decimal,
        currency,
        percentSign
      } = getNumberLocaleDetails(locale, formatOptionsRef.current);
      const selectionStart = event.currentTarget.selectionStart;
      const selectionEnd = event.currentTarget.selectionEnd;
      const isAllSelected = selectionStart === 0 && selectionEnd === inputValue.length;
      const selectionContainsIndex = (index) => selectionStart != null && selectionEnd != null && index >= selectionStart && index < selectionEnd;
      if (ANY_MINUS_DETECT_RE.test(event.key) && Array.from(allowedNonNumericKeys).some((k) => ANY_MINUS_DETECT_RE.test(k || ""))) {
        const existingIndex = inputValue.search(ANY_MINUS_RE);
        const isReplacingExisting = existingIndex != null && existingIndex !== -1 && selectionContainsIndex(existingIndex);
        isAllowedNonNumericKey = !(ANY_MINUS_DETECT_RE.test(inputValue) || ANY_PLUS_DETECT_RE.test(inputValue)) || isAllSelected || isReplacingExisting;
      }
      if (ANY_PLUS_DETECT_RE.test(event.key) && Array.from(allowedNonNumericKeys).some((k) => ANY_PLUS_DETECT_RE.test(k || ""))) {
        const existingIndex = inputValue.search(ANY_PLUS_RE);
        const isReplacingExisting = existingIndex != null && existingIndex !== -1 && selectionContainsIndex(existingIndex);
        isAllowedNonNumericKey = !(ANY_MINUS_DETECT_RE.test(inputValue) || ANY_PLUS_DETECT_RE.test(inputValue)) || isAllSelected || isReplacingExisting;
      }
      [decimal, currency, percentSign].forEach((symbol) => {
        if (event.key === symbol) {
          const symbolIndex = inputValue.indexOf(symbol);
          const isSymbolHighlighted = selectionContainsIndex(symbolIndex);
          isAllowedNonNumericKey = !inputValue.includes(symbol) || isAllSelected || isSymbolHighlighted;
        }
      });
      const isAsciiDigit = event.key >= "0" && event.key <= "9";
      const isArabicNumeral = ARABIC_DETECT_RE.test(event.key);
      const isHanNumeral = HAN_DETECT_RE.test(event.key);
      const isFullwidthNumeral = FULLWIDTH_DETECT_RE.test(event.key);
      const isNavigateKey = NAVIGATE_KEYS.has(event.key);
      if (
        // Allow composition events (e.g., pinyin)
        // event.nativeEvent.isComposing does not work in Safari:
        // https://bugs.webkit.org/show_bug.cgi?id=165004
        event.which === 229 || event.altKey || event.ctrlKey || event.metaKey || isAllowedNonNumericKey || isAsciiDigit || isArabicNumeral || isFullwidthNumeral || isHanNumeral || isNavigateKey
      ) {
        return;
      }
      const parsedValue = parseNumber(inputValue, locale, formatOptionsRef.current);
      const amount = getStepAmount(event) ?? DEFAULT_STEP;
      stopEvent(event);
      const commitDetails = createGenericEventDetails(keyboard, nativeEvent);
      if (event.key === "ArrowUp") {
        incrementValue(amount, {
          direction: 1,
          currentValue: parsedValue,
          event: nativeEvent,
          reason: keyboard
        });
        onValueCommitted(lastChangedValueRef.current ?? valueRef.current, commitDetails);
      } else if (event.key === "ArrowDown") {
        incrementValue(amount, {
          direction: -1,
          currentValue: parsedValue,
          event: nativeEvent,
          reason: keyboard
        });
        onValueCommitted(lastChangedValueRef.current ?? valueRef.current, commitDetails);
      } else if (event.key === "Home" && min != null) {
        setValue(min, createChangeEventDetails(keyboard, nativeEvent));
        onValueCommitted(lastChangedValueRef.current ?? valueRef.current, commitDetails);
      } else if (event.key === "End" && max != null) {
        setValue(max, createChangeEventDetails(keyboard, nativeEvent));
        onValueCommitted(lastChangedValueRef.current ?? valueRef.current, commitDetails);
      }
    },
    onPaste(event) {
      if (event.defaultPrevented || readOnly || disabled) {
        return;
      }
      event.preventDefault();
      const clipboardData = event.clipboardData || window.Clipboard;
      const pastedData = clipboardData.getData("text/plain");
      const parsedValue = parseNumber(pastedData, locale, formatOptionsRef.current);
      if (parsedValue !== null) {
        allowInputSyncRef.current = false;
        setValue(parsedValue, createChangeEventDetails(inputPaste, event.nativeEvent));
        setInputValue(pastedData);
      }
    }
  };
  const element = useRenderElement("input", componentProps, {
    ref: [forwardedRef, inputRef],
    state,
    props: [inputProps, validation.getValidationProps(), elementProps],
    stateAttributesMapping
  });
  return element;
});
const NumberFieldScrubAreaContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useNumberFieldScrubAreaContext() {
  const context = reactExports.useContext(NumberFieldScrubAreaContext);
  if (context === void 0) {
    throw new Error(formatErrorMessage(44));
  }
  return context;
}
function getViewportRect(teleportDistance, scrubAreaEl) {
  const win = getWindow(scrubAreaEl);
  const rect = scrubAreaEl.getBoundingClientRect();
  if (rect && teleportDistance != null) {
    return {
      x: rect.left - teleportDistance / 2,
      y: rect.top - teleportDistance / 2,
      width: rect.right + teleportDistance / 2,
      height: rect.bottom + teleportDistance / 2
    };
  }
  const vV = win.visualViewport;
  if (vV) {
    return {
      x: vV.offsetLeft,
      y: vV.offsetTop,
      width: vV.offsetLeft + vV.width,
      height: vV.offsetTop + vV.height
    };
  }
  return {
    x: 0,
    y: 0,
    width: win.document.documentElement.clientWidth,
    height: win.document.documentElement.clientHeight
  };
}
function subscribeToVisualViewportResize(element, visualScaleRef) {
  const vV = getWindow(element).visualViewport;
  if (!vV) {
    return () => {
    };
  }
  function handleVisualResize() {
    if (vV) {
      visualScaleRef.current = vV.scale;
    }
  }
  handleVisualResize();
  vV.addEventListener("resize", handleVisualResize);
  return () => {
    vV.removeEventListener("resize", handleVisualResize);
  };
}
const NumberFieldScrubArea = /* @__PURE__ */ reactExports.forwardRef(function NumberFieldScrubArea2(componentProps, forwardedRef) {
  const {
    render,
    className,
    direction = "horizontal",
    pixelSensitivity = 2,
    teleportDistance,
    ...elementProps
  } = componentProps;
  const {
    state,
    setIsScrubbing: setRootScrubbing,
    disabled,
    readOnly,
    inputRef,
    incrementValue,
    getStepAmount,
    onValueCommitted,
    lastChangedValueRef,
    valueRef
  } = useNumberFieldRootContext();
  const scrubAreaRef = reactExports.useRef(null);
  const isScrubbingRef = reactExports.useRef(false);
  const scrubAreaCursorRef = reactExports.useRef(null);
  const virtualCursorCoords = reactExports.useRef({
    x: 0,
    y: 0
  });
  const visualScaleRef = reactExports.useRef(1);
  const exitPointerLockTimeout = useTimeout();
  const [isTouchInput, setIsTouchInput] = reactExports.useState(false);
  const [isPointerLockDenied, setIsPointerLockDenied] = reactExports.useState(false);
  const [isScrubbing, setIsScrubbing] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!isScrubbing || !scrubAreaCursorRef.current) {
      return void 0;
    }
    return subscribeToVisualViewportResize(scrubAreaCursorRef.current, visualScaleRef);
  }, [isScrubbing]);
  function updateCursorTransform(x, y) {
    if (scrubAreaCursorRef.current) {
      scrubAreaCursorRef.current.style.transform = `translate3d(${x}px,${y}px,0) scale(${1 / visualScaleRef.current})`;
    }
  }
  const onScrub = useStableCallback(({
    movementX,
    movementY
  }) => {
    const virtualCursor = scrubAreaCursorRef.current;
    const scrubAreaEl = scrubAreaRef.current;
    if (!virtualCursor || !scrubAreaEl) {
      return;
    }
    const rect = getViewportRect(teleportDistance, scrubAreaEl);
    const coords = virtualCursorCoords.current;
    const newCoords = {
      x: Math.round(coords.x + movementX),
      y: Math.round(coords.y + movementY)
    };
    const cursorWidth = virtualCursor.offsetWidth;
    const cursorHeight = virtualCursor.offsetHeight;
    if (newCoords.x + cursorWidth / 2 < rect.x) {
      newCoords.x = rect.width - cursorWidth / 2;
    } else if (newCoords.x + cursorWidth / 2 > rect.width) {
      newCoords.x = rect.x - cursorWidth / 2;
    }
    if (newCoords.y + cursorHeight / 2 < rect.y) {
      newCoords.y = rect.height - cursorHeight / 2;
    } else if (newCoords.y + cursorHeight / 2 > rect.height) {
      newCoords.y = rect.y - cursorHeight / 2;
    }
    virtualCursorCoords.current = newCoords;
    updateCursorTransform(newCoords.x, newCoords.y);
  });
  const onScrubbingChange = useStableCallback((scrubbingValue, {
    clientX,
    clientY
  }) => {
    reactDomExports.flushSync(() => {
      setIsScrubbing(scrubbingValue);
      setRootScrubbing(scrubbingValue);
    });
    const virtualCursor = scrubAreaCursorRef.current;
    if (!virtualCursor || !scrubbingValue) {
      return;
    }
    const initialCoords = {
      x: clientX - virtualCursor.offsetWidth / 2,
      y: clientY - virtualCursor.offsetHeight / 2
    };
    virtualCursorCoords.current = initialCoords;
    updateCursorTransform(initialCoords.x, initialCoords.y);
  });
  reactExports.useEffect(function registerGlobalScrubbingEventListeners() {
    if (!inputRef.current || disabled || readOnly || !isScrubbing) {
      return void 0;
    }
    let cumulativeDelta = 0;
    function handleScrubPointerUp(event) {
      function handler() {
        try {
          ownerDocument(scrubAreaRef.current).exitPointerLock();
        } catch {
        } finally {
          isScrubbingRef.current = false;
          onScrubbingChange(false, event);
          onValueCommitted(lastChangedValueRef.current ?? valueRef.current, createGenericEventDetails(scrub, event));
        }
      }
      if (isFirefox) {
        exitPointerLockTimeout.start(20, handler);
      } else {
        handler();
      }
    }
    function handleScrubPointerMove(event) {
      if (!isScrubbingRef.current) {
        return;
      }
      event.preventDefault();
      onScrub(event);
      const {
        movementX,
        movementY
      } = event;
      cumulativeDelta += direction === "vertical" ? movementY : movementX;
      if (Math.abs(cumulativeDelta) >= pixelSensitivity) {
        cumulativeDelta = 0;
        const dValue = direction === "vertical" ? -movementY : movementX;
        const stepAmount = getStepAmount(event) ?? DEFAULT_STEP;
        const rawAmount = dValue * stepAmount;
        if (rawAmount !== 0) {
          incrementValue(Math.abs(rawAmount), {
            direction: rawAmount >= 0 ? 1 : -1,
            event,
            reason: scrub
          });
        }
      }
    }
    const win = getWindow(inputRef.current);
    win.addEventListener("pointerup", handleScrubPointerUp, true);
    win.addEventListener("pointermove", handleScrubPointerMove, true);
    return () => {
      exitPointerLockTimeout.clear();
      win.removeEventListener("pointerup", handleScrubPointerUp, true);
      win.removeEventListener("pointermove", handleScrubPointerMove, true);
    };
  }, [disabled, readOnly, incrementValue, isScrubbing, getStepAmount, inputRef, onScrubbingChange, onScrub, direction, pixelSensitivity, lastChangedValueRef, onValueCommitted, valueRef, exitPointerLockTimeout]);
  reactExports.useEffect(function registerScrubberTouchPreventListener() {
    const element2 = scrubAreaRef.current;
    if (!element2 || disabled || readOnly) {
      return void 0;
    }
    function handleTouchStart(event) {
      if (event.touches.length === 1) {
        event.preventDefault();
      }
    }
    element2.addEventListener("touchstart", handleTouchStart);
    return () => {
      element2.removeEventListener("touchstart", handleTouchStart);
    };
  }, [disabled, readOnly]);
  const defaultProps = {
    role: "presentation",
    style: {
      touchAction: "none",
      WebkitUserSelect: "none",
      userSelect: "none"
    },
    async onPointerDown(event) {
      const isMainButton = !event.button || event.button === 0;
      if (event.defaultPrevented || readOnly || !isMainButton || disabled) {
        return;
      }
      const isTouch = event.pointerType === "touch";
      setIsTouchInput(isTouch);
      if (event.pointerType === "mouse") {
        event.preventDefault();
        inputRef.current?.focus();
      }
      isScrubbingRef.current = true;
      onScrubbingChange(true, event.nativeEvent);
      if (!isTouch && !isWebKit) {
        try {
          await ownerDocument(scrubAreaRef.current).body.requestPointerLock();
          setIsPointerLockDenied(false);
        } catch (error) {
          setIsPointerLockDenied(true);
        } finally {
          if (isScrubbingRef.current) {
            reactDomExports.flushSync(() => {
              onScrubbingChange(true, event.nativeEvent);
            });
          }
        }
      }
    }
  };
  const element = useRenderElement("span", componentProps, {
    ref: [forwardedRef, scrubAreaRef],
    state,
    props: [defaultProps, elementProps],
    stateAttributesMapping: stateAttributesMapping$1
  });
  const contextValue = reactExports.useMemo(() => ({
    isScrubbing,
    isTouchInput,
    isPointerLockDenied,
    scrubAreaCursorRef,
    scrubAreaRef,
    direction,
    pixelSensitivity,
    teleportDistance
  }), [isScrubbing, isTouchInput, isPointerLockDenied, direction, pixelSensitivity, teleportDistance]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NumberFieldScrubAreaContext.Provider, {
    value: contextValue,
    children: element
  });
});
const NumberFieldScrubAreaCursor = /* @__PURE__ */ reactExports.forwardRef(function NumberFieldScrubAreaCursor2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    state
  } = useNumberFieldRootContext();
  const {
    isScrubbing,
    isTouchInput,
    isPointerLockDenied,
    scrubAreaCursorRef
  } = useNumberFieldScrubAreaContext();
  const [domElement, setDomElement] = reactExports.useState(null);
  const shouldRender = isScrubbing && !isWebKit && !isTouchInput && !isPointerLockDenied;
  const element = useRenderElement("span", componentProps, {
    enabled: shouldRender,
    ref: [forwardedRef, scrubAreaCursorRef, setDomElement],
    state,
    props: [{
      role: "presentation",
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none"
      }
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping$1
  });
  return element && /* @__PURE__ */ reactDomExports.createPortal(element, ownerDocument(domElement).body);
});
function NumberSpinner({
  id: idProp,
  label,
  error,
  size = "medium",
  ...other
}) {
  let id = reactExports.useId();
  if (idProp) {
    id = idProp;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    NumberFieldRoot,
    {
      ...other,
      render: (props, state) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormControl,
        {
          size,
          ref: props.ref,
          disabled: state.disabled,
          required: state.required,
          error,
          variant: "outlined",
          sx: {
            "& .MuiButton-root": {
              borderColor: "divider",
              minWidth: 0,
              bgcolor: "action.hover",
              "&:not(.Mui-disabled)": {
                color: "text.primary"
              }
            }
          },
          children: props.children
        }
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          NumberFieldScrubArea,
          {
            render: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", sx: { userSelect: "none", width: "max-content" } }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormLabel,
                {
                  htmlFor: id,
                  sx: {
                    display: "inline-block",
                    cursor: "ew-resize",
                    fontSize: "0.875rem",
                    color: "text.primary",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    mb: 0.5
                  },
                  children: label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(NumberFieldScrubAreaCursor, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(OpenInFullIcon, { fontSize: "small", sx: { transform: "translateY(12.5%) rotate(45deg)" } }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberFieldDecrement,
            {
              render: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outlined",
                  "aria-label": "Decrease",
                  size,
                  sx: {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRight: "0px",
                    "&.Mui-disabled": {
                      borderRight: "0px"
                    }
                  }
                }
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoveIcon, { fontSize: size })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberFieldInput,
            {
              id,
              render: (props, state) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                OutlinedInput,
                {
                  inputRef: props.ref,
                  value: state.inputValue,
                  onBlur: props.onBlur,
                  onChange: props.onChange,
                  onKeyUp: props.onKeyUp,
                  onKeyDown: props.onKeyDown,
                  onFocus: props.onFocus,
                  slotProps: {
                    input: {
                      ...props,
                      size: Math.max((other.min?.toString() || "").length, state.inputValue.length || 1) + 1,
                      sx: {
                        textAlign: "center"
                      }
                    }
                  },
                  sx: { pr: 0, borderRadius: 0, flex: 1 }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            NumberFieldIncrement,
            {
              render: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outlined",
                  "aria-label": "Increase",
                  size,
                  sx: {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderLeft: "0px",
                    "&.Mui-disabled": {
                      borderLeft: "0px"
                    }
                  }
                }
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(AddIcon, { fontSize: size })
            }
          )
        ] })
      ]
    }
  );
}
export {
  AddIcon as A,
  NumberSpinner as N
};
//# sourceMappingURL=NumberSpinner-DPW64Sxl.js.map
