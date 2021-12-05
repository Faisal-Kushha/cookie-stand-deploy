import useResource from "../hooks/useResource";

export default function Footer(props) {
  const { resources, loading } = useResource();
  if (loading) {
    return <p>Loading</p>;
  } else {
    return (
      <footer className="p-6 text-3xl bg-green-500 text-center">
        <h2>{resources.length} Location World Wide</h2>
      </footer>
    );
  }
}
