import { updateStatus } from "@/lib/parse-status";
import { logger, task, wait } from "@trigger.dev/sdk/v3";

export const helloWorldTask = task({
  id: "hello-world",
  // Set an optional maxDuration to prevent tasks from running indefinitely
  maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
  run: async () => {
    updateStatus({ progress: 0, label: "Initializing..." });
    await wait.for({ seconds: 3 });

    logger.log("waited for 3000 seconds");
    updateStatus({ progress: 50, label: "Halfway there..." });
    await wait.for({ seconds: 5 });

    logger.log("waited for 5000 seconds");
    updateStatus({ progress: 100, label: "Done!" });
    return { message: "Hello, world!" };
  },
});
