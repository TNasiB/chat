import { Message as MessageProps } from "shared/types";
import "./Message.scss";
import { MessageStatusIcon } from "shared/ui/MessageStatusIcon";

export function Message({
  content = "Hello world",
  statusMessage = "read",
  dt = "18:12",
}: MessageProps) {
  return (
    <div className="message">
      <p className="message__content">{content}</p>
      <div className="message__footer">
        <span className="message__dt">{dt}</span>
        <MessageStatusIcon status={statusMessage} />
      </div>
    </div>
  );
}
