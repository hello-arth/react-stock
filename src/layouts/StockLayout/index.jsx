import { Link, Outlet, useLocation } from "react-router-dom";
import style from './style.module.css'

export default function StockLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <p className="display-5">Stock Items</p>
      <div className="d-flex gap-5 border-bottom my-3">
        <Link to="/items"
          className={`p-3 text-decoration-none text-body ${pathname === "/items" ? style.wrapper : ""}`}>
          Todos os itens
        </Link>

        <Link to="/items/new"
          className={`p-3 text-decoration-none text-body ${pathname === "/items/new" ? style.wrapper : ""}`}>
          Novo Item
        </Link>
      </div>

      <Outlet />
    </>
  )
}