import { bd as useParams, a3 as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Box, C as CircularProgress, A as Alert, c as routes } from "./index-BdFiX0VU.js";
import { a as getTrainingPlan, u as updateTrainingPlan } from "./trainingPlans-2dqyKX-L.js";
import { P as PlanForm, p as planToFormData, a as formDataToPlanUpdate } from "./planFormUtils-C9vDd_yj.js";
import "./FolderOpen-DkT0hsSz.js";
import "./NumberSpinner-E3tOPuAQ.js";
import "./useOnMount-D00PmghC.js";
import "./isMuiElement-LDWlSHgp.js";
import "./date-CAnl9gc4.js";
import "./schedule-CIHJDRP1.js";
import "./hooks-D9L2etUp.js";
import "./TextField-Cp09bA7b.js";
import "./useQuery-DDunbPo7.js";
import "./DialogContent-BYUB71wd.js";
import "./DialogTitle-uKDQB2FB.js";
import "./ListItemButton-xETcm3BH.js";
import "./listItemButtonClasses-DY9lmb0m.js";
import "./ListItemIcon-D-dTNtFj.js";
import "./ListItemText-D6vBvvMK.js";
import "./Stack-BCyivnLz.js";
import "./useThemeProps-B_Reo5-8.js";
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
//# sourceMappingURL=index-CTx_dyt0.js.map
