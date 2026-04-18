export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }}
    >
      <div className="container-fluid justify-content-center">
        <h2
          className="navbar-brand text-center"
          style={{ fontSize: "30px" }}
        >
          News
        </h2>
      </div>
    </nav>
  );
}