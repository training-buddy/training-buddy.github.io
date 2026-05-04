import { h as useLocation, j as jsxRuntimeExports, B as Box, g as Button, i as Link, b as routes, O as Outlet, u as useAuth, r as reactExports, C as CircularProgress, A as Alert, T as Typography } from "./index-CvRd15Ij.js";
import { g as getTrainingPlans } from "./trainingPlans-JsHeONct.js";
import { P as PlanCard } from "./index-BzdmHL3r.js";
import { a } from "./index-BzdmHL3r.js";
import { C as Container } from "./Container-C-hUz_R3.js";
import { A as AddIcon } from "./NumberSpinner-sJVf-RtT.js";
import { S as Stack } from "./Stack-BzwgLADh.js";
import { PlansNewPage } from "./index-BZ7krCjw.js";
import { PlansEditPage } from "./index-BsPrjde1.js";
import "./PlanExecutionButton-CgJaqyFD.js";
import "./FolderOpen-C6mWd005.js";
import "./useQuery-B1QZOTdT.js";
import "./trainingExecutions-CwyzMcCF.js";
import "./schedule-BIUys4DM.js";
import "./unit-utils-CtV2B9Q3.js";
import "./CardContent-BdV-PfcG.js";
import "./CheckCircle-6u2HKCxz.js";
import "./LinearProgress-BbMDJCs_.js";
import "./CardActions-BwB6Y3dL.js";
import "./DialogContentText-BeHsgYMR.js";
import "./ArrowBack-CkHf8LzV.js";
import "./useThemeProps-Jyxa4FFG.js";
import "./useOnMount-DYm3re3d.js";
import "./planFormUtils-3BiPippH.js";
import "./date-5ZZ1N3rr.js";
import "./hooks-DcXoJXBl.js";
import "./Popper-DzyvNNyB.js";
import "./FormControlLabel-BRaPHjcL.js";
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
//# sourceMappingURL=index-B0qToCpC.js.map
