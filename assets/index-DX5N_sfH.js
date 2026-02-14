import { a3 as useNavigate, u as useAuth, r as reactExports, j as jsxRuntimeExports, c as routes } from "./index-C1uuhD5W.js";
import { c as createTrainingPlan } from "./trainingPlans-DiVfVaoS.js";
import { P as PlanForm, f as formDataToPlanInsert } from "./planFormUtils-DouwyzMp.js";
import "./hooks-BogG25WI.js";
import "./useOnMount-BxoUUqFc.js";
import "./isMuiElement-BSAHsO-I.js";
import "./TextField-BbDGCLkb.js";
import "./NumberSpinner-DPW64Sxl.js";
import "./schedule-DhBQ9WQn.js";
import "./DialogContent-BctuCRzl.js";
import "./DialogTitle-DqCPAYLx.js";
import "./ListItemText-DdsbBg4Q.js";
import "./listItemButtonClasses-BEms6JaZ.js";
import "./ListItemIcon-O6ik4W5-.js";
import "./Stack-CYM_t3D0.js";
import "./useThemeProps-DAv5hN2S.js";
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
//# sourceMappingURL=index-DX5N_sfH.js.map
