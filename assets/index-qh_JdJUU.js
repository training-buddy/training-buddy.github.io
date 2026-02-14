import { l as useLocation, j as jsxRuntimeExports, B as Box, n as Button, a as Link, c as routes, O as Outlet, r as reactExports, C as CircularProgress, A as Alert, P as Paper, T as Typography, b as Chip, o as formatDuration, D as Divider, I as IconButton } from "./index-C1uuhD5W.js";
import { r as renderUnit } from "./unit-utils-CtV2B9Q3.js";
import { g as getTrainingExecutions, d as deleteTrainingExecution } from "./trainingExecutions-BNuLzgy3.js";
import { C as Container } from "./Container-B48StizD.js";
import { A as AddIcon } from "./NumberSpinner-DPW64Sxl.js";
import { S as Stack } from "./Stack-CYM_t3D0.js";
import { D as DeleteIcon } from "./index-nPqQyn4X.js";
import { E } from "./index-nPqQyn4X.js";
import { ExecutionsDetailPage } from "./index-zKbOFSHR.js";
import { ExecutionsEditPage } from "./index-CrBwXSBb.js";
import "./useThemeProps-DAv5hN2S.js";
import "./useOnMount-BxoUUqFc.js";
import "./isMuiElement-BSAHsO-I.js";
import "./trainingPlans-DiVfVaoS.js";
import "./PlayArrow-DeEK4H7O.js";
import "./ArrowBack-BGqMftvB.js";
import "./dayjs.min-OVsL9B4h.js";
import "./TextField-BbDGCLkb.js";
import "./visuallyHidden-DZnaolx9.js";
import "./DialogContent-BctuCRzl.js";
import "./ListItem-D0QlENeo.js";
import "./listItemButtonClasses-BEms6JaZ.js";
function groupExecutionsByDay(executions) {
  const groups = /* @__PURE__ */ new Map();
  for (const execution of executions) {
    const date = new Date(execution.completed_at);
    const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
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
              to: routes.executions.new.$(),
              variant: "contained",
              startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(AddIcon, {}),
              children: "새 훈련"
            }
          )
        ]
      }
    ),
    isListView ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExecutionsList, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] }) });
}
function ExecutionsList() {
  const [executions, setExecutions] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const dailyGroups = reactExports.useMemo(() => groupExecutionsByDay(executions), [executions]);
  reactExports.useEffect(() => {
    loadExecutions();
  }, []);
  async function loadExecutions() {
    try {
      setLoading(true);
      const data = await getTrainingExecutions();
      setExecutions(data);
    } catch (err) {
      setError("훈련 기록을 불러오는데 실패했습니다.");
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle1", fontWeight: "bold", children: [
              "📅 ",
              group.dateLabel
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Chip,
              {
                label: `${group.executions.length}회 훈련`,
                size: "small",
                color: "primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, sx: { mt: 1 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
              "총 시간: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatDuration(group.totalDuration) })
            ] }),
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
  const completedDate = new Date(execution.completed_at);
  const timeStr = completedDate.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit"
  });
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", fontWeight: "medium", children: plan.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
            timeStr,
            " • ",
            formatDuration(execution.duration_seconds)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [
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
              size: "small",
              onClick: handleDelete,
              sx: {
                color: "text.secondary",
                "&:hover": { color: "error.main" }
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" })
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
  E as ExecutionsNewPage,
  ExecutionsPage
};
//# sourceMappingURL=index-qh_JdJUU.js.map
