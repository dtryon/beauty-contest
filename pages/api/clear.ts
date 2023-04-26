import { guesses } from "./result";

import type { NextApiRequest, NextApiResponse } from "next";

export default function clearHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      guesses.length = 0;
      res.status(200).json({});
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
