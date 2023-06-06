import { Avatar } from "shared/ui/Avatar";
import { ChatCardProps } from "./types";
import { Verify } from "shared/ui/Verify";
import { NotificationCount } from "shared/ui/NotificationCount";
import "./ChatCard.scss";

export function ChatCard({
  username = "tnasib",
  avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYHmWUYy0wjQY0s58z4uIQR55wYcS49DPX7kLXYcAPOQ&s",
  lastMessageDt = "11:21",
  unreadCount = 2,
  verfiy = true,
  lastMessage = "Ok, see u later!",
}: Partial<ChatCardProps>) {
  return (
    <article className="chat-card">
      <Avatar src={avatar} alt={username} />
      <div className="chat-card__inner">
        <div className="chat-card__header">
          <span className="chat-card__username">{username}</span>
          {verfiy && <Verify />}
          <span className="chat-card__read-dt">{lastMessageDt}</span>
        </div>
        <div className="chat-card__info">
          <span className="chat-card__message">{lastMessage}</span>
          <NotificationCount count={unreadCount} />
        </div>
      </div>
    </article>
  );
}
