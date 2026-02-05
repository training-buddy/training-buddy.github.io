import { g as createSvgIcon, j as jsxRuntimeExports, b as useLocation, B as Box, c as Button, d as Link, r as routes, O as Outlet, a as reactExports, C as CircularProgress, A as Alert, a5 as CalendarToday, T as Typography, I as IconButton, e as Chip, F as FitnessCenter } from "./index-BH1KDpcB.js";
import { a as getTrainingExecutionsByPlanId } from "./trainingExecutions-DJwWUHhk.js";
import { g as getTrainingPlans } from "./trainingPlans-Bizb9YVb.js";
import { c as calculateTotalSessions, b as calculateEndDate, a as getWeekDayLabel, f as formatDate } from "./schedule-DhBQ9WQn.js";
import { C as Container } from "./Container-Krqiv_Dn.js";
import { A as AddIcon } from "./NumberSpinner-xooKfIxY.js";
import { S as Stack } from "./Stack-C597HjvC.js";
import { C as Card, a as CardContent } from "./CardContent-iQMAlTh-.js";
import { L as LinearProgress } from "./LinearProgress-B6ClhH-i.js";
import { C as CardActions } from "./CardActions-D_72E5Il.js";
import { PlansNewPage } from "./index-8NS6tfe4.js";
import { PlansDetailPage } from "./index-D-mSz-Qa.js";
import { PlansEditPage } from "./index-BdlyKj4k.js";
import "./useThemeProps-CHZwBfrq.js";
import "./useOnMount-D-IaBeB4.js";
import "./isMuiElement-8dTM_GMp.js";
import "./planFormUtils-DurbCVV3.js";
import "./TextField-bBTmXN4s.js";
import "./ToggleButtonGroup-zfJ_XPzw.js";
import "./ArrowBack-p1RLECyd.js";
import "./DialogContent-CTLVrEIe.js";
const InfoIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
}));
const InfoOutlineIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}));
function calculatePlanProgress(executions) {
  if (executions.length === 0) {
    return {
      completedUnits: 0,
      totalExecutions: 0,
      avgDurationSeconds: 0,
      avgUnitCount: 0
    };
  }
  const completedUnits = executions.reduce((sum, e) => sum + e.unit_count, 0);
  const totalDuration = executions.reduce((sum, e) => sum + e.duration_seconds, 0);
  return {
    completedUnits,
    totalExecutions: executions.length,
    avgDurationSeconds: Math.round(totalDuration / executions.length),
    avgUnitCount: Math.round(completedUnits / executions.length * 10) / 10
  };
}
function formatDuration(seconds) {
  if (seconds === 0) return "-";
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (minutes === 0) return `${secs}초`;
  return `${minutes}분 ${secs}초`;
}
function PlansPage() {
  const location = useLocation();
  const isListView = location.pathname === "/plans" || location.pathname === "/plans/";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxWidth: "md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { my: 4 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, {}),
          isListView && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              component: Link,
              to: routes.plans.new.$(),
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(AddIcon, {}),
              children: "새 계획"
            }
          )
        ]
      }
    ),
    isListView ? /* @__PURE__ */ jsxRuntimeExports.jsx(PlansList, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] }) });
}
function PlansList() {
  const [plans, setPlans] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    loadPlans();
  }, []);
  async function loadPlans() {
    try {
      setLoading(true);
      const data = await getTrainingPlans();
      setPlans(data);
    } catch (err) {
      setError("훈련 계획을 불러오는데 실패했습니다.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", children: error });
  }
  if (plans.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", children: "아직 훈련 계획이 없습니다. 새 계획을 만들어보세요!" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2, children: plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(PlanCard, { plan }, plan.id)) });
}
function PlanCard({ plan }) {
  const [progress, setProgress] = reactExports.useState(null);
  const [loadingProgress, setLoadingProgress] = reactExports.useState(true);
  const totalSessions = calculateTotalSessions(plan);
  const endDate = calculateEndDate(plan);
  reactExports.useEffect(() => {
    async function loadProgress() {
      try {
        const executions = await getTrainingExecutionsByPlanId(plan.id);
        setProgress(calculatePlanProgress(executions));
      } catch {
      } finally {
        setLoadingProgress(false);
      }
    }
    loadProgress();
  }, [plan.id]);
  const progressPercent = progress ? Math.min(100, Math.round(progress.completedUnits / plan.total_amount * 100)) : 0;
  const [showInfo, setShowInfo] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: "0.4" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarToday, { sx: { mr: 1, verticalAlign: "middle" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: plan.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => setShowInfo(!showInfo), children: showInfo ? /* @__PURE__ */ jsxRuntimeExports.jsx(InfoIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(InfoOutlineIcon, {}) })
      ] }),
      showInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", flexWrap: "wrap", spacing: 1, sx: { mb: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: `${plan.unit_amount} ${plan.unit_name}/회`,
            size: "small",
            variant: "outlined"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: `총 ${plan.total_amount} ${plan.unit_name}`,
            size: "small",
            variant: "outlined"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: plan.schedule_type === "daily" ? "매일" : `매주 ${plan.schedule_days?.map(getWeekDayLabel).join(", ")}`,
            size: "small",
            variant: "outlined"
          }
        )
      ] }) }),
      loadingProgress ? /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, { sx: { my: 1 } }) : progress && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", mb: 0.5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "진행률" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: "medium", children: [
            progress.completedUnits,
            " / ",
            plan.total_amount,
            " ",
            plan.unit_name,
            " (",
            progressPercent,
            "%)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LinearProgress,
          {
            variant: "determinate",
            value: progressPercent,
            sx: { height: 8, borderRadius: 1, mb: 1 }
          }
        ),
        showInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, sx: { mt: 1 }, justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
            "평균 시간: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatDuration(progress.avgDurationSeconds) }),
            "• 평균 수행량:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
              progress.avgUnitCount,
              " ",
              plan.unit_name
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
            "수행: ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
              progress.totalExecutions,
              "회"
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
          "총 ",
          totalSessions,
          "회"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
          "종료 예정: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatDate(endDate) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardActions, { sx: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { component: Link, to: routes.plans.detail.$path({ id: plan.id }, {}), size: "small", children: "상세보기" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(FitnessCenter, {}),
          component: Link,
          to: routes.executions.new.$({ planId: plan.id }),
          size: "small",
          variant: "contained",
          children: "훈련시작"
        }
      )
    ] })
  ] });
}
export {
  PlansDetailPage,
  PlansEditPage,
  PlansNewPage,
  PlansPage
};
//# sourceMappingURL=index-i_70KOX8.js.map
