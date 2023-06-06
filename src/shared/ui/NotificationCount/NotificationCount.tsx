import "./NotificationCount.scss";

export const NotificationCount = ({ count = 1 }: { count: number }) => {
  return <div className="notif-count">{count}</div>;
};
