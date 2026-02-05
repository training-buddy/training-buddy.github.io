import { a as reactExports, j as jsxRuntimeExports, B as Box, T as Typography, A as Alert, P as Paper, c as Button } from "./index-BH1KDpcB.js";
import { N as NumberSpinner } from "./NumberSpinner-xooKfIxY.js";
import { c as calculateTotalSessions, b as calculateEndDate, A as ALL_WEEKDAYS, a as getWeekDayLabel, f as formatDate } from "./schedule-DhBQ9WQn.js";
import { S as Stack } from "./Stack-C597HjvC.js";
import { T as TextField } from "./TextField-bBTmXN4s.js";
import { F as FormControl, a as FormLabel } from "./useOnMount-D-IaBeB4.js";
import { R as RadioGroup, F as FormControlLabel, a as Radio, T as ToggleButtonGroup, b as ToggleButton } from "./ToggleButtonGroup-zfJ_XPzw.js";
function PlanForm({
  initialData,
  onSubmit,
  onCancel,
  loading,
  error,
  submitLabel,
  loadingLabel,
  title
}) {
  const [formData, setFormData] = reactExports.useState({
    name: initialData?.name ?? "",
    unitName: initialData?.unitName ?? "",
    unitAmount: initialData?.unitAmount ?? 1,
    totalAmount: initialData?.totalAmount ?? 100,
    scheduleType: initialData?.scheduleType ?? "daily",
    scheduleDays: initialData?.scheduleDays ?? ["mon", "tue", "wed", "thu", "fri"],
    startDate: initialData?.startDate ?? (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  });
  const previewPlan = {
    name: formData.name,
    unit_name: formData.unitName,
    unit_amount: formData.unitAmount,
    total_amount: formData.totalAmount,
    schedule_type: formData.scheduleType,
    schedule_days: formData.scheduleType === "weekly" ? formData.scheduleDays : null,
    start_date: formData.startDate
  };
  const totalSessions = calculateTotalSessions({
    ...previewPlan
  });
  const endDate = calculateEndDate({
    ...previewPlan
  });
  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(formData);
  }
  function handleScheduleDaysChange(_, newDays) {
    setFormData((prev) => ({ ...prev, scheduleDays: newDays }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "form", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", gutterBottom: true, children: title }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { severity: "error", sx: { mb: 2 }, children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          label: "계획 이름",
          value: formData.name,
          onChange: (e) => setFormData((prev) => ({ ...prev, name: e.target.value })),
          placeholder: "예: 알고리즘 문제풀이",
          fullWidth: true,
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          label: "훈련 단위",
          value: formData.unitName,
          onChange: (e) => setFormData((prev) => ({ ...prev, unitName: e.target.value })),
          placeholder: "예: 문제, 페이지, 강의",
          fullWidth: true,
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NumberSpinner,
        {
          style: { marginTop: "1rem" },
          label: "1회당 훈련량",
          min: 1,
          value: formData.unitAmount,
          onValueChange: (value) => {
            if (value) {
              setFormData((prev) => ({ ...prev, unitAmount: value }));
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NumberSpinner,
        {
          label: "전체 훈련량",
          min: 1,
          value: formData.totalAmount,
          onValueChange: (value) => {
            if (value) {
              setFormData((prev) => ({ ...prev, totalAmount: value }));
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          label: "시작일",
          type: "date",
          value: formData.startDate,
          onChange: (e) => setFormData((prev) => ({ ...prev, startDate: e.target.value })),
          fullWidth: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "훈련 주기" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          RadioGroup,
          {
            row: true,
            value: formData.scheduleType,
            onChange: (e) => setFormData((prev) => ({ ...prev, scheduleType: e.target.value })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlLabel, { value: "daily", control: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, {}), label: "매일" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlLabel, { value: "weekly", control: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, {}), label: "주간 (요일 선택)" })
            ]
          }
        )
      ] }),
      formData.scheduleType === "weekly" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { sx: { mb: 1, display: "block" }, children: "훈련 요일" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ToggleButtonGroup,
          {
            value: formData.scheduleDays,
            onChange: handleScheduleDaysChange,
            "aria-label": "훈련 요일",
            children: ALL_WEEKDAYS.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButton, { value: day, children: getWeekDayLabel(day) }, day))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Paper,
        {
          sx: {
            p: 2,
            bgcolor: (theme) => theme.palette.mode === "dark" ? "grey.900" : "grey.50"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", color: "text.secondary", gutterBottom: true, children: "예상 훈련 정보" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
              "총 훈련 횟수: ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                totalSessions,
                "회"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", children: [
              "예상 종료일: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatDate(endDate) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", onClick: onCancel, disabled: loading, children: "취소" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "contained", disabled: loading, children: loading ? loadingLabel : submitLabel })
      ] })
    ] })
  ] });
}
function planToFormData(plan) {
  return {
    name: plan.name,
    unitName: plan.unit_name,
    unitAmount: plan.unit_amount,
    totalAmount: plan.total_amount,
    scheduleType: plan.schedule_type,
    scheduleDays: plan.schedule_days ?? ["mon", "tue", "wed", "thu", "fri"],
    startDate: plan.start_date
  };
}
function formDataToPlanInsert(data, userId) {
  return {
    user_id: userId,
    name: data.name,
    unit_name: data.unitName,
    unit_amount: data.unitAmount,
    total_amount: data.totalAmount,
    schedule_type: data.scheduleType,
    schedule_days: data.scheduleType === "weekly" ? data.scheduleDays : null,
    start_date: data.startDate
  };
}
function formDataToPlanUpdate(data) {
  return {
    name: data.name,
    unit_name: data.unitName,
    unit_amount: data.unitAmount,
    total_amount: data.totalAmount,
    schedule_type: data.scheduleType,
    schedule_days: data.scheduleType === "weekly" ? data.scheduleDays : null,
    start_date: data.startDate
  };
}
export {
  PlanForm as P,
  formDataToPlanUpdate as a,
  formDataToPlanInsert as f,
  planToFormData as p
};
//# sourceMappingURL=planFormUtils-DurbCVV3.js.map
