export default function Footer(props) {
  return (
    <footer className="p-6 text-3xl bg-green-500">
      {/* &copy;{props.copyright} */}
      <h2>{props.numberoflocaton} Location World Wide</h2>
    </footer>
  );
}
