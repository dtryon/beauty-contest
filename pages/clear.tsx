import { useCallback } from "react";

export default function Index() {
  const clearGuesses = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      await fetch("/api/clear", {
        method: "POST",
      });
    },
    []
  );

  return (
    <div className="space-y-4 m-4 max-w-xs text-center">
      <h1 className="font-serif text-4xl tracking-widest text-gray-500">
        Beauty Contest
      </h1>
      <p className="text-center">
        <button className="text-sm" onClick={clearGuesses}>
          Clear Guesses
        </button>
      </p>
    </div>
  );
}
