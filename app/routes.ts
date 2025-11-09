import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("authenticator", "routes/authenticator.tsx"),
  route("scanner", "routes/scanner.tsx"),
  route("drive", "routes/drive.tsx"),
route("document-you-might-need/:name", "routes/document-you-might-need.tsx"),
  route("nominationservice", "routes/nominationservice.tsx"),
  route("governmentemployee", "routes/governmentemployee.tsx"),
    route("qr-code-scanner", "routes/qr-code-scanner.tsx"),
    route("my-consents", "routes/my-consents.tsx"),
        route("verifiable-credential", "routes/verifiable-credential.tsx"),

            route("issued-documents", "routes/issued-documents.tsx"),

                route("profile-menu", "routes/profile-menu.tsx"),

                    route("abha", "routes/abha.tsx"),

                        // route("", "routes/.tsx"),

                            // route("", "routes/.tsx"),

                                // route("", "routes/.tsx"),







] satisfies RouteConfig;