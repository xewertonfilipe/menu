import { Sidebar } from "./components/Sidebar";

export default function Root(props) {
  // TODO: validar
  function onClick() {
    const event = new CustomEvent("onNavClick");
    document.dispatchEvent(event);
  }
  return (
    <>
      <Sidebar />
    </>
  );
}
