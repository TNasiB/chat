import { ChatSidebar } from "widgets/ChatSidebar";
import "./Workplace.scss";
import { ChatView } from "widgets/ChatView/ChatView";
import { useNavigate } from "react-router-dom";
import { checkTokenByCookie } from "shared";
import { useEffect } from "react";

export function Workplace() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkTokenByCookie("Authorization")) {
      navigate("/auth");
    }
  });

  return (
    <main className="workplace">
      <ChatSidebar />
      <ChatView />
    </main>
  );
}
