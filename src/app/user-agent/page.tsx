import { UserAgent } from "@/views/userAgent";
import { headers } from "next/headers";

const UserAgentRoot = () => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "unknown";
  return <UserAgent userAgent={userAgent} />;
};

export default UserAgentRoot;

