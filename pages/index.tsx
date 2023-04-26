import { useCallback } from "react";
import Link from "next/link";

export default function Index() {
  const addGuess = useCallback(async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      guess: { value: string };
    };
    const name = target.name.value;
    const guess = target.guess.value;

    await fetch("/api/guess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, guess }),
    });
  }, []);

  return (
    <div className="space-y-4 m-4 max-w-xs text-center">
      <h1 className="font-serif text-4xl tracking-widest text-gray-500">
        Beauty Contest
      </h1>
      <h3 className="text-lg text-slate-800">Enter a number from 1 to 100</h3>
      <p className="text-sm text-slate-600 text-justify">
        Your goal to guess the value that is 2/3rds of the average guess.
        <br />
        For example: If the average guess is 90, the correct guess will be 60.
      </p>
      <form className="space-y-2 text-justify" onSubmit={(e) => addGuess(e)}>
        <label>
          <input
            className="form-input m-2 w-64"
            type="text"
            name="name"
            placeholder="Name"
          />
        </label>
        <label>
          <input
            className="form-input m-2 w-32"
            type="number"
            min="1"
            max="100"
            name="guess"
            placeholder="Guess"
          />
        </label>
        <br />
        <input
          className="rounded-md m-2 w-32 h-11 bg-blue-900 text-white uppercase"
          type="submit"
        />
      </form>

      <div className="space-y-4">
        <Link className="text-sm" href="/result">
          Get Result
        </Link>
      </div>
    </div>
  );
}
