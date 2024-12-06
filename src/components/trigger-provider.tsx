"use client";

import { ReactNode } from "react";
import { TriggerAuthContext } from "@trigger.dev/react-hooks";

export default function TriggerProvider({
  children,
  accessToken,
}: {
  children: ReactNode;
  accessToken: string;
}) {
  return (
    <TriggerAuthContext.Provider value={{ accessToken }}>
      {children}
    </TriggerAuthContext.Provider>
  );
}
