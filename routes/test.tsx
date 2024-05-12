import { useSignal } from "@preact/signals";
import Location from "../islands/uiElements.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <p class="my-4">
          test
        </p>
        <Location />
    </div>
  );
}