import TriggerProvider from "@/components/trigger-provider";
import { generateTriggerPublicAccessToken } from "@/lib/generate-trigger-auth-token";
import { tasks } from "@trigger.dev/sdk/v3";
import PageClient from "./_components/page-client";

export default async function Home() {
  const publicAccessToken = await generateTriggerPublicAccessToken();
  const handle = await tasks.trigger("hello-world", {});

  return (
    <TriggerProvider accessToken={publicAccessToken}>
      <PageClient runId={handle.id} />
    </TriggerProvider>
  );
}
