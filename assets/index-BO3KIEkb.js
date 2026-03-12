import { u as useAuth, r as reactExports, j as jsxRuntimeExports, B as Box, P as Paper, T as Typography, C as CircularProgress, L as List, F as FitnessCenterIcon, a as Chip, b as LoginButton } from "./index-BdFiX0VU.js";
import { g as getTodaysExecutionsByPlanIds } from "./trainingExecutions-YCG4J-eD.js";
import { g as getTrainingPlans } from "./trainingPlans-2dqyKX-L.js";
import { P as PlanExecutionButton } from "./PlanExecutionButton-CFXru0Bg.js";
import { g as getTodaysPlans, a as getWeekDayLabel } from "./schedule-CIHJDRP1.js";
import { r as renderUnit } from "./unit-utils-CtV2B9Q3.js";
import { C as Container } from "./Container-91sLDNfI.js";
import { L as ListItem } from "./ListItem-D_XguklS.js";
import { L as ListItemIcon } from "./ListItemIcon-D-dTNtFj.js";
import { C as CheckCircleIcon } from "./CheckCircle-DDtMi21h.js";
import { L as ListItemText } from "./ListItemText-D6vBvvMK.js";
import { L as LinearProgress } from "./LinearProgress-2gduGYRo.js";
import "./FolderOpen-DkT0hsSz.js";
import "./useThemeProps-B_Reo5-8.js";
import "./isMuiElement-LDWlSHgp.js";
import "./listItemButtonClasses-DY9lmb0m.js";
function HomePage() {
  const { user } = useAuth();
  const [todaysPlans, setTodaysPlans] = reactExports.useState([]);
  const [todayExecutionMap, setTodayExecutionMap] = reactExports.useState(/* @__PURE__ */ new Map());
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
      const filtered = getTodaysPlans(plans);
      setTodaysPlans(filtered);
      if (filtered.length > 0) {
        const planIds = filtered.map((p) => p.id);
        const executions = await getTodaysExecutionsByPlanIds(planIds);
        const map = /* @__PURE__ */ new Map();
        for (const exec of executions) {
          map.set(exec.plan_id, (map.get(exec.plan_id) ?? 0) + exec.unit_count);
        }
        setTodayExecutionMap(map);
      }
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
  const sortedPlans = [...todaysPlans].sort((a, b) => {
    const aAchieved = (todayExecutionMap.get(a.id) ?? 0) >= a.unit_amount ? 1 : 0;
    const bAchieved = (todayExecutionMap.get(b.id) ?? 0) >= b.unit_amount ? 1 : 0;
    return aAchieved - bAchieved;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxWidth: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { my: 4, textAlign: "center" }, children: user ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { elevation: 3, sx: { p: 3, textAlign: "left" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h6", gutterBottom: true, children: [
      "📅 오늘의 훈련 (",
      todayStr,
      ")"
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 }) }) : sortedPlans.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", sx: { py: 2, textAlign: "center" }, children: "오늘 예정된 훈련이 없습니다" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(List, { disablePadding: true, children: sortedPlans.map((plan) => {
      const todayUnits = todayExecutionMap.get(plan.id) ?? 0;
      const isAchieved = todayUnits >= plan.unit_amount;
      const progress = Math.min(100, todayUnits / plan.unit_amount * 100);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ListItem,
        {
          sx: { flexDirection: "column", alignItems: "stretch", px: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", width: "100%" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemIcon, { sx: { minWidth: 40 }, children: isAchieved ? /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircleIcon, { color: "success" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FitnessCenterIcon, { color: "primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ListItemText,
                {
                  primary: plan.name,
                  secondary: `${plan.unit_amount} ${renderUnit(plan.unit_name)}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Chip,
                {
                  label: plan.schedule_type === "daily" ? "매일" : plan.schedule_days?.map(getWeekDayLabel).join(", "),
                  size: "small",
                  variant: "outlined"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { marginLeft: ".4rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlanExecutionButton, { plan, variant: "contained" }) })
            ] }),
            todayUnits > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { pl: 5, pr: 1, pb: 0.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                LinearProgress,
                {
                  variant: "determinate",
                  value: progress,
                  color: isAchieved ? "success" : "primary",
                  sx: { flex: 1, borderRadius: 1 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Typography,
                {
                  variant: "caption",
                  color: isAchieved ? "success.main" : "text.secondary",
                  sx: { whiteSpace: "nowrap" },
                  children: isAchieved ? `${todayUnits} 달성 ✓` : `${todayUnits} / ${plan.unit_amount}`
                }
              )
            ] }) })
          ]
        },
        plan.id
      );
    }) })
  ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { elevation: 3, sx: { p: 3, mt: 3 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { mb: 3 }, children: "시작하려면 로그인하세요" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoginButton, {})
  ] }) }) });
}
export {
  HomePage
};
//# sourceMappingURL=index-BO3KIEkb.js.map
