import { useContext } from "react";
import { StockContext } from "../contexts/StockContextProvider";

export default function useStock() {
  return useContext(StockContext)
}