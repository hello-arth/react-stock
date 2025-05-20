import { Outlet } from "react-router-dom";
import StockContextProvider from "../contexts/StockContextProvider";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <StockContextProvider>
      <div className="d-flex flex-column justify-content-between min-vh-100 px-4">
        <Header /> {/* Container aplicado no componente Header*/}
        <main className="container flex-grow-1"> {/* Todas as views vão herdar o container */}
          <Outlet />
        </main>
        <footer className="container mt-5"> {/* Container aplicado aqui mesmo no footer*/}
          <p>Feito com react e React Router!</p>
        </footer>
      </div>
    </StockContextProvider>
  )
}