"use client";

import { parseStatus } from "@/lib/parse-status";
import { type RunStatus } from "@trigger.dev/core/v3";
import { useRealtimeRun } from "@trigger.dev/react-hooks";

interface RunProgressState {
  state: RunStatus;
  progress: number;
  label: string;
}

/**
 * Hook that subscribes to the generateFunctionDocs task and returns the status and output of the task.
 *
 * Uses the `useRealtimeRun` hook to subscribe to the task.
 *
 * See more about the `useRealtimeRun` hook in the [Trigger docs](https://trigger.dev/docs/frontend/react-hooks#userealtimerun).
 *
 * @param id the run id of the generateFunctionDocs task
 */
export function useProgressRun(id?: string) {
  const { run, error } = useRealtimeRun(id, {
    onComplete: () => {
      console.log("hey!, the run has been completed");
    },
  });

  const status: RunProgressState = {
    state: run?.status ?? "QUEUED",
    progress: 0,
    label: "Initializing...",
  };

  // Parse metadata if available
  if (run?.metadata) {
    const { progress, label } = parseStatus(run.metadata);
    status.progress = progress;
    status.label = label;
  }

  return {
    status,
    error,
    run,
  };
}
