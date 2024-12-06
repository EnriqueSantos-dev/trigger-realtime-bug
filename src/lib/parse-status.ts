import { metadata } from "@trigger.dev/sdk/v3";
import { z } from "zod";

const RunProgressStatus = z.object({
  progress: z.number(),
  label: z.string(),
});

type RunProgressStatus = z.infer<typeof RunProgressStatus>;

const RunMetadata = z.object({
  status: RunProgressStatus,
});

type RunMetadata = z.infer<typeof RunMetadata>;

/**
 * Update the status of the generate function docs task. Wraps the `metadata.set` method.
 */
export function updateStatus(status: RunProgressStatus) {
  // `metadata.set` can be used to update the status of the task
  // as long as `updateStatus` is called within the task's `run` function.
  metadata.set("status", status);
}

/**
 * Parse the status from the metadata.
 *
 * Used by the `useGenerateFunctionDocs` hook to parse the status
 */
export function parseStatus(data: unknown): RunProgressStatus {
  return RunMetadata.parse(data).status;
}
