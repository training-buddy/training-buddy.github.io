import { bB as useParams, _ as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Box, C as CircularProgress, A as Alert, b as routes } from "./index-CvRd15Ij.js";
import { a as getTrainingPlan, u as updateTrainingPlan } from "./trainingPlans-JsHeONct.js";
import { P as PlanForm, p as planToFormData, a as formDataToPlanUpdate } from "./planFormUtils-3BiPippH.js";
import "./FolderOpen-C6mWd005.js";
import "./NumberSpinner-sJVf-RtT.js";
import "./useOnMount-DYm3re3d.js";
import "./date-5ZZ1N3rr.js";
import "./schedule-BIUys4DM.js";
import "./hooks-DcXoJXBl.js";
import "./Popper-DzyvNNyB.js";
import "./FormControlLabel-BRaPHjcL.js";
import "./useQuery-B1QZOTdT.js";
import "./Stack-BzwgLADh.js";
import "./useThemeProps-Jyxa4FFG.js";
function PlansEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
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
  async function handleSubmit(data) {
    if (!plan) return;
    if (!data.name.trim()) {
      setError("계획 이름을 입력해주세요.");
      return;
    }
    if (!data.unitName.trim()) {
      setError("훈련 단위를 입력해주세요.");
      return;
    }
    if (data.scheduleType === "weekly" && data.scheduleDays.length === 0) {
      setError("훈련 요일을 선택해주세요.");
      return;
    }
    try {
      setSubmitting(true);
      setError(null);
      await updateTrainingPlan(plan.id, formDataToPlanUpdate(data));
      navigate(routes.plans.detail.$path({ id: plan.id }, {}));
    } catch (err) {
      setError("계획 수정에 실패했습니다.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }
  function handleCancel() {
    if (plan) {
      navigate(routes.plans.detail.$path({ id: plan.id }, {}));
    } else {
      navigate(routes.plans.$());
    }
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) });
  }
  if (!plan) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "warning", children: "훈련 계획을 찾을 수 없습니다." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    PlanForm,
    {
      initialData: planToFormData(plan),
      onSubmit: handleSubmit,
      onCancel: handleCancel,
      loading: submitting,
      error,
      title: "훈련 계획 수정",
      submitLabel: "저장",
      loadingLabel: "저장 중..."
    }
  );
}
export {
  PlansEditPage
};
//# sourceMappingURL=index-BsPrjde1.js.map
