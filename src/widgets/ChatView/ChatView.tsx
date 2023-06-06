import { ChatViewHeader } from "entities/ChatViewHeader";
import { Message } from "entities/Message";
import { ChatInput } from "shared/ui/ChatInput";
import "./ChatView.scss";

function ChatView() {
  return (
    <div className="chat-view">
      <ChatViewHeader />
      <div className="chat-view__container">
        <div className="chat-view__message-list">
          {Array.from({ length: 5 }).map(() => (
            <Message />
          ))}
        </div>

        <div className="chat-view__input-wrap">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export { ChatView };
