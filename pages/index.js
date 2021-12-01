import CookieStandAdmin from "../components/CookieStandAdmin";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/auth";
import useResource from "../hooks/useResource";

export default function Home() {
  const { user, login, logout } = useAuth();
  return <>{user ? <CookieStandAdmin /> : <LoginForm />}</>;
}
