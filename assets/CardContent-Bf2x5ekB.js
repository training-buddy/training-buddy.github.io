import { n as generateUtilityClass, o as generateUtilityClasses, r as reactExports, p as useDefaultProps, j as jsxRuntimeExports, q as clsx, t as composeClasses, v as styled, P as Paper } from "./index-BnUnq6VV.js";
function getCardUtilityClass(slot) {
  return generateUtilityClass("MuiCard", slot);
}
generateUtilityClasses("MuiCard", ["root"]);
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardUtilityClass, classes);
};
const CardRoot = styled(Paper, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
});
const Card = /* @__PURE__ */ reactExports.forwardRef(function Card2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCard"
  });
  const {
    className,
    raised = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    raised
  };
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardRoot, {
    className: clsx(classes.root, className),
    elevation: raised ? 8 : void 0,
    ref,
    ownerState,
    ...other
  });
});
function getCardContentUtilityClass(slot) {
  return generateUtilityClass("MuiCardContent", slot);
}
generateUtilityClasses("MuiCardContent", ["root"]);
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardContentUtilityClass, classes);
};
const CardContentRoot = styled("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
});
const CardContent = /* @__PURE__ */ reactExports.forwardRef(function CardContent2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCardContent"
  });
  const {
    className,
    component = "div",
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardContentRoot, {
    as: component,
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
export {
  Card as C,
  CardContent as a
};
//# sourceMappingURL=CardContent-Bf2x5ekB.js.map
