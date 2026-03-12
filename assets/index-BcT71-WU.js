import { a3 as useNavigate, u as useAuth, r as reactExports, j as jsxRuntimeExports, c as routes } from "./index-BdFiX0VU.js";
import { c as createTrainingPlan } from "./trainingPlans-2dqyKX-L.js";
import { P as PlanForm, f as formDataToPlanInsert } from "./planFormUtils-C9vDd_yj.js";
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
//# sourceMappingURL=index-BcT71-WU.js.map
