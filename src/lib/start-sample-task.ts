export const startTask = async () => {
  const res = await fetch("/api/trigger-task", {
    method: "POST",
  });

  if (!res.ok) {
    console.log("Failed to start task");
    return null;
  }

  const data = (await res.json()) as { runId: string };
  return data.runId;
};
