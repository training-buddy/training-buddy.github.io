import { h as useLocation, j as jsxRuntimeExports, B as Box, g as Button, i as Link, b as routes, O as Outlet, u as useAuth, r as reactExports, C as CircularProgress, A as Alert, P as Paper, T as Typography, a as Chip, l as formatDuration, D as Divider, I as IconButton, m as DeleteIcon } from "./index-BnUnq6VV.js";
import { b as getTrainingExecutions, d as deleteTrainingExecution } from "./trainingExecutions-G_KzpqQW.js";
import { i as isoToLocalDateKey } from "./date-5ZZ1N3rr.js";
import { r as renderUnit } from "./unit-utils-CtV2B9Q3.js";
import { C as Container } from "./Container-D37DY3ip.js";
import { A as AddIcon } from "./NumberSpinner-eb9vCwOE.js";
import { S as Stack } from "./Stack-DNG_CLkZ.js";
import { ExecutionsNewPage } from "./index-XK3srHog.js";
import { ExecutionsDetailPage } from "./index-CAfMFQZZ.js";
import { ExecutionsEditPage } from "./index-iZQfSACN.js";
import "./useThemeProps-Dmh0j4Hs.js";
import "./useOnMount-BR-Gp7XJ.js";
import "./trainingPlans-DsaZpT-m.js";
import "./ArrowBack-BUGsCN8I.js";
import "./dayjs.min-C4R-6fGg.js";
import "./useMobilePicker-Co6D9cCg.js";
import "./InputAdornment-C-BifSfv.js";
import "./Popper-DRi7zrAe.js";
function groupExecutionsByDay(executions) {
  const groups = /* @__PURE__ */ new Map();
  for (const execution of executions) {
    const date = new Date(execution.completed_at);
    const dateKey = isoToLocalDateKey(execution.completed_at);
    if (!groups.has(dateKey)) {
      groups.set(dateKey, {
        dateKey,
        dateLabel: date.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "short"
        }),
        executions: [],
        totalDuration: 0,
        totalUnits: /* @__PURE__ */ new Map()
      });
    }
    const group = groups.get(dateKey);
    group.executions.push(execution);
    group.totalDuration += execution.duration_seconds;
    const unitName = renderUnit(execution.training_plans.unit_name);
    group.totalUnits.set(unitName, (group.totalUnits.get(unitName) || 0) + execution.unit_count);
  }
  return Array.from(groups.values()).sort((a, b) => b.dateKey.localeCompare(a.dateKey));
}
function ExecutionsPage() {
  const location = useLocation();
  const isListView = location.pathname === "/executions" || location.pathname === "/executions/";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxWidth: "md", disableGutters: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: { xs: 2, sm: 4 }, mb: 4, px: { xs: 1, sm: 2 } }, children: [
    isListView && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "flex-end", mb: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        component: Link,
        to: routes.executions.new.$(),
        variant: "contained",
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(AddIcon, {}),
        children: "새 훈련"
      }
    ) }),
    isListView ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExecutionsList, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] }) });
}
function ExecutionsList() {
  const { user } = useAuth();
  const [executions, setExecutions] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const dailyGroups = reactExports.useMemo(() => groupExecutionsByDay(executions), [executions]);
  const loadExecutions = reactExports.useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTrainingExecutions(user?.id);
      setExecutions(data);
    } catch (err) {
      setError("훈련 기록을 불러오는데 실패했습니다.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user?.id]);
  reactExports.useEffect(() => {
    if (user) {
      loadExecutions();
    }
  }, [user, loadExecutions]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", children: error });
  }
  if (executions.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "info", children: "아직 훈련 기록이 없습니다. 훈련을 시작해보세요!" });
  }
  async function handleDelete(id) {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteTrainingExecution(id);
      setExecutions((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error(err);
      alert("삭제에 실패했습니다.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 3, children: dailyGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsx(DailyGroupCard, { group, onDelete: handleDelete }, group.dateKey)) });
}
function DailyGroupCard({
  group,
  onDelete
}) {
  const unitsSummary = Array.from(group.totalUnits.entries()).map(([unit, count]) => `${count} ${unit}`).join(", ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { elevation: 2, sx: { overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          p: 2,
          bgcolor: (theme) => theme.palette.mode === "dark" ? "grey.800" : "grey.100"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", fontWeight: "bold", sx: { minWidth: 0, flex: 1 }, children: [
              "📅 ",
              group.dateLabel
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: `${group.executions.length}건`,
                size: "small",
                color: "primary",
                sx: { flexShrink: 0 }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", sx: { mt: 1, flexWrap: "wrap", gap: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
              "총 시간: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatDuration(group.totalDuration) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { color: "divider" }, children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
              "수행량: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: unitsSummary })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { divider: /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}), children: group.executions.map((execution) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExecutionCard, { execution, onDelete }, execution.id)) })
  ] });
}
function ExecutionCard({
  execution,
  onDelete
}) {
  const plan = execution.training_plans;
  function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    onDelete(execution.id);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      component: Link,
      to: routes.executions.detail.$path({ id: execution.id }, {}),
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
          bgcolor: (theme) => theme.palette.mode === "dark" ? "grey.800" : "grey.50"
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { minWidth: 0, flex: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", fontWeight: "medium", noWrap: true, children: plan.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: formatDuration(execution.duration_seconds) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 0.5, alignItems: "center", sx: { flexShrink: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: `${execution.unit_count} ${renderUnit(plan.unit_name)}`,
              size: "small",
              color: "primary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              size: "medium",
              onClick: handleDelete,
              sx: {
                color: "text.secondary",
                "&:hover": { color: "error.main" }
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, {})
            }
          )
        ] })
      ]
    }
  );
}
export {
  ExecutionsDetailPage,
  ExecutionsEditPage,
  ExecutionsNewPage,
  ExecutionsPage
};
//# sourceMappingURL=index-DdprN8c3.js.map
