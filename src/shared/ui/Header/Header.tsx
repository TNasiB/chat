import { ReactNode } from "react";
import "./Header.scss";

export function Header(props: { children: ReactNode }) {
  return <header className="header">{props.children}</header>;
}
