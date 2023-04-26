import type { NextApiRequest, NextApiResponse } from "next";
import type { Result, Guess } from "../../interfaces";

// data
export const guesses: Guess[] = [];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const sum = guesses.reduce((a, n) => a + n.guess, 0);
  const average = sum / guesses.length || 0;
  const result = Math.round(average * 0.6666);

  const values = guesses.map((g) => g.guess);
  const goal = result;
  const closest = values.reduce(function (prev, curr) {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  }, 100);

  const winners = guesses.filter((g) => g.guess === closest);

  res.status(200).json({ winners, result: result });
}
