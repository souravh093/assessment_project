import { IncomingMessage } from "http";

export const getUserAgent = (req: IncomingMessage): string => {
  return req.headers["user-agent"] || "unknown";
};