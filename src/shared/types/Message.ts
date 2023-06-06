export type Status = "read" | "sended" | "wait" | "error";

export interface Message {
  content: string;
  dt: string;
  statusMessage: Status;
}
