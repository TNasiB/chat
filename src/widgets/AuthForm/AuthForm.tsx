import { LoginForm } from "entities/LoginForm";
import { useState } from "react";
import { AuthAction } from "shared";
import { SignupForm } from "entities/SignupForm";
import { useAuthQuery } from "./model/api";
import "./AuthForm.scss";

export function AuthForm() {
  const [authAction, setAuthAction] = useState<AuthAction>("login");

  function handleLogin() {
    useAuthQuery();
  }

  function handleSignUp() {}

  return (
    <div className="auth-form">
      {authAction === "login" ? (
        <LoginForm onActionChange={setAuthAction} onLogin={handleLogin} />
      ) : (
        <SignupForm onActionChange={setAuthAction} onSignUp={handleSignUp} />
      )}
    </div>
  );
}
