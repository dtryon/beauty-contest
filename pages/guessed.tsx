import Link from "next/link";

export default function Index() {
  return (
    <div className="space-y-4 m-4 max-w-xs text-center">
      <h1 className="font-serif text-4xl tracking-widest text-gray-500">
        Beauty Contest
      </h1>
      <h2 className="text-2xl text-slate-600">Your guess is complete!</h2>
      <div className="space-y-4">
        <Link className="text-sm text-blue-500" href="/result">
          Get Result
        </Link>
      </div>
    </div>
  );
}
