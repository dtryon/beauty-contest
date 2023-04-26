import { guesses } from "./result";

import type { NextApiRequest, NextApiResponse } from "next";

function ensureGuessRange(value: number) {
  if (value > 100) {
    return 100;
  }

  if (value < 0) {
    return 0;
  }

  return value;
}

export default function guessHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      guesses.push({
        name: req.body.name,
        guess: ensureGuessRange(parseInt(req.body.guess)),
      });
      res.status(200).json({});
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
