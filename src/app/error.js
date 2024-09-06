"use client";

import { Button } from "@/components/Button";

export default function ErrorPage({ error, reset }) {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>500 - Server Error</h1>
      <p>Sorry, there was a problem with the server.</p>
      <br />
      <Button onClick={() => reset()}>Retry</Button>
    </div>
  );
}
