import useSwr from "swr";

import type { Result } from "../interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading } = useSwr<Result>("/api/result", fetcher);

  if (error) return <div>Failed.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div className="space-y-4 m-4 max-w-xs text-center">
      <h1 className="font-serif text-4xl tracking-widest text-gray-500">
        Beauty Contest
      </h1>
      <h2 className="text-8xl">{data.result}</h2>
      {data.winners.length === 1 && (
        <h3 className="text-lg">And the winner is...</h3>
      )}
      {data.winners.length > 1 && (
        <h3 className="text-lg">And the winners are...</h3>
      )}
      <ul>
        {data.winners.map((w) => (
          <li className="mt-4 text-md">
            {w.name}: {w.guess}
          </li>
        ))}
      </ul>

      <div className="space-y-4">
        <a className="text-sm text-blue-500" href="/result">
          Refresh
        </a>
      </div>
    </div>
  );
}
