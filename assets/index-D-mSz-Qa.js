import { h as generateUtilityClass, i as generateUtilityClasses, a as reactExports, k as useDefaultProps, j as jsxRuntimeExports, m as clsx, n as composeClasses, p as styled, T as Typography, y as rootShouldForwardProp, b8 as useParams, a3 as useNavigate, B as Box, C as CircularProgress, A as Alert, c as Button, d as Link, r as routes, P as Paper, e as Chip } from "./index-BH1KDpcB.js";
import { a as getTrainingPlan, d as deleteTrainingPlan } from "./trainingPlans-Bizb9YVb.js";
import { c as calculateTotalSessions, b as calculateEndDate, a as getWeekDayLabel, f as formatDate } from "./schedule-DhBQ9WQn.js";
import { B as BackIcon } from "./ArrowBack-p1RLECyd.js";
import { S as Stack } from "./Stack-C597HjvC.js";
import { D as DialogContext, g as getDialogTitleUtilityClass, a as Dialog, b as DialogContent, c as DialogActions } from "./DialogContent-CTLVrEIe.js";
import "./useThemeProps-CHZwBfrq.js";
function getDialogContentTextUtilityClass(slot) {
  return generateUtilityClass("MuiDialogContentText", slot);
}
generateUtilityClasses("MuiDialogContentText", ["root"]);
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  const composedClasses = composeClasses(slots, getDialogContentTextUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the Typography
    ...composedClasses
  };
};
const DialogContentTextRoot = styled(Typography, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiDialogContentText",
  slot: "Root"
})({});
const DialogContentText = /* @__PURE__ */ reactExports.forwardRef(function DialogContentText2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogContentText"
  });
  const {
    children,
    className,
    ...ownerState
  } = props;
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentTextRoot, {
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref,
    ownerState,
    className: clsx(classes.root, className),
    ...props,
    classes
  });
});
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDialogTitleUtilityClass, classes);
};
const DialogTitleRoot = styled(Typography, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
});
const DialogTitle = /* @__PURE__ */ reactExports.forwardRef(function DialogTitle2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogTitle"
  });
  const {
    className,
    id: idProp,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const {
    titleId = idProp
  } = reactExports.useContext(DialogContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitleRoot, {
    component: "h2",
    className: clsx(classes.root, className),
    ownerState,
    ref,
    variant: "h6",
    id: idProp ?? titleId,
    ...other
  });
});
function PlansDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = reactExports.useState(false);
  const [deleting, setDeleting] = reactExports.useState(false);
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
  async function handleDelete() {
    if (!plan) return;
    try {
      setDeleting(true);
      await deleteTrainingPlan(plan.id);
      navigate(routes.plans.$());
    } catch (err) {
      setError("삭제에 실패했습니다.");
      console.error(err);
    } finally {
      setDeleting(false);
      setDeleteDialogOpen(false);
    }
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", children: error });
  }
  if (!plan) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "warning", children: "훈련 계획을 찾을 수 없습니다." });
  }
  const totalSessions = calculateTotalSessions(plan);
  const endDate = calculateEndDate(plan);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { component: Link, to: routes.plans.$(), startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(BackIcon, {}), sx: { mb: 2 }, children: "목록으로" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { sx: { p: 3 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", gutterBottom: true, children: plan.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, sx: { mt: 3 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: "훈련 단위" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, sx: { mt: 0.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: `${plan.unit_amount} ${plan.unit_name}/회` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: `총 ${plan.total_amount} ${plan.unit_name}`, variant: "outlined" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: "훈련 주기" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { children: plan.schedule_type === "daily" ? "매일" : `매주 ${plan.schedule_days?.map(getWeekDayLabel).join(", ")}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", children: "훈련 일정" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { children: [
            "시작일: ",
            formatDate(new Date(plan.start_date))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { children: [
            "예상 종료일: ",
            formatDate(endDate)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { children: [
            "총 훈련 횟수: ",
            totalSessions,
            "회"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, sx: { mt: 4 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            component: Link,
            to: routes.executions.new.$({ planId: plan.id }),
            variant: "contained",
            children: "훈련 시작"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            component: Link,
            to: routes.plans.edit.$(plan.id),
            variant: "outlined",
            children: "수정"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            color: "error",
            onClick: () => setDeleteDialogOpen(true),
            children: "삭제"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: deleteDialogOpen, onClose: () => setDeleteDialogOpen(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "훈련 계획 삭제" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContentText, { children: [
        '"',
        plan.name,
        '" 계획을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.'
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setDeleteDialogOpen(false), disabled: deleting, children: "취소" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleDelete, color: "error", disabled: deleting, children: deleting ? "삭제 중..." : "삭제" })
      ] })
    ] })
  ] });
}
export {
  PlansDetailPage
};
//# sourceMappingURL=index-D-mSz-Qa.js.map
