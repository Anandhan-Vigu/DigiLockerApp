import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("authenticator", "routes/authenticator.tsx"),
  route("drive", "routes/drive.tsx"),
  route("document-you-might-need/:name", "routes/document-you-might-need.tsx"),
  route("nominee", "routes/nominee.tsx"),
  route("government-employee", "routes/government-employee.tsx"),
  route("scan-qr", "routes/scan-qr.tsx"),
  route("my-consents", "routes/my-consents.tsx"),
  route("verifiable-credential", "routes/verifiable-credential.tsx"),
  route("issued-documents", "routes/issued-documents.tsx"),
  route("profile-menu", "routes/profile-menu.tsx"),
  route("abha", "routes/abha.tsx"),
  route("my-activity", "routes/my-activity.tsx"),
  route("issued", "routes/issued.tsx"),
  route("umang", "routes/umang.tsx")
] satisfies RouteConfig;