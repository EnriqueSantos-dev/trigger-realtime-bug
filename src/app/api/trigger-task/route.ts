import { tasks } from "@trigger.dev/sdk/v3";

export async function POST() {
  try {
    const handle = await tasks.trigger("hello-world", {});
    return Response.json({ runId: handle.id }, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Failed to start task" }, { status: 500 });
  }
}
