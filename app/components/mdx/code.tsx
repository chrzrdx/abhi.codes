import * as React from "react";
export function Code({ children }: { children: React.ReactNode }) {
  return <code className="bg-red-10">{children}</code>;
}
