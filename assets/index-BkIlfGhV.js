import { d as useLocation, j as jsxRuntimeExports, B as Box, e as Button, f as Link, c as routes, O as Outlet, r as reactExports, C as CircularProgress, A as Alert, T as Typography } from "./index-BdFiX0VU.js";
import { g as getTrainingPlans } from "./trainingPlans-2dqyKX-L.js";
import { P as PlanCard } from "./index-Bcrv8W8m.js";
import { a } from "./index-Bcrv8W8m.js";
import { C as Container } from "./Container-91sLDNfI.js";
import { A as AddIcon } from "./NumberSpinner-E3tOPuAQ.js";
import { S as Stack } from "./Stack-BCyivnLz.js";
import { PlansNewPage } from "./index-BcT71-WU.js";
import { PlansEditPage } from "./index-CTx_dyt0.js";
import "./PlanExecutionButton-CFXru0Bg.js";
import "./FolderOpen-DkT0hsSz.js";
import "./useQuery-DDunbPo7.js";
import "./trainingExecutions-YCG4J-eD.js";
import "./schedule-CIHJDRP1.js";
import "./unit-utils-CtV2B9Q3.js";
import "./CardContent-B-WsjGJ4.js";
import "./CheckCircle-DDtMi21h.js";
import "./LinearProgress-2gduGYRo.js";
import "./CardActions-CwFM55o2.js";
import "./DialogContent-BYUB71wd.js";
import "./DialogTitle-uKDQB2FB.js";
import "./ArrowBack-Zch5sth9.js";
import "./useThemeProps-B_Reo5-8.js";
import "./useOnMount-D00PmghC.js";
import "./isMuiElement-LDWlSHgp.js";
import "./planFormUtils-C9vDd_yj.js";
import "./date-CAnl9gc4.js";
import "./hooks-D9L2etUp.js";
import "./TextField-Cp09bA7b.js";
import "./ListItemButton-xETcm3BH.js";
import "./listItemButtonClasses-DY9lmb0m.js";
import "./ListItemIcon-D-dTNtFj.js";
import "./ListItemText-D6vBvvMK.js";
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
  const activePlans = plans.filter((p) => !p.completed_at);
  const completedPlans = plans.filter((p) => p.completed_at);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, children: [
    activePlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(PlanCard, { plan, variant: "list" }, plan.id)),
    completedPlans.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { pt: 1 }, children: "완료된 계획" }),
      completedPlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(PlanCard, { plan, variant: "list" }, plan.id))
    ] })
  ] });
}
export {
  a as PlansDetailPage,
  PlansEditPage,
  PlansNewPage,
  PlansPage
};
//# sourceMappingURL=index-BkIlfGhV.js.map
