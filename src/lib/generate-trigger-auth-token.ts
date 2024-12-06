import { auth } from "@trigger.dev/sdk/v3";

export async function generateTriggerPublicAccessToken() {
  return auth.createPublicToken({
    scopes: {
      read: {
        runs: true,
      },
    },
    expirationTime: "1h",
  });
}
