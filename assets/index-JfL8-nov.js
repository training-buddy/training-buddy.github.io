import { p as createSvgIcon, j as jsxRuntimeExports, r as reactExports, a3 as useNavigate, B as Box, C as CircularProgress, A as Alert, a4 as SchoolIcon, T as Typography, b as Chip, L as List, c as routes, n as Button } from "./index-C1uuhD5W.js";
import { d as dayjs } from "./dayjs.min-OVsL9B4h.js";
import { g as getAllLearningHistories } from "./learningHistories-CvuHvNjP.js";
import { C as Card, a as CardContent } from "./CardContent-ChCAlgOZ.js";
import { L as ListItem } from "./ListItem-D0QlENeo.js";
import { L as ListItemButton, a as ListItemText } from "./ListItemText-DdsbBg4Q.js";
import "./isMuiElement-BSAHsO-I.js";
import "./listItemButtonClasses-BEms6JaZ.js";
const CalendarMonthIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
}));
const TrendingUpIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
}));
function useDashboardStats(histories) {
  return reactExports.useMemo(() => {
    const today = dayjs().format("YYYY-MM-DD");
    const finRecords = histories.filter((h) => h.type === "fin");
    const todayCount = finRecords.filter(
      (h) => dayjs(h.created_at).format("YYYY-MM-DD") === today
    ).length;
    const total = finRecords.length;
    let streak = 0;
    const now = dayjs();
    for (let i = 0; i < 365; i++) {
      const dateStr = now.subtract(i, "day").format("YYYY-MM-DD");
      const hasLearning = finRecords.some(
        (h) => dayjs(h.created_at).format("YYYY-MM-DD") === dateStr
      );
      if (hasLearning) {
        streak++;
      } else if (i > 0) {
        break;
      }
    }
    const weeklyStats = Array.from({ length: 7 }, (_, i) => {
      const date = now.subtract(6 - i, "day");
      const dateStr = date.format("YYYY-MM-DD");
      const dayHistories = histories.filter(
        (h) => dayjs(h.created_at).format("YYYY-MM-DD") === dateStr && h.type !== "fin"
      );
      const passed = dayHistories.filter((h) => h.type === "pass").length;
      const failed = dayHistories.filter((h) => h.type === "fail").length;
      return {
        date: date.format("MM/DD"),
        passed,
        failed,
        total: passed + failed
      };
    });
    const dateGroups = /* @__PURE__ */ new Map();
    finRecords.forEach((h) => {
      const dateStr = dayjs(h.created_at).format("YYYY-MM-DD");
      if (!dateGroups.has(dateStr)) {
        dateGroups.set(dateStr, /* @__PURE__ */ new Map());
      }
      const pathKey = `${h.owner}/${h.repo}/${h.path}`;
      const pathGroups = dateGroups.get(dateStr);
      const existing = pathGroups.get(pathKey) || {
        owner: h.owner,
        repo: h.repo,
        path: h.path,
        count: 0
      };
      existing.count++;
      pathGroups.set(pathKey, existing);
    });
    const flashCardsByDate = Array.from(dateGroups.entries()).sort(([a], [b]) => b.localeCompare(a)).slice(0, 7).map(([dateStr, pathGroups]) => {
      const pathGroupsArray = Array.from(pathGroups.values());
      const totalCount = pathGroupsArray.reduce((sum, pg) => sum + pg.count, 0);
      return {
        date: dateStr,
        displayDate: dayjs(dateStr).format("MM/DD (ddd)"),
        pathGroups: pathGroupsArray,
        totalCount
      };
    });
    const contentStats = /* @__PURE__ */ new Map();
    histories.filter((h) => h.type !== "fin").forEach((h) => {
      const key = `${h.owner}/${h.repo}/${h.path}`;
      const existing = contentStats.get(key) || {
        owner: h.owner,
        repo: h.repo,
        path: h.path,
        passed: 0,
        failed: 0
      };
      if (h.type === "pass") existing.passed++;
      else if (h.type === "fail") existing.failed++;
      contentStats.set(key, existing);
    });
    const recommendations = Array.from(contentStats.values()).filter((stat) => {
      const t = stat.passed + stat.failed;
      const passRate = t > 0 ? stat.passed / t * 100 : 0;
      return t >= 3 && passRate < 70;
    }).map((stat) => {
      const t = stat.passed + stat.failed;
      return { ...stat, total: t, passRate: stat.passed / t * 100 };
    }).sort((a, b) => a.passRate - b.passRate).slice(0, 5);
    return { todayCount, total, streak, weeklyStats, flashCardsByDate, recommendations };
  }, [histories]);
}
function WeeklyChart({
  data
}) {
  const maxTotal = Math.max(...data.map((d) => d.total), 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", alignItems: "flex-end", gap: 1, height: 160 }, children: data.map((d) => {
    const passH = d.passed / maxTotal * 140;
    const failH = d.failed / maxTotal * 140;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: 140
              },
              children: d.total > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      height: failH,
                      bgcolor: "#f44336",
                      borderRadius: "4px 4px 0 0",
                      minWidth: 20
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Box,
                  {
                    sx: {
                      height: passH,
                      bgcolor: "#4caf50",
                      borderRadius: failH > 0 ? 0 : "4px 4px 0 0",
                      minWidth: 20
                    }
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography,
            {
              variant: "caption",
              color: "text.secondary",
              sx: { mt: 0.5, fontSize: "0.65rem" },
              children: d.date
            }
          )
        ]
      },
      d.date
    );
  }) });
}
function FlashManStatsPageContent() {
  const navigate = useNavigate();
  const [histories, setHistories] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    getAllLearningHistories().then(setHistories).catch((err) => {
      setError(err instanceof Error ? err.message : "Failed to load data");
    }).finally(() => setLoading(false));
  }, []);
  const stats = useDashboardStats(histories);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { p: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", children: error }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { p: 2, display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: 2
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SchoolIcon, { color: "primary", sx: { mr: 1 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "오늘 학습" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { fontWeight: "bold" }, children: stats.todayCount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "세션" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUpIcon, { color: "success", sx: { mr: 1 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "전체 학습" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { fontWeight: "bold" }, children: stats.total }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "세션" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarMonthIcon, { color: "info", sx: { mr: 1 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", children: "연속 학습" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", sx: { fontWeight: "bold" }, children: stats.streak }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "일" })
          ] }) })
        ]
      }
    ),
    stats.flashCardsByDate.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "학습 기록" }),
      stats.flashCardsByDate.map((dateGroup) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 2 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: dateGroup.displayDate }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Chip,
            {
              label: `${dateGroup.totalCount}회`,
              size: "small",
              color: "primary",
              variant: "outlined"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(List, { sx: { py: 0 }, children: dateGroup.pathGroups.map((pg) => /* @__PURE__ */ jsxRuntimeExports.jsx(ListItem, { disablePadding: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ListItemButton,
          {
            sx: { px: 1 },
            onClick: () => navigate(
              routes.flashMan.cards.$({
                owner: pg.owner,
                repo: pg.repo,
                path: pg.path
              })
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ListItemText,
              {
                primary: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Box,
                    {
                      component: "code",
                      sx: { color: "text.secondary", fontSize: "0.85rem" },
                      children: [
                        pg.owner,
                        "/",
                        pg.repo
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { sx: { mr: 1 }, label: `${pg.count}회`, size: "small" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: pg.path })
                ] })
              }
            )
          }
        ) }, `${pg.owner}/${pg.repo}/${pg.path}`)) })
      ] }, dateGroup.date))
    ] }) }),
    stats.weeklyStats.some((s) => s.total > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "최근 7일 학습 통계" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WeeklyChart, { data: stats.weeklyStats }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", gap: 2, mt: 2, justifyContent: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: 12, height: 12, bgcolor: "#4caf50", borderRadius: 1, mr: 0.5 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: "성공" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { width: 12, height: 12, bgcolor: "#f44336", borderRadius: 1, mr: 0.5 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", children: "실패" })
        ] })
      ] })
    ] }) }),
    stats.recommendations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "복습이 필요한 콘텐츠" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "통과율이 낮은 콘텐츠를 다시 학습해보세요" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: stats.recommendations.map((rec) => {
        const fileName = rec.path.split("/").pop() || rec.path;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { sx: { pb: 1, "&:last-child": { pb: 1 } }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { flex: 1 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontWeight: "medium" }, children: fileName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "text.secondary", children: [
                  rec.owner,
                  "/",
                  rec.repo
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", gap: 1, mt: 0.5 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Chip,
                    {
                      label: `통과율 ${Math.round(rec.passRate)}%`,
                      size: "small",
                      color: "error",
                      variant: "outlined"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: `${rec.total}회 학습`, size: "small", variant: "outlined" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "small",
                  variant: "contained",
                  onClick: () => navigate(
                    routes.flashMan.learn.$({
                      owner: rec.owner,
                      repo: rec.repo,
                      path: rec.path
                    })
                  ),
                  children: "학습"
                }
              )
            ]
          }
        ) }) }, `${rec.owner}/${rec.repo}/${rec.path}`);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "빠른 이동" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", gap: 2, flexWrap: "wrap" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: () => navigate(routes.flashMan.contents.$()), children: "콘텐츠 탐색" }) })
    ] })
  ] });
}
const FlashManStatsPage = reactExports.memo(FlashManStatsPageContent);
export {
  FlashManStatsPage
};
//# sourceMappingURL=index-JfL8-nov.js.map
