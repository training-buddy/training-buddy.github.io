import { u as useAuth, r as reactExports, j as jsxRuntimeExports, B as Box, P as Paper, T as Typography, C as CircularProgress, L as List, a as Link, F as FitnessCenter, b as Chip, c as routes, d as LoginButton } from "./index-C1uuhD5W.js";
import { g as getTrainingPlans } from "./trainingPlans-DiVfVaoS.js";
import { g as getTodaysPlans, a as getWeekDayLabel } from "./schedule-DhBQ9WQn.js";
import { C as Container } from "./Container-B48StizD.js";
import { L as ListItem } from "./ListItem-D0QlENeo.js";
import { L as ListItemButton, a as ListItemText } from "./ListItemText-DdsbBg4Q.js";
import { L as ListItemIcon } from "./ListItemIcon-O6ik4W5-.js";
import "./useThemeProps-DAv5hN2S.js";
import "./isMuiElement-BSAHsO-I.js";
import "./listItemButtonClasses-BEms6JaZ.js";
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
//# sourceMappingURL=index-CF9HA6hP.js.map
