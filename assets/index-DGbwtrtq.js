import { h as useLocation, j as jsxRuntimeExports, B as Box, g as Button, i as Link, b as routes, O as Outlet, u as useAuth, r as reactExports, C as CircularProgress, A as Alert, T as Typography } from "./index-BnUnq6VV.js";
import { g as getTrainingPlans } from "./trainingPlans-DsaZpT-m.js";
import { P as PlanCard } from "./index-C70QLpdZ.js";
import { a } from "./index-C70QLpdZ.js";
import { C as Container } from "./Container-D37DY3ip.js";
import { A as AddIcon } from "./NumberSpinner-eb9vCwOE.js";
import { S as Stack } from "./Stack-DNG_CLkZ.js";
import { PlansNewPage } from "./index-D3GO3-66.js";
import { PlansEditPage } from "./index-DxFfCMg0.js";
import "./PlanExecutionButton-CHLfdARg.js";
import "./FolderOpen-Bazxfb0M.js";
import "./useQuery-FkbKXP6M.js";
import "./trainingExecutions-G_KzpqQW.js";
import "./schedule-BIUys4DM.js";
import "./unit-utils-CtV2B9Q3.js";
import "./CardContent-Bf2x5ekB.js";
import "./CheckCircle-DaF45UKq.js";
import "./LinearProgress-CBvVs-kk.js";
import "./CardActions-DZrkRbmx.js";
import "./DialogContentText-CcNFBbG9.js";
import "./ArrowBack-BUGsCN8I.js";
import "./useThemeProps-Dmh0j4Hs.js";
import "./useOnMount-BR-Gp7XJ.js";
import "./planFormUtils-DNeD_x4t.js";
import "./date-5ZZ1N3rr.js";
import "./hooks-BN7PAZ-h.js";
import "./Popper-DRi7zrAe.js";
import "./FormControlLabel-D7dNxf5V.js";
function PlansPage() {
  const location = useLocation();
  const isListView = location.pathname === "/plans" || location.pathname === "/plans/";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxWidth: "md", disableGutters: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mt: { xs: 2, sm: 4 }, pb: 10, px: { xs: 1, sm: 2 } }, children: [
    isListView && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "flex-end", mb: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        component: Link,
        to: routes.plans.new.$(),
        variant: "contained",
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(AddIcon, {}),
        children: "새 계획"
      }
    ) }),
    isListView ? /* @__PURE__ */ jsxRuntimeExports.jsx(PlansList, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] }) });
}
function PlansList() {
  const { user } = useAuth();
  const [plans, setPlans] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
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
//# sourceMappingURL=index-DGbwtrtq.js.map
