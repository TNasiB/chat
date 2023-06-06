import { ChatCard } from "entities/ChatCard";
import "./ChatSidebar.scss";
import { ChatSearch } from "entities/ChatSearch";

export function ChatSidebar() {
  console.log(Array(20));
  return (
    <div className="chat-sidebar">
      <ChatSearch />
      {Array.from({ length: 20 }).map(() => (
        <ChatCard />
      ))}
    </div>
  );
}
