"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProgressRun } from "@/lib/use-progress-run";

export default function PageClient({ runId }: { runId: string }) {
  const { run, status } = useProgressRun(runId);

  return (
    <div className="container py-12">
      <Card>
        {!run && (
          <>
            <CardHeader>
              <CardTitle>🐛 BUG</CardTitle>
            </CardHeader>
            <CardContent>wait run start 😉</CardContent>
          </>
        )}
        {run && status && (
          <CardContent className="py-6">
            <p className="mb-4 leading-relaxed">
              See in network tab from devtools, the realtime request never stop,
              even tasks is completed.
            </p>
            <div className="text-sm mb-1 gap-1 flex">
              <span>State:</span>
              <Badge>{status.state}</Badge>
            </div>
            <Progress value={status.progress} max={100} />

            {run.status === "COMPLETED" && (
              <div className="flex justify-center mt-6">
                <Button onClick={() => window.location.reload()}>
                  Start another run
                </Button>
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
}
