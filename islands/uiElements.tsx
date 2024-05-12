import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { denoPlugins } from "$fresh/src/build/deps.ts";

interface CounterProps {
  count: Signal<number>;
}

export default function Location() {
  return (
    <div class="flex gap-8 py-6">
      <h1>this is your location</h1>
      <button onClick={() => Deno.exit()}>heheboy</button>
    </div>
  );
}
