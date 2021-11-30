import Link from "next/link";
export default function Header() {
  return (
    <header className="p-6 bg-green-500 ">
      <h1 className="text-5xl">Cookie Stand Admin </h1>

      <Link href="/overview">
        <a className="p-2 bg-green-100 rounded-md">Overview</a>
      </Link>
    </header>
  );
}
