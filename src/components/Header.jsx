import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header>
      <div className="navbar navbar-expand-md">
        <div className="container">
          <Link to="/" className="navbar-brand fw-semibold">react-stock</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarMain" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarMain" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              {pathname !== "/" &&
                <li className="nav-item ms-auto">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
              }
              {pathname !== "/items" &&
                <li className="nav-item ms-auto">
                  <Link to="/items" className="nav-link">Items</Link>
                </li>
              }
            </ul>
          </div>

        </div>
      </div>
    </header>
  )
}