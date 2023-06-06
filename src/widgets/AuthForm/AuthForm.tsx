import { LoginForm } from "entities/LoginForm";
import "./AuthForm.scss";
import { useState } from "react";
import { AuthAction } from "shared";
import { SignupForm } from "entities/SignupForm";

export function AuthForm() {
  const [authAction, setAuthAction] = useState<AuthAction>("login");

  return (
    <div className="auth-form">
      {authAction === "login" ? (
        <LoginForm onActionChange={setAuthAction} />
      ) : (
        <SignupForm onActionChange={setAuthAction} />
      )}
    </div>
  );
}
