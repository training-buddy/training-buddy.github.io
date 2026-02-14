import { p as createSvgIcon, j as jsxRuntimeExports, r as reactExports, P as Paper, I as IconButton, T as Typography, B as Box, C as CircularProgress, A as Alert, o as formatDuration, n as Button, a as Link, c as routes } from "./index-C1uuhD5W.js";
import { g as getTrainingExecutions, a as getTrainingExecutionsByPlanId, c as calculateStats } from "./trainingExecutions-BNuLzgy3.js";
import { g as getTrainingPlans } from "./trainingPlans-DiVfVaoS.js";
import { S as Stack } from "./Stack-CYM_t3D0.js";
import { C as ChevronRightIcon, G as Grid } from "./ChevronRight-D0aGvTM6.js";
import { c as calculateTotalSessions } from "./schedule-DhBQ9WQn.js";
import { C as Container } from "./Container-B48StizD.js";
import { C as Card, a as CardContent } from "./CardContent-ChCAlgOZ.js";
import { L as LinearProgress } from "./LinearProgress-BS5i-iMP.js";
import { C as CardActions } from "./CardActions-scsLrlgZ.js";
import { P as PlayIcon } from "./PlayArrow-DeEK4H7O.js";
import "./useThemeProps-DAv5hN2S.js";
import "./isMuiElement-BSAHsO-I.js";
const PrevIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}));
const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];
function Calendar({ markedDates, onDateClick }) {
  const [currentMonth, setCurrentMonth] = reactExports.useState(() => {
    const now = /* @__PURE__ */ new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  const today = /* @__PURE__ */ new Date();
  const isToday = (day) => today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
  const getDateKey = (day) => {
    const date = new Date(year, month, day);
    return date.toISOString().split("T")[0];
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { sx: { p: 2 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", sx: { mb: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: prevMonth, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrevIcon, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "h6", children: [
        year,
        "년 ",
        month + 1,
        "월"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: nextMonth, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRightIcon, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 0.5,
          mb: 1
        },
        children: WEEKDAYS.map((day, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "caption",
            align: "center",
            sx: {
              color: index === 0 ? "error.main" : index === 6 ? "primary.main" : "text.secondary",
              fontWeight: "bold"
            },
            children: day
          },
          day
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 0.5
        },
        children: days.map((day, index) => {
          if (day === null) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { aspectRatio: "1" } }, `empty-${index}`);
          }
          const dateKey = getDateKey(day);
          const marked = markedDates.get(dateKey);
          const dayOfWeek = (firstDayOfMonth + day - 1) % 7;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Box,
            {
              onClick: () => onDateClick?.(new Date(year, month, day)),
              sx: {
                aspectRatio: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
                cursor: onDateClick ? "pointer" : "default",
                bgcolor: isToday(day) ? "primary.light" : marked ? "success.light" : "transparent",
                color: dayOfWeek === 0 ? "error.main" : dayOfWeek === 6 ? "primary.main" : "text.primary",
                "&:hover": onDateClick ? {
                  bgcolor: isToday(day) ? "primary.main" : marked ? "success.main" : "action.hover"
                } : {}
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", children: day }),
                marked && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: marked.color ?? "success.dark",
                      mt: 0.25
                    }
                  }
                )
              ]
            },
            day
          );
        })
      }
    )
  ] });
}
function DashboardPage() {
  const [plans, setPlans] = reactExports.useState([]);
  const [executions, setExecutions] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    loadData();
  }, []);
  async function loadData() {
    try {
      setLoading(true);
      const [plansData, executionsData] = await Promise.all([
        getTrainingPlans(),
        getTrainingExecutions()
      ]);
      const plansWithProgress = await Promise.all(
        plansData.map(async (plan) => {
          const planExecutions = await getTrainingExecutionsByPlanId(plan.id);
          const completedSessions = planExecutions.length;
          const totalSessions = calculateTotalSessions(plan);
          const progressPercent = Math.min(100, completedSessions / totalSessions * 100);
          return {
            ...plan,
            completedSessions,
            totalSessions,
            progressPercent
          };
        })
      );
      setPlans(plansWithProgress);
      setExecutions(executionsData);
    } catch (err) {
      setError("데이터를 불러오는데 실패했습니다.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxWidth: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxWidth: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { my: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", children: error }) }) });
  }
  const markedDates = /* @__PURE__ */ new Map();
  executions.forEach((execution) => {
    const dateKey = execution.completed_at.split("T")[0];
    const existing = markedDates.get(dateKey);
    markedDates.set(dateKey, { count: (existing?.count ?? 0) + 1 });
  });
  const stats = calculateStats(executions);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxWidth: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { my: 4 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", component: "h1", gutterBottom: true, children: "대시보드" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { container: true, spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, md: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "훈련 기록" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { markedDates })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: { xs: 12, md: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, children: "통계" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Paper, { sx: { p: 2 }, children: executions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "아직 훈련 기록이 없습니다." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { label: "총 훈련 횟수", value: `${stats.totalSessions}회` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatItem,
            {
              label: "평균 훈련 시간",
              value: formatDuration(Math.round(stats.avgDuration))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatItem,
            {
              label: "단위당 평균 시간",
              value: formatDuration(Math.round(stats.avgDurationPerUnit))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { label: "총 훈련 시간", value: formatDuration(stats.totalDuration) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { size: 12, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", gutterBottom: true, sx: { mt: 2 }, children: "훈련 계획 진행률" }),
        plans.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { severity: "info", children: [
          "훈련 계획이 없습니다.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { component: Link, to: routes.plans.new.$(), size: "small", children: "계획 만들기" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { spacing: 2, children: plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(PlanProgressCard, { plan }, plan.id)) })
      ] })
    ] })
  ] }) });
}
function StatItem({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: value })
      ]
    }
  );
}
function PlanProgressCard({ plan }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Box,
        {
          sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: plan.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
              plan.completedSessions,
              " / ",
              plan.totalSessions,
              "회"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LinearProgress,
        {
          variant: "determinate",
          value: plan.progressPercent,
          sx: { height: 8, borderRadius: 4, mb: 1 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
        plan.progressPercent.toFixed(0),
        "% 완료"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          component: Link,
          to: routes.executions.new.$({ planId: plan.id }),
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(PlayIcon, {}),
          size: "small",
          children: "훈련 시작"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { component: Link, to: routes.plans.detail.$path({ id: plan.id }, {}), size: "small", children: "상세보기" })
    ] })
  ] });
}
export {
  DashboardPage
};
//# sourceMappingURL=index-DCU12b-t.js.map
