import { AuthAction } from "shared";
import "./SignupForm.scss";
import { ChangeEvent, useState } from "react";

interface SignupProps {
  onActionChange: (action: AuthAction) => void;
}

export function SignupForm(props: SignupProps) {
  const [regDto, setRegDto] = useState({
    username: "",
    password: "",
  });

  return (
    <form className="login-form">
      <span>Create your account</span>
      <input
        type="text"
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setRegDto((form) => ({
            ...form,
            username: e.target.value,
          }))
        }
      />
      <input
        type="password"
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setRegDto((form) => ({
            ...form,
            password: e.target.value,
          }))
        }
      />
      <button>Submit</button>
      <span>
        Don't have account?
        <button onClick={() => props.onActionChange("signup")}>Create an account</button>
      </span>
    </form>
  );
}
