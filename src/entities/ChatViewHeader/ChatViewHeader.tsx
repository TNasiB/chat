import { Header } from "shared/ui/Header";
import "./ChatViewHeader.scss";
import { Avatar } from "shared/ui/Avatar";

export function ChatViewHeader() {
  return (
    <Header>
      <div className="chat-view-header__user">
        <div className="chat-view-header__avatar">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s"
            alt="test"
          />
        </div>
        <span className="chat-view-header__username">David More</span>
        <span className="chat-view-header__recent-dt">last seen 5 mins ago</span>
      </div>
    </Header>
  );
}
