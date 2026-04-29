import { u as useAuth, r as reactExports, j as jsxRuntimeExports, B as Box, P as Paper, T as Typography, L as LoginButton, C as CircularProgress, D as Divider, F as FitnessCenterIcon, a as Chip } from "./index-BnUnq6VV.js";
import { g as getTodaysExecutionsByPlanIds, a as getCompletedUnitsByPlanIds } from "./trainingExecutions-G_KzpqQW.js";
import { g as getTrainingPlans } from "./trainingPlans-DsaZpT-m.js";
import { P as PlanExecutionButton } from "./PlanExecutionButton-CHLfdARg.js";
import { t as toLocalDateKey, p as parseDateKey } from "./date-5ZZ1N3rr.js";
import { g as getTodaysPlans, c as calculateEndDateFromCompletedUnits, a as getWeekDayLabel, f as formatDate } from "./schedule-BIUys4DM.js";
import { r as renderUnit } from "./unit-utils-CtV2B9Q3.js";
import { C as Container } from "./Container-D37DY3ip.js";
import { C as CheckCircleIcon } from "./CheckCircle-DaF45UKq.js";
import { L as LinearProgress } from "./LinearProgress-CBvVs-kk.js";
import "./FolderOpen-Bazxfb0M.js";
import "./useThemeProps-Dmh0j4Hs.js";
function storageKey(planId) {
  return `tb_endDate_${planId}`;
}
function loadStoredEndDate(planId) {
  try {
    const raw = localStorage.getItem(storageKey(planId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function saveStoredEndDate(planId, value) {
  localStorage.setItem(storageKey(planId), JSON.stringify(value));
}
function deltaFromBaseline(baseline, newEndDate) {
  const prev = parseDateKey(baseline);
  return Math.round((newEndDate.getTime() - prev.getTime()) / 864e5);
}
function HomePage() {
  const { user } = useAuth();
  const [todaysPlans, setTodaysPlans] = reactExports.useState([]);
  const [todayExecutionMap, setTodayExecutionMap] = reactExports.useState(/* @__PURE__ */ new Map());
  const [endDateMap, setEndDateMap] = reactExports.useState(/* @__PURE__ */ new Map());
  const [endDateDeltaMap, setEndDateDeltaMap] = reactExports.useState(/* @__PURE__ */ new Map());
  const [loading, setLoading] = reactExports.useState(false);
  const loadTodaysPlans = reactExports.useCallback(async () => {
    try {
      setLoading(true);
      const userId = user?.id;
      const plans = await getTrainingPlans(userId);
      const filtered = getTodaysPlans(plans);
      setTodaysPlans(filtered);
      if (filtered.length > 0) {
        const planIds = filtered.map((p) => p.id);
        const [executions, completedUnits] = await Promise.all([
          getTodaysExecutionsByPlanIds(planIds, userId),
          getCompletedUnitsByPlanIds(planIds, userId)
        ]);
        const todayMap = /* @__PURE__ */ new Map();
        for (const exec of executions) {
          todayMap.set(exec.plan_id, (todayMap.get(exec.plan_id) ?? 0) + exec.unit_count);
        }
        setTodayExecutionMap(todayMap);
        const newEndDateMap = /* @__PURE__ */ new Map();
        const deltaMap = /* @__PURE__ */ new Map();
        const today2 = toLocalDateKey(/* @__PURE__ */ new Date());
        for (const plan of filtered) {
          const units = completedUnits.get(plan.id) ?? 0;
          const endDate = calculateEndDateFromCompletedUnits(plan, units);
          newEndDateMap.set(plan.id, endDate);
          const stored = loadStoredEndDate(plan.id);
          const newEndKey = toLocalDateKey(endDate);
          let baseline;
          if (!stored) {
            saveStoredEndDate(plan.id, { savedAt: today2, endDate: newEndKey });
          } else if (stored.savedAt === today2) {
            baseline = stored.baseline;
          } else {
            baseline = stored.endDate;
            saveStoredEndDate(plan.id, { savedAt: today2, endDate: newEndKey, baseline });
          }
          if (baseline) {
            const delta = deltaFromBaseline(baseline, endDate);
            if (delta !== 0) deltaMap.set(plan.id, delta);
          }
        }
        setEndDateMap(newEndDateMap);
        setEndDateDeltaMap(deltaMap);
      } else {
        setTodayExecutionMap(/* @__PURE__ */ new Map());
        setEndDateMap(/* @__PURE__ */ new Map());
        setEndDateDeltaMap(/* @__PURE__ */ new Map());
      }
    } catch {
    } finally {
      setLoading(false);
    }
  }, [user?.id]);
  reactExports.useEffect(() => {
    if (user) {
      loadTodaysPlans();
    }
  }, [user, loadTodaysPlans]);
  const today = /* @__PURE__ */ new Date();
  const dateStr = today.toLocaleDateString("ko-KR", { month: "long", day: "numeric" });
  const weekdayStr = today.toLocaleDateString("ko-KR", { weekday: "long" });
  const sortedPlans = [...todaysPlans].sort((a, b) => {
    const aAchieved = (todayExecutionMap.get(a.id) ?? 0) >= a.unit_amount ? 1 : 0;
    const bAchieved = (todayExecutionMap.get(b.id) ?? 0) >= b.unit_amount ? 1 : 0;
    return aAchieved - bAchieved;
  });
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxWidth: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { my: 4, textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { elevation: 3, sx: { p: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", sx: { mb: 3 }, children: "시작하려면 로그인하세요" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoginButton, {})
    ] }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { bgcolor: "background.default", minHeight: "100%", pb: 2 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { px: 2, pt: 2, pb: 1.5 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", display: "block", children: [
        weekdayStr,
        ", ",
        dateStr
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", fontWeight: "bold", lineHeight: 1.2, children: "오늘의 훈련" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Paper, { elevation: 0, sx: { mx: { xs: 0, sm: 2 }, borderRadius: { xs: 0, sm: 2 } }, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 24 }) }) : sortedPlans.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { py: 5, textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "오늘 예정된 훈련이 없습니다" }) }) : sortedPlans.map((plan, index) => {
      const todayUnits = todayExecutionMap.get(plan.id) ?? 0;
      const isAchieved = todayUnits >= plan.unit_amount;
      const progress = Math.min(100, todayUnits / plan.unit_amount * 100);
      const scheduleLabel = plan.schedule_type === "daily" ? "매일" : plan.schedule_days?.map(getWeekDayLabel).join(", ");
      const endDate = endDateMap.get(plan.id);
      const delta = endDateDeltaMap.get(plan.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        index > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              px: 2,
              pt: 1.5,
              pb: todayUnits > 0 ? 1 : 1.5,
              bgcolor: isAchieved ? "action.hover" : "background.paper"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
                isAchieved ? /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircleIcon, { color: "success", fontSize: "small", sx: { flexShrink: 0 } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FitnessCenterIcon, { color: "primary", fontSize: "small", sx: { flexShrink: 0 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Typography,
                    {
                      variant: "body1",
                      fontWeight: 500,
                      color: isAchieved ? "text.secondary" : "text.primary",
                      noWrap: true,
                      children: plan.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Box,
                    {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.75,
                        mt: 0.25,
                        flexWrap: "wrap"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                          plan.unit_amount,
                          " ",
                          renderUnit(plan.unit_name)
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Chip,
                          {
                            label: scheduleLabel,
                            size: "small",
                            variant: "outlined",
                            sx: { height: 16, fontSize: "0.6rem", "& .MuiChip-label": { px: 0.75 } }
                          }
                        ),
                        endDate && /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: [
                          "~",
                          formatDate(endDate),
                          delta !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Box,
                            {
                              component: "span",
                              sx: {
                                color: delta < 0 ? "success.main" : "error.main",
                                ml: 0.5
                              },
                              children: [
                                "(",
                                delta > 0 ? "+" : "",
                                delta,
                                "일)"
                              ]
                            }
                          )
                        ] })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PlanExecutionButton,
                  {
                    plan,
                    size: "small",
                    variant: isAchieved ? "outlined" : "contained"
                  }
                )
              ] }),
              todayUnits > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, mt: 1 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LinearProgress,
                  {
                    variant: "determinate",
                    value: progress,
                    color: isAchieved ? "success" : "primary",
                    sx: { flex: 1, borderRadius: 1, height: 5 }
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
              ] })
            ]
          }
        )
      ] }, plan.id);
    }) })
  ] });
}
export {
  HomePage
};
//# sourceMappingURL=index-B_PVPvab.js.map
