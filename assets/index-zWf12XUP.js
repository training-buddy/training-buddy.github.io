import { p as createSvgIcon, j as jsxRuntimeExports, r as reactExports, l as useLocation, B as Box, n as Button, a as Link, c as routes, O as Outlet, C as CircularProgress, A as Alert, a8 as CalendarToday, T as Typography, I as IconButton, b as Chip, F as FitnessCenter } from "./index-C1uuhD5W.js";
import { u as useQuery } from "./planFormUtils-DouwyzMp.js";
import { a as getTrainingExecutionsByPlanId, u as updateTrainingExecution, b as createTrainingExecution } from "./trainingExecutions-BNuLzgy3.js";
import { r as renderUnit } from "./unit-utils-CtV2B9Q3.js";
import { a as getLearningHistoriesByDirectory } from "./learningHistories-CvuHvNjP.js";
import { g as getTrainingPlans } from "./trainingPlans-DiVfVaoS.js";
import { c as calculateTotalSessions, b as calculateEndDate, a as getWeekDayLabel, f as formatDate } from "./schedule-DhBQ9WQn.js";
import { C as Container } from "./Container-B48StizD.js";
import { A as AddIcon } from "./NumberSpinner-DPW64Sxl.js";
import { S as Stack } from "./Stack-CYM_t3D0.js";
import { C as Card, a as CardContent } from "./CardContent-ChCAlgOZ.js";
import { L as LinearProgress } from "./LinearProgress-BS5i-iMP.js";
import { C as CardActions } from "./CardActions-scsLrlgZ.js";
import { F as FolderOpenIcon } from "./hooks-BogG25WI.js";
import { PlansNewPage } from "./index-DX5N_sfH.js";
import { PlansDetailPage } from "./index-CRniXqne.js";
import { PlansEditPage } from "./index-DhPHNa3A.js";
import "./DialogContent-BctuCRzl.js";
import "./DialogTitle-DqCPAYLx.js";
import "./TextField-BbDGCLkb.js";
import "./useOnMount-BxoUUqFc.js";
import "./isMuiElement-BSAHsO-I.js";
import "./ListItemText-DdsbBg4Q.js";
import "./listItemButtonClasses-BEms6JaZ.js";
import "./ListItemIcon-O6ik4W5-.js";
import "./useThemeProps-DAv5hN2S.js";
import "./ArrowBack-BGqMftvB.js";
const AutoFixHighIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z"
}));
const InfoIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
}));
const InfoOutlineIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}));
function useTrainingExecutions(planId) {
  return useQuery({
    queryKey: ["useTrainingExecutions", planId],
    queryFn: () => {
      return getTrainingExecutionsByPlanId(planId);
    }
  });
}
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
function usePlanProgress(planId) {
  const { data: dataOrig, ...rest } = useTrainingExecutions(planId);
  const data = reactExports.useMemo(() => {
    return dataOrig ? calculatePlanProgress(dataOrig) : void 0;
  }, [dataOrig]);
  return {
    ...rest,
    data
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
function parseFmUrl(unitName) {
  if (!unitName.startsWith("fm://")) return null;
  const parts = unitName.replace("fm://", "").split("/");
  if (parts.length < 2) return null;
  return {
    owner: parts[0],
    repo: parts[1],
    path: parts.length > 2 ? parts.slice(2).join("/") : void 0
  };
}
function PlanCard({ plan }) {
  const [generating, setGenerating] = reactExports.useState(false);
  const [genResult, setGenResult] = reactExports.useState(null);
  const totalSessions = calculateTotalSessions(plan);
  const endDate = calculateEndDate(plan);
  const fmInfo = parseFmUrl(plan.unit_name);
  const { isLoading, data: progress, refetch } = usePlanProgress(plan.id);
  async function handleAutoGenerate() {
    if (!fmInfo) return;
    setGenerating(true);
    setGenResult(null);
    try {
      const histories = await getLearningHistoriesByDirectory(
        fmInfo.owner,
        fmInfo.repo,
        fmInfo.path
      );
      if (histories.length === 0) {
        setGenResult("학습 기록이 없습니다.");
        return;
      }
      const byDate = /* @__PURE__ */ new Map();
      for (const h of histories) {
        const date = h.created_at.slice(0, 10);
        const existing = byDate.get(date) ?? { count: 0, totalDuration: 0 };
        existing.count += 1;
        existing.totalDuration += h.duration;
        byDate.set(date, existing);
      }
      const existingExecs = await getTrainingExecutionsByPlanId(plan.id);
      const execByDate = /* @__PURE__ */ new Map();
      for (const e of existingExecs) {
        const date = e.started_at.slice(0, 10);
        execByDate.set(date, e);
      }
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      const twoDaysAgo = new Date(today);
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
      let created = 0;
      let updated = 0;
      let skipped = 0;
      for (const [date, { count: unitCount, totalDuration }] of byDate) {
        const dateObj = new Date(date);
        const durationSeconds = dateObj < twoDaysAgo ? 0 : Math.round(totalDuration / 1e3);
        const existing = execByDate.get(date);
        if (existing) {
          if (existing.duration_seconds <= 1) {
            await updateTrainingExecution(existing.id, {
              unit_count: unitCount,
              duration_seconds: durationSeconds
            });
            updated++;
          } else {
            skipped++;
          }
          continue;
        } else {
          const startOfDay = `${date}T00:00:00.000Z`;
          const endOfDay = `${date}T23:59:59.000Z`;
          await createTrainingExecution({
            user_id: plan.user_id,
            plan_id: plan.id,
            started_at: startOfDay,
            completed_at: endOfDay,
            duration_seconds: durationSeconds,
            unit_count: unitCount
          });
          created++;
        }
      }
      setGenResult(`생성: ${created}, 업데이트: ${updated}, 스킵: ${skipped}`);
      await refetch();
    } catch (err) {
      console.error(err);
      setGenResult("자동 생성 중 오류가 발생했습니다.");
    } finally {
      setGenerating(false);
    }
  }
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
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgress, { sx: { my: 1 } }) : progress && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", mb: 0.5 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "진행률" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", fontWeight: "medium", children: [
            progress.completedUnits,
            " / ",
            plan.total_amount,
            " ",
            renderUnit(plan.unit_name),
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
    genResult && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { px: 2, pb: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: genResult }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardActions, { sx: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { component: Link, to: routes.plans.detail.$path({ id: plan.id }, {}), size: "small", children: "상세보기" }),
        fmInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            startIcon: generating ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFixHighIcon, {}),
            size: "small",
            onClick: handleAutoGenerate,
            disabled: generating,
            children: "자동생성"
          }
        )
      ] }),
      fmInfo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpenIcon, {}),
          component: Link,
          to: routes.flashMan.contents.$({
            owner: fmInfo.owner,
            repo: fmInfo.repo,
            path: fmInfo.path
          }),
          size: "small",
          variant: "contained",
          children: "폴더이동"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
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
//# sourceMappingURL=index-zWf12XUP.js.map
