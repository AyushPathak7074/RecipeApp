import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link href={"/"} className="navbar-brand">My Recipes</Link>
          <Link href={"/signin"} className="btn btn-outline-success">Sign In</Link>
        </div>
      </nav>
    </div>
  );
}
