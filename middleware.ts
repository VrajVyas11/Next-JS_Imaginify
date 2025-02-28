import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/sign-in', '/sign-up', '/api/webhooks/clerk', '/api/webhooks/stripe']
});

export const config = {
  matcher: ["/((?!_next|.*\\..*|public).*)"],
};
