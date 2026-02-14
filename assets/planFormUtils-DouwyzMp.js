import { r as reactExports, j as jsxRuntimeExports, B as Box, C as CircularProgress, a9 as useAtomValue, L as List, T as Typography, n as Button, A as Alert, I as IconButton, P as Paper } from "./index-C1uuhD5W.js";
import { u as useBaseQuery, Q as QueryObserver, a as useOctokit, g as getContents, c as countFlashManFiles, f as flashManConfigAtom, b as useRepositoryList, A as Autocomplete, B as Breadcrumbs, L as Link, d as FolderIcon, F as FolderOpenIcon, R as RadioGroup, e as FormControlLabel, h as Radio, T as ToggleButtonGroup, i as ToggleButton } from "./hooks-BogG25WI.js";
import { N as NumberSpinner } from "./NumberSpinner-DPW64Sxl.js";
import { c as calculateTotalSessions, b as calculateEndDate, A as ALL_WEEKDAYS, a as getWeekDayLabel, f as formatDate } from "./schedule-DhBQ9WQn.js";
import { a as Dialog, b as DialogContent, c as DialogActions } from "./DialogContent-BctuCRzl.js";
import { D as DialogTitle } from "./DialogTitle-DqCPAYLx.js";
import { T as TextField } from "./TextField-BbDGCLkb.js";
import { L as ListItemButton, a as ListItemText } from "./ListItemText-DdsbBg4Q.js";
import { L as ListItemIcon } from "./ListItemIcon-O6ik4W5-.js";
import { S as Stack } from "./Stack-CYM_t3D0.js";
import { a as FormControl, b as FormLabel } from "./useOnMount-BxoUUqFc.js";
function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver);
}
function useGetContent(contentIdentifier) {
  const owner = contentIdentifier?.owner ?? "";
  const repo = contentIdentifier?.repo ?? "";
  const path = contentIdentifier?.path ?? "";
  const octokit = useOctokit();
  return useQuery({
    queryKey: ["useGetContent", owner, repo, path],
    queryFn: () => {
      if (owner && repo) {
        return getContents(octokit, { owner, repo }, path);
      }
    }
  });
}
function useGetDirectories(contentIdentifier) {
  const { data: dataOrig, ...rest } = useGetContent(contentIdentifier);
  const data = reactExports.useMemo(() => {
    if (Array.isArray(dataOrig)) {
      return dataOrig.filter((item) => item.type === "dir");
    }
    return [];
  }, [dataOrig]);
  return {
    ...rest,
    data
  };
}
function useFmCount(contentIdentifier) {
  const owner = contentIdentifier?.owner ?? "";
  const repo = contentIdentifier?.repo ?? "";
  const path = contentIdentifier?.path ?? "";
  const octokit = useOctokit();
  return useQuery({
    queryKey: ["useFmCount", owner, repo, path],
    queryFn: () => {
      if (owner && repo) {
        return countFlashManFiles(octokit, { owner, repo }, path);
      }
    }
  });
}
function DialogInner({ onClose, onSelect }) {
  const config = useAtomValue(flashManConfigAtom);
  const repos = useRepositoryList(config.repos);
  const [selectedRepo, setSelectedRepo] = reactExports.useState();
  const [currentPath, setCurrentPath] = reactExports.useState("");
  const [repeatCount, setRepeatCount] = reactExports.useState(1);
  const contentIdentifier = reactExports.useMemo(() => {
    const owner = selectedRepo?.owner ?? "";
    const repo = selectedRepo?.repo ?? "";
    return {
      owner,
      repo,
      path: currentPath
    };
  }, [currentPath, selectedRepo]);
  const { isLoading, data: directories } = useGetDirectories(contentIdentifier);
  const { isLoading: isLoadingCount, data: fmFileCount = 0 } = useFmCount(contentIdentifier);
  function handleRepoChange(value) {
    setSelectedRepo(value);
    setCurrentPath("");
  }
  function handleDirectoryClick(dir) {
    if (!selectedRepo) return;
    setCurrentPath(dir.path);
  }
  function handleBreadcrumbClick(index) {
    if (!selectedRepo) return;
    const parts = currentPath.split("/");
    const newPath = parts.slice(0, index + 1).join("/");
    setCurrentPath(newPath);
  }
  function handleBreadcrumbRoot() {
    if (!selectedRepo) return;
    setCurrentPath("");
  }
  function handleSelect() {
    if (!selectedRepo || fmFileCount === null) return;
    onSelect({
      owner: selectedRepo.owner,
      repo: selectedRepo.repo,
      path: currentPath,
      fileCount: fmFileCount * repeatCount
    });
  }
  const pathParts = currentPath ? currentPath.split("/") : [];
  const currentRepoValue = selectedRepo ? repos.find((r) => r.owner === selectedRepo.owner && r.repo === selectedRepo.repo) || null : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Flash-Man 폴더 선택" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 2, mt: 1, position: "relative" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Autocomplete,
        {
          fullWidth: true,
          options: repos,
          getOptionLabel: (option) => option.label,
          value: currentRepoValue,
          onChange: (_, newValue) => {
            handleRepoChange(
              newValue ? { owner: newValue.owner, repo: newValue.repo } : void 0
            );
          },
          renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { ...params, label: "레포지터리" })
        }
      ),
      selectedRepo && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Breadcrumbs, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              component: "button",
              underline: "hover",
              onClick: handleBreadcrumbRoot,
              color: currentPath ? "inherit" : "text.primary",
              children: selectedRepo.repo
            }
          ),
          pathParts.map((part, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              component: "button",
              underline: "hover",
              onClick: () => handleBreadcrumbClick(index),
              color: index === pathParts.length - 1 ? "text.primary" : "inherit",
              children: part
            },
            index
          ))
        ] }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) }) : directories.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(List, { dense: true, children: directories.map((dir) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ListItemButton, { onClick: () => handleDirectoryClick(dir), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderIcon, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { primary: dir.name })
        ] }, dir.path)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { py: 2 }, children: "하위 폴더가 없습니다." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: ({ palette }) => ({
              position: "sticky",
              bottom: "-24px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              // backdropFilter: 'blur(8px)',
              backgroundColor: palette.background.paper,
              gap: 2
            }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                NumberSpinner,
                {
                  size: "small",
                  label: "반복횟수",
                  min: 1,
                  value: repeatCount,
                  onValueChange: (value) => {
                    if (value) {
                      setRepeatCount(value);
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { whiteSpace: "nowrap" }, children: [
                  "파일 수: ",
                  isLoadingCount ? "확인 중..." : fmFileCount ?? "-"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "body2", sx: { whiteSpace: "nowrap" }, children: [
                  "전체 훈련량: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: fmFileCount ? fmFileCount * repeatCount : "-" })
                ] })
              ] })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onClose, children: "취소" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          onClick: handleSelect,
          disabled: !selectedRepo || fmFileCount === 0,
          children: "선택"
        }
      )
    ] })
  ] });
}
function FlashManFolderDialog({ open, onClose, onSelect }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    reactExports.Suspense,
    {
      fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) }),
      children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(DialogInner, { onClose, onSelect })
    }
  ) });
}
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
  const [fmDialogOpen, setFmDialogOpen] = reactExports.useState(false);
  function handleFmSelect(result) {
    const unitName = `fm://${result.owner}/${result.repo}${result.path ? "/" + result.path : ""}`;
    setFormData((prev) => ({
      ...prev,
      unitName,
      totalAmount: result.fileCount
    }));
    setFmDialogOpen(false);
  }
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: () => setFmDialogOpen(true), title: "Flash-Man 폴더 선택", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpenIcon, {}) })
      ] }),
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
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FlashManFolderDialog,
      {
        open: fmDialogOpen,
        onClose: () => setFmDialogOpen(false),
        onSelect: handleFmSelect
      }
    )
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
  planToFormData as p,
  useQuery as u
};
//# sourceMappingURL=planFormUtils-DouwyzMp.js.map
