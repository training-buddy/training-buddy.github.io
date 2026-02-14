import { u as useAuth, j as jsxRuntimeExports, N as Navigate, c as routes, B as Box, P as Paper, T as Typography, d as LoginButton } from "./index-C1uuhD5W.js";
import { C as Container } from "./Container-B48StizD.js";
import "./useThemeProps-DAv5hN2S.js";
function LoginPage() {
  const { user, loading } = useAuth();
  if (loading) {
    return null;
  }
  if (user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: routes.dashboard.$(), replace: true });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxWidth: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { sx: { p: 4, textAlign: "center", width: "100%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", gutterBottom: true, children: "Training Buddy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", sx: { mb: 4 }, children: "훈련 계획을 세우고 진행 상황을 추적하세요" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoginButton, {})
      ] })
    }
  ) });
}
export {
  LoginPage
};
//# sourceMappingURL=index-DvVoaRmN.js.map
