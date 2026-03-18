import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = localStorage.getItem("scanpay_admin_auth") === "true";
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}
