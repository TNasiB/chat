import { AuthAction } from "shared";
import "./LoginForm.scss";

interface LoginFormProps {
  onActionChange: (action: AuthAction) => void;
}

export function LoginForm(props: LoginFormProps) {
  return (
    <form className="login-form">
      <span>Login to your Account</span>
      <input type="text" />
      <input type="password" />
      <button>Submit</button>
      <span>
        Don't have account?
        <button onClick={() => props.onActionChange("signup")}>Create an account</button>
      </span>
    </form>
  );
}
