import "./ChatInput.scss";
import sendIcon from "assets/send.svg";

export function ChatInput() {
  return (
    <div className="chat-input">
      <input type="text" className="chat-input__el" placeholder="Message" />
      <button className="chat-input__send-btn">
        <img src={sendIcon} alt="send" />
      </button>
    </div>
  );
}
