import { useLocation } from "react-router-dom";
import { backTargets } from "./backTargets";

function readFrom(state: unknown): string | null {
  if (state && typeof state === "object" && "from" in state) {
    const from = (state as { from: unknown }).from;

    if (
      typeof from === "string" &&
      Object.prototype.hasOwnProperty.call(backTargets, from)
    ) {
      return from;
    }
  }

  return null;
}

/**
 * The route a back link should return to: where the visitor came from when the
 * link that brought them here recorded it, otherwise the caller's fallback.
 */
export function useBackTarget(fallback: string): string {
  const { state } = useLocation();

  return readFrom(state) ?? fallback;
}
