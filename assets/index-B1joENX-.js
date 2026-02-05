import { a as reactExports, k as useDefaultProps, l as ListContext, j as jsxRuntimeExports, m as clsx, n as composeClasses, o as getListItemIconUtilityClass, p as styled, q as memoTheme, u as useAuth, B as Box, P as Paper, T as Typography, C as CircularProgress, t as List, d as Link, F as FitnessCenter, e as Chip, r as routes, L as LoginButton } from "./index-BH1KDpcB.js";
import { g as getTrainingPlans } from "./trainingPlans-Bizb9YVb.js";
import { g as getTodaysPlans, a as getWeekDayLabel } from "./schedule-DhBQ9WQn.js";
import { C as Container } from "./Container-Krqiv_Dn.js";
import { L as ListItem } from "./ListItem-BDxTXwXF.js";
import { L as ListItemButton, a as ListItemText } from "./ListItemText-FfohRhkN.js";
import "./useThemeProps-CHZwBfrq.js";
import "./isMuiElement-8dTM_GMp.js";
import "./listItemButtonClasses-BZpbhb_8.js";
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
function HomePage() {
  const { user } = useAuth();
  const [todaysPlans, setTodaysPlans] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (user) {
      loadTodaysPlans();
    }
  }, [user]);
  async function loadTodaysPlans() {
    try {
      setLoading(true);
      const plans = await getTrainingPlans();
      setTodaysPlans(getTodaysPlans(plans));
    } catch {
    } finally {
      setLoading(false);
    }
  }
  const todayStr = (/* @__PURE__ */ new Date()).toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "short"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxWidth: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { my: 4, textAlign: "center" }, children: user ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { elevation: 3, sx: { p: 3, textAlign: "left" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h6", gutterBottom: true, children: [
      "📅 오늘의 훈련 (",
      todayStr,
      ")"
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 }) }) : todaysPlans.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", sx: { py: 2, textAlign: "center" }, children: "오늘 예정된 훈련이 없습니다" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(List, { disablePadding: true, children: todaysPlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(ListItem, { disablePadding: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      ListItemButton,
      {
        component: Link,
        to: routes.executions.new.$({ planId: plan.id }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FitnessCenter, { color: "primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ListItemText,
            {
              primary: plan.name,
              secondary: `${plan.unit_amount} ${plan.unit_name}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: plan.schedule_type === "daily" ? "매일" : plan.schedule_days?.map(getWeekDayLabel).join(", "),
              size: "small",
              variant: "outlined"
            }
          )
        ]
      }
    ) }, plan.id)) })
  ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { elevation: 3, sx: { p: 3, mt: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { mb: 3 }, children: "시작하려면 로그인하세요" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoginButton, {})
  ] }) }) });
}
export {
  HomePage
};
//# sourceMappingURL=index-B1joENX-.js.map
