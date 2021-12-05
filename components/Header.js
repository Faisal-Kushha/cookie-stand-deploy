import Link from "next/link";
import { useAuth } from "../contexts/auth";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="flex items-center justify p-6 bg-green-500 ">
      <h1 className="text-5xl ml-80">Cookie Stand Admin </h1>
      <div className="float-right ml-80">
        <button className="p-1 rounded bg-green-50">{user.username}</button>
        <button
          className="p-1 bg-green-500 rounded border border-collapse  hover: bg-green-500  text-black-50 border-gray-900 "
          onClick={logout}
        >
          Sign Out
        </button>
        <Link href="/Overview">
          <a className="p-1 rounded bg-green-50">Overview</a>
        </Link>
      </div>
    </header>
  );
}
