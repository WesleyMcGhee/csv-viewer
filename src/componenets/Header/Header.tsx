import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <h1 className="logo">VIEWER</h1>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              github
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              my website
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
