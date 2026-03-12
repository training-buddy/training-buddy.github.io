import { G as generateUtilityClass, H as generateUtilityClasses, r as reactExports, h as useDefaultProps, j as jsxRuntimeExports, k as clsx, l as composeClasses, n as styled, T as Typography, v as rootShouldForwardProp, g as createSvgIcon, s as supabase, a3 as useNavigate, A as Alert, B as Box, bc as CalendarToday, a as Chip, I as IconButton, e as Button, f as Link, c as routes, C as CircularProgress, bd as useParams } from "./index-BdFiX0VU.js";
import { u as updateTrainingPlan, d as deleteTrainingPlan, a as getTrainingPlan } from "./trainingPlans-2dqyKX-L.js";
import { P as PlanExecutionButton } from "./PlanExecutionButton-CFXru0Bg.js";
import { u as useQuery } from "./useQuery-DDunbPo7.js";
import { b as getTrainingExecutionsByPlanId } from "./trainingExecutions-YCG4J-eD.js";
import { c as calculateTotalSessions, b as calculateEndDate, f as formatDate, a as getWeekDayLabel } from "./schedule-CIHJDRP1.js";
import { r as renderUnit } from "./unit-utils-CtV2B9Q3.js";
import { C as Card, a as CardContent } from "./CardContent-B-WsjGJ4.js";
import { C as CheckCircleIcon } from "./CheckCircle-DDtMi21h.js";
import { S as Stack } from "./Stack-BCyivnLz.js";
import { L as LinearProgress } from "./LinearProgress-2gduGYRo.js";
import { C as CardActions } from "./CardActions-CwFM55o2.js";
import { a as Dialog, b as DialogContent, c as DialogActions } from "./DialogContent-BYUB71wd.js";
import { D as DialogTitle } from "./DialogTitle-uKDQB2FB.js";
import { B as BackIcon } from "./ArrowBack-Zch5sth9.js";
function getDialogContentTextUtilityClass(slot) {
  return generateUtilityClass("MuiDialogContentText", slot);
}
generateUtilityClasses("MuiDialogContentText", ["root"]);
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  const composedClasses = composeClasses(slots, getDialogContentTextUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the Typography
    ...composedClasses
  };
};
const DialogContentTextRoot = styled(Typography, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiDialogContentText",
  slot: "Root"
})({});
const DialogContentText = /* @__PURE__ */ reactExports.forwardRef(function DialogContentText2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogContentText"
  });
  const {
    children,
    className,
    ...ownerState
  } = props;
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentTextRoot, {
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref,
    ownerState,
    className: clsx(classes.root, className),
    ...props,
    classes
  });
});
const AutoFixHighIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z"
}));
const InfoIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
}));
const InfoOutlineIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}));
async function syncFmExecutions(planId) {
  const { data, error } = await supabase.functions.invoke(
    "daily-sync-fm-executions",
    { body: { planId } }
  );
  if (error) throw error;
  if (!data) throw new Error("No data returned");
  return data;
}
async function rebuildFmExecutions(planId) {
  const { data, error } = await supabase.functions.invoke(
    "rebuild-fm-executions",
    { body: { planId } }
  );
  if (error) throw error;
  if (!data) throw new Error("No data returned");
  return data;
}
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
function PlanCard({ plan, variant, showInfo: showInfoOrig, onUpdate }) {
  const [generating, setGenerating] = reactExports.useState(false);
  const [genResult, setGenResult] = reactExports.useState(null);
  const totalSessions = calculateTotalSessions(plan);
  const fmInfo = parseFmUrl(plan.unit_name);
  const { isLoading, data: progress, refetch } = usePlanProgress(plan.id);
  const { data: executions } = useTrainingExecutions(plan.id);
  const endDate = calculateEndDate(plan, executions);
  async function handleAutoGenerate(rebuild = false) {
    if (!fmInfo) return;
    setGenerating(true);
    setGenResult(null);
    try {
      if (rebuild) {
        const result = await rebuildFmExecutions(plan.id);
        setGenResult(`삭제: ${result.deleted}, 생성: ${result.created}`);
      } else {
        const result = await syncFmExecutions(plan.id);
        setGenResult(`생성: ${result.created}`);
      }
      await refetch();
    } catch (err) {
      console.error(err);
      setGenResult("오류가 발생했습니다.");
    } finally {
      setGenerating(false);
    }
  }
  const progressPercent = progress ? Math.min(100, Math.round(progress.completedUnits / plan.total_amount * 100)) : 0;
  const [showInfo, setShowInfo] = reactExports.useState(showInfoOrig);
  const [deleteDialogOpen, setDeleteDialogOpen] = reactExports.useState(false);
  const [deleting, setDeleting] = reactExports.useState(false);
  const [completing, setCompleting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  async function handleToggleComplete() {
    try {
      setCompleting(true);
      await updateTrainingPlan(plan.id, {
        completed_at: plan.completed_at ? null : (/* @__PURE__ */ new Date()).toISOString()
      });
      onUpdate?.();
    } catch (err) {
      setError("완료 처리에 실패했습니다.");
      console.error(err);
    } finally {
      setCompleting(false);
    }
  }
  const navigate = useNavigate();
  async function handleDelete() {
    if (!plan) return;
    try {
      setDeleting(true);
      await deleteTrainingPlan(plan.id);
      navigate(routes.plans.$());
    } catch (err) {
      setError("삭제에 실패했습니다.");
      console.error(err);
    } finally {
      setDeleting(false);
      setDeleteDialogOpen(false);
    }
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", children: error });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: "0.4" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarToday, { sx: { mr: 1, verticalAlign: "middle" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: plan.name }),
          plan.completed_at && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircleIcon, {}),
              label: `완료 ${formatDate(new Date(plan.completed_at))}`,
              size: "small",
              color: "success",
              sx: { ml: 1 }
            }
          )
        ] }),
        !showInfoOrig && /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => setShowInfo(!showInfo), children: showInfo ? /* @__PURE__ */ jsxRuntimeExports.jsx(InfoIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(InfoOutlineIcon, {}) })
      ] }),
      showInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", flexWrap: "wrap", spacing: 1, sx: { mb: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: `${plan.unit_amount} ${renderUnit(plan.unit_name)}/회`,
            size: "small",
            variant: "outlined"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: `총 ${plan.total_amount} ${renderUnit(plan.unit_name)}`,
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
              renderUnit(plan.unit_name)
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
    variant === "list" && /* @__PURE__ */ jsxRuntimeExports.jsxs(CardActions, { sx: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", gap: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          component: Link,
          to: routes.plans.detail.$path({ id: plan.id }, {}),
          size: "small",
          children: "상세보기"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PlanExecutionButton, { plan, size: "small", variant: "contained" })
    ] }),
    variant === "detail" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardActions, { sx: { justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", gap: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              component: Link,
              to: routes.plans.edit.$path({ id: plan.id }, {}),
              variant: "outlined",
              children: "수정"
            }
          ),
          fmInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              startIcon: generating ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFixHighIcon, {}),
              size: "small",
              color: "warning",
              variant: "outlined",
              onClick: () => handleAutoGenerate(true),
              disabled: generating,
              children: "재생성"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              color: "error",
              onClick: () => setDeleteDialogOpen(true),
              children: "삭제"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", gap: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: plan.completed_at ? "outlined" : "contained",
              color: "success",
              startIcon: completing ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircleIcon, {}),
              onClick: handleToggleComplete,
              disabled: completing,
              children: plan.completed_at ? "완료 취소" : "완료"
            }
          ),
          !plan.completed_at && /* @__PURE__ */ jsxRuntimeExports.jsx(PlanExecutionButton, { plan, variant: "contained" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: deleteDialogOpen, onClose: () => setDeleteDialogOpen(false), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "훈련 계획 삭제" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContentText, { children: [
          '"',
          plan.name,
          '" 계획을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.'
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setDeleteDialogOpen(false), disabled: deleting, children: "취소" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleDelete, color: "error", disabled: deleting, children: deleting ? "삭제 중..." : "삭제" })
        ] })
      ] })
    ] })
  ] });
}
const PlanCard$1 = reactExports.memo(PlanCard);
function PlansDetailPage() {
  const { id } = useParams();
  const [plan, setPlan] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (id) {
      loadPlan(Number(id));
    }
  }, [id]);
  async function loadPlan(planId) {
    try {
      setLoading(true);
      const data = await getTrainingPlan(planId);
      setPlan(data);
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
  if (!plan) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "warning", children: "훈련 계획을 찾을 수 없습니다." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { component: Link, to: routes.plans.$(), startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(BackIcon, {}), sx: { mb: 2 }, children: "목록으로" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PlanCard$1, { plan, showInfo: true, variant: "detail", onUpdate: () => loadPlan(Number(id)) })
  ] });
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PlansDetailPage
}, Symbol.toStringTag, { value: "Module" }));
export {
  PlanCard$1 as P,
  PlansDetailPage as a,
  index as i
};
//# sourceMappingURL=index-Bcrv8W8m.js.map
