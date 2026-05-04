import { j as jsxRuntimeExports, g as Button, i as Link, b as routes, F as FitnessCenterIcon } from "./index-CvRd15Ij.js";
import { F as FolderOpenIcon } from "./FolderOpen-C6mWd005.js";
function parseFmUrl(unitName) {
  if (!unitName.startsWith("fm://")) return null;
  const parts = unitName.replace("fm://", "").split("/");
  if (parts.length < 2) return null;
  return {
    owner: parts[0],
    repo: parts[1],
    path: parts.length > 2 ? parts.slice(2).join("/") : void 0
  };
}
function PlanExecutionButton({ plan, size, variant }) {
  const fmInfo = parseFmUrl(plan.unit_name);
  if (fmInfo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        component: Link,
        to: routes.flashMan.contents.$({
          owner: fmInfo.owner,
          repo: fmInfo.repo,
          path: fmInfo.path
        }),
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpenIcon, {}),
        size,
        variant,
        children: "폴더이동"
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      component: Link,
      to: routes.executions.new.$({ planId: plan.id }),
      startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(FitnessCenterIcon, {}),
      size,
      variant,
      children: "훈련시작"
    }
  );
}
export {
  PlanExecutionButton as P
};
//# sourceMappingURL=PlanExecutionButton-CgJaqyFD.js.map
