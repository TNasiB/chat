import { AuthAction } from "shared";
import "./SignupForm.scss";

interface SignupProps {
  onActionChange: (action: AuthAction) => void;
}

export function SignupForm(props: SignupProps) {
  return (
    <form className="login-form">
      <span>Create your account</span>
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
