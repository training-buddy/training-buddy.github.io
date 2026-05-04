import { r as reactExports, j as jsxRuntimeExports, c as Dialog, d as DialogTitle, e as DialogContent, f as DialogActions, g as Button } from "./index-CvRd15Ij.js";
import { D as DialogContentText } from "./DialogContentText-BeHsgYMR.js";
function LearnBlocker() {
  const [open, setOpen] = reactExports.useState(false);
  const confirmedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    const handlePopState = () => {
      if (confirmedRef.current) return;
      window.history.pushState(null, "", window.location.href);
      setOpen(true);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  const handleConfirm = () => {
    confirmedRef.current = true;
    setOpen(false);
    window.history.go(-2);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: true, onClose: handleCancel, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "학습을 종료할까요?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentText, { children: "지금 나가면 현재 학습 진행 상황이 저장되지 않습니다." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleCancel, children: "계속 학습" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleConfirm, color: "error", children: "나가기" })
    ] })
  ] });
}
export {
  LearnBlocker as L
};
//# sourceMappingURL=LearnBlocker-CbSglmsg.js.map
