import { g as createSvgIcon, j as jsxRuntimeExports, bd as useParams, B as Box, e as Button, f as Link, c as routes, T as Typography } from "./index-BdFiX0VU.js";
import { B as BackIcon } from "./ArrowBack-Zch5sth9.js";
import { S as Stack } from "./Stack-BCyivnLz.js";
import "./useThemeProps-B_Reo5-8.js";
const EditIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}));
function ExecutionsDetailPage() {
  const { id } = useParams();
  const executionId = Number(id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { component: Link, to: routes.executions.$(), startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(BackIcon, {}), sx: { mb: 2 }, children: "목록으로" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", children: "훈련 기록 상세" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", sx: { mt: 2 }, children: "상세 보기는 준비 중입니다." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { direction: "row", spacing: 2, sx: { mt: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        component: Link,
        to: routes.executions.edit.$path({ id: executionId }, {}),
        variant: "outlined",
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(EditIcon, {}),
        children: "수정"
      }
    ) })
  ] });
}
export {
  ExecutionsDetailPage
};
//# sourceMappingURL=index-C5VAKq-s.js.map
