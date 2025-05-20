import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import stockItems from "./loaders/stockItems";
import RootLayout from "./layouts/RootLayout";
import Items from "./views/Items";
import NewItem from "./views/NewItem";
import StockLayout from "./layouts/StockLayout";
import UpdateItem from "./views/UpdateItem";
import Item from "./views/Item";
import StockBoundary from "./error-boundaries/StockBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: stockItems,
    errorElement: <StockBoundary />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        errorElement: <StockBoundary />,
      },
      {
        path: "items",
        element: <StockLayout />,
        errorElement: <StockBoundary />,
        children: [
          {
            index: true,
            element: <Items />,
          },
          {
            path: "new",
            element: <NewItem />
          },
          {
            path: "update/:itemId",
            element: <UpdateItem />
          },
          {
            path: ":itemId",
            element: <Item />
          }
        ]
      }
    ]
  }
])

export default router