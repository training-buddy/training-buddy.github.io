import { _ as useNavigate, u as useAuth, r as reactExports, j as jsxRuntimeExports, b as routes } from "./index-CvRd15Ij.js";
import { c as createTrainingPlan } from "./trainingPlans-JsHeONct.js";
import { P as PlanForm, f as formDataToPlanInsert } from "./planFormUtils-3BiPippH.js";
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
//# sourceMappingURL=index-BZ7krCjw.js.map
