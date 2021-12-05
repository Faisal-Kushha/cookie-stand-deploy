import { useAuth } from "../contexts/auth";

export default function LoginForm() {
  const { login } = useAuth();
  function loginHandler(event) {
    event.preventDefault();
    const newUser = {
      user: event.target.username.value,
      password: event.target.password.value,
    };
    login(newUser.user, newUser.password);
  }
  return (
    <form
      className="flex flex-col w-1/2 gap-4 p-8 mx-auto my-4 text-center bg-green-200 border-2 border-green-400 rounded-lg text-md"
      onSubmit={loginHandler}
    >
      <div className="flex flex-col items-center justify-center">
        <label className="mb-2 font-bold uppercase text-grey-darkest">
          User Name
        </label>
        <input
          className="px-3 py-2 border text-grey-darkest w-10/12"
          type="text"
          name="username"
          id="username"
          required
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <label className="mb-2 font-bold uppercase text-grey-darkest">
          Password
        </label>
        <input
          className="px-3 py-2 border text-grey-darkest w-10/12"
          type="password"
          name="password"
          id="password"
          required
        />
      </div>

      <button
        className="px-3 py-4 mt-8 uppercase bg-green-500 rounded text-green hover:bg-green-600 text-gray-50 "
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}
