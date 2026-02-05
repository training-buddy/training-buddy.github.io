import { a3 as useNavigate, u as useAuth, a as reactExports, j as jsxRuntimeExports, r as routes } from "./index-BH1KDpcB.js";
import { c as createTrainingPlan } from "./trainingPlans-Bizb9YVb.js";
import { P as PlanForm, f as formDataToPlanInsert } from "./planFormUtils-DurbCVV3.js";
import "./NumberSpinner-xooKfIxY.js";
import "./useOnMount-D-IaBeB4.js";
import "./isMuiElement-8dTM_GMp.js";
import "./schedule-DhBQ9WQn.js";
import "./Stack-C597HjvC.js";
import "./useThemeProps-CHZwBfrq.js";
import "./TextField-bBTmXN4s.js";
import "./ToggleButtonGroup-zfJ_XPzw.js";
function PlansNewPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  async function handleSubmit(data) {
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
      setLoading(true);
      setError(null);
      await createTrainingPlan(formDataToPlanInsert(data, user.id));
      navigate(routes.plans.$());
    } catch (err) {
      setError("계획 생성에 실패했습니다.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  function handleCancel() {
    navigate(routes.plans.$());
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    PlanForm,
    {
      onSubmit: handleSubmit,
      onCancel: handleCancel,
      loading,
      error,
      title: "새 훈련 계획",
      submitLabel: "계획 생성",
      loadingLabel: "생성 중..."
    }
  );
}
export {
  PlansNewPage
};
//# sourceMappingURL=index-8NS6tfe4.js.map
