import { k as createSvgIcon, j as jsxRuntimeExports, _ as useNavigate, u as useAuth, aF as useSearchParams, r as reactExports, bC as useTimer, B as Box, C as CircularProgress, A as Alert, g as Button, b as routes, T as Typography, ah as FormControl, bf as InputLabel, bt as Select, bu as MenuItem, P as Paper, bD as formatTime, m as DeleteIcon } from "./index-BnUnq6VV.js";
import { f as createTrainingExecution } from "./trainingExecutions-G_KzpqQW.js";
import { g as getTrainingPlans } from "./trainingPlans-DsaZpT-m.js";
import { N as NumberSpinner } from "./NumberSpinner-eb9vCwOE.js";
import { S as Stack } from "./Stack-DNG_CLkZ.js";
import "./useOnMount-BR-Gp7XJ.js";
import "./useThemeProps-Dmh0j4Hs.js";
const PauseIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M6 19h4V5H6zm8-14v14h4V5z"
}));
const PlayIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M8 5v14l11-7z"
}));
const StopIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M6 6h12v12H6z"
}));
function ExecutionsNewPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const initialPlanId = searchParams.get("planId");
  const [plans, setPlans] = reactExports.useState([]);
  const [localPlanId, setLocalPlanId] = reactExports.useState("");
  const [localUnitCount, setLocalUnitCount] = reactExports.useState(1);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const timer = useTimer();
  const trainingState = reactExports.useMemo(() => {
    if (timer.isRunning) return "running";
    if (timer.isPaused) return "paused";
    return "idle";
  }, [timer.isRunning, timer.isPaused]);
  const selectedPlanId = trainingState !== "idle" ? timer.planId ?? "" : localPlanId;
  const unitCount = trainingState !== "idle" ? timer.unitCount ?? 1 : localUnitCount;
  const selectedPlan = plans.find((p) => p.id === selectedPlanId);
  const loadPlans = reactExports.useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTrainingPlans(user?.id);
      setPlans(data);
    } catch (err) {
      setError("훈련 계획을 불러오는데 실패했습니다.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user?.id]);
  reactExports.useEffect(() => {
    if (user) {
      loadPlans();
    }
  }, [user, loadPlans]);
  reactExports.useEffect(() => {
    if (initialPlanId && plans.length > 0 && trainingState === "idle") {
      const planId = Number(initialPlanId);
      const plan = plans.find((p) => p.id === planId);
      if (plan && !timer.planId) {
        setLocalPlanId(planId);
        setLocalUnitCount(plan.unit_amount);
      }
    }
  }, [initialPlanId, plans, trainingState, timer.planId]);
  reactExports.useEffect(() => {
    if (trainingState === "idle" && localPlanId) {
      const plan = plans.find((p) => p.id === localPlanId);
      if (plan) {
        setLocalUnitCount(plan.unit_amount);
      }
    }
  }, [localPlanId, plans, trainingState]);
  function handleStart(planId, count) {
    if (!planId) {
      setError("훈련 계획을 선택해주세요.");
      return;
    }
    setError(null);
    timer.start({ planId, unitCount: count });
  }
  function handleUnitCountChange(count) {
    if (trainingState === "idle") {
      setLocalUnitCount(count);
    } else {
      timer.setUnitCount(count);
    }
  }
  function handlePause() {
    timer.pause();
  }
  function handleResume() {
    timer.resume();
  }
  async function handleComplete() {
    if (!timer.planId || !timer.startedAt) return;
    try {
      setSaving(true);
      setError(null);
      const completedAt = /* @__PURE__ */ new Date();
      await createTrainingExecution({
        user_id: user.id,
        plan_id: timer.planId,
        started_at: timer.startedAt.toISOString(),
        completed_at: completedAt.toISOString(),
        duration_seconds: timer.elapsedSeconds,
        unit_count: timer.unitCount ?? 1
      });
      timer.reset();
      navigate(routes.executions.$());
    } catch (err) {
      setError("훈련 기록 저장에 실패했습니다.");
      console.error(err);
    } finally {
      setSaving(false);
    }
  }
  function handleCancel() {
    timer.reset();
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) });
  }
  if (plans.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "warning", children: [
      "훈련 계획이 없습니다. 먼저 훈련 계획을 생성해주세요.",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { component: "a", href: routes.plans.new.$(), size: "small", sx: { ml: 2 }, children: "계획 만들기" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", gutterBottom: true, children: "훈련 수행" }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", sx: { mb: 2 }, children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, disabled: trainingState !== "idle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "훈련 계획" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            value: selectedPlanId,
            label: "훈련 계획",
            onChange: (e) => setLocalPlanId(e.target.value),
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
          value: unitCount,
          onValueChange: (value) => {
            if (value) {
              handleUnitCountChange(value);
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Paper,
        {
          sx: (theme) => ({
            p: 4,
            textAlign: "center",
            bgcolor: trainingState === "running" ? theme.palette.mode === "dark" ? "primary.dark" : "primary.light" : trainingState === "paused" ? theme.palette.mode === "dark" ? "warning.dark" : "warning.light" : theme.palette.mode === "dark" ? "grey.800" : "grey.100"
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Typography,
              {
                variant: "h1",
                sx: (theme) => ({
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "2.5rem",
                    sm: "4rem",
                    md: "5rem",
                    lg: "6rem"
                  },
                  color: trainingState === "running" ? "primary.contrastText" : trainingState === "paused" ? "warning.contrastText" : theme.palette.mode === "dark" ? "text.primary" : "text.primary"
                }),
                children: formatTime(timer.elapsedSeconds)
              }
            ),
            trainingState === "paused" && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { mt: 1 }, children: "일시정지됨" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, justifyContent: "center", children: [
        trainingState === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            size: "large",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(PlayIcon, {}),
            onClick: () => handleStart(localPlanId, localUnitCount),
            disabled: !localPlanId,
            children: "시작"
          }
        ),
        trainingState === "running" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(PauseIcon, {}),
              onClick: handlePause,
              children: "일시정지"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              color: "success",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(StopIcon, {}),
              onClick: handleComplete,
              disabled: saving,
              children: saving ? "저장 중..." : "완료"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outlined",
              color: "error",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, {}),
              onClick: handleCancel,
              children: "삭제"
            }
          )
        ] }),
        trainingState === "paused" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              size: "large",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(PlayIcon, {}),
              onClick: handleResume,
              children: "재개"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "contained",
              color: "success",
              size: "large",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(StopIcon, {}),
              onClick: handleComplete,
              disabled: saving,
              children: saving ? "저장 중..." : "완료"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", color: "error", size: "large", onClick: handleCancel, children: "취소" })
        ] })
      ] }),
      trainingState === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "text", onClick: () => navigate(routes.executions.$()), children: "돌아가기" })
    ] })
  ] });
}
export {
  ExecutionsNewPage
};
//# sourceMappingURL=index-XK3srHog.js.map
