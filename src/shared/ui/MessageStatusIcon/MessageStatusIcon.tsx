import { Status } from "shared/types/Message";

export function MessageStatusIcon({ status }: { status: Status }) {
  return <div>{status}</div>;
}
